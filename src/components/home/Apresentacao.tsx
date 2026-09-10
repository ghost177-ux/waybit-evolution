import { useState } from "react";
import apresent from "@/assets/apresent.png.asset.json";
import apresentFundo from "@/assets/apresent-fundo.jpg.asset.json";
import { Container } from "./shared";

export default function Apresentacao() {
  const [open, setOpen] = useState(false);

  return (
    <section id="apresentacao" className="relative overflow-hidden bg-white py-14 lg:py-18">
      <div className="absolute inset-x-0 bottom-0 h-[62%] bg-brand-soft" aria-hidden />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Conheça melhor a Waybit
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl lg:text-[2.6rem]">
            E o que podemos fazer pelo seu negócio
          </h2>
          <p className="mt-4 text-base text-brand-text sm:text-lg">
            O Dominus conecta vendas, estoque, financeiro e operações em um único sistema,
            ajudando sua equipe a trabalhar com mais velocidade, clareza e consistência.
          </p>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-5xl">
          <div className="absolute inset-x-0 bottom-0 h-[52%] rounded-[2rem] bg-gradient-to-b from-transparent via-brand-blue/5 to-brand-blue/10" />

          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_30px_80px_-30px_rgba(24,52,90,0.28)]">
            <img
              src={apresentFundo.url}
              alt="Fundo apresentação"
              className="h-64 w-full object-cover object-center sm:h-80 lg:h-[26rem]"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-brand-dark/15 via-transparent to-transparent">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-green text-2xl text-white shadow-[0_20px_40px_rgba(35,152,93,0.45)] transition-all hover:scale-105 hover:shadow-[0_24px_48px_rgba(35,152,93,0.55)]"
                aria-label="Assistir apresentação em vídeo"
              >
                ▶
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-6 sm:p-8">
              <img
                src={apresent.url}
                alt="Apresentação Waybit"
                className="w-full max-w-3xl object-contain"
              />
            </div>
          </div>
        </div>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-4xl rounded-2xl bg-white p-2 shadow-2xl">
            <iframe
              className="aspect-video w-full rounded-xl"
              src="https://www.youtube.com/embed/uNWOvb8bMPo"
              title="Apresentação Waybit"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-brand-dark shadow-lg"
              aria-label="Fechar vídeo"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}



{/*import React, { useEffect, useRef, useState } from "react";
import apresent from "@/assets/apresent.png.asset.json";
import apresentFundo from "@/assets/apresent-fundo.jpg.asset.json";

export default function Apresentacao() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      setOffset(scrolled * 0.08);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="apresentacao"
      className="relative z-10 w-full overflow-hidden bg-white py-16"
    >
      {/* Fundo ocupando a maior parte da altura com parallax /}
      <div className="absolute bottom-0 left-0 w-full h-[75%] overflow-hidden">
        <img
          src={apresentFundo.url}
          alt="Fundo apresentação"
          className="w-full h-[120%] object-cover transition-transform duration-100 will-change-transform"
          style={{ transform: `translateY(${offset}px)` }}
        />
      </div>

      {/* Imagem principal /}
      <div className="relative mx-auto w-[90%] max-w-4xl">
        <img
          src={apresent.url}
          alt="Apresentação Waybit"
          className="w-full object-contain"
        />

        {/* Ícone Play centralizado /}
        <button
          onClick={() => setOpen(true)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-green shadow-lg hover:scale-105 transition">
            ▶
          </span>
        </button>
      </div>

      {/* Modal com vídeo /}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-3xl">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/uNWOvb8bMPo"
              title="Apresentação Waybit"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 rounded-full bg-white px-3 py-1 font-bold text-brand-dark shadow"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
}*/}
