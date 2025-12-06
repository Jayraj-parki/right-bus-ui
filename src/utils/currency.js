export const formatEUR = (n) =>
  new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(n);
