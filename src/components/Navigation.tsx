"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Newspaper, Users, Info, Heart } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavigationItem {
    name: string;
    icon: React.FC<{ className?: string }>;
    href: string;
}

export default function Navigation() {
    const navigationItems: NavigationItem[] = [
        { name: "Accueil", icon: Home, href: "/" },
        { name: "Zibnews", icon: Newspaper, href: "/zibnews" },
        { name: "Zibunity", icon: Users, href: "/zibunity" },
        { name: "Favoris", icon: Heart, href: "/favoris" },
        { name: "Qui sommes-nous", icon: Info, href: "/qui-sommes-nous" },
    ];

    const mobileNavItems = navigationItems.filter(
        (item) => item.name !== "Favoris",
    );

    const pathname = usePathname();

	const isFavActive = pathname === "/favoris";
	const isAddZibActive = pathname === "/ajouter-ziboulette";

    return (
        <>
            {/* Header Mobile */}
            <div className="flex-grow md:hidden">
                <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
                    <div className="flex items-center justify-between px-4 h-16">
                        <div className="flex-grow">
                            <Image
                                src="/logoL.webp"
                                alt="Logo"
                                width={150}
                                height={50}
                                className="mr-2.5"
                                priority
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <Link
                                key="ajouter-ziboulette"
                                href="/ajouter-ziboulette"
                                className={`p-2 rounded-fulltransition-colors ${isAddZibActive ? "text-primary" : "text-gray-800"}`}
                                aria-label="Ajouter une zibooulette"
                            >
                                <PlusSquare className="w-6 h-6" />
                            </Link> */}

                            <Link
                                key="Favoris"
                                href="/favoris"
                                className={`p-2 rounded-full transition-colors ${isFavActive ? "text-primary" : "text-gray-800"}`}
                                aria-label="Voir mes favoris"
                            >
                                <Heart className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </header>
                <div className="h-16" />
            </div>

            {/* Navigation mobile (bottom bar) */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                <div className="flex justify-around items-center h-16">
                    {mobileNavItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex flex-col items-center justify-center w-full h-full ${isActive ? "text-primary" : "text-gray-800"}`}
                            >
                                <Icon className={`w-6 h-6`} />
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Navigation tablette */}
            <nav className="hidden md:flex lg:hidden fixed left-0 top-0 bottom-0 w-16 bg-white border-r border-gray-200 flex-col">
                {/* Logo section */}
                <div className="py-4 px-2 flex justify-center">
                    <Image
                        src="/logoL.webp"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Navigation items */}
                <div className="flex-1 flex flex-col items-center pt-8 space-y-6">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  relative group flex items-center justify-center 
                  w-12 h-12 rounded-xl transition-all duration-200
                `}
                            >
                                <Icon
                                    className={`w-6 h-6 transition-colors duration-200`}
                                />
                                {/* Tooltip */}
                                <span
                                    className="
                    absolute left-full ml-2 px-2 py-1 
                    bg-gray-800 text-white text-sm rounded 
                    opacity-0 group-hover:opacity-100 
                    pointer-events-none transition-opacity
                    whitespace-nowrap
                  "
                                >
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Navigation desktop (sidebar) */}
            <nav className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 flex-col">
                <div className="mb-8 px-4">
                    <Image
                        src="/logoL.webp"
                        alt="Logo"
                        width={300}
                        height={100}
                        className="mr-2.5"
                        priority
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-zib-light-gray transition-colors duration-200 ${
                                    isActive ? "text-primary" : "text-gray-800"
                                }`}
                            >
                                <Icon className={`w-6 h-6`} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
