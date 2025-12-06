"use client";
export default function HotelComboDetail({ combo }) {
  return (
    <div className="container py-4">
      <div className="card shadow-lg mb-4">
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img
              src={combo.hotelImg}
              alt={combo.hotelName}
              style={{ borderRadius: "12px 0 0 12px", width: "100%", height: "220px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body p-4">
              <h3 className="fw-bold">{combo.hotelName} <span className="badge bg-info ms-2">{combo.star}★</span></h3>
              <div className="mb-2 fs-5">{combo.city} | Bus: {combo.busRoute}</div>
              <div className="mb-2">Deal Price: <span className="badge bg-success fs-5">₹{combo.dealPrice}</span></div>
              <div className="mb-3">Includes: <span className="text-success fw-semibold">{combo.includes.join(", ")}</span></div>
              <div>
                <button className="btn btn-primary btn-lg">Book Deal Now</button>
                <a href="/offers" className="btn btn-link ms-3">See More Offers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light p-3 rounded">
        <h6>Combo Highlights</h6>
        <ul>
          <li>Flexible reschedule/cancellation</li>
          <li>Instant confirmation & ticket</li>
          <li>Safety+ verified bus only</li>
          <li>Free breakfast at hotel (if included)</li>
          <li>Trip support & notifications</li>
        </ul>
      </div>
    </div>
  );
}
