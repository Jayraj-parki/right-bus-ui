"use client";
import OffersPromo from "@/components/features/OffersPromo";
import { useSelector } from "react-redux";

export default function OffersPage() {
  const offers = useSelector(s => s.offers.codes);
  return (
    <>

      <div className="container py-4">
        <h2>All Live Offers</h2>
        <OffersPromo availableOffers={offers} onApply={o => alert(`Using: ${o.code}`)} />
      </div>
    </>
  );
}
