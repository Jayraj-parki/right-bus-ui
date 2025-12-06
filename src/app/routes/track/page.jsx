"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiveTracking from "@/components/features/LiveTracking";
import TripShare from "@/components/features/TripShare";
import useLiveTracking from "@/hooks/useLiveTracking";
import { useSearchParams } from "next/navigation";

export default function TrackPage() {
  const params = useSearchParams();
  const tripId = params.get("tripId");
  const location = useLiveTracking(tripId);

  return (
    <>
      <div className="container py-5">
        <LiveTracking location={location} onShare={() => alert("Link shared!")} />
        <TripShare url={`https://rightbus.com/track/${tripId}`} />
      </div>
    </>
  );
}
