"use client";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@/components/common/Button";

export default function TripShare({ url }) {
  function copyToClipboard() {
    navigator.clipboard.writeText(url);
    alert("Trip share link copied!");
  }
  return (
    <div className="text-center my-3">
      <div className="small text-muted mb-2">Share your live trip location with friends or family:</div>
      <Button className="btn-cta" onClick={copyToClipboard}>
        <ShareIcon fontSize="small" className="me-2"/> Copy Link
      </Button>
    </div>
  );
}
