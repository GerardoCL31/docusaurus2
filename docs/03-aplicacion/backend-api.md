---
sidebar_position: 2
title: Backend y API
description: Rutas publicas, privadas, validaciones y reglas funcionales.
---

# Backend y API

## Rutas publicas

| Ruta | Uso |
| --- | --- |
| `/api/health` | Comprobacion del estado del servidor |
| `/api/menu` | Consulta de carta |
| `/api/events` | Consulta de eventos |
| `/api/reviews` | Gestion publica de opiniones |
| `/api/reservations` | Creacion de reservas |

## Rutas privadas

Las rutas privadas se agrupan bajo `/api/admin/*` y estan protegidas con JWT.

## Validacion

Zod valida:

- Login.
- Carta.
- Eventos.
- Reservas.
- Opiniones.

## Reglas funcionales

- Las opiniones quedan pendientes hasta su aprobacion.
- Las reservas deben ser futuras.
- No se permiten reservas en domingo.
- Se evitan reservas duplicadas.
- Carta y eventos mantienen una estructura fija.
