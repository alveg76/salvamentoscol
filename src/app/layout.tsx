import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salvamentos y Usados | Compra y Venta de Vehículos en Colombia",
  description: "Compra y venta de vehículos usados, salvamentos y motocicletas en Colombia. Más de 8 años de experiencia. Avalúo profesional, pago seguro y atención 24/7. ¡Contáctanos hoy!",
  keywords: "vehículos usados Colombia, salvamentos auto, compra venta vehículos, motocicletas usadas, Bogotá, vehículos de salvamento, auto usado barato",
  icons: {
    icon: "/MiniaturaLogo.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
