export const todayISO = () => new Date().toISOString().slice(0, 10);
export const addDaysISO = (iso, days) => {
  const d = new Date(iso);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};
