# Cobertura de pruebas EP2

La medición se obtuvo con `npm run test:coverage` usando Vitest, jsdom y V8. El reporte HTML reproducible queda en `coverage/index.html`.

| Métrica | Cobertura |
| --- | ---: |
| Sentencias | 69,52 % |
| Ramas | 62,12 % |
| Funciones | 71,89 % |
| Líneas | 71,25 % |

La ejecución incluyó 15 archivos, con 50 pruebas aprobadas y un fallo esperado. La medición incluye el enrutador en `src/App.jsx`.

- Sesión y registro con respuestas simuladas de la API, cierre de sesión y acceso según rol.
- Catálogo, cantidad de producto, registro del pedido, reintento tras fallo de almacenamiento y comprobante administrativo.
- Apertura de artículos y envío del formulario de contacto con fallo de guardado y reintento.
- Registro y gestión de citas, comprobantes en Solicitudes y Mis citas, folios inexistentes y aislamiento entre cuentas.
- Conteo de ítems críticos en el resumen y comparación con las filas del módulo.
