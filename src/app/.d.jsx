import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import SearchPanel from "@/components/landing/SearchPanel/SearchPanel";
import AdvantagesGrid from "@/components/landing/Advantages/AdvantagesGrid";
import PopularDestinationsGrid from "@/components/landing/PopularDestinations/PopularDestinationsGrid";
import ServicesStats from "@/components/landing/ServicesStats/ServicesStats";
import DestinationListTables from "@/components/landing/DestinationList/DestinationListTables";
import AboutTeaser from "@/components/landing/AboutTeaser/AboutTeaser";
import ParcelCountriesGrid from "@/components/landing/Parcels/ParcelCountriesGrid";
import TestimonialsCarousel from "@/components/landing/Testimonials/TestimonialsCarousel";
import FaqAccordion from "@/components/landing/FAQ/FaqAccordion";
import AmenitiesStrip from "@/components/landing/Amenities/AmenitiesStrip";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <SearchPanel />
      <AdvantagesGrid />
      <PopularDestinationsGrid />
      <ServicesStats />
      <DestinationListTables />
      <AboutTeaser />
      <ParcelCountriesGrid />
      <TestimonialsCarousel />
      <FaqAccordion />
      <AmenitiesStrip />
      <Footer />
    </>
  );
}
