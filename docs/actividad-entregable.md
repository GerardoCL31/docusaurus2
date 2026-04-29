---
sidebar_position: 2
title: Actividad entregable
description: Resumen evaluable de arquitectura, uso, lanzamiento, despliegue y flujo Git.
---

# Actividad entregable

Esta pagina resume los puntos tecnicos principales solicitados para la entrega de CoronaHUB.

## Arquitectura de la aplicacion

CoronaHUB usa una arquitectura cliente-servidor en monorepo.

| Parte | Responsabilidad | Tecnologia |
| --- | --- | --- |
| Cliente | Interfaz publica y panel privado | React |
| Servidor | API REST, autenticacion y reglas de negocio | Node.js y Express |
| Persistencia | Reservas, opiniones y configuracion editable | MongoDB o archivo JSON |

La aplicacion separa la presentacion, la logica de negocio y la persistencia. El frontend consume la API del backend mediante endpoints HTTP bajo el prefijo `/api`.

## Cliente y servidor

El cliente web contiene las rutas publicas del bar y las pantallas privadas de administracion. El servidor expone endpoints REST, valida datos, aplica reglas funcionales y protege las rutas internas con JWT.

```text
client/   -> aplicacion React
server/   -> API REST con Express
tests/    -> pruebas automatizadas
docs/     -> documentacion tecnica
```

## Lenguajes de programacion

- JavaScript para frontend, backend, configuracion y pruebas.
- JSX para componentes React.
- CSS para estilos de interfaz.
- Markdown para documentacion.

## Requisitos de version

- Node.js 20 o superior.
- npm incluido con Node.js.
- Navegador moderno compatible con React.
- MongoDB opcional si se usa `DB_MODE=mongo` o `DB_MODE=auto`.

## Backend

El backend esta construido con Node.js y Express. Sus responsabilidades son:

- Exponer la API REST.
- Validar entradas con Zod.
- Gestionar autenticacion con JWT.
- Aplicar reglas de reservas, opiniones, carta y eventos.
- Conectar con MongoDB o usar almacenamiento en archivo segun configuracion.

### Endpoints

| Metodo | Endpoint | Acceso | Uso |
| --- | --- | --- | --- |
| `GET` | `/api/health` | Publico | Comprobar estado del servidor |
| `GET` | `/api/menu` | Publico | Consultar la carta |
| `GET` | `/api/events` | Publico | Consultar eventos |
| `GET` | `/api/reviews` | Publico | Ver opiniones aprobadas |
| `POST` | `/api/reviews` | Publico | Crear una opinion pendiente |
| `POST` | `/api/reservations` | Publico | Crear una reserva |
| `POST` | `/api/auth/login` | Publico | Iniciar sesion de administracion |
| `GET` | `/api/admin/*` | Privado | Consultas internas del panel |
| `POST` | `/api/admin/*` | Privado | Creacion o actualizacion interna |
| `PUT` | `/api/admin/*` | Privado | Modificacion de datos internos |
| `DELETE` | `/api/admin/*` | Privado | Eliminacion de datos internos |

### Autenticacion

La autenticacion se basa en JWT:

- El administrador inicia sesion con credenciales configuradas en variables de entorno.
- El backend devuelve un token firmado.
- El frontend guarda el token en `localStorage`.
- Las rutas privadas envian el token en la cabecera `Authorization: Bearer <token>`.
- El middleware del servidor valida el token antes de permitir operaciones bajo `/api/admin/*`.

Medidas complementarias:

- Expiracion de token de 2 horas.
- `helmet` para cabeceras de seguridad.
- CORS configurable.
- Rate limit en login y opiniones.
- Hash de IP con `IP_HASH_SALT`.

### OpenAPI

No se incluye un contrato OpenAPI obligatorio en la entrega actual. Se puede anadir como mejora generando un archivo `openapi.yaml` a partir de la tabla de endpoints y de los esquemas Zod del backend.

## Frontend

El frontend esta construido con React y `react-router-dom`.

### Componentes y paginas

| Zona | Componentes o paginas |
| --- | --- |
| Publica | Home, carta, eventos, galeria, contacto, reservas y legal |
| Privada | Login y dashboard de administracion |
| Servicios | API general, autenticacion, reservas, opiniones, carta y eventos |

El frontend centraliza las llamadas HTTP en servicios para evitar duplicacion y mantener separada la logica de comunicacion con la API.

## Uso

### Registro

La aplicacion no implementa registro publico de usuarios. El acceso privado esta pensado para un administrador del negocio con credenciales creadas por configuracion.

### Inicio de sesion

1. El administrador entra en la pagina de login.
2. Introduce usuario y contrasena.
3. El frontend envia la peticion a `/api/auth/login`.
4. Si las credenciales son validas, se guarda el JWT.
5. El usuario accede al dashboard privado.

### Uso general

Un visitante puede:

- Ver informacion del bar.
- Consultar carta y eventos.
- Enviar una reserva.
- Enviar una opinion.
- Consultar informacion de contacto y legal.

Un administrador puede:

- Ver reservas recibidas.
- Gestionar opiniones pendientes.
- Actualizar carta, eventos, imagenes y textos.
- Mantener el contenido publico sin modificar codigo.

## Lanzamiento en local

### Requisitos

- Node.js 20 o superior.
- npm.
- MongoDB si se quiere usar base de datos real.
- Archivo `.env` configurado para el backend.

### Instalacion y ejecucion

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

La aplicacion puede funcionar en tres modos:

| Modo | Uso |
| --- | --- |
| `DB_MODE=mongo` | Usa MongoDB obligatoriamente |
| `DB_MODE=file` | Usa archivo JSON local |
| `DB_MODE=auto` | Intenta MongoDB y usa archivo local como fallback en desarrollo |

### API keys y login social

No se requiere login social con Google ni proveedores externos. Tampoco se necesita API key para autenticacion social. Si se activa Telegram, si haria falta configurar el token del bot y el chat de destino.

## Despliegue

El proyecto se despliega separando frontend y backend:

- Frontend: hosting estatico despues de generar la build.
- Backend: servicio Node.js en Render u otra plataforma compatible.
- Base de datos: MongoDB Atlas o una instancia MongoDB accesible desde el backend.

### Proceso recomendado

1. Configurar variables de entorno en el proveedor cloud.
2. Instalar dependencias.
3. Ejecutar tests.
4. Generar build del frontend.
5. Publicar frontend como estatico.
6. Publicar backend como servicio Node.js.
7. Validar `/api/health`.

### Variables de entorno

Variables habituales:

| Variable | Uso |
| --- | --- |
| `NODE_ENV` | Entorno de ejecucion |
| `PORT` | Puerto del backend |
| `DB_MODE` | Modo de persistencia |
| `MONGODB_URI` | Conexion a MongoDB |
| `JWT_SECRET` | Firma de tokens |
| `ADMIN_USER` | Usuario administrador |
| `ADMIN_PASSWORD_HASH` | Hash de contrasena |
| `CORS_ORIGIN` | Origen permitido del frontend |
| `IP_HASH_SALT` | Sal para anonimizar IP |
| `TELEGRAM_BOT_TOKEN` | Token del bot, si se usa Telegram |
| `TELEGRAM_CHAT_ID` | Chat de destino, si se usa Telegram |

## Despliegue continuo

El flujo de despliegue continuo recomendado es:

1. Push a GitHub.
2. Ejecucion de tests y build en CI.
3. Merge a `main` solo si las comprobaciones pasan.
4. Despliegue automatico del backend y del frontend desde `main`.

Se puede implementar con GitHub Actions, Render Deploy Hooks o la integracion automatica del proveedor de hosting.

## GitHub

### Monorepo o multirepo

CoronaHUB se organiza como monorepo. En un unico repositorio viven frontend, backend, tests y documentacion.

### Ramas

Flujo recomendado:

- `main`: rama estable y desplegable.
- `develop`: integracion previa si se quiere separar trabajo y produccion.
- `feature/nombre-corto`: desarrollo de funcionalidades concretas.
- `fix/nombre-corto`: correccion de errores.

### Integracion en main

1. Crear rama desde `main` o `develop`.
2. Hacer commits pequenos y revisables.
3. Ejecutar tests y build.
4. Abrir pull request.
5. Revisar cambios.
6. Fusionar en `main` cuando todo este validado.

### Estructura de commits

Se recomienda usar Conventional Commits:

| Tipo | Uso | Ejemplo |
| --- | --- | --- |
| `feat` | Nueva funcionalidad | `feat: add reservation form` |
| `fix` | Correccion de error | `fix: validate duplicated reservations` |
| `docs` | Documentacion | `docs: add deployment guide` |
| `test` | Pruebas | `test: cover auth middleware` |
| `refactor` | Cambio interno sin alterar comportamiento | `refactor: simplify menu service` |
| `chore` | Tareas de mantenimiento | `chore: update dependencies` |

Los mensajes deben ser claros, en imperativo y relacionados con una unidad logica de cambio.
