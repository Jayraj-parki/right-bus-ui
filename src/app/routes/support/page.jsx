"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SupportChat from "@/components/features/SupportChat";

export default function SupportPage() {
  return (
    <>
      <div className="container py-4">
        <SupportChat />
      </div>
    </>
  );
}
