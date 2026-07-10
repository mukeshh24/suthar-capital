"use client";
import { ourPeoples } from "@/json";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef, useState } from "react";

const OurPeople = () => {
  const [activePerson, setActivePerson] = useState(null);

  const ourPeopleRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ourPeopleRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        });

        tl.from(".ourPeople-heading", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
          .from(
            ".ourPeople-title",
            {
              y: 60,
              opacity: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.2",
          )
          .from(
            ".ourPeople-description",
            {
              y: 40,
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.3",
          );
      });

      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ourPeopleRef.current,
            start: "top 85%",
            end: "top 20%",
            scrub: true,
          },
        });

        tl.from(".ourPeople-heading", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
          .from(
            ".ourPeople-title",
            {
              y: 60,
              opacity: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.2",
          )
          .from(
            ".ourPeople-description",
            {
              y: 40,
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.3",
          );

        gsap.utils.toArray(".ourPeople-image").forEach((card) => {
          gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 0.4,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 30%",
              scrub: true,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: ourPeopleRef },
  );

  return (
    <section
      ref={ourPeopleRef}
      id="our-people"
      className="w-full min-h-screen px-4 lg:px-6 overflow-hidden"
    >
      <div className="w-full h-full py-15 pb-30 relative">
        <div className="flex flex-col gap-12">
          <div className="ourPeople-heading flex items-center gap-5">
            <span className="h-2 w-2 bg-[#181818] rounded-full"></span>
            <h4 className="text-[15px] capitalize">Our People</h4>
          </div>
          <div className="flex flex-col items-start gap-8">
            <p className="ourPeople-title text-3xl md:text-5xl font-light w-full md:w-180">
              Experienced investment professionals focused on long-term value
              creation.
            </p>
            <p className="ourPeople-description text-base font-light w-full md:w-145">
              The Suthar Capital team combines financial expertise, strategic
              thinking, and industry experience to help businesses secure the
              right capital and achieve sustainable growth.
            </p>
          </div>
        </div>
        <div className="w-full mt-10 lg:mt-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-0 w-full">
            {ourPeoples.map((item) => (
              <div
                key={item.id}
                className="ourPeople-image border-b border-gray-200 py-5 flex flex-col lg:flex-row items-start lg:items-center justify-between capitalize text-[#181818] lg:text-gray-300 hover:text-[#181818] transition-all duration-300 w-full"
                onMouseEnter={() => setActivePerson(item)}
                onMouseLeave={() => setActivePerson(null)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={600}
                  className="object-cover pointer-events-none rounded-sm mb-3 lg:mb-0 block lg:hidden"
                />
                <h3 className="text-2xl lg:text-5xl">{item.name}</h3>
                <p className="text-base font-light">{item.designation}</p>
              </div>
            ))}
          </div>
        </div>
        {activePerson && (
          <div className="w-100 h-130 hidden lg:block lg:fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-20 pointer-events-none">
            <Image
              src={activePerson.image}
              alt={activePerson.name}
              fill
              className="object-cover pointer-events-none rounded-sm"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default OurPeople;
