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
    <div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
      <div
        className="relative flex flex-col h-[300px] w-[700px] py-12 px-10 md:px-12
				rotate-0 md:h-[400px] md:w-[600px] items-center justify-center mx-auto 
				shadow-2xl rounded-3xl overflow-hidden pr-3 pl-3 pt-3 pb-4"
        style={{ backgroundColor: color }}
      >
        {/* Dark Overlay for readability since we place text over image */}
        <div className="absolute inset-0 z-10 bg-black/40" />

        <span className="relative z-20 font-bold text-5xl md:text-6xl mt-5 text-center">
          <span
            className="font-black tracking-tight"
            style={{ color: textColor }}
          >
            {title}
          </span>
        </span>
        <div
          className="relative z-20 text-lg md:text-xl font-medium text-center mb-0 mt-4 lowercase tracking-wide"
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
