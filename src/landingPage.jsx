import React from "react";
import Navbar from "./components/navbar";
import LandingSection from "./components/LandingSection/landingSection";
import AboutSection from "./components/AboutSection/aboutSection";
import DivisionSection from "./components/DivisionSection/division";
import Team from "./components/TeamSection/team";
import AchievmentsSection from "./components/AchiementsSection/achievments";
import Question from "./components/FAQSection/question";
import ContactSection from "./components/ContactSection/contact";
import SponsorsSection from "./components/sponsorSection/sponsors";
// import Footer from "./components/footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <LandingSection />
      <AboutSection />
      <DivisionSection />
      <Team />
      <AchievmentsSection />
      <Question />
      <ContactSection />
      <SponsorsSection />
      {/* <Footer /> */}
    </>
  );
}
