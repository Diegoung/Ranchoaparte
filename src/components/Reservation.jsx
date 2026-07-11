import { useState } from "react";

function Reservation() {
  const [form, setForm] = useState({
    name: "",
    people: "",
    date: "",
    time: "",
    show: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    // Número de WhatsApp Business de Rancho Aparte
    const phone = "5493415084112"; 
    
    const text = encodeURIComponent(
      `¡Hola! Quiero hacer una reserva en Rancho Aparte:\n\n` +
      `👤 Nombre: ${form.name}\n` +
      `👥 Personas: ${form.people}\n` +
      `📅 Día: ${form.date}\n` +
      `⏰ Horario: ${form.time}\n` +
      `🎤 Show: ${form.show || "No especificado"}\n` +
      `💬 Mensaje adicional: ${form.message || "Ninguno"}`
    );

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="reservas">
      
      {/* 📝 COLUMNA 1: FORMULARIO DE RESERVAS */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl">
        <div className="mb-8">
          <span className="text-amber-500 uppercase tracking-widest text-xs font-bold">Asegurá tu lugar</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Hacé tu Reserva</h2>
          <div className="h-1 w-12 bg-amber-500 mt-3 rounded-full"></div>
        </div>

        <form onSubmit={sendWhatsApp} className="flex flex-col gap-5">
          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Nombre completo</label>
            <input
              name="name"
              type="text"
              placeholder="Ej: Juan Pérez"
              onChange={handleChange}
              required
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Cantidad de personas</label>
            <input
              name="people"
              type="number"
              min="1"
              placeholder="Ej: 4"
              onChange={handleChange}
              required
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Fecha</label>
              <input
                name="date"
                type="date"
                onChange={handleChange}
                required
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Horario</label>
              <input
                name="time"
                type="time"
                onChange={handleChange}
                required
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">¿Para qué show venís?</label>
            <input
              name="show"
              type="text"
              placeholder="Ej: Viernes de DJ / Sábado de Banda"
              onChange={handleChange}
              required
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Mensaje o aclaraciones adicionales</label>
            <textarea
              name="message"
              rows="3"
              placeholder="Ej: Espacio para cochecito, menú sin TACC, etc."
              onChange={handleChange}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm resize-none"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 text-sm tracking-wide mt-2"
          >
            Enviar Reserva por WhatsApp
          </button>
        </form>
      </div>

      {/* 🗺️ COLUMNA 2: UBICACIÓN Y MAPA AJUSTADO POR TUS COORDENADAS */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl h-full flex flex-col justify-between gap-6">
        <div>
          <span className="text-amber-500 uppercase tracking-widest text-xs font-bold">¿Cómo llegar?</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Nuestra Ubicación</h2>
          <p className="text-neutral-400 mt-2 mb-6 text-sm leading-relaxed">
            Te esperamos en **Santa Margarita del Río 251, Pueblo Andino, Santa Fe (CP 2214)**. Vení a pasar un momento único lejos del ruido, con la mejor gastronomía y shows en vivo.
          </p>
          
          {/* 🟢 BOTÓN LLAMATIVO DE WHATSAPP PARA UBICACIÓN */}
          <a 
            href="https://wa.me/5493415084112?text=%C2%A1Hola!%20Me%20pasar%C3%ADas%20la%20ubicaci%C3%B3n%20exacta%20para%20saber%20c%C3%B3mo%20llegar%20a%20Rancho%20Aparte%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-sm shadow-lg shadow-[#25D366]/20 group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              fill="currentColor" 
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.948h.003c4.368 0 7.926-3.558 7.93-7.93a7.9 7.9 0 0 0-2.326-5.594zm-5.605 11.933A6.71 6.71 0 0 1 4.513 13.1l-.246-.147-2.494.653.664-2.435-.161-.256a6.71 6.71 0 0 1-1.029-3.57C2.272 4.257 5.21 1.313 8.805 1.313A6.74 6.74 0 0 1 13.6 3.328a6.74 6.74 0 0 1 1.995 4.8c-.006 3.604-2.94 6.54-6.533 6.54h-.01zM10.855 9.94c-.204-.102-1.21-.596-1.396-.665-.186-.069-.322-.103-.457.104-.136.207-.524.657-.643.795-.12.137-.239.153-.442.05s-.858-.316-1.634-1.01c-.604-.539-1.012-1.205-1.13-1.408-.119-.203-.013-.313.088-.414.09-.091.204-.238.306-.356.102-.118.137-.203.205-.341.067-.137.034-.257-.017-.359-.052-.102-.456-1.1-.625-1.507-.163-.398-.33-.344-.457-.351-.115-.006-.248-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.21-.494 1.38-1.01.17-.515.17-.957.121-1.049-.05-.092-.185-.143-.39-.245z"/>
            </svg>
            Pedir ubicación por WhatsApp
          </a>
        </div>

        {/* 🗺️ Contenedor del Mapa con Coordenadas Exactas Fijadas al Norte */}
        <div className="w-full h-[320px] rounded-2xl overflow-hidden border border-neutral-800 shadow-inner group relative bg-neutral-950">
          <iframe
            src="https://maps.google.com/maps?q=-32.665449,-60.863467&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          ></iframe>
        </div>
      </div>

    </section>
  );
}

export default Reservation;