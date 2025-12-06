"use client";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@/components/common/Button";

export default function LiveTracking({ location="Delhi - Agra Highway", onShare }) {
  return (
    <div className="card py-3 px-4 shadow-sm mb-3">
      <div className="d-flex gap-4 align-items-center">
        <DirectionsBusIcon color="primary" fontSize="large"/>
        <div className="flex-grow-1">
          <strong>Track My Bus:</strong>{" "}
          <span className="ms-1"><LocationOnIcon fontSize="small"/> {location}</span>
        </div>
        <Button className="btn-light border" onClick={onShare}>Share Trip</Button>
      </div>
    </div>
  );
}
