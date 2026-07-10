"use client";
import { ourSolutions } from "@/json";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

const OurSolution = () => {
  const ourSolutionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ourSolutionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });

      tl.fromTo(
        ourSolutionRef.current,
        {
          scale: 0.95,
        },
        {
          scale: 1,
          ease: "power4.out",
          transformOrigin: "center center",
        },
      )
        .from(".ourSolution-heading", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          ".ourSolution-title",
          {
            y: 60,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2",
        );
    },
    {
      scope: ourSolutionRef,
    },
  );

  return (
    <section
      ref={ourSolutionRef}
      id="our-solutions"
      className="our-solution bg-[#181818] text-[#CECECE] w-full min-h-screen px-4 lg:px-6"
    >
      <div className="w-full h-full py-15 relative">
        <div className="flex flex-col gap-12">
          <div className="ourSolution-heading flex items-center gap-5">
            <span className="h-2 w-2 bg-[#CECECE] rounded-full"></span>
            <h4 className="text-[15px] capitalize">Our Solutions</h4>
          </div>
          <div className="ourSolution-title flex flex-col items-start gap-8">
            <p className="text-3xl md:text-5xl font-light w-full md:w-140">
              Purpose-built financing for private markets
            </p>
          </div>
        </div>
        <div className="w-full mt-15 relative">
          <div className="flex flex-col items-start w-full mb-10">
            {ourSolutions.map((item, index) => (
              <div
                key={item.id}
                className="sticky bg-[#181818] w-full"
                style={{
                  top: `${120 + index * 20}px`,
                  zIndex: index + 1,
                }}
              >
                <div className="border-b border-[#2d2a2a] nth-[3]:border-0 py-5 flex flex-col xl:flex-row items-start justify-between capitalize w-full xl:h-60 gap-3 xl:gap-0">
                  <h3 className="text-3xl sm:text-4xl w-full md:w-100 order-2 xl:order-1">
                    {item.title}
                  </h3>
                  <div className="flex flex-col xl:gap-4 w-full xl:w-1/4 order-3 xl:order-2">
                    <p className="text-base font-light">
                      {item.shortDescription}
                    </p>
                    <p className="text-base font-light">{item.description}</p>
                  </div>
                  <p className="text-[14vw] font-light leading-[14vw] tabular-nums order-1 xl:order-3">
                    {item.number}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href={"/"}
            className="xl:sticky left-0 bottom-5 z-5 p-3 flex items-center justify-between w-full sm:w-2/4 xl:w-1/4 pt-20 rounded-sm capitalize border border-[#2d2a2a] bg-[#181818] hover:bg-[#00F2E5] hover:text-[#181818] transition-all duration-300"
          >
            <span className="font-light text-base">Explore Our Solutions</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
