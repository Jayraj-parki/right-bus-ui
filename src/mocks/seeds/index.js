/* eslint-env node */
/* Generate simple mock JSON for cities and destinations. Run: node src/mocks/seeds/index.js */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outDir = path.join(root, "src", "mocks", "data");

const cities = [
  "Chisinau", "Berlin", "Luxembourg", "Dusseldorf", "Amsterdam", "Rotterdam",
  "Prague", "Vienna", "Brussels", "Bratislava", "London", "Paris", "Bucharest"
];

function price(min = 25, max = 65) {
  return Math.round((min + Math.random() * (max - min)) * 100) / 100;
}

const imageFor = (name) => {
  const map = {
    berlin: "/images/destinations/berlin.jpg",
    luxembourg: "/images/destinations/luxembourg.jpg",
    dusseldorf: "/images/destinations/dusseldorf.jpg",
    amsterdam: "/images/destinations/amsterdam.jpg",
    rotterdam: "/images/destinations/rotterdam.jpg"
  };
  const key = String(name || "").toLowerCase();
  return map[key] || "/images/destinations/generic.jpg";
};

const destinations = cities
  .filter((c) => c !== "Chisinau")
  .slice(0, 12)
  .map((to, i) => ({
    id: i + 1,
    from: "Chisinau",
    to,
    price: price(),
    img: imageFor(to)
  }));

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "cities.json"), JSON.stringify(cities, null, 2));
fs.writeFileSync(path.join(outDir, "destinations.json"), JSON.stringify(destinations, null, 2));

const testimonials = [
  { id: 1, name: "Ludmila Damaschin", rating: 5, text: "Quality services, well done." },
  { id: 2, name: "Vit Razgulin", rating: 5, text: "Went to Germany, very happy." },
  { id: 3, name: "Andy Railean", rating: 5, text: "Helpful staff and comfy buses." }
];
fs.writeFileSync(path.join(outDir, "testimonials.json"), JSON.stringify(testimonials, null, 2));

const faq = [
  { q: "What is included in the ticket price?", a: "Seat, hand luggage and 20kg baggage; water included on select routes." },
  { q: "How many stopovers are expected for a trip?", a: "Usually 2–4 depending on the route and distance." },
  { q: "How's the trip going?", a: "Modern AC coaches with Wi‑Fi, charger points and scheduled rest stops." }
];
fs.writeFileSync(path.join(outDir, "faq.json"), JSON.stringify(faq, null, 2));

const stats = { passengers: 10000, kilometers: 100000, parcels: 10000 };
fs.writeFileSync(path.join(outDir, "stats.json"), JSON.stringify(stats, null, 2));

console.log("✓ Seeded mocks into", outDir);
