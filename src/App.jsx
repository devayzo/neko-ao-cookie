import { useState } from "react";
import heroImg from "./assets/hero.png";
import logoImg from "./assets/logo.png";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [cupSize, setCupSize] = useState(200);
  const cupPrices = { 200: 12, 300: 15 };
  const formUrl = new URL(
    "https://docs.google.com/forms/d/e/1FAIpQLScNGxGFMOHzaMhPmQmcIDAWhcyhrnxtmio_9LSi6m5j3ZPFeg/viewform",
  );
  formUrl.searchParams.set("usp", "pp_url");
  formUrl.searchParams.set("entry.813684058", `${cupSize}ml`);
  formUrl.searchParams.set("entry.422913730", quantity);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Neko ao Cookie, início">
          <img className="brand-mark" src={logoImg} alt="Logo Neko ao Cookie" />
          <span>
            NEKO<span className="brand-accent">³</span>
            <small>AO COOKIE</small>
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#produto">O produto</a>
          <a href="#sobre">Sobre nós</a>
        </nav>
        <a className="header-order" href="#pedido">
          Pedir agora <span>↗</span>
        </a>
      </header>
      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse"></span> cookie protocol / online
          </p>
          <h1>
            Pequenos cookies.
            <br />
            <em>Grande</em> prazer.
          </h1>
          <p className="hero-description">
            Bolinhas de cookie com chocolate, feitas para serem devoradas em
            poucos minutos e lembradas por muito mais tempo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pedido">
              Escolher meu copinho <span>→</span>
            </a>
            <a className="text-link" href="#produto">
              Descobrir a receita <span>↓</span>
            </a>
          </div>
          <div className="hero-note">
            <span>⌁</span> feito em pequenos lotes <span>·</span> entregue
            fresquinho
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <img
            src={heroImg}
            alt="Copinho Neko ao Cookie com bolinhas de cookie e chocolate"
          />
        </div>
        <div className="scroll-cue">
          scroll to explore <span>↓</span>
        </div>
      </section>
      <section className="ticker" aria-label="Destaques da marca">
        <span>BOLINHAS DE COOKIE</span>
        <b>✦</b>
        <span>CHEIAS DE CHOCOLATE</span>
        <b>✦</b>
        <span>FEITO COM AMOR</span>
        <b>✦</b>
        <span>BOLINHAS DE COOKIE</span>
      </section>
      <section className="product-section section-shell" id="produto">
        <div className="section-intro">
          <p className="eyebrow">01 / o produto</p>
          <h2>
            Um copinho de
            <br />
            <em>felicidade</em> concentrada.
          </h2>
        </div>
        <div className="product-copy">
          <p>
            Textura macia por dentro, chocolate em cada mordida e aquela vontade
            inevitável de pegar só mais uma.
          </p>
          <div className="spec-list">
            <span>
              <b>01</b> metade massa de cookie artesanal
            </span>
            <span>
              <b>02</b> gotas generosas de chocolate
            </span>
            <span>
              <b>03</b> metade chocolate delicioso
            </span>
            <span>
              <b>04</b> servido no copo
            </span>
          </div>
        </div>
      </section>
      <section className="order-section" id="pedido">
        <div className="order-content">
          <p className="eyebrow">02 / seu pedido</p>
          <h2>
            Pronto para
            <br />
            <em>dar um bite?</em>
          </h2>
          <p>
            Peça seu copinho e receba uma dose de felicidade direto na sua
            sala de aula.
          </p>
          <div className="cup-options" aria-label="Escolha o tamanho do copinho">
            {[200, 300].map((size) => (
              <button
                type="button"
                className={`cup-option ${cupSize === size ? "selected" : ""}`}
                key={size}
                onClick={() => setCupSize(size)}
              >
                <strong>{size} ml = </strong>
                <span>R$ {cupPrices[size].toFixed(2).replace(".", ",")}</span>
              </button>
            ))}
          </div>
          <div className="order-line">
            <span>Copinho {cupSize} ml</span>
            <div className="quantity">
              <button
                type="button"
                aria-label="Diminuir quantidade"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <strong>{quantity}</strong>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <strong>
              R$ {(quantity * cupPrices[cupSize]).toFixed(2).replace(".", ",")}
            </strong>
          </div>
          <a
            className="button button-primary full-button"
            href={formUrl.toString()}
            target="_blank"
            rel="noreferrer"
          >
            Quero meu copinho <span>↗</span>
          </a>
        </div>
        <div className="order-art">
          <span className="art-code">NEKO³ / COOKIE</span>
          <img className="art-logo" src={logoImg} alt="Logo Neko ao Cookie" />
          <span className="art-caption">
            FELICIDADE
            <br />
            NO SEU COPINHO
          </span>
        </div>
      </section>
      <footer id="sobre">
        <div className="footer-brand">
          NEKO<span>³</span> <small>AO COOKIE</small>
        </div>
        <p>cookies pequenos, grande prazer.</p>
        <div className="footer-meta">
          <span>© 2026 NEKO AO COOKIE</span>
          <span>SP / BR</span>
          <a href="#top">voltar ao topo ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
