"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonials } from "@/store/features/landing.slice";

import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const TestimonialCard = ({ data }) => {
  return (
    <div className="testimonial-card d-flex flex-column h-100 justify-content-between p-3">
      <div className="stars mb-2">
        {[...Array(data.rating)].map((_, i) => (
          <StarIcon key={i} fontSize="small" />
        ))}
      </div>

      {/* <div className="quote-icon">
        <FormatQuoteIcon fontSize="small" />
      </div> */}

      <p className="review-title">“{data.title}”</p>

      <p className="review-text">{data.text}</p>

      {/* <div className="quote-icon center">
        <FormatQuoteIcon fontSize="small" />
      </div> */}

      <hr />
      <div>
        <div className="reviewer-name">{data.name}</div>
        <div className="reviewer-label">{data.label}</div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  // src/components/testimonials/testimonials.data.js

  const testimonialsData = [
    {
      id: 1,
      name: "VLADIMIR SORIN",
      label: "Verified Passenger",
      title: "Excellent experience!",
      text: "The trip was smooth. Comfortable and fast-Fi during entire journey.",
      rating: 5,
    },
    {
      id: 2,
      name: "MARIA IONESCU",
      label: "Verified Passenger",
      title: "Good service and friendly driver.",
      text: "Good service and friendly driver. Arrived on time. Will definitely use again.",
      rating: 5,
    },
    {
      id: 3,
      name: "ELENA DRUTA",
      label: "Verified Passenger",
      title: "Affordable prices and",
      text: "very professional staff. Highly recommended.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonial-section my-2">
      <div className="container">
        <h2 className="section-title">Our Customers Love the Journey</h2>

        <div className="row justify-content-center g-4 mt-4">
          {testimonialsData.map((item) => (
            <div className="col-12 col-md-4" key={item.id}>
              <TestimonialCard data={item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="review-btn">See All 1,500+ Reviews</button>
        </div>
      </div>
    </section>
  );
}
