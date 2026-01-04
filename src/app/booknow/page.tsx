"use client";
import React, { useState, useEffect } from "react";
import { Button, Input, Badge, Skeleton } from "@mui/material";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/Select";
import { Search, SlidersHorizontal, MapPin, X, ChevronLeft, ChevronRight, Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TourCard from "@/app/components/TourCard";

const API_BASE = "https://golakaw.com/api/tourlist";

type Tour = {
  id: string | number;
  title: string;
  features_image?: string | null;
  is_featured?: "0" | "1";
  sub_destination?: string[];
  duration?: string;
  min_people?: number;
  max_people?: number;
  sale_price_with_fee: string | number;
  content: string;
  created_at: string | Date;
};

export default function Tours() {
  const [mounted, setMounted] = useState(false);
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filterDestination, setFilterDestination] = useState("all");
  const [filterPrice, setFilterPrice] = useState("all");
  const [filterDuration, setFilterDuration] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Mount check to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load query params once
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search") || "";
    const destination = urlParams.get("destination") || "";
    setSearchQuery(search || destination);
  }, []);

  // Fetch tours
  useEffect(() => {
    fetchTours();
  }, [currentPage]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}?page=${currentPage}`);
      const data = await response.json();
      if (data.status === "success") {
        setTours(data.data.data);
        setTotalPages(data.data.last_page || 1);
      }
    } catch (error) {
      console.error("Error fetching tours:", error);
    } finally {
      setLoading(false);
    }
  };

  // Unique destinations
  const destinations = [...new Set(tours.flatMap(t => t.sub_destination || []))].sort();

  // Filters
  const filteredTours = tours.filter(tour => {
    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        tour.title?.toLowerCase().includes(query) ||
        tour.sub_destination?.some(d => d.toLowerCase().includes(query)) ||
        tour.content?.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Destination
    if (filterDestination !== "all" && !tour.sub_destination?.includes(filterDestination)) return false;

    // Price
    if (filterPrice !== "all") {
      const price = typeof tour.sale_price_with_fee === "string" ? parseFloat(tour.sale_price_with_fee) : tour.sale_price_with_fee ?? 0;
      if (filterPrice === "under10k" && price >= 10000) return false;
      if (filterPrice === "10k-20k" && (price < 10000 || price >= 20000)) return false;
      if (filterPrice === "20k-50k" && (price < 20000 || price >= 50000)) return false;
      if (filterPrice === "over50k" && price < 50000) return false;
    }

    // Duration
    if (filterDuration !== "all") {
      const durationText = (tour.duration || "").toLowerCase();
      const dayMatch = durationText.match(/(\d+)/);
      const days = dayMatch ? parseInt(dayMatch[0]) : 0;
      if (filterDuration === "1-3" && (days < 1 || days > 3)) return false;
      if (filterDuration === "4-7" && (days < 4 || days > 7)) return false;
      if (filterDuration === "7plus" && days <= 7) return false;
    }

    return true;
  });

  // Sorting
  const sortedTours = [...filteredTours].sort((a, b) => {
    switch (sortBy) {
      case "price_low":
        return (Number(a.sale_price_with_fee) || 0) - (Number(b.sale_price_with_fee) || 0);
      case "price_high":
        return (Number(b.sale_price_with_fee) || 0) - (Number(a.sale_price_with_fee) || 0);
      case "duration":
        return (a.duration || "").localeCompare(b.duration || "");
      default:
        return new Date(b.created_at || "").getTime() - new Date(a.created_at || "").getTime();
    }
  });

  if (!mounted) return null; // prevent hydration mismatch

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Filters */}
      <div className="top-padding17 sticky top-0 z-20 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 gap-3 md:flex md:items-center md:justify-between md:gap-4">
            <div className="relative w-full md:max-w-md bg-white border border-slate-200 rounded-xl shadow-sm flex items-center px-4 h-12 focus-within:ring-2 focus-within:ring-orange-500">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input
                type="text"
                placeholder="Search destinations, tours..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-slate-900 placeholder-slate-400 bg-transparent"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="ml-3">
                  <X className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                </button>
              )}
            </div>


            <div className="grid grid-cols-2 gap-3 md:flex md:gap-3 md:w-auto">
              {/* Destination Select */}
              <Select value={filterDestination} onValueChange={setFilterDestination}>
                {({ open, setOpen }) => (
                  <>
                    <SelectTrigger
                      open={open}
                      setOpen={setOpen}
                      className="w-full md:w-48 h-12 border-slate-200 rounded-xl flex justify-between items-center px-4 text-slate-900"
                    >
                      <SelectValue placeholder="Destination" />
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                    </SelectTrigger>
                    <SelectContent open={open} setOpen={setOpen}>
                      <SelectItem value="all" className="text-slate-900">All Destinations</SelectItem>
                      {destinations.map(dest => (
                        <SelectItem key={dest} value={dest} className="text-slate-900">{dest}</SelectItem>
                      ))}
                    </SelectContent>
                  </>
                )}
              </Select>

              {/* Price Select */}
              <Select value={filterPrice} onValueChange={setFilterPrice}>
                {({ open, setOpen }) => (
                  <>
                    <SelectTrigger
                      open={open}
                      setOpen={setOpen}
                      className="w-full md:w-48 h-12 border-slate-200 rounded-xl flex justify-between items-center px-4 text-slate-900"
                    >
                      <SelectValue placeholder="Price Range" />
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                    </SelectTrigger>
                    <SelectContent open={open} setOpen={setOpen}>
                      <SelectItem value="all" className="text-slate-900">All Prices</SelectItem>
                      <SelectItem value="under10k" className="text-slate-900">Under ₱10,000</SelectItem>
                      <SelectItem value="10k-20k" className="text-slate-900">₱10,000 - ₱20,000</SelectItem>
                      <SelectItem value="20k-50k" className="text-slate-900">₱20,000 - ₱50,000</SelectItem>
                      <SelectItem value="over50k" className="text-slate-900">Over ₱50,000</SelectItem>
                    </SelectContent>
                  </>
                )}
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-3 md:flex md:gap-3 md:w-auto">
              {/* Duration Select */}
              <Select value={filterDuration} onValueChange={setFilterDuration}>
                {({ open, setOpen }) => (
                  <>
                    <SelectTrigger
                      open={open}
                      setOpen={setOpen}
                      className="w-full md:w-48 h-12 border-slate-200 rounded-xl flex justify-between items-center px-4 text-slate-900"
                    >
                      <SelectValue placeholder="Duration" />
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                    </SelectTrigger>
                    <SelectContent open={open} setOpen={setOpen}>
                      <SelectItem value="all" className="text-slate-900">All Durations</SelectItem>
                      <SelectItem value="1-3" className="text-slate-900">1-3 Days</SelectItem>
                      <SelectItem value="4-7" className="text-slate-900">4-7 Days</SelectItem>
                      <SelectItem value="7plus" className="text-slate-900">7+ Days</SelectItem>
                    </SelectContent>
                  </>
                )}
              </Select>
              
              {/* Sort Select */}
              <Select value={sortBy} onValueChange={setSortBy}>
                {({ open, setOpen }) => (
                  <>
                    <SelectTrigger
                      open={open}
                      setOpen={setOpen}
                      className="w-full md:w-48 h-12 border-slate-200 rounded-xl flex justify-between items-center px-4 text-slate-900"
                    >
                      <SelectValue placeholder="Sort by" />
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                    </SelectTrigger>
                    <SelectContent open={open} setOpen={setOpen}>
                      <SelectItem value="newest" className="text-slate-900">Newest First</SelectItem>
                      <SelectItem value="price_low" className="text-slate-900">Price: Low to High</SelectItem>
                      <SelectItem value="price_high" className="text-slate-900">Price: High to Low</SelectItem>
                      <SelectItem value="duration" className="text-slate-900">Duration</SelectItem>
                    </SelectContent>
                  </>
                )}
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {(searchQuery || filterDestination !== "all" || filterPrice !== "all" || filterDuration !== "all") && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              {searchQuery && <Badge className="bg-orange-100 text-green border-0 px-3 py-1"><MapPin className="w-3 h-3 mr-1" />{searchQuery}<button onClick={() => setSearchQuery("")} className="ml-2"><X className="w-3 h-3" /></button></Badge>}
              {filterDestination !== "all" && <Badge className="bg-blue-100 text-blue-700 border-0 px-3 py-1"><MapPin className="w-3 h-3 mr-1" />{filterDestination}<button onClick={() => setFilterDestination("all")} className="ml-2"><X className="w-3 h-3" /></button></Badge>}
              {filterPrice !== "all" && <Badge className="bg-green-100 text-green-700 border-0 px-3 py-1">Price: {filterPrice === "under10k" ? "Under ₱10k" : filterPrice === "10k-20k" ? "₱10k-20k" : filterPrice === "20k-50k" ? "₱20k-50k" : "Over ₱50k"}<button onClick={() => setFilterPrice("all")} className="ml-2"><X className="w-3 h-3" /></button></Badge>}
              {filterDuration !== "all" && <Badge className="bg-purple-100 text-purple-700 border-0 px-3 py-1"><Clock className="w-3 h-3 mr-1" />{filterDuration === "1-3" ? "1-3 Days" : filterDuration === "4-7" ? "4-7 Days" : "7+ Days"}<button onClick={() => setFilterDuration("all")} className="ml-2"><X className="w-3 h-3" /></button></Badge>}
              <span className="text-sm text-slate-500">{sortedTours.length} tours found</span>
            </div>
          )}
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden">
                <Skeleton className="aspect-[4/3] w-full" />
                <div className="p-4 sm:p-5 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-8 w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : sortedTours.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div key={`${currentPage}-${searchQuery}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {sortedTours.map((tour, index) => (
                <TourCard key={tour.id} tour={tour} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="text-center py-16 sm:py-20 px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
              <Search className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">No tours found</h3>
            <p className="text-slate-500 mb-6 text-sm sm:text-base">Try adjusting your search or filters</p>
            <Button onClick={() => setSearchQuery("")} variant="outlined">Clear Search</Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10 sm:mt-12 px-2">
            <Button variant="outlined" size="small" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="rounded-xl min-w-[40px] h-10">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let page;
              if (totalPages <= 5) page = i + 1;
              else if (currentPage <= 3) page = i + 1;
              else if (currentPage >= totalPages - 2) page = totalPages - 4 + i;
              else page = currentPage - 2 + i;
              return (
                <Button key={page} variant={currentPage === page ? "text" : "outlined"} onClick={() => setCurrentPage(page)} className={`w-10 h-10 rounded-xl ${currentPage === page ? "bg-orange-600 hover:bg-orange-700 text-white" : ""}`}>
                  {page}
                </Button>
              );
            })}

            <Button variant="outlined" size="small" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="rounded-xl min-w-[40px] h-10">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
