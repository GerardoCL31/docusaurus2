---
sidebar_position: 1
title: Frontend
description: Diseno del frontend publico y privado.
---

# Frontend

El frontend esta organizado alrededor de rutas publicas y privadas. Usa `react-router-dom` para la navegacion y rutas protegidas para limitar el acceso al dashboard.

## Paginas publicas

- Home.
- Carta.
- Eventos.
- Galeria.
- Contacto.
- Reservas.
- Legal.

## Paginas privadas

- Login.
- Dashboard con secciones de gestion.

## Servicios

Los servicios estan centralizados para:

- API general.
- Autenticacion.
- Reservas.
- Opiniones.
- Carta.
- Eventos.

El token de sesion se gestiona en `localStorage` y el estilo se organiza mediante CSS global y estilos por zonas.
