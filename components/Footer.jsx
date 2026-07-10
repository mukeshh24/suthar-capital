"use client";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
      });

      tl.fromTo(
        footerRef.current,
        {
          scale: 0.95,
        },
        {
          scale: 1,
          ease: "power4.out",
          transformOrigin: "center center",
        },
      ).from(".footer-card", {
        y: 100,
        opacity: 0,
        stagger: 0.25,
        ease: "power3.out",
      });
    },
    { scope: footerRef },
  );

  return (
    <footer ref={footerRef} className="w-full">
      <div className="relative w-full h-[70vh] lg:h-[65vh] xl:h-[60vh]">
        <Image
          src={"/images/bg-img.jpg"}
          width={700}
          height={600}
          alt="footer bg img"
          className="footer-bg-img w-full h-full bg-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 lg:px-6">
          <div className="footer-card backdrop-blur-[50px] border bottom-0.5 border-white/30 p-6 xl:pb-15 h-90 xl:h-110 flex flex-col items-start justify-between rounded-sm">
            <h3 className="text-3xl md:text-5xl xl:text-7xl text-white capitalize">
              Partner with us
            </h3>
            <div className="flex items-end justify-end w-full">
              <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col gap-5">
                <p className="text-base lg:text-lg font-light text-white">
                  Whether you're raising capital, expanding your business, or
                  seeking strategic financial guidance, Suthar Capital is ready
                  to help you build the future with confidence.
                </p>
                <Link
                  href={"/"}
                  className="p-3 flex items-center justify-between w-full pt-20 rounded-sm capitalize bg-white hover:bg-[#114167] hover:text-white transition-all duration-300"
                >
                  <span className="font-light text-base">
                    Explore Our Solutions
                  </span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-4 lg:px-6 flex items-center justify-center bg-[#181818] text-[#F3F3F3]">
        <p className="font-light text-base">
          Made with ❤️ by{" "}
          <Link
            href={"https://mukeshsuthar.vercel.app"}
            target="_blank"
            className="font-medium cursor-pointer hover:underline transition-all duration-300 underline-offset-2"
          >
            Mukesh Suthar
          </Link>{" "}
          | © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
