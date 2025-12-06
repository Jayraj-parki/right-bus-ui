export default function PassengerParcelTabs({ value, onChange }) {
  return (
    <div className="btn-group">
      <button type="button" className={`btn ${value === "passengers" ? "btn-cta" : "btn-primary-soft"}`} onClick={() => onChange("passengers")}>Passengers</button>
      <button type="button" className={`btn ${value === "parcels" ? "btn-cta" : "btn-primary-soft"}`} onClick={() => onChange("parcels")}>Parcels</button>
    </div>
  );
}
