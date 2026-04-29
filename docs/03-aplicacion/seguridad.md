---
sidebar_position: 3
title: Seguridad
description: Medidas de autenticación, control de acceso y protección de endpoints.
---

# Seguridad y control de acceso

El sistema incorpora medidas para proteger la zona privada y reducir abusos sobre endpoints sensibles.

## Medidas principales

- JWT con expiración de 2 horas.
- Middleware de autenticación.
- Rate limiting en login y opiniones.
- Helmet.
- CORS configurable.
- Hash de IP mediante `IP_HASH_SALT`.

## Zona privada

El panel de administración requiere autenticación. Las operaciones internas se exponen bajo rutas protegidas y no quedan disponibles para usuarios públicos.
