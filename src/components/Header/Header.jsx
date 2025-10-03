import { useState, useEffect } from "react";
import { Top } from "./Style";

const Header = () => {
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    // Função para scroll suave
    const handleScrollTo = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);

        if (element) {
            const offset = 80; // Altura do header fixo
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Detectar seção ativa ao rolar a página
    useEffect(() => {
        const handleScroll = () => {
            // Detectar se rolou a página
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

    const menuItems = [
        { label: "Sobre nós", id: "sobre" },
        { label: "Produtos", id: "produtos" },
        { label: "Como funciona", id: "como-funciona" },
        { label: "Por que nos escolher?", id: "por-que-nos" }
    ];

    return (
        <Top className={isScrolled ? "scrolled" : ""}>
            <div className="logo">
                <img src="imagens/Logo-horizontal.png" alt="Logo"/>
            </div>

            <div className="menu-itens">
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
        </Top>
    );
};

export default Header;