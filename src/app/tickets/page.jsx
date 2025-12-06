"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingHistory from "@/components/features/BookingHistory";
import { useSelector } from "react-redux";

export default function TicketsPage() {
  const bookings = useSelector(s => s.booking.history);
  return (
    <>
      <div className="container my-5">
        <BookingHistory bookings={bookings} />
      </div>
    </>
  );
}
