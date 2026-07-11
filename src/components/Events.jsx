import { useState } from "react";
// 📸 Importamos tus imágenes locales desde la carpeta assets
import imgGastonfer from "../assets/gastonfer.jpeg";
import imgDiaAmigo from "../assets/dia-amigo.jpeg";
import imgParrillada from "../assets/parrillada.jpeg";

function Events() {
  const [shows] = useState([
    {
      id: 1,
      title: "Especial Partido & Música en vivo de Gastonfer",
      date: "Sábado 11 de Julio",
      time: "Noche",
      description: "¡Vení a mirar el partido con nosotros! Venite con algo celeste y blanco y festejamos con toda la música en vivo de Gastonfer. ¡Entrada libre y gratuita!",
      badge: "Show en vivo",
      image: imgGastonfer
    },
    {
      id: 2,
      title: "Festejo Día del Amigo con 'La Borrachita'",
      date: "Sábado 18 de Julio",
      time: "Noche",
      description: "¡Vení a festejar el Día del Amigo con nosotros! Alta noche con sorteos, regalos y más. Primera tanda de anticipadas a $5.000. ¡Reservá tu lugar para comer!",
      badge: "Día del Amigo",
      image: imgDiaAmigo
    },
    {
      id: 3,
      title: "Parrillada Libre en el Rancho",
      date: "Viernes, Sábados y Domingos",
      time: "Noche (V y S) / Mediodía (Dom)",
      description: "Nuestro clásico imperdible. Parrillada libre por las noches los viernes y sábados, y los domingos al mediodía. Buena comida, mejores momentos.",
      badge: "Gastronomía",
      image: imgParrillada
    }
  ]);

  const handlePrivateEventContact = () => {
    const phone = "5493415084112"; 
    const text = encodeURIComponent(
      "¡Hola! Me gustaría recibir información, presupuestos y disponibilidad para organizar un evento privado (cumpleaños / casamiento / reunión) en Rancho Aparte."
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section className="py-24 bg-neutral-950 text-white border-t border-neutral-900" id="eventos">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 📋 ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <span className="text-amber-500 uppercase tracking-widest text-xs font-bold">Viví la experiencia</span>
          <h2 className="text-4xl font-black mt-2 tracking-tight sm:text-5xl">Próximos Shows & Eventos</h2>
          <div className="h-1 w-16 bg-amber-500 mt-4 mx-auto rounded-full"></div>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Disfrutá de propuestas artísticas únicas, noches de amigos y la mejor parrillada libre de la zona. ¡Reservá tu mesa con anticipación!
          </p>
        </div>

        {/* 🎵 GRILLA DE SHOWS - RESPONSIVA Y TRATANDO AL FLYER COMO CORRESPONDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {shows.map((show) => (
            <div 
              key={show.id} 
              className="bg-neutral-900 border border-neutral-800/80 rounded-3xl overflow-hidden group hover:border-amber-500/30 transition-all duration-300 flex flex-col h-full shadow-lg"
            >
              {/* Contenedor del Flyer Vertical sin recortes */}
              <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden bg-neutral-950 flex items-center justify-center border-b border-neutral-800/50">
                <img 
                  src={show.image} 
                  alt={show.title}
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-all duration-500"
                />
                {/* Capa sutil oscura encima para mantener consistencia de diseño */}
                <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-transparent transition-all duration-500 pointer-events-none"></div>
                
                <span className="absolute top-4 left-4 bg-amber-500 text-neutral-950 text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider z-10">
                  {show.badge}
                </span>
              </div>

              {/* Contenido de Texto e Info */}
              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div>
                  {/* Fecha y Hora */}
                  <div className="flex flex-wrap gap-2 text-xs text-amber-400 font-semibold mb-2 items-center">
                    <span className="flex items-center gap-1">
                      📅 {show.date}
                    </span>
                    <span className="text-neutral-700 hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      ⏰ {show.time}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-amber-400 transition-colors duration-300 leading-snug">
                    {show.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                    {show.description}
                  </p>
                </div>

                <a 
                  href="#reservas" 
                  className="w-full bg-neutral-950 hover:bg-amber-500 text-neutral-300 hover:text-neutral-950 font-bold py-3 px-4 rounded-xl text-center border border-neutral-800 hover:border-amber-500 text-xs tracking-wider transition-all duration-300 mt-2 block"
                >
                  Reservar Mesa
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 🥳 BANNER PARA EVENTOS PRIVADOS */}
        <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 lg:p-12 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center lg:text-left max-w-2xl">
            <span className="bg-amber-500/10 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-md uppercase tracking-widest border border-amber-500/20">
              Celebrá con nosotros
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-4 text-white tracking-tight">
              ¿Tenés un cumpleaños, casamiento o evento empresarial?
            </h3>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
              Ponemos a disposición todo nuestro espacio en Pueblo Andino, catering personalizado, barra y todo lo necesario para armar una fiesta inolvidable totalmente a tu medida.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            <button
              onClick={handlePrivateEventContact}
              className="w-full lg:w-auto bg-amber-500 hover:bg-amber-600 text-neutral-950 font-black py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 text-sm tracking-wide flex items-center justify-center gap-2 group"
            >
              Presupuestar por WhatsApp
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l3.147-3.146H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Events;