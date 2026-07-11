import React, { useState } from 'react';

function PastEvents() {
  // Estado para filtrar las fotos por categoría
  const [filter, setFilter] = useState('todos');

  // ✍️ EDITÁ ACÁ LOS TESTIMONIOS DE LOS CLIENTES
  const testimonialsData = [
    {
      id: 1,
      quote: "¡Excelente lugar! Los shows en vivo son espectaculares y la comida riquísima. Volvemos siempre.",
      author: "- Juan Pablo R."
    },
    {
      id: 2,
      quote: "La mejor onda de Andino. Para meter peña, escuchar buena música y pasar un momento tremendo con amigos.",
      author: "- María Luz G."
    }
  ];

  // 📝 Datos de la galería con enfoque conceptual e imágenes profesionales de stock
  const galleryData = [
    {
      id: 1,
      category: 'cumpleanos',
      title: "Festejos Familiares",
      date: "Todos los findes",
      desc: "Noches de alegría, sopladas de velitas y largas sobremesas compartidas en nuestro patio.",
      img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      category: 'privados',
      title: "Eventos Especiales",
      date: "Exclusivo",
      desc: "Un espacio íntimo adaptado para celebraciones privadas con menús a la carta y barra libre.",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      category: 'shows',
      title: "Peñas & Folklore",
      date: "Noches de música",
      desc: "El encuentro de la danza, las guitarras y las palmas que hacen vibrar el escenario del Rancho.",
      img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      category: 'cumpleanos',
      title: "Almuerzos Criollos",
      date: "Sábados y Domingos",
      desc: "Asados inolvidables al mediodía para celebrar la vida rodeados de un gran ambiente campestre.",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 5,
      category: 'privados',
      title: "Reuniones Empresariales",
      date: "A medida",
      desc: "Despedidas de año corporativas y almuerzos de negocios con toda la infraestructura necesaria.",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 6,
      category: 'shows',
      title: "Música en Vivo",
      date: "Variedad de artistas",
      desc: "Cenas shows repletas de energía, buena gastronomía y ritmos que invitan a cantar a todo el local.",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop"
    }
  ];

  // Filtrar las imágenes según la pestaña activa
  const filteredImages = filter === 'todos'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  return (
    <section className="py-20 px-6 bg-neutral-950 border-b border-neutral-900" id="galeria">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera */}
        <div className="text-center mb-12">
          <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">El Historial del Rancho</span>
          <h2 className="text-4xl font-extrabold text-white mt-2 tracking-tight">Galería de Recuerdos</h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
            Así se viven las noches, peñas y festejos privados en Rancho Aparte. ¡Escribinos para reservar el espacio para tu propio evento!
          </p>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 🎛️ Filtros de Categorías */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {[
            { id: 'todos', label: '✨ Ver Todo' },
            { id: 'cumpleanos', label: '🎂 Cumpleaños' },
            { id: 'privados', label: '🔒 Eventos Privados' },
            { id: 'shows', label: '🎸 Shows Pasados' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 border ${
                filter === cat.id
                  ? 'bg-amber-500 text-neutral-950 border-amber-500 shadow-md shadow-amber-500/10'
                  : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 📸 Grilla de Fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-neutral-900 border border-neutral-800/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-neutral-700"
            >
              {/* Contenedor de la Imagen */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                {/* Degradado sobre la foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80"></div>
                
                {/* Fecha flotante */}
                <span className="absolute top-4 right-4 bg-neutral-950/80 border border-neutral-800/50 text-amber-400 text-[11px] font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {item.date}
                </span>
              </div>

              {/* Información de la tarjeta */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje de Llamado a la Acción (CTA) con WhatsApp Real */}
        <div className="mt-16 text-center bg-neutral-900/40 border border-neutral-800/60 p-8 rounded-3xl max-w-2xl mx-auto">
          <h4 className="text-xl font-bold text-white mb-2">¿Querés hacer tu fiesta acá?</h4>
          <p className="text-neutral-400 text-sm mb-6">Festejá tu cumple, aniversario o cena corporativa con nosotros. Nos encargamos de la comida, la bebida y de que pases una jornada única.</p>
          <a
            href="https://wa.me/5493415084112?text=¡Hola!%20Me%20gustaría%20consultar%20por%20la%20disponibilidad%20y%20presupuesto%20para%20organizar%20un%20evento%20privado%20en%20Rancho%20Aparte."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-neutral-950 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/5"
          >
            Consultar por tu Evento
          </a>
        </div>

        {/* 💬 Sección: Lo que dicen nuestros clientes */}
        <div className="mt-24 pt-12 border-t border-neutral-900">
          <h3 className="text-3xl font-extrabold text-amber-500 text-center tracking-tight mb-12">
            Lo que dicen nuestros clientes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonialsData.map((t) => (
              <div 
                key={t.id} 
                className="bg-neutral-900/60 border border-neutral-800/60 p-8 rounded-2xl flex flex-col justify-between text-center"
              >
                <p className="text-neutral-300 italic text-base leading-relaxed">
                  "{t.quote}"
                </p>
                <span className="text-amber-500 font-bold tracking-wide mt-6 block text-sm">
                  {t.author}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default PastEvents;