import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Função para ajustar o fundo da imagem com base na rolagem
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Faz o fundo da capa se mover ao contrário enquanto você rola a página
    const header = document.querySelector('header');
    // Agora a imagem move para baixo quando você sobe a página e vice-versa
    header.style.backgroundPosition = `center ${-scrollPosition * 0.3}px`;  // Movimentação invertida

    // Muda a cor da barra de navegação ao rolar
    if (scrollPosition > 80) {
      setScrolled(true);  // Quando rolar para baixo
    } else {
      setScrolled(false);  // Quando estiver no topo
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={scrolled ? 'scrolled' : ''}>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contacts">Contatos</a></li>
        </ul>
      </nav>
      <div id="logo">
        <img src="src/assets/logo.webp" alt="video editing icon" />
        <h1 id="logo-title">
          <span id = "name">ADELINO</span>
          <span id = "profession">Editor de Vídeos</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
