"use client";
import SeatLayout from "@/components/features/SeatLayout";
import WomenOnlyToggle from "@/components/features/WomenOnlyToggle";
import { useState } from "react";
import useSearchSeats from "@/hooks/useSearchSeats";
import { useSearchParams } from "next/navigation";

export default function SeatMapPage() {
  const params = useSearchParams();
  const busId = params.get("busId");
  const [seats, selectSeat] = useSearchSeats(busId);
  const [womenOnly, setWomenOnly] = useState(false);

  return (
    <>
      <div className="container py-5">
        <h2 className="mb-3">Choose Your Seat</h2>
        <WomenOnlyToggle checked={womenOnly} onToggle={() => setWomenOnly(w => !w)} />
        <SeatLayout seats={seats} womenOnlySelected={womenOnly} onSelect={selectSeat} />
      </div>
    </>
  );
}
