export default function PrimoBadge({ isPrimo }) {
  return isPrimo ? <span className="badge bg-primary me-2">Primo</span> : null;
}
