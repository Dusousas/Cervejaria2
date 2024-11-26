import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; // Ícones de hambúrguer e X

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    const handleNavigation = (sectionId: string) => {
        if (router.pathname === "/") {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            router.push(`/#${sectionId}`);
        }
        closeMenu();
    };

    return (
        <>

            {/* Ícone de Hambúrguer no Mobile */}
            <div className="lg:hidden flex items-center mt-2">
                <button onClick={toggleMenu} className="text-3xl" aria-label="Toggle menu">
                    {isOpen ? <RiCloseLine /> : <RiMenuLine />}
                </button>
            </div>

            <nav className="flex left-0 w-full mt-1 cursor-pointer">
                {/* Menu Desktop */}
                <ul className="hidden lg:flex text-black gap-8 left-0 font-teko text-xl w-full justify-center uppercase">
                    <li
                        onClick={() => handleNavigation("home")}
                        className={`cursor-pointer ${activeSection === "home" ? "border-b-2 border-textGreen" : ""}`}
                    >
                        Home
                    </li>
                    <li
                        onClick={() => handleNavigation("about")}
                        className={`cursor-pointer ${activeSection === "about" ? "border-b-2 border-textGreen" : ""}`}
                    >
                        Cervejaria
                    </li>
                    <li
                        onClick={() => handleNavigation("beers")}
                        className={`cursor-pointer ${activeSection === "beers" ? "border-b-2 border-textGreen" : ""}`}
                    >
                        Beers
                    </li>
                    <li
                        onClick={() => handleNavigation("pub")}
                        className={`cursor-pointer ${activeSection === "pub" ? "border-b-2 border-textGreen" : ""}`}
                    >
                        Pub
                    </li>
                    
                    <li
                        onClick={() => handleNavigation("contact")}
                        className={`cursor-pointer ${activeSection === "contact" ? "border-b-2 border-textGreen" : ""}`}
                    >
                        Contato
                    </li>
                </ul>

                {/* Menu Mobile */}
                {isOpen && (
                    <ul className="lg:hidden flex flex-col text-center gap-4 absolute top-[65px] left-0 bg-white p-4 w-full text-black">
                        <li onClick={() => handleNavigation("main")}>Home</li>
                        <li onClick={() => handleNavigation("about")}>Cervejaria</li>
                        <li onClick={() => handleNavigation("beers")}>Beers</li>
                        <li onClick={() => handleNavigation("pub")}>Pub</li>
                        <li onClick={() => handleNavigation("contact")}>contato</li>

                    </ul>
                )}
            </nav>
        </>
    );
}
