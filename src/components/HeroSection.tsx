"use client";

import Link from "next/link";
import InstagramFeed from "./InstagramFeed";

export default function HeroSection() {

  return (
    <section id="inicio" className="bg-white py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center">
          {/* Contenido Izquierdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Compra y Venta de Vehículos Usados y Salvamentos
              </h1>
              <p className="text-lg text-gray-600">
                Más de 8 años de experiencia ofreciendo la mejor asesoría en el sector
                automotriz en Colombia.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#catalogo"
                className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-3 rounded-lg transition duration-300"
              >
                Ver Catálogo
              </Link>
              <a
                href="https://wa.me/573155207311"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-lg transition duration-300"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Instagram Feed Derecho */}
          <div className="w-full h-96 md:h-96 lg:h-[500px]">
            <InstagramFeed />
          </div>
        </div>
      </div>
    </section>
  );
}
