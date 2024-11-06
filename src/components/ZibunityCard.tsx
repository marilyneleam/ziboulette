"use client";

import React from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import type { Card } from "@/types/card";
import { Close, Favorite, Replay } from "@mui/icons-material";

interface ZibunityCardProps {
  card: Card;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  isLast: boolean;
}

export default function ZibunityCard({
  card,
  onSwipeLeft,
  onSwipeRight,
  isLast,
}: ZibunityCardProps) {
  // const [swipeDirection, setSwipeDirection] = React.useState<
  //   "left" | "right" | null
  // >(null);
  // const [startX, setStartX] = React.useState(0);
  const [offsetX, setOffsetX] = React.useState(0);

  const handlers = useSwipeable({
    // onSwipeStart: (event) => {
    //   setStartX(event.initial[0]);
    // },
    onSwiping: (event) => {
      setOffsetX(event.deltaX);
    },
    onSwipedLeft: () => {
      // setSwipeDirection("left");
      setOffsetX(-1000);
      setTimeout(() => {
        onSwipeLeft();
        // setSwipeDirection(null);
        setOffsetX(0);
      }, 200);
    },
    onSwipedRight: () => {
      // setSwipeDirection("right");
      setOffsetX(1000);
      setTimeout(() => {
        onSwipeRight();
        // setSwipeDirection(null);
        setOffsetX(0);
      }, 200);
    },
    trackMouse: true,
  });

  const rotation = (offsetX / 100) * 10;
  const opacity = Math.max(0, 1 - Math.abs(offsetX) / 500);

  return (
    <div
      {...handlers}
      className="absolute inset-0 transition-transform duration-200 ease-out h-[calc(100vh-144px)] md:h-[600px]"
      style={{
        transform: `translateX(${offsetX}px) rotate(${rotation}deg)`,
        opacity: opacity,
        zIndex: isLast ? 10 : 0,
      }}
    >
      <div className="relative w-full h-full bg-white flex flex-col md:rounded-xl md:shadow-lg">
        {/* Image Container */}
        <div className="relative w-full h-2/5 flex-shrink-0">
          <Image
            src={card.imageUrl}
            alt={card.title}
            fill
            style={{ objectFit: "cover" }}
            className="md:rounded-t-xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
        </div>

        {/* Contenu */}
        <div className="flex flex-col flex-grow px-4 pt-4 pb-2 md:px-6 md:pt-6 md:pb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 line-clamp-2 h-[3rem] md:h-[3.5rem]">
            {card.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-2 line-clamp-5 h-[7.5rem] md:h-[8.5rem]">
            {card.description.length > 300
              ? `${card.description.slice(0, 297)}...`
              : card.description}
          </p>
          <div className="flex items-center h-8 md:h-10 overflow-hidden">
            <span className="inline-block text-xs sm:text-sm md:text-base text-blue-600 bg-blue-50 px-2 py-1 rounded-full truncate">
              {card.tag}
            </span>
          </div>
        </div>

        {/* Boutons de contrôle */}
        <div className="w-full py-3 md:py-4 flex items-center justify-evenly sm:justify-center sm:gap-4 md:gap-6 bg-white md:rounded-b-xl">
          <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-50 transition-colors">
            <Replay className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
          <button
            onClick={onSwipeLeft}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-red-500 text-red-500 hover:bg-red-50 transition-colors"
          >
            <Close className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
          <button
            onClick={onSwipeRight}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 hover:bg-green-50 transition-colors"
          >
            <Favorite className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
        </div>

        {/* Indicateurs de swipe */}
        <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 flex items-center justify-between pointer-events-none">
          {offsetX < -50 && (
            <div className="bg-red-500 p-2 sm:p-3 md:p-4 rounded-full">
              <Close className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </div>
          )}
          {offsetX > 50 && (
            <div className="bg-green-500 p-2 sm:p-3 md:p-4 rounded-full ml-auto">
              <Favorite className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
