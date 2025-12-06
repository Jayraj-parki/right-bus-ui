"use client";
import { useEffect, useRef } from "react";
import { Modal as BsModal } from "bootstrap";

export default function Modal({ id, title, children, footer, show, onHide }) {
  const ref = useRef(null);
  useEffect(() => {
    const m = new BsModal(ref.current, { backdrop: "static" });
    if (show) m.show(); else m.hide();
    const onHidden = () => onHide && onHide();
    ref.current.addEventListener("hidden.bs.modal", onHidden);
    return () => ref.current?.removeEventListener("hidden.bs.modal", onHidden);
  }, [show, onHide]);

  return (
    <div className="modal fade" id={id} tabIndex="-1" ref={ref}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {title ? (
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
          ) : null}
          <div className="modal-body">{children}</div>
          {footer ? <div className="modal-footer">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}
