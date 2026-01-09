"use client";

import Link from "next/link"
import { createPageUrl } from "@/app/utils/createPageUrl"
import { Card, Badge } from "@mui/material"
import { MapPin, Clock, Users, Star } from "lucide-react"
import { motion } from "framer-motion"

const API_BASE = "https://golakaw.com"

/* ================= TYPES ================= */

type Tour = {
  id: string | number
  title: string
  features_image?: string | null
  is_featured?: "0" | "1"
  sub_destination?: string[]
  duration?: string
  min_people?: number
  max_people?: number
  sale_price_with_fee: string | number
}

type TourCardProps = {
  tour: Tour
  index?: number
  pagenum?: number
}

/* ============== COMPONENT ============== */

export default function TourCard({ tour, index = 0, pagenum = 0}: TourCardProps) {
  const imageUrl = tour.features_image
    ? `${API_BASE}/uploads/tour/features/${tour.features_image}`
    : "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800"

  const parsePrice = (price: string | number): number => {
    return Number(price) || 0
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={createPageUrl("tourdetails", { id: tour.id, page: pagenum })}>
        <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl">
          <div className="relative overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={imageUrl}
                alt={tour.title}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const img = e.currentTarget
                  img.src =
                    "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800"
                }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {tour.is_featured === "1" && (
              <Badge className="absolute top-4 left-4 bg-amber-500 text-white border-0 px-3 py-1">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Featured
              </Badge>
            )}

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                <MapPin className="w-4 h-4" />
                <span>
                  {tour.sub_destination?.[0] || "Multiple Destinations"}
                </span>
              </div>
            </div>
          </div>

          <div className="p-5">
            <h3 className="font-semibold text-lg text-slate-800 group-hover:text-green transition-colors line-clamp-2 mb-3">
              {tour.title}
            </h3>

            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{tour.duration || "3 Days"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>
                  {tour.min_people || 1}-{tour.max_people || 10} pax
                </span>
              </div>
            </div>

            <div className="flex items-end justify-between pt-4 border-t border-slate-100">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wide">
                  Starting from
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-green">
                    ₱{parsePrice(tour.sale_price_with_fee).toLocaleString()}
                  </span>
                  <span className="text-sm text-slate-400">/person</span>
                </div>
              </div>

              <span className="text-sm font-medium text-green group-hover:translate-x-1 transition-transform">
                View Details →
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
