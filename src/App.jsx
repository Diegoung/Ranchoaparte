import React from 'react';
import Hero from './components/Hero';
import Events from './components/Events';
import Menu from './components/Menu';
import PastEvents from './components/PastEvents'; 
import Reservation from './components/Reservation'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white selection:bg-amber-500 selection:text-neutral-950 relative">
      
      {/* 1. Inicio / Presentación */}
      <Hero />
      
      {/* 2. La cartelera de shows */}
      <Events />
      
      {/* 3. La carta de comidas y tragos */}
      <Menu />

      {/* 4. Galería de recuerdos y Comentarios de clientes (Todo integrado acá adentro) */}
      <PastEvents />

      {/* 5. Reservas y Ubicación */}
      <Reservation /> 

      {/* 6. BOTÓN DEL FOOTER */}
      <Footer /> 

      {/* 7. BOTÓN FLOTANTE DE WHATSAPP */}
      <a
        href="https://wa.me/5493415084112" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all transform hover:scale-110 z-50 flex items-center justify-center animate-bounce"
        style={{ animationDuration: '3s' }} 
        title="Consultanos por WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          fill="currentColor" 
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.948h.003c4.368 0 7.926-3.558 7.93-7.93a7.9 7.9 0 0 0-2.326-5.594zm-5.605 11.933A6.71 6.71 0 0 1 4.513 13.1l-.246-.147-2.494.653.664-2.435-.161-.256a6.71 6.71 0 0 1-1.029-3.57C2.272 4.257 5.21 1.313 8.805 1.313A6.74 6.74 0 0 1 13.6 3.328a6.74 6.74 0 0 1 1.995 4.8c-.006 3.604-2.94 6.54-6.533 6.54h-.01zM10.855 9.94c-.204-.102-1.21-.596-1.396-.665-.186-.069-.322-.103-.457.104-.136.207-.524.657-.643.795-.12.137-.239.153-.442.05s-.858-.316-1.634-1.01c-.604-.539-1.012-1.205-1.13-1.408-.119-.203-.013-.313.088-.414.09-.091.204-.238.306-.356.102-.118.137-.203.205-.341.067-.137.034-.257-.017-.359-.052-.102-.456-1.1-.625-1.507-.163-.398-.33-.344-.457-.351-.115-.006-.248-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.21-.494 1.38-1.01.17-.515.17-.957.121-1.049-.05-.092-.185-.143-.39-.245z"/>
        </svg>
      </a>

    </div>
  );
}

export default App;