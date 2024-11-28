import { footerItems } from "@/types/IRoute";
import Link from "next/link";

const Footer = () => {
    const copyright = (
        <>
            © 2024 Ziboulette - Design et Developped with{" "}
            <span className="text-red-500">❤</span> by Antony & Marilyne
        </>
    );

    return (
        <footer className="bg-primary-200 text-gray-800">
            {/* Sections principales du footer */}
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {footerItems.map((col) => (
                        <div key={col.name}>
                            <h4 className="font-bold text-lg mb-4">
                                {col.name}
                            </h4>
                            <ul className="space-y-2">
                                {col.menu.map((item) => (
                                    <li key={item.text}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-gray-600 hover:text-blue-500 transition"
                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: item.text,
                                                }}
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-primary-400"></div>

            <div className="py-4 bg-primary-300">
                <p className="text-center text-sm">{copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
