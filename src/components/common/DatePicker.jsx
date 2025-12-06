import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function DatePicker({ value, onChange, min, max, ...props }) {
  return (
    <div className="input-with-icon">
      <span className="icon"><CalendarMonthIcon /></span>
      <input
        type="date"
        className="form-control"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        {...props}
      />
    </div>
  );
}
