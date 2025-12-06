"use client";
import SearchResults from "@/components/features/SearchResults";
import OffersPromo from "@/components/features/OffersPromo";
import NotificationList from "@/components/features/NotificationList";
import { useSelector } from "react-redux";
import { useNotifications } from "@/hooks/useNotifications";

export default function SearchPage() {
  const results = useSelector(s => s.search.results);
  const notifications = useNotifications().notifications;

  return (
    <>
      <div className="container py-4">
        <SearchResults results={results} filters={{}} onFilter={() => {}} />
        <OffersPromo
          availableOffers={[
            { code: "SAVE20", label: "20% OFF SAVE20" },
            { code: "WOMEN50", label: "Women Only 50% OFF" }
          ]}
          onApply={o => alert(`Promo: ${o.code}`)}
        />
        <NotificationList notifications={notifications} />
      </div>
    </>
  );
}
