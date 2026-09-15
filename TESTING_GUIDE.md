# ✅ GUÍA DE TESTING - REDISEÑO HEADER Y HERO

**Estado:** Listo para Testing Local  
**Compilación:** ✅ Exitosa (0 errores)  
**Fecha:** 2026-09-15

---

## 🚀 CÓMO PROBAR LOCALMENTE

### Paso 1: Inicia el servidor de desarrollo
```powershell
cd c:\salva
npm run dev
```

Verás:
```
   ▲ Next.js 16.3.5 (Turbopack)
   - Local:        http://localhost:3000
```

### Paso 2: Abre en el navegador
- **Desktop:** http://localhost:3000
- **Mobile:** http://localhost:3000 (usa DevTools con Ctrl+Shift+I)

---

## 📋 CHECKLIST DE COMPONENTES

### 🔧 Header - Testing

- [ ] **Logo Aparece Correctamente**
  - Logo SVG visible en la esquina superior izquierda
  - Proporciones correctas (alto ~64px)
  - Amarillo y negro visibles

- [ ] **Navegación Desktop**
  - Links: Inicio, Nosotros, Catálogo, Contacto
  - Underline animation en hover
  - Color negro en texto
  - Spacing uniforme

- [ ] **Navegación Mobile (< 768px)**
  - Botón hamburger visible (3 líneas horizontales)
  - Click abre/cierra menú
  - Menú desplegable muestra todos los links
  - WhatsApp CTA visible en menú

- [ ] **Botones CTA**
  - "Ver Catálogo" (Amarillo) → Click scrollea a #instagram
  - "Contactar por WhatsApp" (Verde) → Click abre WhatsApp
  - Hover effect: se agranda (scale-105)
  - Sombra aumenta en hover

- [ ] **Posición Sticky**
  - Header permanece arriba al scroll
  - Z-index correcto (no se ocultará)
  - Fondo blanco con border gris

---

### 🎨 Hero Section - Testing

#### Contenido Izquierdo

- [ ] **Título Principal**
  - "Compra y Venta de" en gris oscuro
  - "Vehículos Usados" en gradiente amarillo
  - Font muy grande (36-56px)
  - Responsive: se adapta en móvil

- [ ] **Subtítulo y Descripción**
  - Texto: "Empresa con 8 años de experiencia..."
  - Subtexto con checkmarks: ✓ Evaluación, ✓ Precios, ✓ Cambio
  - Colores grises con buena legibilidad

- [ ] **Botones de Acción**
  - "Ver Catálogo" con icono Instagram
    - Color: Amarillo gradiente
    - Hover: más oscuro + escala
  
  - "Contactar por WhatsApp" con icono WhatsApp
    - Color: Verde WhatsApp (#10B981)
    - Abre WhatsApp en nueva pestaña
    - Hover: más oscuro + escala

- [ ] **Estadísticas (Stats)**
  - Grid de 3 columnas
  - "8+ años", "100+ vehículos", "24/7 soporte"
  - Números en amarillo
  - Texto descripciónen gris
  - Mobile: stack vertical

#### Carrusel de Vehículos (Lado Derecho)

- [ ] **Carrusel Funcional**
  - Muestra imagen grande del vehículo
  - Autoplay: cambia slide cada 4 segundos
  - Smooth fade effect entre slides

- [ ] **Controles de Navegación**
  - Flechas (< >) en los lados
  - Clickeable para navegar manualmente
  - Botones con fondo blanco/transparente

- [ ] **Paginación**
  - Bullets (•) al pie del carrusel
  - Bullets amarillos → blancos cuando activos
  - Clickeable: click en bullet salta a ese slide

- [ ] **Contenido del Slide**
  - Categoría: "SALVAMENTO", "USADO", "MOTOCICLETA"
  - Título del vehículo (ej: "Vehículo Salvamento")
  - Dos botones: "Consultar" (verde) + "Ver más" (amarillo)
  - Overlay gradiente negro abajo

- [ ] **Responsive**
  - Desktop: Alto 500px
  - Tablet: Alto 400px
  - Mobile: Alto 384px
  - Imagen siempre fullwidth

#### Layout Responsivo

- [ ] **Desktop (> 1024px)**
  - 2 columnas lado a lado
  - Contenido izquierda, carrusel derecha
  - Proporción 50/50

- [ ] **Tablet (768px - 1024px)**
  - 2 columnas apretadas
  - Gap reducido entre elementos

- [ ] **Mobile (< 768px)**
  - 1 columna (stack vertical)
  - Contenido arriba, carrusel abajo
  - Fullwidth sin margen externo

---

## 🎯 TESTING VISUAL - COLORES

| Elemento | Color Esperado | Hex | Verificado |
|----------|---|---|---|
| Logo círculo | Amarillo brillante | #F5C200 | ☐ |
| Logo texto | Negro | #111111 | ☐ |
| Header bg | Blanco | #FFFFFF | ☐ |
| Header border | Gris claro | #E5E7EB | ☐ |
| Botón Catálogo | Amarillo gradiente | #F59E0B-#FBBF24 | ☐ |
| Botón WhatsApp | Verde | #10B981 | ☐ |
| Título gradiente | Amarillo | #FBBF24 | ☐ |
| Stats números | Amarillo | #F59E0B | ☐ |
| Swiper bullets | Amarillo | #F59E0B | ☐ |

---

## 🔗 TESTING DE LINKS

### Botones a Probar (Desktop)

1. **Header - Logo**
   - Click: Debe llevar al #inicio
   - Scroll suave a top

2. **Header - "Ver Catálogo"**
   - Click: Scroll a sección #instagram
   - Smooth scroll effect

3. **Header - "Contactar por WhatsApp"**
   - Click: Abre WhatsApp en nueva ventana
   - Link: https://wa.me/573155207311

4. **Hero - "Ver Catálogo"**
   - Click: Scroll a #instagram
   - Same behavior as header

5. **Hero - "Contactar por WhatsApp"**
   - Click: Abre WhatsApp
   - Same number: 573155207311

6. **Slide Carrusel - "Consultar"**
   - Click: Abre WhatsApp
   - Número: 573155207311

7. **Slide Carrusel - "Ver más"**
   - Click: Scroll a #instagram

---

## 📱 TESTING EN MOBILE (DevTools)

### Viewport Sizes a Probar

```
iPhone 12/13 (390x844)
- Header hamburger aparece
- Menú desplegable funciona
- Hero content apilado vertical
- Carrusel visible, navigation minimal

iPad (768x1024)
- 2 columnas estrechas
- Header normal (no hamburger)
- Stats en 3 columnas

Samsung S21 (360x800)
- Responsive completo
- Textos legibles
- Botones clickeables
```

---

## ⚡ PERFORMANCE CHECKS

### Lighthouse Esperado
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 90+
- **SEO:** 95+

### Cómo verificar:
1. Abre DevTools (F12)
2. Tab "Lighthouse"
3. Click "Analyze page load"

---

## 🎭 TESTING DE INTERACTIVIDAD

### Animations
- [ ] Slide-in-up: Contenido entra desde abajo
- [ ] Fade effect en carrusel
- [ ] Hover scale (105%) en botones

### Estados Hover
- [ ] Botones cambian color
- [ ] Botones aumentan de tamaño
- [ ] Sombras aumentan
- [ ] Duraciones: 300ms

### Autoplay Carrusel
- [ ] Cambia automáticamente cada 4 segundos
- [ ] Se pausa si clickeas botón (disableOnInteraction: false = continúa)
- [ ] Loop continuo (vuelve al inicio)

---

## 🐛 PROBLEMAS COMUNES Y SOLUCIONES

### Problema: El carrusel no muestra imágenes
**Causa:** Las URLs de Unsplash pueden bloquearse  
**Solución:** 
```powershell
# Reemplaza URLs en HeroSection.tsx
const vehiculos = [
  {
    image: "http://tudominio.com/imagen-real.jpg"
  }
]
```

### Problema: Logo SVG muy pequeño/grande
**Solución:** Ajusta en Header.tsx
```tsx
<Logo />  {/* className="w-auto h-16" */}
// Cambia h-16 por h-14, h-20, etc.
```

### Problema: Header no es sticky en mobile
**Solución:** Verifica z-index en Header
```tsx
<header className="sticky top-0 z-50">
```

---

## 📊 TESTING CHECKLIST FINAL

### Funcionalidad ✅
- [ ] Header sticky funciona
- [ ] Logo clickeable (scroll a inicio)
- [ ] Nav links funcionan
- [ ] Mobile hamburger abre/cierra
- [ ] Todos los botones llevan a destinos correctos
- [ ] Carrusel autoplay
- [ ] Navegación carrusel (flechas y bullets)
- [ ] Scroll smooth activado

### Visual ✅
- [ ] Colores corporativos correctos
- [ ] Tipografía legible
- [ ] Espacios (padding/margin) uniformes
- [ ] Sombras sutiles pero visibles
- [ ] Bordes redondeados consistentes
- [ ] Responsive perfecto en todos tamaños

### Performance ✅
- [ ] Carrusel no causa lag
- [ ] Transiciones suaves (60fps)
- [ ] Imágenes cargan rápido
- [ ] No hay errores en console
- [ ] Bundle size razonable

### Accesibilidad ✅
- [ ] Links descriptivos
- [ ] Contraste suficiente
- [ ] Navegación con teclado (Tab)
- [ ] Botones son buttons, no divs

---

## 🆘 DEBUGGING

Si algo no funciona:

### 1. Abre Console (F12 → Console Tab)
Busca errores rojos. Nota el mensaje exacto.

### 2. Verifica Network (F12 → Network Tab)
- Imágenes se cargan correctamente
- No hay 404 errors
- Archivos CSS/JS presentes

### 3. Elemento Inspector (F12 → Elements Tab)
- Click derecho en elemento
- "Inspect Element"
- Revisa estilos CSS aplicados

### 4. Recompila si es necesario
```powershell
npm run build
npm start
```

---

## 📞 CONTACTO PARA TESTING

**WhatsApp Number:** +573155207311  
**Instagram:** @salvamentos.y.usados.oficial  
**Verificar:** Los números coincidan en todo el sitio

---

## ✅ ESTADO ACTUAL

```
Build:         ✅ Exitoso (0 errores)
Compilación:   ✅ 2.6 segundos
TypeScript:    ✅ Sin errores
CSS:           ✅ Validado
Components:    ✅ Listos
Ready:         ✅ Testing Ready
```

---

## 🎉 RECOMENDACIÓN FINAL

El sitio está **LISTO PARA PROBAR** en ambiente local. 

Todos los componentes:
- ✅ Compilan sin errores
- ✅ Tienen todos los estilos
- ✅ Funcionalidad implementada
- ✅ Responsive diseño

**Siguiente paso:** 
1. Ejecuta `npm run dev`
2. Abre http://localhost:3000
3. Sigue este checklist
4. Reporta cualquier issue

---

**Happy Testing! 🚀**

