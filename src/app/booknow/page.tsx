"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BookNowPage() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await axios.get(
          `https://golakaw.com/api/tourlist?page=${page}`
        );
        console.log("Tour fetch response:", res.data.data.data);

        // ✅ Real array is inside data.tours
        setTours(res.data.data.data);
      } catch (err) {
        console.error("Error fetching tours:", err);
        setTours([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [page]);

  return (
   <div className="p-5 max-w-5xl mx-auto">

  <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
    Tour List
  </h1>

  {loading ? (
    <p className="text-center text-lg text-gray-600">Loading...</p>
  ) : (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tours.map((tour) => (
        <div
          key={tour.id}
          className="p-5 border rounded-xl shadow hover:shadow-lg bg-white transition duration-300"
        >
          <h2 className="font-semibold text-xl text-gray-900 mb-2 text-color-black">
            {tour.title}
          </h2>

          <p className="text-gray-700">
            <span className="font-semibold">Price:</span> {tour.price}
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">Duration:</span> {tour.duration}
          </p>

          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
            Book Now
          </button>
        </div>
      ))}
    </div>
  )}

  {/* Pagination */}
  <div className="flex justify-center items-center gap-4 mt-10">
    <button
      disabled={page <= 1}
      onClick={() => setPage(page - 1)}
      className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 disabled:opacity-50 disabled:hover:bg-gray-300 transition"
    >
      Prev
    </button>

    <span className="px-4 py-2 bg-white border rounded-lg shadow-sm text-lg">
      Page {page}
    </span>

    <button
      onClick={() => setPage(page + 1)}
      className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition"
    >
      Next
    </button>
  </div>
</div>

  );
}
