"use client";

import React, { useState, useCallback } from "react";
import ZibunityCard from "@/components/ZibunityCard";
import { useRouter } from "next/navigation";
import type { Card } from "../../types/card";

interface ZibunityClientProps {
  initialCards: Card[];
}

export default function ZibunityClient({ initialCards }: ZibunityClientProps) {
  // const [cards, setCards] = useState<Card[]>(initialCards);
  const cards: Card[] = initialCards;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<Card[]>([]);
  const router = useRouter();

  const handleSwipeLeft = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handleSwipeRight = useCallback(() => {
    const currentCard = cards[currentIndex];
    setFavorites((prev) => [...prev, currentCard]);

    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );
    localStorage.setItem(
      "favorites",
      JSON.stringify([...storedFavorites, currentCard]),
    );

    setCurrentIndex((prev) => prev + 1);
  }, [cards, currentIndex]);

  if (currentIndex >= cards.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen pt-16 pb-16 p-4">
        <h2 className="text-2xl font-bold mb-4">
          Plus de profils disponibles !
        </h2>
        <button
          onClick={() => router.push("/favoris")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voir mes favoris ({favorites.length})
        </button>
        <button
          onClick={() => setCurrentIndex(0)}
          className="mt-4 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Recommencer
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-x-0 top-[64px] bottom-16 md:static bg-gray-100 flex items-center justify-center">
      <div className="relative w-full h-full md:h-auto md:w-[400px] md:aspect-[3/4] bg-white">
        {cards.map((card, index) => {
          if (index < currentIndex) return null;
          const isLast = index === currentIndex;

          return (
            <ZibunityCard
              key={card.id}
              card={card}
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
              isLast={isLast}
            />
          );
        })}
      </div>
    </div>
  );
}
