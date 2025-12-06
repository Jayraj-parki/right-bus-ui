import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Input from "@/components/common/Input";

export default function PaxCounter({ value, onChange }) {
  return (
    <>
      <label className="form-label">Passengers</label>
      <Input
        type="number"
        min={1}
        icon={<PeopleAltIcon />}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
    </>
  );
}
