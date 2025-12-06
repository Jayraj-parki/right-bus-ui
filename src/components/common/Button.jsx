export default function Button({ variant = "btn-cta", className = "", ...props }) {
  return <button className={`btn ${variant} ${className}`} {...props} />;
}
 