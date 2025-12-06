import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import OffersPromo from "@/components/features/OffersPromo";
import OperatorCompare from "@/components/features/OperatorCompare";
import HotelComboDeals from "@/components/features/HotelComboDeals";
import BookingHistory from "@/components/features/BookingHistory";
import { MOCK_OPERATORS } from "@/constants/operators";
import SearchPanel from "@/components/landing/SearchPanel/SearchPanel";
import AdvantagesGrid from "@/components/landing/Advantages/AdvantagesGrid";
import PopularDestinationsGrid from "@/components/landing/PopularDestinations/PopularDestinationsGrid";
import AboutTeaser from "@/components/landing/AboutTeaser/AboutTeaser";
import TestimonialsCarousel from "@/components/landing/Testimonials/TestimonialsCarousel";
import FaqAccordion from "@/components/landing/FAQ/FaqAccordion";
import AmenitiesStrip from "@/components/landing/Amenities/AmenitiesStrip";

// MOCK ONLY: Replace with API data via useEffect or loader when connecting backend
const demoCombos = [
  {
    id: 201,
    hotelName: "Silver Star Hotel",
    city: "Agra",
    hotelImg: "/images/hotels/agra-silverstar.jpg",
    star: 4,
    busRoute: "Delhi → Agra",
    includes: ["Deluxe Room", "Express Bus", "Breakfast", "Free WiFi"],
    dealPrice: 1299,
  },
  {
    id: 202,
    hotelName: "Beach View Lodge",
    city: "Goa",
    hotelImg: "/images/hotels/goa-beachview.jpg",
    star: 5,
    busRoute: "Mumbai → Goa",
    includes: ["Sea View", "Premium Bus", "Dinner"],
    dealPrice: 2499,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchPanel />
      <AdvantagesGrid />
      <OffersPromo />
      {/* <div className="container-fluid  my-5"> */}
      <OperatorCompare operators={MOCK_OPERATORS} />
      {/* </div> */}
      <div className="container my-5">
        <HotelComboDeals combos={demoCombos} />
      </div>
      <PopularDestinationsGrid />
      <AboutTeaser />
      <TestimonialsCarousel />
      <FaqAccordion />
      <AmenitiesStrip />
      <div className="container my-5">
        <BookingHistory />
      </div>
    </>
  );
}
