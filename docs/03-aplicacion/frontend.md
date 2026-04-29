---
sidebar_position: 1
title: Frontend
description: Diseño del frontend público y privado.
---

# Frontend

El frontend está organizado alrededor de rutas públicas y privadas. Usa `react-router-dom` para la navegación y rutas protegidas para limitar el acceso al dashboard.

## Páginas públicas

- Home.
- Carta.
- Eventos.
- Galeria.
- Contacto.
- Reservas.
- Legal.

## Páginas privadas

- Login.
- Dashboard con secciones de gestión.

## Servicios

Los servicios están centralizados para:

- API general.
- Autenticación.
- Reservas.
- Opiniones.
- Carta.
- Eventos.

El token de sesión se gestiona en `localStorage` y el estilo se organiza mediante CSS global y estilos por zonas.
