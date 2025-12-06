import Select from "@/components/common/Select";
import PlaceIcon from "@mui/icons-material/Place";

export default function CityAutocomplete({ value, onChange, options = [], label = "City" }) {
  return (
    <>
      <label className="form-label">{label}</label>
      <Select icon={<PlaceIcon />} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Country, city</option>
        {options.map((c) => <option key={c} value={c}>{c}</option>)}
      </Select>
    </>
  );
}
