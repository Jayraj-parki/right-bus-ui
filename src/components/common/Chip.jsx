export default function Chip({ children, className = "" }) {
  return <span className={`badge text-bg-light border ${className}`}>{children}</span>;
}
