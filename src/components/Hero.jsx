import heroImg from "../assets/hero.png";
import React from 'react';

function Hero() {
  return (
    <div className="relative bg-neutral-950 min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-neutral-900">
      
      {/* 📸 Imagen de fondo con overlay oscuro para que se lea bien el texto */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000"
        style={{ 
          // Cuando tengas una foto real del bar de noche o el escenario, cambias esta URL por la tuya
          backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop')" 
        }}
      ></div>
      
      {/* Gradiente extra para darle profundidad nocturna */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50"></div>

      {/* ⚡ Contenido Principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Badge destacado */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-6 animate-pulse">
          🎸 Resto-Bar & Shows en vivo
        </span>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 uppercase">
          Rancho <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">Aparte</span>
        </h1>

        {/* Bajada / Eslogan */}
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl font-medium leading-relaxed mb-10 balance">
          El lugar de encuentro en Pueblo Andino. Vení a disfrutar de la mejor gastronomía, tragos de autor y noches inolvidables con artistas en el escenario.
        </p>

        {/* 🚀 Botones de Acción (Ahora solo Ver Cartelera) */}
        <div className="flex justify-center w-full sm:w-auto">
          
          {/* Botón: Ancla a Eventos */}
          <a
            href="#eventos"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-base px-10 py-4 rounded-xl shadow-xl shadow-amber-500/10 transition-all duration-300 hover:-translate-y-0.5 tracking-wide uppercase"
          >
            Ver Cartelera
          </a>

        </div>

        {/* 🕒 Info rápida de pie de página */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 border-t border-neutral-800/60 w-full mt-16 pt-8 text-neutral-400 text-sm">
          <div>
            <p className="text-amber-500 font-semibold uppercase tracking-wider text-xs mb-1">Ubicación</p>
            <p className="text-white font-medium">Pueblo Andino</p>
          </div>
          <div>
            <p className="text-amber-500 font-semibold uppercase tracking-wider text-xs mb-1">Noches de</p>
            <p className="text-white font-medium">Jueves a Domingos</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-amber-500 font-semibold uppercase tracking-wider text-xs mb-1">Shows desde</p>
            <p className="text-white font-medium">Las 22:00 hs</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;