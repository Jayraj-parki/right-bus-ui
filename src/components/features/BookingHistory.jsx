"use client";
import RatingStars from "@/components/features/RatingStars";
import { useSelector } from "react-redux";

export default function BookingHistory() {
  // const bookings = useSelector(s => s.booking.history);
  const bookings = [
    {
      ticketId: "RB102349",
      busName: "RightBus Express AC Sleeper",
      date: "2025-02-18",
      from: "Mumbai",
      to: "Pune",
      status: "completed",
      seat: "U12",
      rating: 4.5,
    },
    {
      ticketId: "RB102350",
      busName: "FastWheels Volvo Multi-Axle",
      date: "2025-02-20",
      from: "Delhi",
      to: "Jaipur",
      status: "cancelled",
      seat: "L4",
      rating: 0,
    },
    {
      ticketId: "RB102351",
      busName: "Raj Travels Luxury AC",
      date: "2025-02-22",
      from: "Bengaluru",
      to: "Hyderabad",
      status: "completed",
      seat: "15",
      rating: 5,
    },
    {
      ticketId: "RB102352",
      busName: "InterCity Star Sleeper",
      date: "2025-03-01",
      from: "Chennai",
      to: "Coimbatore",
      status: "completed",
      seat: "U5",
      rating: 3.5,
    },
    {
      ticketId: "RB102353",
      busName: "Night Rider Non-AC Seater",
      date: "2025-03-03",
      from: "Ahmedabad",
      to: "Surat",
      status: "completed",
      seat: "18",
      rating: 4,
    },
  ];
  return (
    <div className="booking-history py-4">
      <h5 className="mb-3">Your Tickets & Booking History</h5>
      {!bookings?.length ? (
        <div className="text-muted text-center py-4">No tickets booked yet!</div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Bus</th>
                <th>Date</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
                <th>Seat</th>
                <th>Rating</th>
                <th>Ticket</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.ticketId}>
                  <td>{b.busName}</td>
                  <td>{b.date}</td>
                  <td>{b.from}</td>
                  <td>{b.to}</td>
                  <td>
                    <span className={`badge bg-${b.status === "cancelled" ? "danger" : "success"}`}>
                      {b.status}
                    </span>
                  </td>
                  <td>{b.seat}</td>
                  <td>
                    <RatingStars rating={b.rating} />
                  </td>
                  <td>
                    <a className="btn btn-outline-dark btn-sm" href={`/tickets/${b.ticketId}`}>
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
