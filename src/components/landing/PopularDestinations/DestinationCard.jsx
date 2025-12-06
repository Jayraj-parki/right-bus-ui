import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function DestinationCard({ item }) {
  return (
    <div className="card destination-card h-100 shadow-sm border-0">
      {/* IMAGE */}
      <div className="position-relative">
        <Image
          src={'/images/hero/banner.png'}
          alt={`${item.from} - ${item.to}`}
          width={600}
          height={360}
          className="card-img-top destination-img"
        />

        {/* GRADIENT OVERLAY */}
        <div className="dest-overlay position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between text-white">
          <span className="fw-semibold">{item.from} → {item.to}</span>
          <span className="fw-bold">₹{item.price}</span>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="card-body d-flex gap-2 pt-3">
        <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center">
          <CalendarMonthIcon fontSize="small" className="me-1" />
          Choose date
        </button>

        <button className="btn btn-dark px-3">Reserve</button>
      </div>
    </div>
  );
}
