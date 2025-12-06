import Link from "next/link";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        {items.map((it, i) => (
          <li
            key={i}
            className={`breadcrumb-item ${i === items.length - 1 ? "active" : ""}`}
            aria-current={i === items.length - 1 ? "page" : undefined}
          >
            {it.href && i !== items.length - 1 ? <Link href={it.href}>{it.label}</Link> : it.label}
          </li>
        ))}
      </ol>
    </nav>
  );
}
