"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600">
            Estamos disponibles para asesorarte en tu compra o venta
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mx-auto max-w-4xl">
          {/* Phone */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Teléfono</h3>
            <div className="space-y-2">
              <a
                href="tel:+573006588572"
                className="block text-lg text-yellow-600 font-bold hover:text-yellow-700"
              >
                300 6588572
              </a>
              <a
                href="tel:+573155207311"
                className="block text-lg text-yellow-600 font-bold hover:text-yellow-700"
              >
                315 5207311
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
            <a
              href="https://wa.me/573155207311"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition duration-300"
            >
              Escribir a WhatsApp
            </a>
          </div>

          {/* Address */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Dirección</h3>
            <div className="space-y-2">
              <p className="text-lg text-gray-700 font-semibold">
                Calle 76 No 60 - 25
              </p>
              <p className="text-lg text-gray-700">Bogotá, Colombia</p>
              <a
                href="https://maps.google.com/maps/search/Calle+76+No+60-25+Bogota+Colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-yellow-600 font-bold hover:text-yellow-700 mt-4 text-sm"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Social Networks */}
        <div className="mt-16 pt-12 border-t border-gray-300">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Síguenos en Redes Sociales
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://www.facebook.com/share/1CkG4KsYuF/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
              title="Facebook"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.998 12c0-6.628-5.372-12-12-12s-12 5.372-12 12c0 5.988 4.388 10.954 10.124 11.852v-8.384H7.078v-3.469h3.044V9.413c0-3.006 1.792-4.666 4.533-4.666 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.384c5.736-.898 10.124-5.864 10.124-11.852z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/salvamentos.y.usados.oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition"
              title="Instagram"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@salvamentosyusados"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
              title="TikTok"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 11-4.33-1.87V7.69a6.51 6.51 0 015.88 3.50A6.56 6.56 0 0120.22 11c0-.55 0-1.08-.02-1.62.37.01.74.02 1.11.02 3.85 0 7.03-3.13 7.11-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
