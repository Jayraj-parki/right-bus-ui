export default function ListSkeleton({ rows = 6 }) {
  return (
    <div className="card-elevated">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="placeholder-glow my-2">
          <span className="placeholder col-9" />
        </div>
      ))}
    </div>
  );
}
