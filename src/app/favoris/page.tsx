"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Card } from "@/types/card";

export default function FavorisPage() {
  const [favorites, setFavorites] = useState<Card[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Mes Favoris</h1>

      {favorites.length === 0 ? (
        <div className="text-center p-8">
          <p className="text-gray-600 mb-4">
            Vous n&apos;avez pas encore de favoris
          </p>
          <Link
            href="/zibunity"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Découvrir des ZIB
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((favorite) => (
            <div
              key={favorite.id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={favorite.imageUrl}
                  alt={favorite.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 h-[3rem] md:h-[3.5rem]">
                  {favorite.title}
                </h2>
                <p className="text-gray-600 line-clamp-5 h-[7.5rem] md:h-[8.5rem] lg:h-[16rem]">
                  {favorite.description}
                </p>
                <span>{favorite.tag}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
