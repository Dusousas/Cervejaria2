import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

export default function SocialMedia() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className="relative z-10 ">
                {/* Botão de Menu Hamburguer para lg e superiores */}
                <div className="hidden lg:block">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl text-black"
                        aria-label="Toggle Social Media Menu"
                    >
                        {isOpen ? <RiCloseLine /> : <RiMenuLine />}
                    </button>
                </div>

                {/* Menu Lateral que abre da direita para a esquerda */}
                {isOpen && (
                    <div
                        className={`fixed top-0 right-0 h-full w-full max-w-[500px] bg-white  text-black p-8 shadow-lg transform transition-transform duration-300 ease-in-out ${
                            isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    >
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                            {/* Logo */}
                            <div className="text-3xl font-bold">
                                <img src="logo.webp" alt="BROTAS BEER" className="mb-2" />
                            </div>

                            {/* Descrição */}
                            <p className="max-w-xs text-sm leading-relaxed">
                                Proin gravida nibh vel velit auctor aliquet. Adenean sollicitudin, lorem quis bibendumi auctor, nisi elit consequat ipsum, necun sagiti tis sem nibh id elit. Duis sed odio sit amet nisi elit conseq sequat ipsum elit.
                            </p>

                            {/* Ícones de Redes Sociais */}
                            <div className="flex space-x-4 text-2xl">
                                <a href="#" aria-label="Facebook" className="hover:text-gray-400"><img src="instagram.png" alt="" /></a>
                                <a href="#" aria-label="Twitter" className="hover:text-gray-400"><img src="facebook.png" alt="" /></a>
                                <a href="#" aria-label="LinkedIn" className="hover:text-gray-400"><img src="whatsapp.png" alt="" /></a>
                            </div>
                        </div>

                        {/* Botão para Fechar */}
                        <button
                            onClick={toggleMenu}
                            className="absolute top-8 right-8 text-3xl text-black"
                            aria-label="Close Social Media Menu"
                        >
                            <RiCloseLine />
                        </button>
                    </div>
                )}
            </section>
        </>
    );
}
