import Image from "next/image";
import Button from "@/components/common/Button";

export default function AboutTeaser() {
  return (
    <section className="about-band my-2">
      <div className="container container-narrow">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <h3 className="mb-3">About us</h3>
            <p className="mb-4 p">
              International transport of people is the main activity of our company.
              We are constantly working to improve our services.
            </p>
            <Button>Read more →</Button>
          </div>
          <div className="col-md-6 text-center py-3">
            <Image
              src="/images/illustrations/about-bridge.svg"
              width={520} height={260} alt="About"
              className="img-fluid rounded-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
