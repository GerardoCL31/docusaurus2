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
| `auto` | Intenta MongoDB y aplica fallback automático en desarrollo |

## Entidades principales

- `Review`: opiniones enviadas por clientes y moderadas por administración.
- `Reservation`: solicitudes de reserva con estado y datos de contacto.
- `Settings`: configuración editable de carta, eventos, imágenes y textos.

## Datos iniciales

- `menu.default.js`.
- `events.default.js`.
