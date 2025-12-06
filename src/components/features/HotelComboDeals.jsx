"use client";
import { useState } from "react";

export default function HotelComboDeals({ combos }) {
  const [selectedCombo, setSelectedCombo] = useState(null);

  return (
    <section className="hotel-combo py-4">
      <h5>Hotel + Bus Combo Deals</h5>
      <div className="row g-4">
        {combos.map(combo => (
          <div className="col-12 col-md-6 col-lg-4 " key={combo.id}>
            <div className={`card rounded-4 ${selectedCombo === combo.id ? "border-primary shadow-lg" : "shadow-sm"}`}>
              <img
                src={'/images/hero/banner.png'}
                alt={combo.hotelName}
                className="card-img-top"
                style={{ height: 156, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
              <div className="card-body">
                <h6 className="fw-bold mb-2">{combo.hotelName} <span className="badge bg-info ms-2">{combo.star}★</span></h6>
                <div className="mb-1 text-muted">
                  {combo.city} &nbsp;|&nbsp; {combo.busRoute}
                </div>
                <div className="mb-2 small">
                  Includes: <span className="text-success fw-semibold">{combo.includes.join(", ")}</span>
                </div>
                <div className="mb-2 fs-5"><span className="badge bg-success">₹{combo.dealPrice}</span></div>
                <button
                  type="button"
                  className={`btn btn-outline-primary btn-sm ${selectedCombo === combo.id ? "active" : ""}`}
                  onClick={() => setSelectedCombo(combo.id)}
                >{selectedCombo === combo.id ? "Selected" : "Book Combo"}</button>
                <a href={`/hotel-combo/${combo.id}`} className="btn btn-link btn-sm ms-2">Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Details modal can be rendered here if selectedCombo !== null */}
    </section>
  );
}
