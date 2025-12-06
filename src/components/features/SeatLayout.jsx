"use client";
import { useState } from "react";
import ChairIcon from "@mui/icons-material/EventSeat";
import WomanIcon from "@mui/icons-material/Woman";
import clsx from "classnames";

export default function SeatLayout({ seats, womenOnlySelected, onSelect }) {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="seat-layout d-flex flex-wrap gap-2 mt-3 px-1">
      {seats.map((seat) => (
        <button
          key={seat.id}
          type="button"
          className={clsx(
            "seat-btn rounded-3",
            seat.booked ? "btn-danger text-light" :
            selectedId === seat.id ? "btn-primary text-light" :
            womenOnlySelected && seat.womenOnly ? "btn-info" : "btn-light"
          )}
          disabled={seat.booked}
          onClick={() => { setSelectedId(seat.id); onSelect && onSelect(seat.id); }}
          style={{minWidth:48, height:40}}
        >
          <ChairIcon fontSize="small"/>
          {seat.womenOnly && <WomanIcon fontSize="small" className="ms-1 text-primary" />}
          <span className="ms-1">{seat.label}</span>
        </button>
      ))}
    </div>
  );
}
