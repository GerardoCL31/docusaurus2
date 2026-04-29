---
sidebar_position: 1
title: Arquitectura general
description: Organización cliente-servidor y monorepo de CoronaHUB.
---

# Arquitectura general

CoronaHUB sigue una arquitectura cliente-servidor organizada como monorepo.

## Capas lógicas

| Capa | Tecnología principal | Responsabilidad |
| --- | --- | --- |
| Presentacion | React | Interfaz web y experiencia de usuario |
| Negocio | Express | API REST, reglas funcionales y autenticación |
| Persistencia | MongoDB o JSON | Almacenamiento de datos |

## Estructura del proyecto

```text
client/   -> aplicación web
server/   -> API REST
tests/    -> pruebas automatizadas
```

## Ventajas

- Separacion de responsabilidades.
- Mantenimiento sencillo.
- Despliegue independiente.
- Facilidad de prueba.
- Arquitectura ampliable.
