"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

const offers = [
  {
    title: "Flat 20% OFF on Bus Tickets",
    subtitle: "Min booking ₹400 • Max discount ₹120",
    code: "RB20",
    label: "20% OFF",
    color: "blue",
    action: "APPLY NOW"
  },
  {
    title: "Bundle Deal – Save ₹200 Extra",
    subtitle: "Book Bus + Hotel & save more on your trip",
    code: "",
    label: "BUNDLE",
    color: "green",
    action: "EXPLORE DEALS"
  },
  {
    title: "New Feature: Train Bookings",
    subtitle: "Train tickets now available on RightBus",
    code: "",
    label: "NEW",
    color: "orange",
    action: "BOOK TRAINS"
  },
  {
    title: "RightBus Value Deal",
    subtitle: "Special routes at discounted prices",
    code: "",
    label: "60% OFF",
    color: "teal",
    action: "VIEW ROUTES"
  },
  {
    title: "15% OFF on Train Tickets",
    subtitle: "Applicable for bookings above ₹300",
    code: "TRAIN15",
    label: "15% OFF",
    color: "brown",
    action: "APPLY NOW"
  },
  {
    title: "Weekend Flash Sale – Extra ₹50 OFF",
    subtitle: "Use any coupon & save an additional ₹50",
    code: "",
    label: "FLASH SALE",
    color: "purple",
    action: "CHECK DEALS"
  },
  {
    title: "Women Safety Offer",
    subtitle: "₹100 OFF on women-only seats",
    code: "SAFE100",
    label: "SAFETY+",
    color: "pink",
    action: "APPLY NOW"
  },
  {
    title: "First-Time User Offer – Flat ₹75 OFF",
    subtitle: "Valid on your first bus booking",
    code: "WELCOME75",
    label: "NEW USER",
    color: "indigo",
    action: "GRAB NOW"
  },
  {
    title: "Wallet Cashback – Get ₹40 Back",
    subtitle: "Pay using UPI wallet & earn cashback",
    code: "",
    label: "CASHBACK",
    color: "cyan",
    action: "USE WALLET"
  },
  {
    title: "RightBus Verified – On-Time Buses",
    subtitle: "Extra 5% OFF on GPS-tracked buses",
    code: "TRACK5",
    label: "PRIMO",
    color: "red",
    action: "BOOK PRIMO"
  }
];


export default function OffersSlider() {
  const [promo, setPromo] = useState("");

  return (
    <section className="container-fluid col-10 offer-slider-bg py-5 d-flex justify-content-center align-items-center">
      <div className="offers-slider-box rounded-5 shadow p-4 px-md-5">
        <div className="m-0 d-flex align-items-center" style={{fontSize:"2rem"}}>
          <span style={{marginRight:10}}>🔥</span>
          <span className="fw-bold">Exclusive Offers for You!</span>
        </div>
        {/* Swiper -- 2 rows, 3 per row */}
        <Swiper
          modules={[Grid, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          grid={{ rows: 1, fill: "row" }}
          spaceBetween={24}
          slidesPerView={3}
          className="offers-swiper pb-4"
        >
          {offers.map((o, i) => (
            <SwiperSlide key={i}>
              <div className={`offer-ticket-card d-flex justify-content-between ${o.color}`}>
                <span className="ticket-notch ticket-notch-left" />
                <span className="ticket-notch ticket-notch-right" />
                <div className="label">{o.label}</div>
                <div className="title">{o.title}</div>
                <div className="subtitle">{o.subtitle}</div>
                {o.code && <div className="code 1">Use Code: <b>{o.code}</b></div>}
                <button className="btn ticket-btn border btn-outline-secondary">{o.action}</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Code entry under slider */}
        <div className="m-0  pt-1">
          <div className="mb-2 fw-semibold" style={{fontSize:"1rem"}}>Got a Code?</div>
          <div className="d-flex gap-2 flex-wrap">
            <input
              type="text"
              className="form-control promo-input shadow-none outline-0 border"
              autoComplete="off"
              placeholder="Enter your Promo Code"
              maxLength={16}
              value={promo}
              onChange={e => setPromo(e.target.value)}
            />
            <button
              className={`btn btn-outline-dark ${!promo ? "disabled" : ""}`}
              style={{fontWeight:600}}
              disabled={!promo}
              onClick={() => alert(`Applied promo: ${promo}`)}
            >Apply</button>
          </div>
        </div>
      </div>
    </section>
  );
}
