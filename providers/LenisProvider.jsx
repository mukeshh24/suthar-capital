"use client";
import { ScrollTrigger } from "@/lib/gsap";
import Lenis from "lenis";
import React, { useEffect } from "react";

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
};

export default LenisProvider;
