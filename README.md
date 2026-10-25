# Veterinaria San Marcos

Aplicación web para la gestión de servicios, solicitudes, productos y administración de la veterinaria.

## Equipo

- David Miranda - dav.mirandac@duocuc.cl
- Angela Anhuaman - an.anhuaman@duocuc.cl
- Almendra Gonzales - alm.gonzales@duocuc.cl

## Descripción del proyecto

Este proyecto consiste en una plataforma web para facilitar la gestión de servicios, solicitudes, productos y administración de una veterinaria. La aplicación permite visualizar información comercial, gestionar pedidos, acceder a un panel administrativo protegido y mantener un flujo de navegación claro para usuarios públicos y administradores.

## Tecnologías utilizadas

- React
- Vite
- Bootstrap 5
- Bootstrap Icons
- React Router DOM
- Vitest
- jsdom

## Estructura principal del proyecto

```bash
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── context/
├── data/
├── hooks/
├── pages/
├── services/
├── utils/
├── App.jsx
├── main.jsx
├── setupTests.js
└── index.css
```

## Requisitos previos

Asegúrate de tener instalado:

- Node.js 18 o superior
- npm

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Charlieisd34d/Veterinaria-San-Marcos-2.git
```

2. Entra al proyecto:

```bash
cd Veterinaria-San-Marcos-2
```

3. Instala las dependencias:

```bash
npm install
```

## Ejecución del proyecto

Para correr la aplicación en modo de desarrollo:

```bash
npm run dev
```

Luego abre la URL que indique Vite en la terminal, normalmente algo como:

```bash
http://localhost:5173/
```

## Pruebas unitarias

El proyecto usa Vitest para ejecutar las pruebas unitarias.

### Ejecutar todas las pruebas

```bash
npm test
```

### Ejecutar pruebas con reporte de cobertura

```bash
npm run test:coverage
```

Esto genera un reporte de cobertura en la carpeta `coverage/` y permite revisar la calidad de la prueba unitaria del proyecto.

## Credenciales de acceso administrativo

Los usuarios de prueba para iniciar sesión en el panel administrativo son:

- ana@veterinaria.cl / admin123
- luis@veterinaria.cl / admin456

## Observaciones

- La aplicación usa datos simulados almacenados en `localStorage` para emular la persistencia de la información.
- La zona administrativa está protegida mediante autenticación.
- La carpeta `coverage/` se ignora en Git para no enviarse al repositorio.

## Material complementario

- Documentación adicional del proyecto: https://drive.google.com/drive/folders/1oSNjotZyatbSU6T7p3fspve0Uem-BSEX?usp=drive_link
