"use client";

export default function Logo() {
  return (
    <svg
      width="280"
      height="80"
      viewBox="0 0 280 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-auto h-16"
    >
      {/* Círculo Amarillo */}
      <circle cx="35" cy="40" r="32" fill="#F5C200" />

      {/* Auto en el círculo */}
      <g>
        {/* Carrocería principal */}
        <path
          d="M 22 44 L 25 38 L 40 38 L 43 44 Z"
          fill="white"
          stroke="#111111"
          strokeWidth="1"
        />

        {/* Techo del auto */}
        <path
          d="M 27 38 L 28 32 Q 28 30 30 30 L 37 30 Q 39 30 39 32 L 40 38"
          fill="white"
          stroke="#111111"
          strokeWidth="1"
        />

        {/* Rueda izquierda */}
        <circle cx="26" cy="46" r="3" fill="#111111" />
        <circle cx="26" cy="46" r="2" fill="white" />

        {/* Rueda derecha */}
        <circle cx="39" cy="46" r="3" fill="#111111" />
        <circle cx="39" cy="46" r="2" fill="white" />

        {/* Ventana delantera */}
        <rect x="29" y="33" width="5" height="4" fill="white" opacity="0.6" />

        {/* Ventana trasera */}
        <rect x="37" y="33" width="3" height="4" fill="white" opacity="0.6" />
      </g>

      {/* Fondo negro redondeado */}
      <rect x="65" y="12" width="205" height="56" rx="12" fill="#111111" />

      {/* Texto SALVAMENTOS Y */}
      <text
        x="160"
        y="38"
        fontSize="22"
        fontWeight="700"
        fill="white"
        fontFamily="Arial, sans-serif"
        textAnchor="middle"
      >
        SALVAMENTOS Y
      </text>

      {/* Texto USADOS en amarillo */}
      <text
        x="160"
        y="62"
        fontSize="28"
        fontWeight="900"
        fill="#F5C200"
        fontFamily="Arial, sans-serif"
        textAnchor="middle"
      >
        USADOS
      </text>
    </svg>
  );
}
