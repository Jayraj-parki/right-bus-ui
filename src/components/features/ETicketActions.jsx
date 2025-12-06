"use client";
export default function ETicketActions({ ticketId, canCancel, canReschedule }) {
  return (
    <div className="d-flex gap-3 mt-3">
      {canReschedule && (
        <button className="btn btn-warning" type="button" onClick={() => alert("Reschedule coming soon!")}>
          Reschedule
        </button>
      )}
      {canCancel && (
        <button className="btn btn-danger" type="button" onClick={() => alert("Cancel coming soon!")}>
          Cancel
        </button>
      )}
    </div>
  );
}
