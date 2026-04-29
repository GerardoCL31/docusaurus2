---
sidebar_position: 2
title: Backend y API
description: Rutas públicas, privadas, validaciones y reglas funcionales.
---

# Backend y API

## Rutas públicas

| Ruta | Uso |
| --- | --- |
| `/api/health` | Comprobación del estado del servidor |
| `/api/menu` | Consulta de carta |
| `/api/events` | Consulta de eventos |
| `/api/reviews` | Gestión pública de opiniones |
| `/api/reservations` | Creación de reservas |

## Rutas privadas

Las rutas privadas se agrupan bajo `/api/admin/*` y están protegidas con JWT.

## Validación

Zod valida:

- Login.
- Carta.
- Eventos.
- Reservas.
- Opiniones.

## Reglas funcionales

- Las opiniones quedan pendientes hasta su aprobación.
- Las reservas deben ser futuras.
- No se permiten reservas en domingo.
- Se evitan reservas duplicadas.
- Carta y eventos mantienen una estructura fija.
