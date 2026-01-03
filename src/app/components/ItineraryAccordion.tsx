"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/Accordion";

interface ItineraryDay {
  title: string;
  content?: string;
}

interface ItineraryAccordionProps {
  itinerary?: ItineraryDay[] | string | Record<string, ItineraryDay>;
}

export default function ItineraryAccordion({ itinerary }: ItineraryAccordionProps) {
  if (!itinerary) return null;

  // Convert itinerary to array safely
  let items: ItineraryDay[] = [];

  if (typeof itinerary === "string") {
    const parsed = JSON.parse(itinerary);
    items = Array.isArray(parsed) ? parsed : Object.values(parsed);
  } else if (Array.isArray(itinerary)) {
    items = itinerary;
  } else {
    // It's an object, convert to array
    items = Object.values(itinerary);
  }

  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {items.map((day, index) => (
        <AccordionItem
          key={index}
          value={`day-${index}`}
          className="border border-slate-200 rounded-xl px-4 data-[state=open]:bg-orange-50/50 transition-colors"
        >
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/20">
                {index + 1}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-slate-800">{day.title}</h4>
                <p className="text-sm text-slate-500 mt-0.5">
                  {day.content ? "View activities" : "Transfer day"}
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            {day.content ? (
              <div className="pl-16 text-slate-600 leading-relaxed whitespace-pre-line">
                {day.content}
              </div>
            ) : (
              <div className="pl-16 text-slate-500 italic">
                Arrival/Departure - Transfer arrangements included
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
