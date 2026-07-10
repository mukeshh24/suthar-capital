"use client";
import { navLinks } from "@/json";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("who-we-are");
  const [isMobile, setIsMobile] = useState(false);

  const navRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.set(navRef.current, {
        display: "block",
      });

      const tl = gsap.timeline();

      tl.fromTo(
        navRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: -20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        },
      )
        .from(
          ".menu-item",
          {
            x: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.35,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .to(
          ".menu-icon",
          {
            rotate: 45,
            duration: 0.25,
          },
          0,
        );
    } else {
      gsap.to(".menu-icon", {
        rotate: 0,
        duration: 0.25,
      });

      gsap.to(navRef.current, {
        opacity: 0,
        scale: 0.9,
        y: -20,
        duration: 0.25,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(navRef.current, {
            display: "none",
          });
        },
      });
    }
  }, [isOpen]);

  const handleClick = (href) => {
    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-5 px-4 lg:px-6">
      <div className="relative">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.lenis?.scrollTo("#hero");
            }}
            className="text-white text-3xl cursor-pointer"
          >
            <p className="bg-[#181818] px-2 py-1 leading-5 flex items-center justify-center">
              {isMobile ? "SC" : "Suthar Capital"}
            </p>
          </a>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer flex items-center justify-between w-40 sm:w-55 mdw-60 py-3 px-5 rounded-sm bg-[#181818]/95 text-white"
          >
            <Plus className="menu-icon w-5 h-5" />
            <span>Menu</span>
          </button>
        </div>
        <nav
          ref={navRef}
          className="hidden absolute right-0 top-14 w-55 md:w-60 rounded-sm bg-[#181818]"
        >
          <ul className="p-3 flex flex-col gap-1">
            {navLinks.map((item) => (
              <li key={item.id} className="menu-item">
                <button
                  onClick={() => handleClick(item.href)}
                  className={`cursor-pointer w-full rounded-sm px-4 py-3 flex items-center gap-4 transition-all duration-300
          ${
            activeSection === item.href.replace("#", "")
              ? "bg-[#00F2E5] text-[#181818]"
              : "text-white hover:bg-white/10"
          }`}
                >
                  <span className="tabular-nums">{item.number}</span>
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
