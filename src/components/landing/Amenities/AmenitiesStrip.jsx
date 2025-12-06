import WifiIcon from "@mui/icons-material/Wifi";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import PowerIcon from "@mui/icons-material/Power";
import ArticleIcon from "@mui/icons-material/Article";
import LuggageIcon from "@mui/icons-material/Luggage";

const amenities = [
  { icon: <WifiIcon />, label: "Wi‑Fi" },
  { icon: <LocalDrinkIcon />, label: "Water Bottle" },
  { icon: <AirlineSeatLegroomExtraIcon />, label: "Pillows" },
  { icon: <PowerIcon />, label: "Charger Point" },
  { icon: <ArticleIcon />, label: "News Paper" },
  { icon: <LuggageIcon />, label: "Travel Baggage" }
];

export default function AmenitiesStrip() {
  return (
    <section className="amenities py-5">
      <div className="container container-narrow">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-4">
            <h3 className="mb-2">Amenities</h3>
            <p className="text-muted mb-0">
              Modern AC coaches with comfortable seats and essential facilities for a great road trip.
            </p>
          </div>
          <div className="col-12 col-md-8">
            <div className="row text-center g-3">
              {amenities.map((a) => (
                <div key={a.label} className="col-6 col-md-4 col-lg-2">
                  <div className="icon-wrap mb-2 fs-3 text-primary">{a.icon}</div>
                  <div className="small">{a.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
