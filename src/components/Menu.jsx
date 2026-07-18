import React, { useState } from 'react';

function Menu() {
  const [activeTab, setActiveTab] = useState('comer');
  const [activeSubTab, setActiveSubTab] = useState('hamburguesas');

  const menuData = {
    comer: {
      hamburguesas: [
        { name: "La Explosiva", price: "$15.000", desc: "Cebolla de verdeo, panceta, cheddar líquido, huevo, cheddar." },
        { name: "La Ranchera", price: "$15.000", desc: "Cebolla picante, panceta, huevo, queso, paleta." },
        { name: "La Super Especial", price: "$14.000", desc: "Lechuga, tomate, huevo, queso, paleta." }
      ],
      tablas_empanadas: [
        { name: "La Tabla del Rancho", price: "Consultar", desc: "Milanesa de carne y suprema, 6 palitos de caprese, 8 nuggets, 6 empanadas de copetín, 6 bastones de muzza, aceitunas, papas fritas y smiles." },
        { name: "Empanada Carne Salada", price: "$2.000", desc: "Empanada individual de carne salada tradicional." },
        { name: "Empanada Carne Dulce", price: "$2.000", desc: "Empanada individual de carne dulce." },
        { name: "Empanada Osobuco", price: "$2.000", desc: "Empanada individual de osobuco cocido a fuego lento." },
        { name: "Empanada Jamón y Queso", price: "$2.000", desc: "Empanada individual clásica de jamón y queso." },
        { name: "Empanada Pollo", price: "$2.000", desc: "Empanada individual de pollo bien condimentado." },
        { name: "Empanada Carne cortada a cuchillo", price: "$2.200", desc: "Empanada premium de carne cortada a cuchillo." },
        { name: "Media Docena (Clásicas)", price: "$10.000", desc: "6 unidades a elección (Carne, osobuco, jyq o pollo)." },
        { name: "Docena (Clásicas)", price: "$20.000", desc: "12 unidades a elección (Carne, osobuco, jyq o pollo)." },
        { name: "Media Docena (A Cuchillo)", price: "$11.000", desc: "6 unidades exclusivas de carne cortada a cuchillo." },
        { name: "Docena (A Cuchillo)", price: "$24.000", desc: "12 unidades exclusivas de carne cortada a cuchillo." }
      ],
      milanesas_sandwiches: [
        { name: "Milanesa al Plato con Papas (Carne)", price: "$14.000", desc: "Milanesa clásica de carne acompañada con papas fritas." },
        { name: "Milanesa al Plato con Papas (Suprema)", price: "$13.000", desc: "Suprema de pollo clásica acompañada con papas fritas." },
        { name: "Milanesa al Roquefort (Carne)", price: "$15.000", desc: "Milanesa de carne con una cremosa salsa de queso roquefort." },
        { name: "Sándwich XXL Primavera", price: "$15.000", desc: "Torpedo gigante con paleta, queso, huevo, lechuga y tomate." },
        { name: "Sándwich XXL Hamburguesas", price: "$18.000", desc: "Torpedo gigante con medallones de hamburguesa, paleta, queso, huevo, lechuga y tomate." },
        { name: "Sándwich XXL Milanesas Carne", price: "$20.000", desc: "Torpedo gigante con milanesa de carne, paleta, queso, huevo, lechuga y tomate." }
      ],
      pizzas_pizzanesas: [
        { name: "Pizza de Muzza", price: "Media: $8.000 | Entera: $16.000", desc: "Muzzarella clásica, salsa de tomate de la casa y aceitunas." },
        { name: "Pizza Especial", price: "Media: $9.000 | Entera: $18.000", desc: "Muzzarella, jamón, morrones y un toque de orégano." },
        { name: "Pizza Roquefort", price: "Media: $9.000 | Entera: $18.000", desc: "Muzzarella y una generosa capa de queso azul/roquefort." },
        { name: "Pizzanesa de Carne Especial", price: "Media: $21.000 | Entera: $40.000", desc: "Base de milanesa de carne con jamón, queso y salsa especial." },
        { name: "Pizzanesa de Carne Napolitana", price: "Media: $22.000 | Entera: $41.000", desc: "Base de milanesa de carne con salsa de tomate, muzzarella y rodajas de tomate." }
      ],
      pastas: [
        { name: "Ñoquis Caseros", price: "Consultar Salsas", desc: "Hechos al momento. Disponibles con salsa, crema, mixta o boloñesa." },
        { name: "Raviolones de Pollo y Jamón", price: "Consultar Salsas", desc: "Raviolones abundantes con salsa, crema, mixta o boloñesa." },
        { name: "Sorrentinos de Ricota y Nuez", price: "Consultar Salsas", desc: "Exquisitos sorrentinos con salsa, crema, mixta o boloñesa." },
        { name: "Canelones de Carne y Verduras", price: "Consultar Salsas", desc: "Bien rellenos y gratinados con la salsa que más te guste." }
      ],
      tostados_papas: [
        { name: "Tostado Clásico", price: "$10.000", desc: "Tostado tradicional de jamón y queso en pan de miga o de campo." },
        { name: "Carlito", price: "$9.000", desc: "El clásico rosarino de jamón, queso y ketchup." },
        { name: "Papas Grandes con Cheddar", price: "$11.500", desc: "Porción abundante bañada en abundante queso cheddar fundido." },
        { name: "Papas Grandes con Cheddar, Panceta y Verdeo", price: "$13.500", desc: "La versión definitiva: cheddar líquido, panceta crocante y verdeo." }
      ]
    },
    postres: [
      { name: "Budín de Pan Casero", price: "Consultar", desc: "Clásico budín de pan hecho en el Rancho con caramelo artesanal." },
      { name: "Flan Casero", price: "Consultar", desc: "Flan tradicional de consistencia perfecta con opcional de dulce de leche o crema." }
    ]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'comer') {
      setActiveSubTab('hamburguesas');
    }
  };

  const currentItems = activeTab === 'comer' ? menuData.comer[activeSubTab] : menuData.postres;

  return (
    <section className="py-20 px-6 bg-neutral-900 border-b border-neutral-800" id="menu">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">Nuestros Sabores</span>
          <h2 className="text-4xl font-extrabold text-white mt-2 tracking-tight">La Carta del Rancho</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categorías Principales */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => handleTabChange('comer')}
            className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 uppercase tracking-wider border ${
              activeTab === 'comer' ? 'bg-amber-500 text-neutral-950 border-amber-500' : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
            }`}
          >
            🍔 Para Comer
          </button>
          <button
            onClick={() => handleTabChange('postres')}
            className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 uppercase tracking-wider border ${
              activeTab === 'postres' ? 'bg-amber-500 text-neutral-950 border-amber-500' : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
            }`}
          >
            🍮 Postres
          </button>
        </div>

        {/* Subcategorías de comida */}
        {activeTab === 'comer' && (
          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-neutral-950/40 p-2 rounded-2xl border border-neutral-800/60">
            <button
              onClick={() => setActiveSubTab('hamburguesas')}
              className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 ${
                activeSubTab === 'hamburguesas' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Hamburguesas
            </button>
            <button
              onClick={() => setActiveSubTab('tablas_empanadas')}
              className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 ${
                activeSubTab === 'tablas_empanadas' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Tablas & Empanadas
            </button>
            <button
              onClick={() => setActiveSubTab('milanesas_sandwiches')}
              className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 ${
                activeSubTab === 'milanesas_sandwiches' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Milas & Sándwiches XXL
            </button>
            <button
              onClick={() => setActiveSubTab('pizzas_pizzanesas')}
              className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 ${
                activeSubTab === 'pizzas_pizzanesas' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Pizzas & Pizzanesas
            </button>
            <button
              onClick={() => setActiveSubTab('pastas')}
              className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 ${
                activeSubTab === 'pastas' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Pastas Caseras
            </button>
            <button
              onClick={() => setActiveSubTab('tostados_papas')}
              className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 ${
                activeSubTab === 'tostados_papas' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Tostados & Papas Fritas
            </button>
          </div>
        )}

        {/* ⚡ GRILLA RENOVADA: SEPARACIÓN LIMPIA DE TEXTO Y PRECIO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-neutral-950/60 border border-neutral-800/80 rounded-2xl p-6 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between gap-4 shadow-md"
            >
              {/* Bloque superior: Título y Descripción */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white tracking-tight mb-2 leading-snug">
                  {item.name}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
              {/* Bloque inferior: Precio bien separado abajo a la derecha */}
              <div className="flex justify-end pt-2 border-t border-neutral-900/50">
                <span className="text-sm font-black text-amber-400 bg-neutral-900 px-3 py-1.5 rounded-xl border border-neutral-800 tracking-wide">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pie de Página */}
        <div className="text-center mt-14 pt-8 border-t border-neutral-800/60">
          <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Hechas con ingredientes de calidad y mucho amor ♡</p>
          <a 
            href="https://wa.me/5493415084112?text=%C2%A1Hola!%20Quer%C3%ADa%20hacer%20un%20pedido%20Disfrut%C3%A1%20en%20Rancho%20Aparte."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold py-3 px-6 rounded-xl transition-all duration-300 text-xs tracking-wider uppercase"
          >
            <span>📱 Reservas & Pedidos: 3415084112</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Menu;