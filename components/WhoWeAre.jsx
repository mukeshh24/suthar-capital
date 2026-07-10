"use client";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

const WhoWeAre = () => {
  const whoWeAreRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: whoWeAreRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });

      tl.from(".whoWeAre-heading", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      }).from(
        ".whoWeAre-title",
        {
          y: 60,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.2",
      );
    },
    { scope: whoWeAreRef },
  );

  return (
    <section
      ref={whoWeAreRef}
      id="who-we-are"
      className="bg-white w-full min-h-screen px-4 lg:px-6"
    >
      <div className="w-full h-full py-15">
        <div className="flex flex-col gap-12">
          <div className="whoWeAre-heading flex items-center gap-5">
            <span className="h-2 w-2 bg-[#181818] rounded-full"></span>
            <h4 className="text-[15px] capitalize">Who We Are</h4>
          </div>
          <p className="whoWeAre-title text-3xl md:text-5xl font-light">
            Since 2018, Suthar Capital has been helping businesses access
            flexible capital and strategic financial solutions tailored to
            long-term growth, innovation, and sustainable success.
          </p>
        </div>
        <div className="w-full mt-10 md:mt-15 xl:mt-60 flex">
          <div className="xl:flex-1"></div>
          <div className="w-full xl:w-2/5 flex flex-col gap-10">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 order-2 md:order-1">
              <Link
                href={"/"}
                className="p-3 flex items-center justify-between w-full lg:w-1/2 pt-20 rounded-sm capitalize bg-[#F3F3F3] hover:bg-[#235E80] hover:text-white transition-all duration-300"
              >
                <span className="font-light text-base">Our Story</span>
                <ArrowRight />
              </Link>
              <Link
                href={"/"}
                className="p-3 flex items-center justify-between w-full lg:w-1/2 pt-20 rounded-sm capitalize bg-[#F3F3F3] hover:bg-[#181818] hover:text-white transition-all duration-300"
              >
                <span className="font-light text-base">Our Story</span>
                <ArrowRight />
              </Link>
            </div>
            <p className="text-base font-light w-full md:w-[85%] order-1 md:order-2">
              We combine financial expertise, disciplined execution, and
              long-term partnerships to deliver capital solutions that help
              businesses grow with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
