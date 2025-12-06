export default function SafetyBadge({ isVerified }) {
  return isVerified ? <span className="badge bg-success me-2">Safety+</span> : null;
}
