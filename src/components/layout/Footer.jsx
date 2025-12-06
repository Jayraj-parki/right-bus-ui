import { STATIC_TEXT } from "@/constants/static_text";

export default function Footer() {
  return (
    <footer className="site-footer mt-auto pt-5 pb-3" style={{background:"#1A2B3C",color:"#fff"}}>
      <div className="container container-narrow">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h5 className="mb-3">{STATIC_TEXT.BRAND_NAME}</h5>
            <div className="opacity-75 mb-2">Budget-friendly travel, trusted service.</div>
            <div className="small opacity-50">© Right Bus 2025. All rights reserved.</div>
          </div>
          <div className="col-6 col-md-4">
            <h6 className="mb-2">Navigation</h6>
            <ul className="list-unstyled">
              <li><a href="/#services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/#offers" className="text-light text-decoration-none">Offers</a></li>
              <li><a href="/#faq" className="text-light text-decoration-none">FAQ</a></li>
              <li><a href="/#track" className="text-light text-decoration-none">Track Bus</a></li>
              <li><a href="/tickets" className="text-light text-decoration-none">Tickets</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <h6 className="mb-2">Contact</h6>
            <div className="opacity-90 mb-1">Support: +91-XXX-XXXXXXX</div>
            <div className="opacity-90 mb-2">Email: support@rightbus.com</div>
            <div>
              <a className="btn btn-outline-light btn-sm me-2" href="#">WhatsApp</a>
              <a className="btn btn-outline-light btn-sm" href="#">Help & Chat</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
