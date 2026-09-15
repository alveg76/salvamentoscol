# Guía Rápida de Inicio - Salvamentos y Usados

## 🚀 Iniciar Proyecto en Desarrollo

### Paso 1: Abrir Terminal
Abre PowerShell y navega a la carpeta del proyecto:
```powershell
cd c:\salva
```

### Paso 2: Instalar Dependencias
Si es la primera vez:
```powershell
npm install
```

### Paso 3: Ejecutar Servidor de Desarrollo
```powershell
npm run dev
```

### Paso 4: Abrir en Navegador
- Ve a: **http://localhost:3000**
- Deberías ver la página de Salvamentos y Usados

---

## 📝 Estructura del Proyecto

### Componentes (en `src/components/`)
- **Header.tsx** - Barra superior con navegación
- **HeroSection.tsx** - Banner principal con CTA
- **AboutSection.tsx** - Información sobre la empresa
- **InstagramSection.tsx** - Catálogo y link a Instagram
- **ContactSection.tsx** - Todos los contactos y redes
- **Footer.tsx** - Pie de página

### Páginas (en `src/app/`)
- **page.tsx** - Página de inicio (combina todos los componentes)
- **layout.tsx** - Layout general
- **globals.css** - Estilos globales

---

## 🎨 Cómo Personalizar

### Cambiar Colores
Editar `src/app/globals.css`:
```css
:root {
  --color-primary: #FFD700;      /* Amarillo */
  --color-secondary: #1a1a1a;    /* Negro */
  --color-accent: #FFB81C;       /* Amarillo oscuro */
}
```

### Cambiar Texto
Editar los componentes en `src/components/`:
- Busca el texto que quieres cambiar
- Modifica y guarda
- El sitio se recarga automáticamente

### Cambiar Redes Sociales
En `src/components/HeroSection.tsx`, `ContactSection.tsx`, etc.:
```tsx
href="https://www.instagram.com/tu-usuario"
```

---

## 📞 Actualizar Contacto

### Teléfonos
Buscar en todos los componentes:
- `300 6588572` → Cambiar por tu número
- `315 5207311` → Cambiar por tu número
- `573006588572` → Cambiar (código país + número)
- `573155207311` → Cambiar (código país + número)

### WhatsApp Links
En `HeroSection.tsx` y `ContactSection.tsx`:
```tsx
href="https://wa.me/573006588572"  // Cambiar número
```

---

## 🏗 Construir para Producción

```powershell
npm run build
```

Esto crea la carpeta `.next/` lista para despliegue.

---

## 🌐 Despliegue

Ver archivo **DEPLOYMENT.md** para instrucciones completas.

Opción más fácil: **Vercel**
1. Ir a https://vercel.com
2. Conectar tu repositorio Git
3. Despliegue automático en cada push

---

## 🆘 Problemas Comunes

### Error: "npm command not found"
- Instala Node.js desde https://nodejs.org (versión 18+)

### El sitio no se actualiza
- Cierra el servidor (Ctrl+C)
- Ejecuta `npm run dev` de nuevo
- Recarga el navegador (Ctrl+F5)

### Puerto 3000 en uso
```powershell
npm run dev -- -p 3001
```
Luego accede a http://localhost:3001

---

## 📊 Verificar Despliegue

Una vez publicado en tu dominio (salvamentosyusados.com):
- [ ] Página carga rápido
- [ ] Diseño se ve bien en móvil
- [ ] Links a WhatsApp abren WhatsApp
- [ ] Links a Instagram/Facebook/TikTok funcionan
- [ ] HTTPS aparece en la URL

---

## 💡 Tips

1. **Usa el Inspector** (F12) para revisar:
   - Errores en Console
   - SEO metadata en Head
   - Responsive design

2. **Prueba en móvil** visitando en tu teléfono

3. **Optimiza imágenes** si las agregas

4. **Verifica los links** en todas las secciones

---

¡Tu página de Salvamentos y Usados está lista! 🚗✨
