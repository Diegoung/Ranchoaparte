import React, { useState } from 'react';

function Menu() {
  // Estado para manejar qué categoría está activa (lo dejamos listo para cuando vuelva la carta)
  const [activeTab, setActiveTab] = useState('comer');

  return (
    <section className="py-20 px-6 bg-neutral-900 border-b border-neutral-800" id="menu">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">Nuestros Sabores</span>
          <h2 className="text-4xl font-extrabold text-white mt-2 tracking-tight">La Carta del Rancho</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* ⏳ CARTEL TEMPORAL: CARTA EN DESARROLLO */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-2xl">
          <div className="text-4xl mb-4">🍳🍔🍹</div>
          <h3 className="text-2xl font-bold text-white mb-3">¡Estamos renovando nuestros sabores!</h3>
          <p className="text-neutral-400 leading-relaxed mb-8 text-sm md:text-base">
            Estamos armando una nueva propuesta gastronómica tremenda para acompañar tus noches de show. 
            Mientras tanto, podés consultar la variedad de platos, minutas, tragos y las promos del día directo por nuestro chat.
          </p>
          
          <a 
            href="https://wa.me/5493415084112?text=%C2%A1Hola!%20Quer%C3%ADa%20consultar%20la%20carta%20disponible%20y%20las%20promociones%20del%20d%C3%ADa%20en%20Rancho%20Aparte."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-neutral-800 hover:bg-amber-500 text-white hover:text-neutral-900 font-bold py-3.5 px-8 rounded-xl transition-all duration-300 text-sm border border-neutral-700 hover:border-amber-500 shadow-lg"
          >
            Consultar Platos y Promos del Día
          </a>
        </div>

        {/* 
          NOTA: Dejo acá abajo la estructura de las categorías y la grilla comentada. 
          Cuando tengas el menú definitivo, borrás el bloque de "CARTEL TEMPORAL" de arriba, 
          descomentás esto de acá abajo, actualizás los datos de los platos y ya te queda activa de nuevo.
        */}
        {/* 
        <div className="flex justify-center gap-4 mb-16 mt-12">
          <button
            onClick={() => setActiveTab('comer')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 uppercase tracking-wider border ${
              activeTab === 'comer'
                ? 'bg-amber-500 text-neutral-950 border-amber-500'
                : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
            }`}
          >
            🍔 Para Comer
          </button>
          <button
            onClick={() => setActiveTab('tomar')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 uppercase tracking-wider border ${
              activeTab === 'tomar'
                ? 'bg-amber-500 text-neutral-950 border-amber-500'
                : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
            }`}
          >
            🍹 Para Tomar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuData[activeTab].map((item, index) => (
            <div key={index} className="bg-neutral-950/60 border border-neutral-800/80 rounded-2xl p-6">
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <span className="text-xl font-black text-amber-500">{item.price}</span>
              </div>
              <p className="text-neutral-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div> 
        */}

      </div>
    </section>
  );
}

export default Menu;