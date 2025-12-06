"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DestinationCard from "./DestinationCard";
import { fetchPopular } from "@/store/features/landing.slice";

export default function PopularDestinationsGrid() {
  const dispatch = useDispatch();

  const demoPopular = [
    { id: "1", from: "Banglore", to: "Bucharest", duration: "8h 30m", price: "1450", image: "/images/city-bucharest.jpg" },
    { id: "2", from: "Banglore", to: "Iasi", duration: "6h 10m", price: "1100", image: "/images/city-iasi.jpg" },
    { id: "3", from: "Banglore", to: "Cluj-Napoca", duration: "11h 45m", price: "1900", image: "/images/city-cluj.jpg" },
    { id: "4", from: "Banglore", to: "Timisoara", duration: "13h 20m", price: "2150", image: "/images/city-timisoara.jpg" },
    { id: "5", from: "Banglore", to: "Sibiu", duration: "10h 55m", price: "1750", image: "/images/city-sibiu.jpg" },
    { id: "6", from: "Banglore", to: "Brasov", duration: "9h 15m", price: "1600", image: "/images/city-brasov.jpg" }
  ];

  useEffect(() => { dispatch(fetchPopular()); }, []);

  return (
    <section id="destinations" className="py-5">
      <div className="container">
        <h3 className="mb-4 fw-semibold">
          Popular destinations with departure direct from Banglore
        </h3>

        <div className="row g-4">
          {demoPopular.map((d) => (
            <div key={d.id} className="col-12 col-md-6 col-lg-3">
              <DestinationCard item={d} />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-outline-dark px-4">Show all directions</button>
        </div>
      </div>
    </section>
  );
}
