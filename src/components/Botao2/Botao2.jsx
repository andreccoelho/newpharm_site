import React, { useState, useEffect } from 'react';
import { Botao2Style } from './Style';

const Botao2 = ({ link, sectionId }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e) => {
        // Se tiver sectionId, faz scroll até a seção
        if (sectionId) {
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
        }
        // Se tiver link, abre em nova aba
        else if (link) {
            window.open(link, "_blank");
        }
    };

    return (
        <Botao2Style className={isScrolled ? "scrolled" : ""}>
            <button onClick={handleClick}>
                <span className="button-text">Entenda melhor</span>
                <span className="button-arrow">———➤</span>
            </button>
        </Botao2Style>
    );
};

export default Botao2;