export default function Sidebar({ links, active }) {
  return (
    <aside className="sidebar bg-light py-4 shadow-sm">
      <nav>
        <ul className="nav flex-column">
          {links.map((l, idx) => (
            <li key={l.href} className={`nav-item ${active === l.href ? "active" : ""}`}>
              <a className={`nav-link ${active === l.href ? "fw-bold text-primary" : "text-dark"}`} href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
