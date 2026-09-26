# github-webhooks

Proyecto para probar webhooks de GitHub y enviar notificaciones a Discord.

## Requisitos

- Node.js instalado.
- Una URL de webhook de Discord.

## Configuración

1. Instalar dependencias:

```bash
npm install
```

2. Crear el archivo de variables de entorno:

```bash
cp .env.template .env
```

3. Obtener la URL del webhook de Discord:

   - Entrar al servidor de Discord.
   - Ir al canal donde se quieren recibir las notificaciones.
   - Abrir **Editar canal**.
   - Ir a **Integraciones**.
   - Crear un **Webhook**.
   - Copiar la URL generada por Discord.

4. Pegar la URL en el archivo `.env`:

```env
PORT=3000
DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..."
```

## Levantar el proyecto

Para desarrollo:

```bash
npm run dev
```

El servidor queda escuchando en:

```text
http://localhost:3000
```

El endpoint que recibe eventos de GitHub es:

```text
POST /api/github
```

## Probar con GitHub

Para conectar GitHub con este proyecto:

1. Publicar tu servidor local con una herramienta como `ngrok`, porque GitHub necesita una URL pública.
2. Crear un webhook en el repositorio de GitHub.
3. Usar esta URL como destino:

```text
https://TU_URL_PUBLICA/api/github
```

4. Enviar los eventos que quieras probar desde GitHub.

## Scripts disponibles

```bash
npm run dev     # Levanta el proyecto en modo desarrollo
npm run build   # Compila TypeScript en dist/
npm start       # Compila y ejecuta dist/app.js
```
