"use client";
import { coreStats } from "@/json";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";

const CoreStats = () => {
  const coreStateRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1440px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: coreStateRef.current,
            start: "top 80%",
            end: "bottom 80%",
            scrub: true,
          },
        });

        tl.from(".coreState-heading", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
          .to(".coreState-bg-img", {
            width: "100%",
            duration: 0.6,
            ease: "power4.inOut",
          })
          .from(".coreState-card", {
            y: 100,
            opacity: 0,
            stagger: 0.25,
            ease: "power3.out",
          });
      });

      mm.add("(max-width: 1439px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: coreStateRef.current,
            start: "top 85%",
            end: "top 20%",
            scrub: true,
          },
        });

        tl.from(".coreState-heading", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
          .to(".coreState-bg-img", {
            width: "100%",
            duration: 0.6,
            ease: "power4.inOut",
          })
          .from(".coreState-card", {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
          });
      });

      return () => mm.revert();
    },
    { scope: coreStateRef },
  );

  return (
    <section
      ref={coreStateRef}
      id="core-stats"
      className="bg-white w-full min-h-screen overflow-hidden"
    >
      <div className="flex flex-col gap-10">
        <div className="coreState-heading flex items-center gap-5 px-4 lg:px-6">
          <span className="h-2 w-2 bg-[#181818] rounded-full"></span>
          <h4 className="text-[15px] capitalize">Core Stats</h4>
        </div>
        <div className="h-250 sm:h-screen w-full relative">
          <Image
            src={"/images/bg-img.jpg"}
            width={700}
            height={600}
            alt="core stats bg img"
            className="coreState-bg-img w-[80%] lg:w-[90%] mx-auto h-full bg-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-10 w-full">
              {coreStats.map((item) => (
                <div
                  key={item.id}
                  className="coreState-card backdrop-blur-[50px] border bottom-0.5 border-white/30 p-6 md:pb-15 h-50 md:h-60 lg:h-65 xl:h-110 flex flex-col items-start justify-between rounded-sm"
                >
                  <h3 className="text-5xl md:text-7xl text-white">
                    {item.value}
                  </h3>
                  <div className="flex flex-col items-start gap-5 w-full">
                    <div className="border-b border-white/60 w-full" />
                    <p className="text-base md:text-lg font-light text-white">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStats;
