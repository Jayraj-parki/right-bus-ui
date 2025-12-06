export default function Badge({ color = "primary", children, className = "" }) {
  return <span className={`badge text-bg-${color} ${className}`}>{children}</span>;
}
