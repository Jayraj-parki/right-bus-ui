import { useEffect, useState } from "react";
// Simulated polling GPS mock data
export default function useLiveTracking(tripId) {
  const [location, setLocation] = useState("Boarding...");
  useEffect(() => {
    // Simulated GPS update every 5s
    if (!tripId) return;
    const stops = [
      "Delhi ISBT",
      "Yamuna Expressway",
      "Mathura Toll Plaza",
      "Agra Highway",
      "Agra Fort Stop"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLocation(stops[i % stops.length]);
      i++;
    }, 5000);
    return () => clearInterval(interval);
  }, [tripId]);
  return location;
}
