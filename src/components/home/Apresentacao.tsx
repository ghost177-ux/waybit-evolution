import React, { useState } from "react";
import apresent from "@/assets/apresent.png.asset.json";
import apresentFundo from "@/assets/apresent-fundo.jpg.asset.json";

export default function Apresentacao() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="apresentacao"
      className="relative z-10 w-full overflow-hidden bg-white"
      style={{ height: "100vh" }} // altura total da seção
    >
      {/* Fundo ocupando 75% de baixo para cima */}
      <div className="absolute bottom-0 left-0 w-full h-[65%]">
        <img
          src={apresentFundo.url}
          alt="Fundo apresentação"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Imagem principal ocupando 75% de cima para baixo */}
      <div className="relative mx-auto w-full h-[75%] flex items-center justify-center">
        <img
          src={apresent.url}
          alt="Apresentação Waybit"
          className="max-h-full object-contain"
        />

        {/* Ícone Play centralizado */}
        <button
          onClick={() => setOpen(true)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green shadow-lg hover:scale-105 transition">
            ▶
          </span>
        </button>
      </div>

      {/* Frase abaixo da imagem */}
      <div className="relative mx-auto mt-6 w-[90%] max-w-4xl text-center">
        <p
          className="font-sans font-bold text-white"
          style={{ fontSize: "40px" }}
        >
          Conheça melhor o Dominus e veja o que Ele pode fazer por você
        </p>
      </div>

      {/* Modal com vídeo */}
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
