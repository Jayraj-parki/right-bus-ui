export default function Pagination({ page = 1, total = 1, onChange }) {
  const prev = () => onChange?.(Math.max(1, page - 1));
  const next = () => onChange?.(Math.min(total, page + 1));
  return (
    <nav>
      <ul className="pagination mb-0">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={prev}>Previous</button>
        </li>
        <li className="page-item disabled">
          <span className="page-link">{page} / {total}</span>
        </li>
        <li className={`page-item ${page === total ? "disabled" : ""}`}>
          <button className="page-link" onClick={next}>Next</button>
        </li>
      </ul>
    </nav>
  );
}
