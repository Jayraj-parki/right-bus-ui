"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToast } from "@/store/features/ui/ui.slice";

export default function Toast() {
  const dispatch = useDispatch();
  const toast = useSelector((s) => s.ui?.toast);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (toast) {
      setOpen(true);
      const t = setTimeout(() => {
        setOpen(false);
        dispatch(setToast(null));
      }, 2500);
      return () => clearTimeout(t);
    }
  }, [toast, dispatch]);

  if (!toast || !open) return null;

  return (
    <div style={{ position: "fixed", bottom: 16, right: 16, zIndex: 1080 }}>
      <div className="card shadow-sm" style={{ minWidth: 260 }}>
        <div className="card-body py-2 px-3">
          <div className="small">{toast.message || String(toast)}</div>
        </div>
      </div>
    </div>
  );
}
