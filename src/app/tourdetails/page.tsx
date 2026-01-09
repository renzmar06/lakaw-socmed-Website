"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { createPageUrl } from '@/app/utils/createPageUrl';
import { Button, Skeleton } from "@mui/material";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/Tabs";
import { 
  MapPin, Clock, Plane, ChevronLeft, Share2, Heart,
  Camera, Check, X, HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import ItineraryAccordion from '@/app/components/ItineraryAccordion';
import FeaturesList from '@/app/components/FeaturesList';
import BookingCard from '@/app/components/BookingCard';
import dynamic from "next/dynamic";


const API_BASE = 'https://golakaw.com/api/tourlist';

// Define Types
type Highlight = { title: string };
type FAQ = { title: string; content?: string };
type ItineraryDay = { title: string; content?: string };
type FeatureItem = { title: string };

interface Tour {
  id: number;
  title: string;
  content: string;
  features_image?: string;
  shoulder?: string;
  sub_destination?: string[];
  duration?: string;
  starts_from?: string;
  highlights?: string | Highlight[];
  faqs?: string | FAQ[];
  itinerary?: string | ItineraryDay[];
  includes?: string | FeatureItem[];
  excludes?: string | FeatureItem[];
  include_title?: string;
  exclude_title?: string;
  map_lat?: string;
  map_lng?: string;
  min_people: string;
  max_people: string;
  sale_price_with_fee: string;
  fixed_dates?: string | Array<{ start_date: string; end_date: string }>;
}

export default function TourDetail() {
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const TourMap = dynamic(
    () => import("@/app/components/TourMap"),
    { ssr: false }
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('id');
    const pageNum = urlParams.get('page') || '1';  
    if (tourId) {
      fetchTour(tourId, parseInt(pageNum));
    }
  }, []);

  const fetchTour = async (id: string, pageNum: number) => {
    try {
      const response = await fetch(`${API_BASE}?page=${pageNum}`);
      const data = await response.json();
      if (data.status === 'success') {
        const foundTour = data.data.data.find((t: Tour) => t.id === parseInt(id));
        if (foundTour) setTour(foundTour);
      }
    } catch (error) {
      console.error('Error fetching tour:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Skeleton className="w-full h-[50vh]" />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-40 w-full" />
            </div>
            <Skeleton className="h-96" />
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

  // Parse highlights
  const highlights: Highlight[] = tour.highlights
    ? Object.values(typeof tour.highlights === "string" ? JSON.parse(tour.highlights) : tour.highlights)
    : [];

  // Parse FAQs
  const faqs: FAQ[] = tour.faqs
    ? Object.values(typeof tour.faqs === "string" ? JSON.parse(tour.faqs) : tour.faqs)
    : [];

  // Parse itinerary
  const itinerary: ItineraryDay[] = tour.itinerary
    ? Object.values(typeof tour.itinerary === "string" ? JSON.parse(tour.itinerary) : tour.itinerary)
    : [];

  // Parse includes/excludes
  const includes: FeatureItem[] = tour.includes
    ? Object.values(typeof tour.includes === "string" ? JSON.parse(tour.includes) : tour.includes)
    : [];

  const excludes: FeatureItem[] = tour.excludes
    ? Object.values(typeof tour.excludes === "string" ? JSON.parse(tour.excludes) : tour.excludes)
    : [];

  const imageUrl = tour.features_image 
    ? `https://golakaw.com/uploads/tour/features/${tour.features_image}`
    : 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img
          src={imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover absolute top-0 left-0"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-8">
              {/* Header */}
              <div className="space-y-2">
                <Link href={createPageUrl('booknow')}>
                  <Button variant="outlined" className="mb-20 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-xl">
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{tour.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-slate-900">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green" />
                    <span>{tour.sub_destination?.[0] || 'Multiple Destinations'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="w-5 h-5 text-green" />
                    <span>From {tour.starts_from || 'Manila'}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              {highlights.length > 0 && (
                <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-green" />
                    Tour Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                        <span className="text-slate-900">{h.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Location Map */}
              <div>
                <h3 className="font-semibold text-lg text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green" />
                  Location
                </h3>
                {tour.map_lat && tour.map_lng ? (
                  <TourMap lat={tour.map_lat} lng={tour.map_lng} title={tour.title} />
                ) : (
                  <div className="flex items-center justify-center h-[400px] bg-slate-50 rounded-xl border-2 border-slate-200">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-500">Location coordinates not available</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full grid grid-cols-4 bg-slate-100 p-1 rounded-xl mb-6">
                  <TabsTrigger value="overview" className="text-slate-900 rounded-lg data-[state=active]:bg-white">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary" className="text-slate-900 rounded-lg data-[state=active]:bg-white">Itinerary</TabsTrigger>
                  <TabsTrigger value="includes" className="text-slate-900 rounded-lg data-[state=active]:bg-white">Includes</TabsTrigger>
                  <TabsTrigger value="faq" className="text-slate-900 rounded-lg data-[state=active]:bg-white">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div
                    className="prose prose-slate max-w-none text-slate-900"
                    dangerouslySetInnerHTML={{ __html: tour.content }}
                  />
                </TabsContent>

                <TabsContent value="itinerary">
                  <ItineraryAccordion itinerary={itinerary} />
                </TabsContent>

                <TabsContent value="includes">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-4 flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        {tour.include_title || "What's Included"}
                      </h3>
                      <FeaturesList items={includes} type="include" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-4 flex items-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        {tour.exclude_title || "What's Not Included"}
                      </h3>
                      <FeaturesList items={excludes} type="exclude" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="faq">
                  {faqs.length > 0 ? (
                    <div className="space-y-4">
                      {faqs.map((faq, i) => (
                        <div key={i} className="p-5 bg-slate-50 rounded-xl">
                          <h4 className="font-semibold text-slate-900 flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                            {faq.title}
                          </h4>
                          {faq.content && (
                            <p className="mt-2 text-slate-600 ml-8">{faq.content}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500 text-center py-8">
                      No frequently asked questions available for this tour.
                    </p>
                  )}
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <BookingCard tour={tour} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
