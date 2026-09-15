"use client";

import VehicleCard from "./VehicleCard";

export default function CatalogSection() {
  // Datos de ejemplo - En un proyecto real, vendrían de una base de datos
  const vehicles = [
    {
      id: "1",
      name: "Chevrolet Spark",
      year: 2020,
      price: "$8,500,000",
      condition: "usado" as const,
      image: "https://images.unsplash.com/photo-1552821551-e7e0b4b4d8f3?w=500&h=400&fit=crop",
      altText: "Chevrolet Spark 2020 usado venta Colombia Bogotá",
      description: "Chevrolet Spark 2020 en excelente estado. Motor original, documentos completos, no ha sufrido accidentes. Ideal para uso urbano. Compramos también tu vehículo usado.",
      href: "#catalogo",
    },
    {
      id: "2",
      name: "Hyundai i10",
      year: 2019,
      price: "$7,200,000",
      condition: "usado" as const,
      image: "https://images.unsplash.com/photo-1494976866556-6812c46fb773?w=500&h=400&fit=crop",
      altText: "Hyundai i10 2019 vehículo usado compra venta salvamento Colombia",
      description: "Hyundai i10 2019 con 45,000 km reales. Sistema de aire acondicionado funcional, tapicería en buen estado. Perfecto para primera compra o uso comercial. Financiamiento disponible.",
      href: "#catalogo",
    },
    {
      id: "3",
      name: "Renault Logan",
      year: 2018,
      price: "$6,800,000",
      condition: "salvamento" as const,
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop",
      altText: "Renault Logan 2018 salvamento motor válido autopartes Colombia Bogotá",
      description: "Renault Logan 2018 de salvamento. Motor y transmisión en buen estado. Disponible para repuestos o restauración. Recibiremos tu auto de menor valor en parte de pago. Envíos a nivel nacional.",
      href: "#catalogo",
    },
    {
      id: "4",
      name: "Toyota Corolla",
      year: 2017,
      price: "$12,500,000",
      condition: "usado" as const,
      image: "https://images.unsplash.com/photo-1552821551-e7e0b4b4d8f3?w=500&h=400&fit=crop",
      altText: "Toyota Corolla 2017 vehículo usado sedán familiar confiable Colombia",
      description: "Toyota Corolla 2017, sedán de confianza. Perfecto estado de funcionamiento, revisión técnica al día. Llantas nuevas, frenos revisados. Financiamiento con tasas preferenciales disponible.",
      href: "#catalogo",
    },
  ];

  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con H2 optimizado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Catálogo de Vehículos Usados y Salvamentos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestro catálogo actualizado de vehículos usados y salvamentos disponibles en Colombia. Todos con documentación completa y garantía de funcionamiento.
          </p>
        </div>

        {/* Grid de vehículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <p className="text-gray-600 mb-6 text-lg">
            ¿No encontraste lo que buscas? Contáctanos para consultar más opciones o para que te compremos tu vehículo usado o de salvamento.
          </p>
          <a
            href="https://wa.me/573155207311"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition duration-300"
          >
            💬 Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
