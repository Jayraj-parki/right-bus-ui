"use client";
import SafetyBadge from "@/components/features/SafetyBadge";
import PrimoBadge from "@/components/features/PrimoBadge";
import RatingStars from "@/components/features/RatingStars";

export default function OperatorCard({ operator }) {
  return (
    <div className="operator-card shadow-sm rounded-4 px-4 py-4 d-flex flex-column align-items-center bg-white">
      <div className="mb-2">
        <img
          src={operator.logo}
          alt={operator.name}
          width={44}
          height={44}
          style={{ borderRadius: "50%", background: "#f4f8fc", objectFit: "cover" }}
        />
      </div>
      <div className="fw-semibold fs-5 mb-1 text-dark text-center">{operator.name}</div>
      <div className="small text-muted mb-2 text-center">{operator.region}</div>
      <div className="mb-2 d-flex gap-2">
        <SafetyBadge isVerified={operator.safetyPlus} />
        <PrimoBadge isPrimo={operator.primo} />
      </div>
      <div className="mb-2" style={{ fontSize: "1.23rem" }}>
        <RatingStars rating={operator.rating || 4.5} />
      </div>
      <div className="badge bg-success mb-1">{operator.seatsAvailable || operator.seats} seats</div>
    </div>
  );
}
