---
sidebar_position: 3
title: Persistencia
description: Modos de almacenamiento y entidades principales.
---

# Persistencia y modelo de datos

CoronaHUB permite tres modos de persistencia.

| Modo | Descripcion |
| --- | --- |
| `mongo` | Usa MongoDB como base de datos principal |
| `file` | Usa archivo JSON local |
| `auto` | Intenta MongoDB y aplica fallback automatico en desarrollo |

## Entidades principales

- `Review`: opiniones enviadas por clientes y moderadas por administracion.
- `Reservation`: solicitudes de reserva con estado y datos de contacto.
- `Settings`: configuracion editable de carta, eventos, imagenes y textos.

## Datos iniciales

- `menu.default.js`.
- `events.default.js`.
