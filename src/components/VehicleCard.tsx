"use client";

import Image from "next/image";
import Link from "next/link";

interface VehicleCardProps {
  id: string;
  name: string;
  year: number;
  price: string;
  condition: "salvamento" | "usado";
  image: string;
  altText: string;
  description: string;
  href?: string;
}

export default function VehicleCard({
  id,
  name,
  year,
  price,
  condition,
  image,
  altText,
  description,
  href = "#",
}: VehicleCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Imagen con alt text optimizado */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={altText}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge de condición */}
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white font-bold text-sm ${
            condition === "salvamento" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {condition === "salvamento" ? "Salvamento" : "Usado"}
        </div>
      </div>

      {/* Contenido indexable */}
      <div className="p-6">
        {/* Título con año */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {name} {year}
        </h3>

        {/* Descripción indexable */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Información del vehículo */}
        <div className="mb-4 space-y-1 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Año:</span> {year}
          </p>
          <p>
            <span className="font-semibold">Condición:</span>{" "}
            {condition === "salvamento" ? "De Salvamento" : "Usado"}
          </p>
          <p>
            <span className="font-semibold">Precio:</span> {price}
          </p>
        </div>

        {/* CTA */}
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 py-2 rounded-lg transition duration-300"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
}
