"use client";

import HotelComboDeals from "@/components/features/HotelComboDeals";
import { useSelector } from "react-redux";

export default function ComboPage() {
  const combos = useSelector(s => s.hotel.combos);
  return (
    <>
      
      <div className="container my-4">
        <HotelComboDeals combos={combos || []} />
      </div>
      
    </>
  );
}
