export default function Container({ children, className = "" }) {
  return <div className={`container container-narrow ${className}`}>{children}</div>;
}
