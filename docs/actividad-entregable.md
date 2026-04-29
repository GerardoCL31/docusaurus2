---
sidebar_position: 2
title: Actividad entregable
description: Resumen evaluable de arquitectura, uso, lanzamiento, despliegue y flujo Git.
---

# Actividad entregable

Esta página resume los puntos técnicos principales solicitados para la entrega de CoronaHUB.

## Arquitectura de la aplicación

CoronaHUB usa una arquitectura cliente-servidor en monorepo.

| Parte | Responsabilidad | Tecnología |
| --- | --- | --- |
| Cliente | Interfaz pública y panel privado | React |
| Servidor | API REST, autenticación y reglas de negocio | Node.js y Express |
| Persistencia | Reservas, opiniones y configuración editable | MongoDB o archivo JSON |

La aplicación separa la presentación, la lógica de negocio y la persistencia. El frontend consume la API del backend mediante endpoints HTTP bajo el prefijo `/api`.

## Cliente y servidor

El cliente web contiene las rutas públicas del bar y las pantallas privadas de administración. El servidor expone endpoints REST, valida datos, aplica reglas funcionales y protege las rutas internas con JWT.

```text
client/   -> aplicación React
server/   -> API REST con Express
tests/    -> pruebas automatizadas
docs/     -> documentación técnica
```

## Lenguajes de programacion

- JavaScript para frontend, backend, configuración y pruebas.
- JSX para componentes React.
- CSS para estilos de interfaz.
- Markdown para documentación.

## Requisitos de versión

- Node.js 20 o superior.
- npm incluido con Node.js.
- Navegador moderno compatible con React.
- MongoDB opcional si se usa `DB_MODE=mongo` o `DB_MODE=auto`.

## Backend

El backend está construido con Node.js y Express. Sus responsabilidades son:

- Exponer la API REST.
- Validar entradas con Zod.
- Gestionar autenticación con JWT.
- Aplicar reglas de reservas, opiniones, carta y eventos.
- Conectar con MongoDB o usar almacenamiento en archivo según configuración.

### Endpoints

| Metodo | Endpoint | Acceso | Uso |
| --- | --- | --- | --- |
| `GET` | `/api/health` | Público | Comprobar estado del servidor |
| `GET` | `/api/menu` | Público | Consultar la carta |
| `GET` | `/api/events` | Público | Consultar eventos |
| `GET` | `/api/reviews` | Público | Ver opiniones aprobadas |
| `POST` | `/api/reviews` | Público | Crear una opinión pendiente |
| `POST` | `/api/reservations` | Público | Crear una reserva |
| `POST` | `/api/auth/login` | Público | Iniciar sesión de administración |
| `GET` | `/api/admin/*` | Privado | Consultas internas del panel |
| `POST` | `/api/admin/*` | Privado | Creación o actualización interna |
| `PUT` | `/api/admin/*` | Privado | Modificación de datos internos |
| `DELETE` | `/api/admin/*` | Privado | Eliminación de datos internos |

### Autenticación

La autenticación se basa en JWT:

- El administrador inicia sesión con credenciales configuradas en variables de entorno.
- El backend devuelve un token firmado.
- El frontend guarda el token en `localStorage`.
- Las rutas privadas envían el token en la cabecera `Authorization: Bearer <token>`.
- El middleware del servidor valida el token antes de permitir operaciones bajo `/api/admin/*`.

Medidas complementarias:

- Expiración de token de 2 horas.
- `helmet` para cabeceras de seguridad.
- CORS configurable.
- Rate limit en login y opiniones.
- Hash de IP con `IP_HASH_SALT`.

### OpenAPI

No se incluye un contrato OpenAPI obligatorio en la entrega actual. Se puede añadir como mejora generando un archivo `openapi.yaml` a partir de la tabla de endpoints y de los esquemas Zod del backend.

## Frontend

El frontend está construido con React y `react-router-dom`.

### Componentes y páginas

| Zona | Componentes o páginas |
| --- | --- |
| Pública | Home, carta, eventos, galería, contacto, reservas y legal |
| Privada | Login y dashboard de administración |
| Servicios | API general, autenticación, reservas, opiniones, carta y eventos |

El frontend centraliza las llamadas HTTP en servicios para evitar duplicación y mantener separada la lógica de comunicación con la API.

## Uso

### Registro

La aplicación no implementa registro público de usuarios. El acceso privado está pensado para un administrador del negocio con credenciales creadas por configuración.

### Inicio de sesión

1. El administrador entra en la página de login.
2. Introduce usuario y contraseña.
3. El frontend envía la petición a `/api/auth/login`.
4. Si las credenciales son válidas, se guarda el JWT.
5. El usuario accede al dashboard privado.

### Uso general

Un visitante puede:

- Ver información del bar.
- Consultar carta y eventos.
- Enviar una reserva.
- Enviar una opinión.
- Consultar información de contacto y legal.

Un administrador puede:

- Ver reservas recibidas.
- Gestionar opiniones pendientes.
- Actualizar carta, eventos, imágenes y textos.
- Mantener el contenido público sin modificar código.

## Lanzamiento en local

### Requisitos

- Node.js 20 o superior.
- npm.
- MongoDB si se quiere usar base de datos real.
- Archivo `.env` configurado para el backend.

### Instalación y ejecución

```bash
npm install
npm run dev
```

Si se trabaja por separado:

```bash
cd server
npm install
npm run dev
```

```bash
cd client
npm install
npm start
```

### Base de datos

La aplicación puede funcionar en tres modos:

| Modo | Uso |
| --- | --- |
| `DB_MODE=mongo` | Usa MongoDB obligatoriamente |
| `DB_MODE=file` | Usa archivo JSON local |
| `DB_MODE=auto` | Intenta MongoDB y usa archivo local como fallback en desarrollo |

### API keys y login social

No se requiere login social con Google ni proveedores externos. Tampoco se necesita API key para autenticación social. Si se activa Telegram, sí haría falta configurar el token del bot y el chat de destino.

## Despliegue

El proyecto se despliega separando frontend y backend:

- Frontend: hosting estático después de generar la build.
- Backend: servicio Node.js en Render u otra plataforma compatible.
- Base de datos: MongoDB Atlas o una instancia MongoDB accesible desde el backend.

### Proceso recomendado

1. Configurar variables de entorno en el proveedor cloud.
2. Instalar dependencias.
3. Ejecutar tests.
4. Generar build del frontend.
5. Públicar frontend como estático.
6. Públicar backend como servicio Node.js.
7. Validar `/api/health`.

### Variables de entorno

Variables habituales:

| Variable | Uso |
| --- | --- |
| `NODE_ENV` | Entorno de ejecución |
| `PORT` | Puerto del backend |
| `DB_MODE` | Modo de persistencia |
| `MONGODB_URI` | Conexión a MongoDB |
| `JWT_SECRET` | Firma de tokens |
| `ADMIN_USER` | Usuario administrador |
| `ADMIN_PASSWORD_HASH` | Hash de contraseña |
| `CORS_ORIGIN` | Origen permitido del frontend |
| `IP_HASH_SALT` | Sal para anonimizar IP |
| `TELEGRAM_BOT_TOKEN` | Token del bot, si se usa Telegram |
| `TELEGRAM_CHAT_ID` | Chat de destino, si se usa Telegram |

## Despliegue continuo

El flujo de despliegue continuo recomendado es:

1. Push a GitHub.
2. Ejecución de tests y build en CI.
3. Merge a `main` solo si las comprobaciones pasan.
4. Despliegue automático del backend y del frontend desde `main`.

Se puede implementar con GitHub Actions, Render Deploy Hooks o la integración automática del proveedor de hosting.

## GitHub

### Monorepo o multirepo

CoronaHUB se organiza como monorepo. En un único repositorio viven frontend, backend, tests y documentación.

### Ramas

Flujo recomendado:

- `main`: rama estable y desplegable.
- `develop`: integración previa si se quiere separar trabajo y producción.
- `feature/nombre-corto`: desarrollo de funcionalidades concretas.
- `fix/nombre-corto`: corrección de errores.

### Integración en main

1. Crear rama desde `main` o `develop`.
2. Hacer commits pequeños y revisables.
3. Ejecutar tests y build.
4. Abrir pull request.
5. Revisar cambios.
6. Fusionar en `main` cuando todo esté validado.

### Estructura de commits

Se recomienda usar Conventional Commits:

| Tipo | Uso | Ejemplo |
| --- | --- | --- |
| `feat` | Nueva funcionalidad | `feat: add reservation form` |
| `fix` | Corrección de error | `fix: validate duplicated reservations` |
| `docs` | Documentación | `docs: add deployment guide` |
| `test` | Pruebas | `test: cover auth middleware` |
| `refactor` | Cambio interno sin alterar comportamiento | `refactor: simplify menu service` |
| `chore` | Tareas de mantenimiento | `chore: update dependencies` |

Los mensajes deben ser claros, en imperativo y relacionados con una unidad lógica de cambio.
