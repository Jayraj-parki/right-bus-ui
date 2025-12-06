"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";

const allOperators = [
  {
    id: "1",
    name: "FastWheels",
    region: "North India",
    logo: "/images/hero/hero-1.jpg",
    safetyPlus: true,
    primo: false,
    rating: 4,
    seats: 23,
  },
  {
    id: "2",
    name: "Sunstar Travel",
    region: "Europe",
    logo: "/images/hero/hero-1.jpg",
    safetyPlus: true,
    primo: true,
    rating: 4.5,
    seats: 12,
  },
  {
    id: "3",
    name: "RoadGo",
    region: "West",
    logo: "/images/hero/hero-1.jpg",
    safetyPlus: false,
    primo: false,
    rating: 3.5,
    seats: 18,
  },
  {
    id: "4",
    name: "MetroBus",
    region: "Metro",
    logo: "/images/hero/hero-1.jpg",
    safetyPlus: true,
    primo: true,
    rating: 4.7,
    seats: 17,
  },
  {
    id: "5",
    name: "SkyLine",
    region: "South",
    logo: "/images/hero/hero-1.jpg",
    safetyPlus: false,
    primo: false,
    rating: 4.2,
    seats: 14,
  },
  {
    id: "6",
    name: "GoGreen",
    region: "Central",
    logo: "/images/hero/hero-1.jpg",
    safetyPlus: true,
    primo: false,
    rating: 4.8,
    seats: 22,
  },
];

const initialFilters = {
  safety: false,
  primo: false,
  minRating: 0,
  minSeats: 0,
};

// function OperatorCard({ op }) {
//   return (
//     <div className="operator-slider-card rounded-4 bg-white shadow px-4 py-4 d-flex flex-column align-items-center">
//       <div className=" d-flex flex-row align-items-center">
//         <div className="image-container me-3">
//           <Image
//             src={op.logo}
//             alt={op.name}
//             width={44}
//             height={44}
//             style={{ borderRadius: "50%", objectFit: "cover", background: "#ecf2fa", width: 44, height: 44 }}
//           />
//         </div>
//         <div>
//           <div className="fw-bold fs-5 mb-1 text-dark text-center">{op.name}</div>
//           <div className="small text-muted mb-2 text-center">{op.region}</div>
//         </div>
//       </div>
//       <div className="mb-2 d-flex gap-2">
//         {op.safetyPlus && (
//           <span className="badge bg-success" style={{ fontWeight: 600 }}>
//             Safety+
//           </span>
//         )}
//         {op.primo && (
//           <span className="badge bg-primary" style={{ fontWeight: 600 }}>
//             Primo
//           </span>
//         )}
//       </div>
//       <div
//         className="mb-2 fs-5 d-flex align-items-center justify-content-center"
//         style={{ color: "#fb8c00" }}
//       >
//         {Array(Math.floor(op.rating))
//           .fill(0)
//           .map((_, i) => (
//             <StarIcon key={i} fontSize="small" />
//           ))}
//         {op.rating % 1 !== 0 && <StarIcon fontSize="small" style={{ opacity: 0.5 }} />}
//         <span className="ms-1 fw-semibold" style={{ color: "#222", fontSize: "1rem" }}>
//           {op.rating}
//         </span>
//       </div>
//       <div className="badge bg-success mb-1">{op.seats} seats</div>
//     </div>
//   );
// }
function OperatorCard({ op }) {
  return (
    <div className="op-card">
      {/* TOP SECTION */}
      <div className="op-top">
        <div className="op-left-img">
          <Image
            src={'/images/hero/banner.png'}
            alt={op.name}
            width={60}
            height={60}
            className="op-img"
          />
        </div>

        <div className="op-info">
          <h4 className="op-name">{op.name}</h4>
          <p className="op-location">{op.region}</p>

          <div className="op-rating">
            <StarIcon fontSize="small" />
            <span>{op.rating}</span>
          </div>
        </div>

        <div className="op-radio">
          <input type="radio" name="operator" />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="op-bottom">
        {op.safetyPlus && <span className="op-tag safety">Safety+</span>}
        {op.primo && <span className="op-tag primo">Primo</span>}
        {op.luxury && <span className="op-tag luxury">Luxury</span>}
      </div>
    </div>
  );
}

export default function OperatorCompareSlider() {
  const [filters, setFilters] = useState(initialFilters);

  const filteredOperators = allOperators.filter((op) => {
    if (filters.safety && !op.safetyPlus) return false;
    if (filters.primo && !op.primo) return false;
    if (filters.minRating && op.rating < filters.minRating) return false;
    if (filters.minSeats && op.seats < filters.minSeats) return false;
    return true;
  });

  return (
    <section
      className="container-fluid  operator-slider-section py-"
      // style={{ background: "linear-gradient(110deg,#e8effc 70%,#e7f4fd 100%)" }}
    >
      <div
        className=" col-10 operator-slider-outer mx-auto rounded-5 py-4 px-md-5 shadow"
        // style={{ maxWidth: 930, background: "#fff" }}
      >
        <div className="mb-1">
          <h2 className="fw-bold mb-2">Our Premium Operators</h2>
          <div className="text-muted mb-4" style={{ fontSize: "1.14rem" }}>
            Discover and compare top-rated bus services for your journey.
          </div>
          <h4 className="fw-bold mb-3">Compare Bus Operators</h4>
        </div>

        {/* Filters */}
        <div className="d-flex gap-4 mb-4 flex-wrap align-items-center">
          <label className="form-check form-switch mb-0">
            <input
              type="checkbox"
              className="form-check-input"
              checked={filters.safety}
              onChange={(e) => setFilters((f) => ({ ...f, safety: e.target.checked }))}
            />
            <span className="ms-2">Safety+</span>
          </label>
          <label className="form-check form-switch mb-0">
            <input
              type="checkbox"
              className="form-check-input"
              checked={filters.primo}
              onChange={(e) => setFilters((f) => ({ ...f, primo: e.target.checked }))}
            />
            <span className="ms-2">Primo</span>
          </label>
          <div>
            <span className="me-2">Min Rating</span>
            <input
              type="number"
              min={0}
              max={5}
              step={0.1}
              value={filters.minRating}
              className="form-control d-inline-block"
              style={{ width: 70 }}
              onChange={(e) => setFilters((f) => ({ ...f, minRating: +e.target.value }))}
            />
          </div>
          <div>
            <span className="me-2">Min Seats</span>
            <input
              type="number"
              min={0}
              value={filters.minSeats}
              className="form-control d-inline-block"
              style={{ width: 70 }}
              onChange={(e) => setFilters((f) => ({ ...f, minSeats: +e.target.value }))}
            />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={32}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 2 },
            950: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="operator-swiper py-2 px-5"
        >
          {filteredOperators.map((op) => (
            <SwiperSlide key={op.id}>
              <OperatorCard op={op} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
