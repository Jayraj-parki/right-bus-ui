"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaq } from "@/store/features/landing.slice";

export default function FaqAccordion() {
  const dispatch = useDispatch();
  // const faq = useSelector((s) => s.landing.faq);
   const DEMO_FAQ = [
  {
    q: "How do I book a bus ticket on RightBus?",
    a: "Simply search for your route, select a bus, choose your seats, and proceed to secure payment. Your e-ticket will be sent instantly.",
  },
  {
    q: "Can I cancel or reschedule my ticket?",
    a: "Yes, you can cancel or modify your booking from the 'My Bookings' section. Cancellation charges may apply based on operator policy.",
  },
  {
    q: "Is online payment secure?",
    a: "Absolutely. All payments are processed with SSL encryption and trusted payment gateways to keep your data safe.",
  },
  {
    q: "Do I need a printed ticket?",
    a: "No. A digital e-ticket or SMS confirmation is enough while boarding the bus.",
  },
  {
    q: "What happens if my bus is delayed?",
    a: "You will receive a notification on your registered mobile number and email with updated timings.",
  },
];
 const faq = DEMO_FAQ;
  useEffect(() => { dispatch(fetchFaq()); }, [dispatch]);

  return (
    <section id="faq" className="faq py-5">
      <div className="container container-narrow">
        <h3 className="mb-4">Useful information</h3>
        <div className="accordion" id="faqAcc">
          {faq.map((f, idx) => {
            const id = `faq-${idx}`;
            return (
              <div className="accordion-item" key={id}>
                <h2 className="accordion-header" id={`${id}-h`}>
                  <button
                    className={`accordion-button shadow-none ${idx ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}-c`}
                    aria-expanded={idx ? "false" : "true"}
                    aria-controls={`${id}-c`}
                  >
                    {f.q}
                  </button>
                </h2>
                <div
                  id={`${id}-c`}
                  className={`accordion-collapse collapse ${idx ? "" : "show"}`}
                  aria-labelledby={`${id}-h`}
                  data-bs-parent="#faqAcc"
                >
                  <div className="accordion-body">{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
