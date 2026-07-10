import CoreStats from "@/components/CoreStats";
import Hero from "@/components/Hero";
import NewsAndInsights from "@/components/NewsAndInsights";
import OurPeople from "@/components/OurPeople";
import OurSolution from "@/components/OurSolution";
import WhoWeAre from "@/components/WhoWeAre";
import React from "react";

const Landing = () => {
  return (
    <main className="w-full h-full bg-[#F3F3F3] text-[#181818]">
      <Hero />
      <WhoWeAre />
      <CoreStats />
      <OurPeople />
      <OurSolution />
      <NewsAndInsights />
    </main>
  );
};

export default Landing;
