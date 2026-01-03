"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createPageUrl } from "@/app/utils/createPageUrl";
import { Card, CardContent, CardHeader, Button, Badge } from "@mui/material";
import { Calendar as CalendarComponent } from "@/app/components/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/Popover";
import { Calendar, Users, Shield, Clock, Star, Plus, Minus } from "lucide-react";
import { format } from "date-fns";

interface FixedDate {
  start_date: string;
  end_date: string;
}

interface Tour {
  id: number;
  sale_price_with_fee: string;
  min_people: string;
  max_people: string;
  duration?: string;
  fixed_dates?: string | FixedDate[];
}

interface BookingCardProps {
  tour: Tour;
}

export default function BookingCard({ tour }: BookingCardProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const minPeople = parseInt(tour.min_people) || 1;
  const maxPeople = parseInt(tour.max_people) || 10;
  const [travelers, setTravelers] = useState<number>(minPeople);

  const price = parseFloat(tour.sale_price_with_fee) || 0;
  const subtotal = price * travelers;
  // const serviceFee = subtotal * 0.07;
  const totalPrice = subtotal;

  const fixedDates: FixedDate[] = tour.fixed_dates
    ? Object.values(
        typeof tour.fixed_dates === "string"
          ? JSON.parse(tour.fixed_dates)
          : tour.fixed_dates
      )
    : [];

  const availableDates = fixedDates.filter(d => new Date(d.start_date) > new Date());

  return (
    <Card className="sticky top-6 border-0 shadow-xl rounded-2xl overflow-hidden">
      <CardContent className="mt-10 p-6 space-y-5">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">₱{price.toLocaleString()}</span>
          <span className="text-green">/person</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm text-green">Highly Rated Experience</span>
        </div>
        {/* Travel Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-green" />
            Select Travel Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outlined"
                className="w-full h-12 justify-start text-left font-normal border-slate-200 rounded-xl hover:border-orange-500"
              >
                <Calendar className="mr-2 h-4 w-4 text-green" />
                {selectedDate ? (
                  availableDates.find(d => d.start_date === selectedDate) ? (
                    <>
                      {format(
                        new Date(
                          availableDates.find(d => d.start_date === selectedDate)!.start_date
                        ),
                        "MMM d"
                      )}{" "}
                      -{" "}
                      {format(
                        new Date(
                          availableDates.find(d => d.start_date === selectedDate)!.end_date
                        ),
                        "MMM d, yyyy"
                      )}
                    </>
                  ) : (
                    format(new Date(selectedDate), "MMM d, yyyy")
                  )
                ) : (
                  <span className="text-slate-500">Choose a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={selectedDate ? new Date(selectedDate) : undefined}
                onSelect={(date) => {
                  if (date) {
                    const dateStr = format(date, "yyyy-MM-dd");
                    const matchingDate = fixedDates.find(d => d.start_date === dateStr);
                    if (matchingDate) setSelectedDate(dateStr);
                  }
                }}
                disabled={(date) => {
                  const dateStr = format(date, "yyyy-MM-dd");
                  const isPast = date < new Date();
                  const hasFixedDate = fixedDates.find(d => d.start_date === dateStr);
                  return isPast || (fixedDates.length > 0 && !hasFixedDate);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Number of Travelers */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <Users className="w-4 h-4 text-green" />
            Number of Travelers
          </label>
          <div className="flex items-center gap-4 h-12 border border-slate-200 rounded-xl px-4">
            <Button
              variant="outlined"
              size="small"
              onClick={() => setTravelers(Math.max(minPeople, travelers - 1))}
              disabled={travelers <= minPeople}
              className="h-8 w-8 rounded-lg hover:bg-orange-50 disabled:opacity-40"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="flex-1 text-center font-semibold text-lg">
              {travelers} {travelers === 1 ? "Traveler" : "Travelers"}
            </span>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setTravelers(Math.min(maxPeople, travelers + 1))}
              disabled={travelers >= maxPeople}
              className="h-8 w-8 rounded-lg hover:bg-orange-50 disabled:opacity-40"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-slate-50 rounded-xl p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">
              ₱{price.toLocaleString()} × {travelers} {travelers === 1 ? "Traveler" : "Travelers"}
            </span>
            <span className="font-medium">₱{subtotal.toLocaleString()}</span>
          </div>
          {/* <div className="flex justify-between text-sm">
            <span className="text-slate-600">Service fee (7%)</span>
            <span className="font-medium">₱{serviceFee.toLocaleString()}</span>
          </div> */}
          <div className="border-t border-slate-200 pt-3 flex justify-between">
            <span className="font-semibold text-slate-800">Total</span>
            <span className="text-xl font-bold text-green">
              ₱{totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Book Now */}
        <Link
          href={createPageUrl(
            `booking?tourId=${tour.id}&date=${selectedDate}&travelers=${travelers}`
          )}
        >
         <Button className="w-full h-14 bg-gradient-to-r from-[#1a9d77] to-[#148f6a] hover:from-[#168a68] hover:to-[#137a5c] !text-white text-lg font-semibold rounded-xl shadow-lg shadow-[#1a9d77]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#1a9d77]/40">
          Book Now
        </Button>
        </Link>

        {/* Info */}
        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
          <Shield className="w-4 h-4" />
          <span>Free cancellation up to 24 hours before</span>
        </div>

        <div className="pt-4 border-t border-slate-100 space-y-2">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>{tour.duration || "3 Days"}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Users className="w-4 h-4 text-slate-400" />
            <span>
              {tour.min_people || 1}-{tour.max_people || 10} travelers
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
