export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Sobre <span className="text-yellow-400">Nosotros</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Somos una empresa colombiana especializada en la compra y venta de
          vehículos usados y salvamentos con más de 8 años de experiencia
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-yellow-400 hover:shadow-xl transition">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold mb-3">8 Años</h3>
            <p className="text-gray-600">
              De trayectoria y experiencia en el sector automotriz de salvamento
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-yellow-400 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🚗</div>
            <h3 className="text-2xl font-bold mb-3">Variedad</h3>
            <p className="text-gray-600">
              Amplio catálogo de vehículos usados, salvamentos y motocicletas
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-yellow-400 hover:shadow-xl transition">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-3">Confianza</h3>
            <p className="text-gray-600">
              Transacciones seguras y asesoría profesional en cada compra
            </p>
          </div>
        </div>

        <div className="bg-black text-white p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-6 text-yellow-400">
            ¿Por qué elegirnos?
          </h3>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">✓</span>
              <span className="text-lg">Precios competitivos en el mercado</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">✓</span>
              <span className="text-lg">
                Pago en parte de cambio disponible
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">✓</span>
              <span className="text-lg">
                Evaluación profesional de vehículos
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">✓</span>
              <span className="text-lg">Atención personalizada 24/7</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
