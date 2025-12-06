"use client";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function SupportChat() {
  return (
    <div className="support-chat py-4">
      <h5>Support & Help</h5>
      <div className="my-2">
        <a
          href="https://wa.me/919999999999?text=I%20need%20help%20with%20my%20Right%20Bus%20booking"
          target="_blank"
          rel="noopener"
          className="btn btn-success me-3"
        >
          <WhatsAppIcon className="me-2"/> WhatsApp Chat
        </a>
        <button className="btn btn-light border">
          <ChatBubbleOutlineIcon className="me-2"/> In-App Help Chat
        </button>
      </div>
      <div className="card p-3 mt-3" style={{background:"#f9f9fb"}}>
        <div className="fw-semibold mb-1">Need urgent support?</div>
        <div className="small text-muted">Call our agents: <a href="tel:+919999999999">+91-99999 99999</a></div>
      </div>
    </div>
  );
}
