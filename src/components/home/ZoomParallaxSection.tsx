"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const ZoomParallaxSection = () => {
  // We use a container that is tall (300vh) to allow for scrolling "time"
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    // Center (The Main Focus - Renovation)
    {
      src: "/images/services_complete_renovation.png",
      scale: scale4,
      width: "25vw",
      height: "25vh",
      className: "z-10", // Highest Z
    },
    // Top Left (Bathroom)
    {
      src: "/images/services_bathroom_sanitary.png",
      scale: scale5,
      width: "35vw",
      height: "30vh",
      className: "top-[-30vh] left-[-35vw] z-0",
    },
    // Bottom Left (Flooring)
    {
      src: "/images/services_flooring_tiling.png",
      scale: scale6,
      width: "20vw",
      height: "45vh",
      className: "top-[20vh] left-[-25vw] z-0",
    },
    // Bottom Center (Plaster)
    {
      src: "/images/services_facades_plaster_v2.png",
      scale: scale5,
      width: "25vw",
      height: "25vh",
      className: "top-[27vh] left-[0vw] z-0",
    },
    // Top Right (Windows)
    {
      src: "/images/services_windows_doors.png",
      scale: scale6,
      width: "20vw",
      height: "25vh",
      className: "top-[-25vh] left-[25vw] z-0",
    },
    // Right Center (Interior)
    {
      src: "/images/services_interior_fitting_v2.png",
      scale: scale8,
      width: "30vw",
      height: "40vh",
      className: "top-[5vh] left-[30vw] z-0",
    },
    // Bottom Right (Hands/About)
    {
      src: "/images/about_hands_4k.png",
      scale: scale9,
      width: "15vw",
      height: "15vh",
      className: "top-[35vh] left-[25vw] z-0",
    },
  ];

  return (
    <div ref={containerRef} className="h-[300vh] relative bg-[#111111]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Overlay Text that zooms out/fades */}
        {/* We fade it out quickly [0, 0.2] so the images become the focus */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none"
        >
          <h2 className="text-white text-4xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter text-center leading-[0.9]">
            Wir erschaffen
            <br />
            <span className="text-[#f55733]">Räume</span>
          </h2>
        </motion.div>

        {pictures.map(({ src, scale, width, height, className }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute w-full h-full top-0 flex items-center justify-center"
            >
              {/* Image Wrapper placed relatively by transform/margin or class */}
              <div
                style={{
                  width: width,
                  height: height,
                  position: "relative", // needed for Next Image fill
                }}
                className={`relative bg-neutral-900 ${className}`}
              >
                <Image src={src} fill alt="image" className="object-cover" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
