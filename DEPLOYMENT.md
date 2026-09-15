# GUÍA DE DESPLIEGUE - Salvamentos y Usados

## 🚀 Opciones de Despliegue Recomendadas

### 1. **Vercel (Recomendado - Gratis para Next.js)**

#### Pasos:
1. Instalar Vercel CLI:
```bash
npm install -g vercel
```

2. Iniciar sesión en Vercel:
```bash
vercel login
```

3. Desplegar el proyecto:
```bash
vercel
```

4. Configurar dominio:
   - En el dashboard de Vercel: Settings > Domains
   - Agregar dominio: salvamentosyusados.com
   - Seguir las instrucciones para apuntar los DNS

#### Ventajas:
- ✅ Gratis para proyectos Next.js
- ✅ Auto-deploy desde Git
- ✅ SSL automático
- ✅ CDN global
- ✅ Analytics incluido

---

### 2. **Netlify**

#### Pasos:
1. Conectar repositorio Git en netlify.com
2. Configurar build:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
3. Agregar variable de entorno:
   - `NEXT_PUBLIC_URL=https://salvamentosyusados.com`

#### Ventajas:
- ✅ Fácil configuración
- ✅ SSL automático
- ✅ Redirecciones simples
- ✅ Preview builds

---

### 3. **Servidor Propio (Dedicado/VPS)**

#### Requisitos:
- Node.js 18+ instalado
- npm o yarn
- Servidor Linux (Ubuntu 20.04+)

#### Pasos:

1. **Conectarse al servidor:**
```bash
ssh user@tu-servidor.com
```

2. **Instalar Node.js y npm:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Instalar Git y clonar repositorio:**
```bash
sudo apt-get install git
cd /var/www
git clone <tu-repo-url> salvamentosyusados
cd salvamentosyusados
```

4. **Instalar dependencias:**
```bash
npm install
```

5. **Construir para producción:**
```bash
npm run build
```

6. **Instalar PM2 (para mantener la app en ejecución):**
```bash
sudo npm install -g pm2
```

7. **Iniciar la aplicación con PM2:**
```bash
pm2 start npm --name "salvamentosyusados" -- start
pm2 startup
pm2 save
```

8. **Configurar Nginx como proxy inverso:**
```bash
sudo apt-get install nginx
```

Crear archivo `/etc/nginx/sites-available/salvamentosyusados`:
```nginx
server {
    listen 80;
    server_name salvamentosyusados.com www.salvamentosyusados.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

9. **Habilitar el sitio:**
```bash
sudo ln -s /etc/nginx/sites-available/salvamentosyusados /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

10. **Configurar SSL con Let's Encrypt:**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d salvamentosyusados.com -d www.salvamentosyusados.com
```

---

## 🌐 Configurar el Dominio

### En GoDaddy / NameCheap / Otros registradores:

1. Ir a **DNS Settings**
2. Agregar registros A:
   - **Host:** @ | **Type:** A | **Value:** [IP del servidor o Vercel]
   - **Host:** www | **Type:** CNAME | **Value:** [Dominio]

3. Esperar 24-48 horas para propagación DNS

---

## 📊 Verificación Post-Despliegue

- [ ] Sitio accesible en salvamentosyusados.com
- [ ] SSL funcionando (https://)
- [ ] Links a WhatsApp funcionan correctamente
- [ ] Links a redes sociales redirigen correctamente
- [ ] Sitio es responsive en móvil
- [ ] SEO metadata visible en inspector
- [ ] Formularios de contacto funcionan

---

## 🔄 Auto-Actualización con Git

Para auto-desplegar cuando hagas push a tu repositorio:

### Con Vercel:
- Conectar repositorio en Vercel dashboard
- Auto-deploy en cada push a main

### Con Netlify:
- Conectar repositorio en Netlify dashboard
- Auto-build en cada push

### Con servidor propio:
```bash
# En el servidor, crear webhook o usar:
cd /var/www/salvamentosyusados
git pull origin main
npm install
npm run build
pm2 restart salvamentosyusados
```

---

## 📧 Variables de Entorno (Si es necesario)

Crear archivo `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://salvamentosyusados.com
NEXT_PUBLIC_WHATSAPP_1=573155207311
NEXT_PUBLIC_WHATSAPP_2=573006588572
```

---

## 🆘 Solución de Problemas

### El sitio no carga:
- Verificar logs: `vercel logs` o `pm2 logs salvamentosyusados`
- Verificar DNS: `nslookup salvamentosyusados.com`

### Datos de contacto no funcionan:
- Verificar que los números tenén el código de país +57
- Probar links en navegador privado

### Rendimiento lento:
- Usar `npm run build && npm start` en servidor propio
- Verificar CDN en Vercel/Netlify
- Revisar Network tab en DevTools

---

## 📞 Contacto para Soporte

Si necesitas ayuda con el despliegue:
- WhatsApp: 315 5207311 o 300 6588572
- Instagram: @salvamentos.y.usados.oficial

---

**Última actualización:** 2026
**Versión:** 1.0
