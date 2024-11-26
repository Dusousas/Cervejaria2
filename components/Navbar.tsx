import { useState, useEffect } from "react";
import Menu from "./subcomponents/Menu";
import SocialMedia from "./subcomponents/SocialMedia";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={` px-[2%] fixed w-full z-20 transition-colors duration-300 ${
                isScrolled ? "bg-white" : "bg-white/50"
            }`}
        >
            <div className="flex items-center justify-between lg:justify-start">
                {/* LOGOTIPO */}
                <article className="flex-1 lg:flex-none flex justify-center lg:justify-start lg:w-[20%]">
                    <img src="logo.webp" alt="Logotipo Cervejaria 2" className="h-[100px] w-auto" />
                </article>

                {/* NAVBAR */}
                <article className="lg:ml-8 lg:w-[60%]">
                    <Menu />
                </article>

                {/* SOCIAL MEDIA (oculta em telas pequenas) */}
                <article className="hidden lg:block lg:ml-auto mt-1 lg:w-[20%] text-end">
                    <SocialMedia />
                </article>
            </div>
        </header>
    );
}
