"use client";

import Link from "next/link";

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Catálogo de <span className="text-yellow-400">Vehículos</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Descubre nuestras ofertas en nuestro Instagram actualizado diariamente
        </p>

        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg overflow-hidden shadow-2xl mb-12">
          <div className="p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  📱 Síguenos en Instagram
                </h3>
                <p className="text-lg mb-6">
                  Actualizamos nuestro catálogo diariamente con nuevos vehículos
                  disponibles. Fotos detalladas, precios y especificaciones.
                </p>
                <p className="text-xl font-semibold mb-6">
                  @salvamentos.y.usados.oficial
                </p>
              </div>
              <Link
                href="https://www.instagram.com/salvamentos.y.usados.oficial?igsh=MTlsaHR3ZWs2NGVldA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition transform hover:scale-105 whitespace-nowrap text-lg"
              >
                Ver en Instagram →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">🚙</div>
            <h3 className="text-xl font-bold mb-2">Vehículos Usados</h3>
            <p className="text-gray-600">
              Autos con documentación completa y garantía de funcionamiento
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-2">Salvamentos</h3>
            <p className="text-gray-600">
              Vehículos para partes, refacciones o restauración
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">🏍️</div>
            <h3 className="text-xl font-bold mb-2">Motocicletas</h3>
            <p className="text-gray-600">
              Variedad de motos nuevas y usadas con excelentes precios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
