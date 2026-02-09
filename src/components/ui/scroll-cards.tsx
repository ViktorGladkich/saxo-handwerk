"use client";
import { FC } from "react";

import Image from "next/image";

// Types
interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
  i: number;
  src: string;
}

// Components
const Card: FC<iCardProps> = ({
  title,
  description,
  color,
  textColor,
  src,
}) => {
  // Added top-24 to offset fixed header if any, generally centers the card sticky in viewport
  return (
    <div className="h-screen w-full flex items-center justify-center sticky top-0 px-4">
      <div
        className="relative flex flex-col w-full max-w-[1100px] h-[60vh] md:h-[650px] items-center justify-center mx-auto overflow-hidden rounded-[32px]"
        style={{ backgroundColor: color }}
      >
        {/* Dark Overlay for readability since we place text over image */}
        <div className="absolute inset-0 z-10 bg-black/40" />

        <span className="relative z-20 font-bold text-3xl md:text-6xl mt-5 text-center px-4">
          <span
            className="font-black font-sans tracking-tight"
            style={{ color: textColor }}
          >
            {title}
          </span>
        </span>
        <div
          className="relative z-20 text-base md:text-xl font-medium font-sans text-center mb-0 mt-4 lowercase tracking-wide px-6 md:px-0 max-w-2xl"
          style={{ lineHeight: 1.4, color: textColor }}
        >
          {description}
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover"
            src={src}
            alt={title}
            fill
          />
        </div>
      </div>
    </div>
  );
};

/**
 * CardSlide component displays a series of cards in a vertical scroll layout
 * Each card contains a title, description, and decorative elements
 */
interface iCardSlideProps {
  items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((project, i) => {
        return <Card key={`p_${i}`} {...project} i={i} />;
      })}
    </div>
  );
};

export { CardsParallax, type iCardItem };
