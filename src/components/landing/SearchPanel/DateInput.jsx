import DatePicker from "@/components/common/DatePicker";

export default function DateInput({ value, onChange, label = "Date" }) {
  return (
    <>
      <label className="form-label">{label}</label>
      <DatePicker value={value} onChange={(e) => onChange(e.target.value)} />
    </>
  );
}
