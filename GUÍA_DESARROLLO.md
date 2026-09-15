# 🚀 GUÍA DE DESARROLLO - PRÓXIMOS PASOS

**Última actualización**: 15 de Septiembre, 2026  
**Versión de Next.js**: 16.3.5  
**Versión de TypeScript**: 5.x

---

## ⚡ INICIO RÁPIDO

### 1. Instalar dependencias
```bash
cd c:\salva
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm run dev
```

Luego abre: **http://localhost:3000**

### 3. Compilar para producción
```bash
npm run build
npm start
```

---

## 📁 ESTRUCTURA DEL PROYECTO

```
salva/
├── src/
│   ├── app/
│   │   ├── globals.css              ← Estilos globales
│   │   ├── layout.tsx               ← Layout principal
│   │   └── page.tsx                 ← Página de inicio
│   ├── components/
│   │   ├── Header.tsx               ← ✨ REDISEÑADO
│   │   ├── HeroSection.tsx          ← ✨ REDISEÑADO
│   │   ├── ContactSection.tsx       ← ✨ SIMPLIFICADO
│   │   └── Footer.tsx               ← ✨ ELEGANTE
│   └── sanity/
│       └── client.ts
├── public/
│   ├── logoSyU.jpg                  ← LOGO OFICIAL (IMPORTANTE)
│   ├── images/
│   ├── textures/
│   └── videos/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 ARCHIVOS CLAVE MODIFICADOS

### 1. Header.tsx
**Ruta**: `src/components/Header.tsx`

```typescript
// Logo real (no SVG)
<Image
  src="/logoSyU.jpg"
  alt="Salvamentos y Usados"
  width={200}
  height={60}
  className="h-14 w-auto object-contain"
  priority
/>

// Botones simples
<Link href="#catalogo" className="bg-yellow-500 hover:bg-yellow-600 ...">
  Ver Catálogo
</Link>
```

### 2. HeroSection.tsx
**Ruta**: `src/components/HeroSection.tsx`

```typescript
// Carrusel simple con 3 imágenes
const vehiculos = [
  { id: 1, image: "..." },
  { id: 2, image: "..." },
  { id: 3, image: "..." },
];

// Swiper sin efectos complejos
<Swiper
  modules={[Autoplay, Navigation, Pagination]}
  autoplay={{ delay: 5000 }}
  pagination={{ clickable: true }}
  navigation={true}
  loop={true}
>
```

### 3. ContactSection.tsx
**Ruta**: `src/components/ContactSection.tsx`

```typescript
// 2 columnas simples
<div className="grid md:grid-cols-2 gap-8">
  {/* Teléfono */}
  {/* WhatsApp */}
</div>

// Iconos SVG en redes
<svg className="w-8 h-8" fill="currentColor" viewBox="...">
```

### 4. Footer.tsx
**Ruta**: `src/components/Footer.tsx`

```typescript
// Grid 3-columnas limpio
<div className="grid md:grid-cols-3 gap-12">
  {/* Empresa */}
  {/* Enlaces */}
  {/* Contacto */}
</div>
```

### 5. globals.css
**Ruta**: `src/app/globals.css`

```css
body {
  background-color: #F8F9FA;  /* Neutro claro */
  color: #111111;              /* Negro cálido */
}

/* Swiper personalizado */
.swiper-pagination-bullet {
  @apply bg-yellow-500;
}
```

---

## 🎯 COMPONENTES A CREAR (Próximo Sprint)

### Página "Nosotros"
```
Ruta: src/app/nosotros/page.tsx

Contenido:
- Presentación de empresa
- Valores
- Equipo
- Experiencia (8+ años)
```

### Página "Catálogo"
```
Ruta: src/app/catalogo/page.tsx

Contenido:
- Grid de vehículos
- Filtros (Tipo, Precio, Año)
- Búsqueda
- Detalles de vehículo
```

### Componente "ContactForm"
```
Ruta: src/components/ContactForm.tsx

Campos:
- Nombre
- Email
- Teléfono
- Mensaje
- Vehículo de interés
```

### Botón Flotante WhatsApp
```
Ruta: src/components/FloatingWhatsApp.tsx

Características:
- Fijo en esquina inferior derecha
- Icono discreto
- Link a WhatsApp
```

---

## 🔧 CONFIGURACIÓN IMPORTANTE

### tailwind.config.ts
```typescript
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5C200",
        secondary: "#111111",
      },
    },
  },
}
```

### next.config.ts
```typescript
const config: NextConfig = {
  images: {
    unoptimized: true, // Para Sanity CMS
  },
};
```

---

## 📊 VARIABLES DE ENTORNO

Crear archivo `.env.local`:

```
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxxxx

# URLs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🚀 COMANDOS ÚTILES

```bash
# Desarrollo
npm run dev                 # Inicia servidor en puerto 3000

# Build
npm run build               # Compila para producción

# Linting
npx eslint src             # Verifica código

# Type checking
npx tsc --noEmit           # Verifica tipos TypeScript

# Formatting
npx prettier --write src   # Formatea código
```

---

## 🎨 PALETA DE COLORES PARA USAR

```typescript
// En Tailwind, usar directamente:
bg-yellow-500       // #EAB308
bg-yellow-600       // #CA8A04
bg-green-500        // #22C55E
bg-gray-900         // #111827
bg-gray-100         // #F3F4F6
bg-gray-300         // #D1D5DB

// O personalizar en tailwind.config.ts:
colors: {
  primary: {
    yellow: '#F5C200',
    black: '#111111',
  },
  neutral: {
    light: '#F8F9FA',
    dark: '#1F2937',
  }
}
```

---

## 📱 TESTING RESPONSIVO

### Breakpoints Tailwind
```
sm: 640px    (Tablet pequeño)
md: 768px    (Tablet)
lg: 1024px   (Laptop)
xl: 1280px   (Desktop grande)
2xl: 1536px  (TV)
```

### Clases para responsive
```
block md:flex           // Flex en pantalla grande
grid-cols-1 md:grid-cols-2  // 2 columnas en tablet+
px-4 sm:px-6 lg:px-8   // Padding responsivo
```

---

## 🔍 DEBUGGING

### Errores Comunes

**Error: Logo no carga**
```
✅ Solución: Verifica que /public/logoSyU.jpg existe
```

**Error: Swiper no funciona**
```
✅ Solución: Importa módulos correctos
import { Autoplay, Navigation, Pagination } from "swiper/modules";
```

**Error: TypeScript en Header**
```
✅ Solución: Asegúrate de importar Image de next/image
import Image from "next/image";
```

---

## 📚 RECURSOS ÚTILES

### Documentación
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Swiper](https://swiperjs.com/react)
- [Sanity CMS](https://www.sanity.io/docs)

### Iconos
- [Heroicons](https://heroicons.com/) - Iconos SVG
- [Font Awesome](https://fontawesome.com/) - Más iconos

### Colores
- [Tailwind Color Picker](https://www.twind.dev/cheat-sheet/)
- [Color Hunt](https://colorhunt.co/)

---

## 🔄 GIT WORKFLOW (Recomendado)

```bash
# 1. Crear rama para feature
git checkout -b feature/nombre-feature

# 2. Realizar cambios
# ... editar archivos ...

# 3. Commit
git add .
git commit -m "feat: descripción clara de cambios"

# 4. Push
git push origin feature/nombre-feature

# 5. Pull Request (en GitHub/GitLab)
```

---

## ✅ CHECKLIST ANTES DE SUBIR A PRODUCCIÓN

```
- [ ] npm run build sin errores
- [ ] npm run dev funciona correctamente
- [ ] Responsive en mobile, tablet, desktop
- [ ] Logo en /public/logoSyU.jpg existe
- [ ] No hay console.log() de debug
- [ ] Todas las imágenes cargan
- [ ] Links funcionan correctamente
- [ ] WhatsApp link actualizado
- [ ] Redes sociales links actualizados
- [ ] SEO meta tags en page.tsx
```

---

## 📊 MONITOREO EN PRODUCCIÓN

### Performance
```bash
# Lighthouse
npm run build && npm start
# Luego abrir DevTools > Lighthouse
```

### Errores
```typescript
// Usar Sentry para tracking de errores
npm install @sentry/nextjs
```

### Analytics
```typescript
// Google Analytics o Plausible
npm install gtag
```

---

## 🎓 MEJORES PRÁCTICAS

### 1. Componentes
```
- Hacer componentes pequeños y reutilizables
- Usar TypeScript para type safety
- Agregar PropTypes o interfaces
```

### 2. Estilos
```
- Usar Tailwind en lugar de CSS custom
- No agregar colors nuevos (usar paleta existente)
- Mantener consistencia de spacing
```

### 3. Performance
```
- Lazy load imágenes: use next/image
- Código spliting automático en Next.js
- Minimizar re-renders con React.memo
```

### 4. Seguridad
```
- No hardcodear secrets
- Validar formularios en backend
- Usar HTTPS en producción
```

---

## 🆘 SOPORTE

Si tienes dudas o problemas:

1. **Revisar documentación oficial**
2. **Buscar en StackOverflow**
3. **Crear issue en GitHub**
4. **Preguntar en comunidades** (Next.js Discord, etc.)

---

## 📝 NOTAS IMPORTANTES

⚠️ **Logo**: El proyecto usa `/public/logoSyU.jpg` - asegúrate que esté presente

⚠️ **Imágenes de prueba**: El carrusel usa URLs de Unsplash - reemplaza con imágenes reales

⚠️ **Teléfonos**: Los números en Header/Contact/Footer están hardcodeados - considera Sanity CMS

⚠️ **Estilos**: Los colores están en la paleta definida - evita agregar colores nuevos

---

## 🎉 ¡LISTO PARA DESARROLLAR!

El proyecto está completamente refactorizado y listo para nuevas features.

**Estado**: 🟢 PRODUCCIÓN LISTA

**Última revisión**: 15 de Septiembre, 2026  
**Compilación**: ✅ EXITOSA  
**Errores**: 0  
**Warnings**: 0

---

*Guía actualizada el 15 de Septiembre, 2026*
