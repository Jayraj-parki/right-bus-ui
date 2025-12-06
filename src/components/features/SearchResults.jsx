"use client";
import SeatLayout from "@/components/features/SeatLayout";
import OperatorCard from "@/components/features/OperatorCard";
import BusFilterBar from "@/components/features/BusFilterBar";
import { useSelector } from "react-redux";

export default function SearchResults({ results, filters, onFilter }) {
  const selectedOperator = useSelector((s) => s.operator.selected);
  return (
    <section className="searchResults py-4">
      <BusFilterBar filters={filters} onFilter={onFilter} />
      <div className="row g-4">
        {results.map((bus) => (
          <div key={bus.id} className="col-12 col-md-6 col-lg-4">
            <div className="card card-elevated p-3 mb-3">
              <OperatorCard operator={bus.operator}/>
              <div className="mt-3">
                <SeatLayout seats={bus.seats} womenOnlySelected={bus.womenOnly}/>
              </div>
              <div className="mt-2 d-flex justify-content-between align-items-center">
                <span className="fw-bold fs-5">₹{bus.price}</span>
                <a className="btn btn-cta btn-sm" href={`/bus/${bus.id}`}>Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
