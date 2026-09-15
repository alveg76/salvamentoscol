export default function InfoBar() {
  return (
    <div className="bg-yellow-400 text-gray-900 py-2 md:py-4 border-b border-yellow-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 text-center md:text-left">
          {/* Item 1 */}
          <div className="flex flex-row items-center justify-start gap-2">
            <span className="text-xl md:text-2xl">🚗</span>
            <p className="font-bold text-xs md:text-sm lg:text-base">Salvamento y Usados</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-row items-center justify-start gap-2">
            <span className="text-xl md:text-2xl">💲</span>
            <p className="font-bold text-xs md:text-sm lg:text-base">Menor valor</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-row items-center justify-start gap-2">
            <span className="text-xl md:text-2xl">🚚</span>
            <p className="font-bold text-xs md:text-sm lg:text-base">Envíos Nacional</p>
          </div>

          {/* Item 4 - Location */}
          <div className="flex flex-row items-center justify-start gap-2">
            <span className="text-xl md:text-2xl">📍</span>
            <p className="font-bold text-xs md:text-sm lg:text-base">Bogotá</p>
          </div>
        </div>

        {/* Mobile Banner - Solo texto compacto */}
        <div className="md:hidden text-center text-sm font-bold">
          🚗 Salvamento | 💲 Menor valor | 🚚 Envíos | 📍 Bogotá
        </div>
      </div>
    </div>
  );
}
