"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "@/store/features/landing.slice";

export default function ServicesStats() {
  const dispatch = useDispatch();
  const stats = useSelector((s) => s.landing.stats);

  useEffect(() => { dispatch(fetchStats()); }, [dispatch]);

  return (
    <section id="services" className="services-band py-5 mt-4">
      <div className="container container-narrow">
        <div className="row text-center g-4 align-items-center">
          <div className="col-12 col-lg-3 text-lg-start">
            <h3 className="mb-0">Our services</h3>
          </div>
          <div className="col-12 col-lg-9">
            <div className="row text-center g-4">
              <div className="col-12 col-md-4">
                <div className="stat">{stats ? `${stats.passengers.toLocaleString()}+` : "10K+"}</div>
                <div className="opacity-75">Passengers transported</div>
              </div>
              <div className="col-12 col-md-4">
                <div className="stat">{stats ? `${stats.kilometers.toLocaleString()}+` : "100K+"}</div>
                <div className="opacity-75">Kilometers traveled</div>
              </div>
              <div className="col-12 col-md-4">
                <div className="stat">{stats ? `${stats.parcels.toLocaleString()}+` : "10K+"}</div>
                <div className="opacity-75">Parcels shipped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
