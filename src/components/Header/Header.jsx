import { useState, useEffect } from "react";
import { Top } from "./Style";

const Header = () => {
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollTo = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);

        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }

        // Fecha o menu ao clicar em um item (mobile)
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ["sobre", "produtos", "como-funciona", "por-que-nos"];
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Previne scroll quando menu está aberto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const menuItems = [
        { label: "Sobre nós", id: "sobre" },
        { label: "Produtos", id: "produtos" },
        { label: "Como funciona", id: "como-funciona" },
        { label: "Por que nos escolher?", id: "por-que-nos" }
    ];

    return (
        <Top className={isScrolled ? "scrolled" : ""}>
            <div
                className="logo"
                onClick={(e) => handleScrollTo(e, "banner")}
                style={{ cursor: "pointer" }}
            >
                <img src="imagens/Logo-horizontal.png" alt="Logo"/>
            </div>

            {/* Botão Hambúrguer */}
            <button
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Menu Desktop e Mobile */}
            <div className={`menu-itens ${isMenuOpen ? 'open' : ''}`}>
                {menuItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleScrollTo(e, item.id)}
                        className={activeSection === item.id ? "active" : ""}
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Overlay para fechar menu ao clicar fora */}
            {isMenuOpen && (
                <div
                    className="menu-overlay"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </Top>
    );
};

export default Header;