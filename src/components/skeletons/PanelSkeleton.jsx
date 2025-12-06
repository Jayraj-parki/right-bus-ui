export default function PanelSkeleton() {
  return (
    <div className="card-elevated">
      <div className="placeholder-glow">
        <span className="placeholder col-6"></span>
      </div>
      <div className="placeholder-glow mt-2">
        <span className="placeholder col-12" style={{ height: 48, display: "block" }} />
      </div>
    </div>
  );
}
