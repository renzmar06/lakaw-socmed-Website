"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { createPageUrl } from '@/app/utils/createPageUrl';
import { Button, Skeleton, Input, TextareaAutosize } from "@mui/material";
import { Textarea } from "@/app/components/TextArea";
import { Card, CardContent, CardHeader } from "@mui/material";
import { Label } from "@/app/components/Label";
import { Calendar as CalendarComponent } from "@/app/components/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/Popover";
import { 
  ChevronLeft, MapPin, Calendar, Users, Clock, 
  CreditCard, Shield, Check, Loader2, User, Mail, Phone, Tag, X, Home
} from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useUserProfile } from "../store/api/updateUser";
import Cookies from "js-cookie";

const API_BASE = 'https://golakaw.com/api/tourlist';

interface Tour {
  id: number;
  title: string;
  min_people: number;
  max_people: number;
  sale_price: string; // string from API
  duration: string;
  features_image?: string;
  fixed_dates?: Record<string, any> | string;
  sub_destination?: string[];
}

interface FormData {
  first_name: string;
  last_name: string;
  contact_email: string;
  contact_phone: string;
  address: string;
  street_address?: string;
  postal_code: string;
  special_requests?: string;
}

interface Coupon {
  discount: number;
  description: string;
}

interface FixedDate {
  start_date: string;
  end_date: string;
}

export default function Booking() {
//   const navigate = useNavigate();
  const token = Cookies.get("Reelboost_auth_token");
  const { data: userData, isLoading, error } = useUserProfile(token ?? "");
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    contact_email: '',
    contact_phone: '',
    address: '',
    street_address: '',
    postal_code: '',
    special_requests: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('filipay');
  
  const paymentMethods = [
    { value: 'filipay', label: 'FiliPay' },
    // { value: 'lakaw_wallet', label: 'Lakaw Wallet' }
  ];
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [couponError, setCouponError] = useState('');

  // Sample coupons - in production, this would come from backend
  const validCoupons: { [key: string]: { discount: number; description: string } } = {
    WELCOME5: { discount: 0.05, description: '5% off' },
    SUMMER5: { discount: 0.05, description: '5% off' },
    TRAVEL05: { discount: 0.05, description: '5% off' }
    };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('tourId') || '';
    const date = urlParams.get('date') || '';
    const travelersParam = urlParams.get('travelers');
    
    if (date) setSelectedDate(date);
    if (travelersParam) setTravelers(parseInt(travelersParam));
    
    if (tourId) {
      fetchTour(tourId);
    }
    }, []);

    useEffect(() => {
    if (tour && travelers === null) {
      const minPeople = tour.min_people || 1;
      setTravelers(minPeople);
    }
    }, [tour]);

  const fetchTour = async (id:string) => {
    try {
      const response = await fetch(`${API_BASE}?page=1`);
      const data = await response.json();
      if (data.status === 'success') {
        const foundTour = data.data.data.find((t: Tour) => t.id === parseInt(id));
        if (foundTour) {
          setTour(foundTour);
        }
      }
    } catch (error) {
      console.error('Error fetching tour:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = () => {
    const upperCoupon = couponCode.trim().toUpperCase();
    if (validCoupons[upperCoupon]) {
      setAppliedCoupon(validCoupons[upperCoupon]);
      setCouponError('');
      toast.success(`Coupon applied! ${validCoupons[upperCoupon].description}`);
    } else {
      setCouponError('Invalid coupon code');
      toast.error('Invalid coupon code');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  const price = parseFloat(tour?.sale_price ?? "") || 0;
  const subtotal = price * travelers;
  const discount = appliedCoupon ? subtotal * appliedCoupon.discount : 0;
  const subtotalAfterDiscount = subtotal - discount;
  const serviceFee = subtotalAfterDiscount * 0.07;
  const totalPrice = Math.round(subtotalAfterDiscount + serviceFee);

  const fixedDates:FixedDate[] = tour?.fixed_dates 
    ? Object.values(typeof tour.fixed_dates === 'string' ? JSON.parse(tour.fixed_dates) : tour.fixed_dates)
    : [];
  
  const selectedDateInfo = fixedDates.find(d => d.start_date === selectedDate);
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    if (!formData.first_name || !formData.last_name || !formData.contact_email || !formData.contact_phone || !formData.address || !formData.postal_code || !selectedDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    setSubmitting(true);
    if (!userData?.data?.user_id) return;
        try {
            const res = await fetch(`https://golakaw.com/api/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ login: userData.data.email, password: "lakaw123!!!" }), // non-standard for GET
            });
            const logindata = await res.json();
            if (logindata.status === "success") {
                  const paymentPayload = {
                  customer_id: logindata.data.id || 0,
                  type: 2,
                  first_name: formData.first_name,
                  last_name: formData.last_name,
                  phone: formData.contact_phone,
                  email: formData.contact_email,
                  address: formData.address,
                  street_address: formData.street_address || '',
                  postal_code: formData.postal_code,
                  notes: formData.special_requests || '',
                  tax_amount: serviceFee,
                  tax_rate: 7,
                  total_with_tax: totalPrice,
                  payment_method: paymentMethod,
                  services: "",
                  customer_cart: {
                    start_date: selectedDate,
                    end_date: selectedDateInfo?.end_date || selectedDate,
                    pack_date: 1,
                    transportType: '',
                    quantity: travelers,
                    price: subtotalAfterDiscount,
                    product_id: tour?.id,
                    product_type: 'tour',
                    adult_unit_sale_price: price,
                    adult_unit_price: price,
                    aqty: travelers,
                    days: 0,
                    child_unit_price: 0.00,
                    child_price: 0,
                    cqty: 0,
                    total_amount: subtotalAfterDiscount
                  }
                };

                // Call payment API
                const paymentResponse = await fetch('https://golakaw.com/api/payment', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(paymentPayload)
                });

                const paymentResult = await paymentResponse.json();

                if (paymentResult.status === 'error') {
                  toast.error(paymentResult.message || 'Payment failed. Please try again.');
                  // throw new Error(paymentResult.message || 'Payment failed');
                }else{
                    // Create booking record
                    const imageUrl = tour?.features_image 
                      ? `https://golakaw.com/uploads/tour/features/${tour.features_image}`
                      : '';

                    toast.success('Payment successful! Booking confirmed.');
                    window.location.href = '/booknow';
                }
            }
        } catch (error:any) {
          console.error('Error processing payment:', error);
          toast.error(error.message || 'Payment failed. Please try again.');
        } finally {
          setSubmitting(false);
        }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Skeleton className="h-8 w-48 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Skeleton className="h-96" />
            </div>
            <Skeleton className="h-64" />
          </div>
        </div>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Tour not found</h2>
          <Link href={createPageUrl('Tours')}>
            <Button>Browse All Tours</Button>
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = tour.features_image 
    ? `https://golakaw.com/uploads/tour/features/${tour.features_image}`
    : 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 tp-75">
          <Link href={createPageUrl(`tourdetails?id=${tour.id}`)} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4">
            <ChevronLeft className="w-5 h-5" />
            Back to Tour
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Complete Your Booking</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Trip Details Card */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="border-b border-slate-100 bg-slate-50">
                {/* <CardTitle className="text-lg flex items-center gap-2"> */}
                  <Calendar className="w-5 h-5 text-orange-500" />
                  Trip Details
                {/* </CardTitle> */}
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex gap-4 items-center mb-6">
                  <img 
                    src={imageUrl} 
                    alt={tour.title}
                    className="w-24 h-24 rounded-xl object-cover"
                    onError={(e) => {
                    const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=200';
                    }}
                  />
                  <div>
                    <h3 className="font-semibold text-slate-800">{tour.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                      <MapPin className="w-4 h-4" />
                      {tour.sub_destination?.length ? tour.sub_destination.join(', ') : 'Multiple Destinations'}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-700">Travel Date <span className="text-red-500">*</span></Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outlined"
                          className="w-full h-12 justify-start text-left font-normal border-slate-200 rounded-xl"
                        >
                          <Calendar className="mr-2 h-4 w-4 text-orange-500" />
                          {selectedDate ? (
                            selectedDateInfo ? (
                              <>
                                {format(new Date(selectedDateInfo.start_date), 'MMM d')} - {format(new Date(selectedDateInfo.end_date), 'MMM d, yyyy')}
                              </>
                            ) : (
                              format(new Date(selectedDate), 'MMM d, yyyy')
                            )
                          ) : (
                            <span className="text-slate-500">Select date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={selectedDate ? new Date(selectedDate) : undefined}
                          onSelect={(date) => {
                            if (date) {
                              const dateStr = format(date, 'yyyy-MM-dd');
                              const matchingDate = fixedDates.find(d => d.start_date === dateStr);
                              if (matchingDate) {
                                setSelectedDate(dateStr);
                              } else {
                                setSelectedDate(dateStr);
                              }
                            }
                          }}
                          disabled={(date) => {
                            const dateStr = format(date, 'yyyy-MM-dd');
                            const isPast = date < new Date();
                            const hasFixedDate = fixedDates.some(d => d.start_date === dateStr);
                            return isPast || (fixedDates.length > 0 && !hasFixedDate);
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-slate-700">Pax</Label>
                    <div className="flex items-center gap-3 h-12">
                      <Button
                        type="button"
                        variant="outlined"
                        size="medium"
                        className="h-12 w-12 rounded-xl border-slate-200"
                        onClick={() => setTravelers(Math.max(tour.min_people || 1, travelers - 1))}
                        disabled={travelers <= (tour.min_people || 1)}
                      >
                        -
                      </Button>

                      <Input
                        type="number"
                        value={travelers.toString()}
                        readOnly  // <-- Makes input read-only
                        className="h-12 border-slate-200 rounded-xl w-20 input-center"
                      />

                      <Button
                        type="button"
                        variant="outlined"
                        size="medium"
                        className="h-12 w-12 rounded-xl border-slate-200"
                        onClick={() => setTravelers(Math.min(tour.max_people || 10, travelers + 1))}
                        disabled={travelers >= (tour.max_people || 10)}
                      >
                        +
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500 text-center">
                      Min: {tour.min_people || 1} - Max: {tour.max_people || 10} travelers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="border-b border-slate-100 bg-slate-50">
                {/* <CardTitle className="text-lg flex items-center gap-2"> */}
                  <User className="w-5 h-5 text-orange-500" />
                  Contact Information
                {/* </CardTitle> */}
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first_name" className="text-slate-700">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          id="first_name"
                          name="first_name"
                          placeholder="First name"
                          value={formData.first_name}
                          onChange={handleInputChange}
                          className="pl-12 h-12 border-slate-200 rounded-xl w-[95%]"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="last_name" className="text-slate-700">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        {/* Empty div for spacing so input aligns with icon fields */}
                        <div className="absolute left-4 w-5 h-5"></div>
                        <Input
                          id="last_name"
                          name="last_name"
                          placeholder="Last name"
                          value={formData.last_name}
                          onChange={handleInputChange}
                          className="pl-12 h-12 border-slate-200 rounded-xl w-[95%]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact_email" className="text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          id="contact_email"
                          name="contact_email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.contact_email}
                          onChange={handleInputChange}
                          className="pl-12 h-12 border-slate-200 rounded-xl w-[95%]"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact_phone" className="text-slate-700">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          id="contact_phone"
                          name="contact_phone"
                          placeholder="+63 XXX XXX XXXX"
                          value={formData.contact_phone}
                          onChange={handleInputChange}
                          className="pl-12 h-12 border-slate-200 rounded-xl w-[95%]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-slate-700">
                      Address <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="address"
                        name="address"
                        placeholder="Street address, city, province"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="pl-12 h-12 border-slate-200 rounded-xl w-[95%]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="street_address" className="text-slate-700">
                        Street Address (Optional)
                      </Label>
                      <div className="relative">
                        <div className="absolute left-4 w-5 h-5"></div>
                        <Input
                          id="street_address"
                          name="street_address"
                          placeholder="Apartment, unit, etc."
                          value={formData.street_address}
                          onChange={handleInputChange}
                          className="pl-12 h-12 border-slate-200 rounded-xl w-[95%]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postal_code" className="text-slate-700">
                        Postal Code <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute left-4 w-5 h-5"></div>
                        <Input
                          id="postal_code"
                          name="postal_code"
                          placeholder="e.g. 4103"
                          value={formData.postal_code}
                          onChange={handleInputChange}
                          className="pl-12 h-12 border-slate-200 rounded-xl w-[95%]"
                          required
                        />
                      </div>
                    </div>
                  </div>


                  <div className="space-y-2">
                    <Label className="text-slate-700">
                      Payment Method <span className="text-red-500">*</span>
                    </Label>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <label
                          key={method.value}
                          className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all hover:from-[#168a68]"
                          style={{
                            borderColor: paymentMethod === method.value ? '#1a9d77' : '#e2e8f0',
                            backgroundColor: paymentMethod === method.value ? '#fff7ed' : 'white'
                          }}
                        >
                          <input
                            type="radio"
                            name="payment_method"
                            value={method.value}
                            checked={paymentMethod === method.value}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-5 h-5 text-orange-600 focus:ring-orange-500"
                          />
                          <span className="font-medium text-slate-800">{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="special_requests" className="text-slate-700">
                      Special Requests
                    </Label>
                    <Textarea
                      id="special_requests"
                      name="special_requests"
                      placeholder="Any dietary requirements, accessibility needs, or special requests..."
                      value={formData.special_requests}
                      onChange={handleInputChange}
                      className="border-slate-200 rounded-xl min-h-24"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-14 bg-gradient-to-r from-[#1a9d77] to-[#148f6a] hover:from-[#168a68] hover:to-[#137a5c] !text-white text-lg font-semibold rounded-xl shadow-lg shadow-[#1a9d77]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#1a9d77]/40"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin text-white" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5 mr-2 text-white" />
                        Proceed to Payment
                      </>
                    )}
                  </Button>

                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="sticky top-6 border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                {/* <CardTitle className="text-lg">Order Summary</CardTitle> */}
                Order Summary
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {/* Coupon Code Section */}
                <div className="mb-4">
                  <Label className="text-sm text-slate-700 mb-2 block">Have a coupon?</Label>
                  {!appliedCoupon ? (
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          placeholder="Enter code"
                          value={couponCode}
                          onChange={(e) => {
                            setCouponCode(e.target.value);
                            setCouponError('');
                          }}
                          className={`pl-10 h-10 uppercase ${couponError ? 'border-red-500' : ''}`}
                        />
                      </div>
                      <Button
                        type="button"
                        onClick={handleApplyCoupon}
                        variant="outlined"
                        className="h-10 px-4"
                        disabled={!couponCode.trim()}
                      >
                        Apply
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-700">{couponCode}</span>
                        <span className="text-sm text-green-600">- {appliedCoupon.description}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveCoupon}
                        className="text-green-700 hover:text-green-900"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {couponError && (
                    <p className="text-xs text-red-500 mt-1">{couponError}</p>
                  )}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Tour Price</span>
                    <span className="font-medium">₱{price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Travelers</span>
                    <span className="font-medium">× {travelers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-medium">₱{subtotal.toLocaleString()}</span>
                  </div>
                  {selectedDate && selectedDateInfo && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Date</span>
                      <span className="font-medium text-right">
                        {format(new Date(selectedDateInfo.start_date), 'MMM d')} - {format(new Date(selectedDateInfo.end_date), 'MMM d')}
                      </span>
                    </div>
                  )}
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon.description})</span>
                      <span className="font-medium">-₱{discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-600">Service Fee (7%)</span>
                    <span className="font-medium">₱{serviceFee.toLocaleString()}</span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Total</span>
                    <span className="text-xl font-bold text-green">₱{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
                    <Shield className="w-4 h-4" />
                    Secure Booking
                  </div>
                  <div className="flex items-start gap-2 text-green-600 text-xs">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Free cancellation up to 24 hours before your trip</span>
                  </div>
                  <div className="flex items-start gap-2 text-green-600 text-xs">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Instant confirmation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}