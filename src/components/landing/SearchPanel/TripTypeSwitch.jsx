export default function TripTypeSwitch({ value, onChange }) {
  return (
    <div className="btn-group">
      <button
        type="button"
        onClick={() => onChange("oneway")}
        className={`btn ${value === "oneway" ? "btn-outline-dark" : "btn-outline-secondary"}`}
      >
        One direction
      </button>
      <button
        type="button"
        onClick={() => onChange("roundtrip")}
        className={`btn ${value === "roundtrip" ? "btn-outline-dark" : "btn-outline-secondary"}`}
      >
        Round-trip
      </button>
    </div>
  );
}
