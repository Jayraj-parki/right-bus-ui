export default function Select({
  icon,
  children,
  defaultValue,
  ...props
}) {
  return (
    <div className="input-with-icon d-flex align-items-center gap-2 position-relative">
      {icon ? <span className="icon">{icon}</span> : null}
      <select className="form-select border" defaultValue={defaultValue} {...props}>
        {children}
      </select>
    </div>
  );
}
