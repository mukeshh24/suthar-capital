"use client";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "top 20%",
        },
      });

      tl.from(".hero-overlay", {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      })
        .from(".hero-heading", {
          y: 100,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        })
        .from(
          ".hero-title",
          {
            y: 60,
            opacity: 0,
            duration: 0.6,
            delay: 0.3,
            ease: "power3.out",
          },
          "-=0.2",
        );
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="w-full h-screen md:h-[150vh] relative"
    >
      <div className="w-full h-screen sticky top-0">
        <video
          src="/videos/suthar-capital-intro-video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
        <div className="hero-overlay absolute inset-0 bg-[#181818]/60"></div>
      </div>
      <div className="absolute inset-0">
        <div className="h-[70vh] md:h-screen w-full flex items-end justify-start px-4 lg:px-6">
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-7xl font-regular text-white pb-5">
            Building Smarter Capital for <br />
            <span className="text-xl md:text-3xl lg:text-5xl">
              Tomorrow's Growth
            </span>
          </h1>
        </div>
        <div className="h-[30vh] md:h-[50vh] py-3 md:py-30 w-full flex items-center justify-end px-4 lg:px-30">
          <p className="hero-title text-base md:text-lg font-regular text-white max-w-140">
            We provide strategic investment, business financing, and capital
            advisory solutions for growing businesses, private investors, and
            institutional partners across global markets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
