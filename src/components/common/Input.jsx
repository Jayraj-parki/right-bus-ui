export default function Input({ icon, ...props }) {
  return (
    <div className="input-with-icon  d-flex align-items-center gap-2 position-relative">
      {icon ? <span className="icon">{icon}</span> : null}
      <input className="form-control" {...props} />
    </div>
  );
}
