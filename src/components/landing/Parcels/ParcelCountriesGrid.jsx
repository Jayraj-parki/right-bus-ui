import Image from "next/image";
import Button from "@/components/common/Button";

const countries = [
  { name: "Germany", img: "/images/destinations/berlin.jpg" },
  { name: "Czech", img: "/images/destinations/generic.jpg" },
  { name: "Netherlands", img: "/images/destinations/rotterdam.jpg" },
  { name: "Austria", img: "/images/destinations/generic.jpg" },
  { name: "Belgium", img: "/images/destinations/generic.jpg" },
  { name: "Slovakia", img: "/images/destinations/generic.jpg" },
  { name: "Luxembourg", img: "/images/destinations/luxembourg.jpg" },
  { name: "UK", img: "/images/destinations/generic.jpg" },
  { name: "France", img: "/images/destinations/generic.jpg" },
  { name: "Romania", img: "/images/destinations/generic.jpg" }
];

export default function ParcelCountriesGrid() {
  return (
    <section className="py-5">
      <div className="container container-narrow">
        <h3 className="mb-4">International transport of parcels</h3>
        <div className="parcel-grid row g-3">
          {countries.map((c) => (
            <div key={c.name} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="tile">
                <Image src={c.img} alt={c.name} width={600} height={360} />
                <div className="badge">{c.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Button>Send a parcel</Button>
        </div>
      </div>
    </section>
  );
}
