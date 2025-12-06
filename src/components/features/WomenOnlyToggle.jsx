"use client";
import WomanOutlined from "@mui/icons-material/WomanOutlined";
export default function WomenOnlyToggle({ checked, onToggle }) {
  return (
    <button
      type="button"
      className={`btn rounded-pill border-0 px-3 py-2 ${checked ? "bg-primary text-light" : "bg-light"}`}
      onClick={onToggle}
    >
      <WomanOutlined fontSize="small" className="me-2" />
      Women Only
    </button>
  );
}
