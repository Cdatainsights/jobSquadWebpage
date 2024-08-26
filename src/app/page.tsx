"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Home/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import Testimonials from "@/components/Home/Testimonials";
import { Middlesection } from "@/components/Home/Middlesection";
import { Cta } from "@/components/Home/Cta";
import { Demo } from "@/components/Home/Demo";
import PriceTable from "@/components/Home/PricingTable";
import { DiscountPopup } from "@/components/Home/DiscountPopup";
import Confetti from "react-confetti";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Show the popup after 1.5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update window size on mount and on resize
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateWindowSize(); // Initial size
    window.addEventListener("resize", updateWindowSize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return (
    <Container>
      {showPopup && (
        <>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={true}
          />
          <DiscountPopup onClose={() => setShowPopup(false)} />
        </>
      )}
      <Hero />
      <div className="border border-gray-300 border-opacity-50 w-4/5 mx-auto"></div>
      <SectionTitle title="Automate your job application process">
        <div className="pt-2 text-black">
          Focus on what matters most – your skills and experience. Let Job Squad
          handle the repetitive task of filling out application forms, so you
          can concentrate on advancing your career.
        </div>
      </SectionTitle>
      <Demo />
      <Middlesection />
      <PriceTable />
      <SectionTitle title="Don’t just take our word for it!" />
      <Testimonials />
      <Cta />
    </Container>
  );
}
