---
sidebar_position: 4
title: Requisitos y riesgos
description: Necesidades clave, riesgos tecnicos y soluciones aplicadas.
---

# Requisitos y riesgos

## Necesidades clave

- Centralizar informacion del negocio.
- Evitar reservas duplicadas.
- Controlar opiniones antes de publicarlas.
- Permitir edicion interna sin depender de cambios en codigo.

## Riesgos tecnicos

| Riesgo | Impacto |
| --- | --- |
| Dependencia de MongoDB | Puede bloquear el desarrollo local si la base de datos no esta disponible |
| Falta de validacion | Puede permitir datos incorrectos en reservas, opiniones o configuracion |
| Exposicion del panel | Puede comprometer la gestion interna |
| Ausencia de pruebas | Puede ocultar regresiones en reglas criticas |

## Soluciones aplicadas

- Modo `DB_MODE=auto`.
- Validadores con Zod.
- Middleware de autenticacion con JWT.
- Rate limit en endpoints sensibles.
- Tests automatizados.
