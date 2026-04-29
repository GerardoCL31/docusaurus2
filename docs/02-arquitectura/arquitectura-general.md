---
sidebar_position: 1
title: Arquitectura general
description: Organizacion cliente-servidor y monorepo de CoronaHUB.
---

# Arquitectura general

CoronaHUB sigue una arquitectura cliente-servidor organizada como monorepo.

## Capas logicas

| Capa | Tecnologia principal | Responsabilidad |
| --- | --- | --- |
| Presentacion | React | Interfaz web y experiencia de usuario |
| Negocio | Express | API REST, reglas funcionales y autenticacion |
| Persistencia | MongoDB o JSON | Almacenamiento de datos |

## Estructura del proyecto

```text
client/   -> aplicacion web
server/   -> API REST
tests/    -> pruebas automatizadas
```

## Ventajas

- Separacion de responsabilidades.
- Mantenimiento sencillo.
- Despliegue independiente.
- Facilidad de prueba.
- Arquitectura ampliable.
