---
sidebar_position: 4
title: Requisitos y riesgos
description: Necesidades clave, riesgos técnicos y soluciones aplicadas.
---

# Requisitos y riesgos

## Necesidades clave

- Centralizar información del negocio.
- Evitar reservas duplicadas.
- Controlar opiniones antes de publicarlas.
- Permitir edición interna sin depender de cambios en código.

## Riesgos técnicos

| Riesgo | Impacto |
| --- | --- |
| Dependencia de MongoDB | Puede bloquear el desarrollo local si la base de datos no está disponible |
| Falta de validación | Puede permitir datos incorrectos en reservas, opiniones o configuración |
| Exposición del panel | Puede comprometer la gestión interna |
| Ausencia de pruebas | Puede ocultar regresiones en reglas críticas |

## Soluciones aplicadas

- Modo `DB_MODE=auto`.
- Validadores con Zod.
- Middleware de autenticación con JWT.
- Rate limit en endpoints sensibles.
- Tests automatizados.
