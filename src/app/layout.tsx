import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salvamentos y Usados | Compra y Venta de Vehículos",
  description: "Empresa dedicada a la compra y venta de vehículos de salvamento y usados en Colombia. 8 años de trayectoria en el sector automotriz.",
  keywords: "vehículos usados, salvamento, motocicletas, compra venta, Colombia",
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
