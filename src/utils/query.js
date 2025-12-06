export const toQuery = (obj = {}) =>
  Object.entries(obj)
    .filter(([_, v]) => v != null && v !== "")
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
