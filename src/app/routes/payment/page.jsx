"use client";
import PaymentModes from "@/components/features/PaymentModes";
import ETicketActions from "@/components/features/ETicketActions";
import { useState } from "react";
import usePayment from "@/hooks/usePayment";
import { useSelector } from "react-redux";

export default function PaymentPage() {
  const { mode, setMode } = usePayment();
  const [paid, setPaid] = useState(false);
  const promo = useSelector(state => state.offers.applied);

  return (
    <>
      <div className="container py-5">
        <h2>Payment & Ticket</h2>
        <PaymentModes selected={mode} onSelect={setMode} />
        {!paid ? (
          <button className="btn btn-success mt-4" onClick={() => setPaid(true)}>
            Pay & Get Ticket
          </button>
        ) : (
          <ETicketActions ticketId={12343} canCancel canReschedule />
        )}
      </div>
    </>
  );
}
