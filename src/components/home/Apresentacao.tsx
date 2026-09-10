import React, { useState } from "react";
import apresent from "@/assets/apresent.png.asset.json";
import apresentFundo from "@/assets/apresent-fundo.jpg.asset.json";

export default function Apresentacao() {
  const [open, setOpen] = useState(false);

  return (
    <section id="apresentacao" className="relative w-full bg-white py-16">
      {/* Fundo ocupando metade inferior */}
      <div className="absolute bottom-0 left-0 w-full h-1/2">
        <img
          src={apresentFundo.url}
          alt="Fundo apresentação"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Imagem principal */}
      <div className="relative mx-auto max-w-5xl">
        <img
          src={apresent.url}
          alt="Apresentação Waybit"
          className="w-full object-contain"
        />

        {/* Ícone Play centralizado */}
        <button
          onClick={() => setOpen(true)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-green shadow-lg hover:scale-105 transition">
            ▶
          </span>
        </button>
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
