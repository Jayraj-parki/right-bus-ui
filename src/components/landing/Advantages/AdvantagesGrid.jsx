"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PaymentsIcon from "@mui/icons-material/Payments";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarRateIcon from "@mui/icons-material/StarRate";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import TranslateIcon from "@mui/icons-material/Translate";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import HistoryIcon from "@mui/icons-material/History";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import HotelIcon from "@mui/icons-material/Hotel";
import FemaleIcon from "@mui/icons-material/Female";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import PublicIcon from "@mui/icons-material/Public";
import AssessmentIcon from "@mui/icons-material/Assessment";

const featureItems = [
  {
    icon: <StarBorderIcon />,
    title: "Powerful search",
    text: "Fast route search with precise results.",
  },
  {
    icon: <EventSeatIcon />,
    title: "Live seat selection",
    text: "Real-time seat layout with instant updates.",
  },
  {
    icon: <FilterAltIcon />,
    title: "Advanced filters",
    text: "Filter by timing, type, price & ratings.",
  },
  { icon: <GpsFixedIcon />, title: "Track My Bus", text: "Live GPS tracking on the go." },
  {
    icon: <ConfirmationNumberIcon />,
    title: "Instant e-ticket",
    text: "Get tickets on app, email & SMS.",
  },
  { icon: <PaymentsIcon />, title: "Easy payments", text: "UPI, cards, wallets, net banking." },
  { icon: <AutorenewIcon />, title: "Cancel/reschedule", text: "Modify trips anytime." },
  { icon: <LocalOfferIcon />, title: "Offers & rewards", text: "Loyalty points + promo codes." },
  { icon: <VerifiedIcon />, title: "Safety+", text: "Verified and safe buses." },
  { icon: <StarRateIcon />, title: "Reviews", text: "Ratings from real passengers." },
  { icon: <SupportAgentIcon />, title: "Support", text: "WhatsApp & app support." },
  { icon: <NotificationsActiveIcon />, title: "Live alerts", text: "Delay & boarding reminders." },
  { icon: <TranslateIcon />, title: "Multi-language", text: "Supports all major languages." },
  { icon: <ShareLocationIcon />, title: "Trip sharing", text: "Share live ride location." },
  { icon: <HistoryIcon />, title: "History", text: "Saved trips & passenger details." },
  { icon: <CardTravelIcon />, title: "Corporate", text: "Business travel bookings." },
  { icon: <HotelIcon />, title: "Bus + hotel deals", text: "Big savings on combos." },
  { icon: <FemaleIcon />, title: "Women safety", text: "Women-only seat preference." },
  { icon: <LocationOnIcon />, title: "Rest stops", text: "See halting points & timings." },
  { icon: <CallIcon />, title: "Offline booking", text: "Call center & agent support." },
  { icon: <PublicIcon />, title: "International", text: "Multi-region support." },
  { icon: <AssessmentIcon />, title: "Operator comparison", text: "Compare buses easily." },
];

export default function FeaturesSlider() {
  return (
    <section
      className="feature-slider py-4"
      style={{ background: "linear-gradient(120deg, #e5ebfd 0%, #e7f7ff 100%)" }}
    >
      <div className="container">
        <h2 className="mb-4" style={{ fontWeight: 700 }}>
          Features
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1.12}
          spaceBetween={24}
          breakpoints={{
            576: { slidesPerView: 2.2 },
            800: { slidesPerView: 3.2 },
            1100: { slidesPerView: 3.5 },
            1400: { slidesPerView: 4.2 },
          }}
          className="px-2"
        >
          {featureItems.map((item, idx) => (
            <SwiperSlide className="" key={idx}>
              <div className="feature-card h-100 p-4 my-2 d-flex flex-row align-items-start shadow-sm bg-white">
                <div className="me-2">
                  <span className="icon my-auto d-inline">{item.icon}</span>
                </div>
                <div>
                  <div className="fw-bold fs-5 mb-1 d-inline" style={{ color: "#232742" }}>
                    {item.title}
                  </div>
                  <div className="desc text-muted small">{item.text}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
