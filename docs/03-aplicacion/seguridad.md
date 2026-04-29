---
sidebar_position: 3
title: Seguridad
description: Medidas de autenticacion, control de acceso y proteccion de endpoints.
---

# Seguridad y control de acceso

El sistema incorpora medidas para proteger la zona privada y reducir abusos sobre endpoints sensibles.

## Medidas principales

- JWT con expiracion de 2 horas.
- Middleware de autenticacion.
- Rate limiting en login y opiniones.
- Helmet.
- CORS configurable.
- Hash de IP mediante `IP_HASH_SALT`.

## Zona privada

El panel de administracion requiere autenticacion. Las operaciones internas se exponen bajo rutas protegidas y no quedan disponibles para usuarios publicos.
