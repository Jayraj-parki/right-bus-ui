"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import { STATIC_TEXT } from "@/constants/static_text";
import { ArrowForward } from "@mui/icons-material";

export default function Hero() {
  return (
    <section className="heroSection position-relative">
      <div className="heroImgWrapper">
        <Image
          src="/images/hero/banner.png"
          alt="Right Bus Hero Banner"
          fill
          className="heroImg"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="heroOverlay" />
      </div>
      <div className="heroContent heroContentLeft">
        <h1 className="title">{STATIC_TEXT.HERO_TITLE}</h1>
        <p className="subtitle">{STATIC_TEXT.HERO_SUBTITLE}</p>
        <Button className="btn-light" onClick={() => window.location.assign("#search")}>
          Book now <ArrowForward fontSize="small"/>
        </Button>
      </div>
    </section>
  );
}
