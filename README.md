# Veterinaria San Marcos

## 1. Información general

### Proyecto
Aplicación web para la gestión de servicios, productos, solicitudes y administración de una veterinaria.

### Equipo
- David Miranda - dav.mirandac@duocuc.cl
- Angela Anhuaman - an.anhuaman@duocuc.cl
- Almendra Gonzales - alm.gonzales@duocuc.cl

### Descripción del proyecto
El sistema consiste en una SPA (Single Page Application) desarrollada en React para gestionar la experiencia de cliente y administración de una veterinaria. La plataforma permite consultar servicios, ver productos, agregar elementos al carrito, autenticarse como administrador y gestionar la información interna del negocio mediante la API de usuarios y datos locales para los demás módulos.

---

## 2. Tecnologías utilizadas

- React
- Axios
- Vite
- Bootstrap 5
- Bootstrap Icons
- React Router DOM
- Vitest
- jsdom
- localStorage para persistencia simulada

---

## 3. Instalación y ejecución

### Requisitos previos
- Node.js 22.12 o superior
- npm

### Instalación
1. Clona el repositorio:

```bash
git clone https://github.com/Charlieisd34d/Veterinaria-San-Marcos-2.git
```

2. Accede a la carpeta del proyecto:

```bash
cd Veterinaria-San-Marcos-2
```

3. Instala las dependencias:

```bash
npm install
```

### Ejecución

Inicia primero el backend Spring Boot de la rama [feat/migracion-spring-boot](https://github.com/DavidMiranda816/Caso-DSY1104-Fullstack-Veterinaria-San-Marco-Backend/tree/feat/migracion-spring-boot).
El frontend usa una instancia de Axios con `VITE_API_URL` como URL base, siguiendo el [ejemplo de clase](https://github.com/ProfeMike-sudo/dsy1104-productos-react-axios#ejecutar-en-ubuntu-ec2).

En la instancia del frontend, copia `.env.example` a `.env.local` si aún no existe. Define la dirección de Spring Boot que puedas alcanzar desde tu navegador, con `/api` al final:

```dotenv
VITE_API_URL=http://IP_PUBLICA_BACKEND:8080/api
```

Si reenvías el puerto de Spring Boot a tu computador mediante SSH, usa `http://localhost:8080/api` o el puerto local que hayas asignado. Si abres el frontend por HTTPS, usa una URL HTTPS para la API.

En el backend, habilita CORS en Spring Security para el origen exacto desde el que abres el frontend, por ejemplo `http://localhost:5173` si usas un puerto reenviado. La configuración debe permitir `GET`, `POST`, `PUT`, `PATCH` y las cabeceras `Content-Type` y `Authorization`. Si usas la IP pública de EC2, permite el acceso al puerto `8080` desde la IP pública de tu computador.

Inicia el frontend con `npm run dev` y abre la URL que indica Vite. Reinicia Vite al cambiar `.env.local`. Si publicas el frontend compilado, configura la variable antes de ejecutar `npm run build`.

Para verificar la conexión, inicia sesión y revisa en **Red** del navegador que el `POST` vaya a `http://IP_PUBLICA_BACKEND:8080/api/auth/login`. Si falla la solicitud previa `OPTIONS`, revisa que Spring Security acepte el origen del frontend.

---

## 4. Pruebas unitarias

El proyecto usa Vitest para ejecutar pruebas unitarias sobre servicios y utilidades del negocio.

### Ejecutar pruebas

```bash
npm test
```

### Ejecutar pruebas con cobertura

```bash
npm run test:coverage
```

Esto genera un reporte de cobertura en la carpeta `coverage/`.

---

## 5. Credenciales de acceso administrativo

Para probar el flujo público, abre `/registro`, crea una cuenta y luego ingresa con ese correo y contraseña en `/iniciar-sesion`.

El panel requiere una cuenta activa con rol `ADMIN` en el backend. El registro crea cuentas con rol `CLIENTE`.

---

## 6. Estructura del proyecto

```bash
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── context/
├── dto/
├── data/
├── hooks/
├── pages/
├── services/
├── utils/
├── App.jsx
├── main.jsx
├── setupTests.js
├── index.css
└── ...
```

---

## 7. Especificación de interfaces del sistema

### 3.1 Requisitos comunes de las interfaces

Esta subsección describe de forma directa las entradas y salidas del sistema a través de sus interfaces de usuario y de software.

### 3.1.1 Interfaces de usuario

#### A. Entradas del sistema
- Autenticación (/iniciar-sesion): correo electrónico y contraseña.
- Solicitud de citas (/): datos del dueño, datos de la mascota, servicio solicitado, fecha y bloque horario.
- Gestión de solicitudes y fichas (/admin/solicitudes): filtros, estado de la cita, fecha/hora, diagnóstico, tratamiento y próximos controles.
- Catálogo y carrito (/productos, /carrito): filtros por categoría, cantidad y resumen de compra.

#### B. Salidas del sistema
- Navegación y alertas: redirección automática según el estado de autenticación y mensajes de error o confirmación.
- Estado de solicitudes: comprobante visual con estado y confirmación del proceso.
- Fichas y historial: visualización de datos de atención y seguimiento del paciente.
- Catálogo y carrito: desglose de productos con precios en CLP, subtotales y total final.

### 3.1.2 Interfaces de hardware

#### A. Interfaz con dispositivos táctiles móviles
- El sistema debe funcionar de forma adecuada en tablets y smartphones.
- Debe captar eventos táctiles para mejorar la interacción.
- Los componentes deben tener tamaños accesibles para una experiencia cómoda en pantallas pequeñas.
- La interfaz debe adaptarse automáticamente mediante media queries y diseño responsive.

#### B. Interfaz con estaciones de trabajo de escritorio
- El sistema debe funcionar en computadoras de escritorio con navegación web estándar.
- Debe estar optimizado para pantallas amplias, especialmente en vistas administrativas.
- La navegación y formularios deben ser compatibles con teclado y mouse.

#### C. Interfaces de impresión y periféricos opcionales
- El sistema debe permitir una mejor visualización del contenido para impresión, cuando sea pertinente.
- La estructura visual puede adaptarse a impresión sin mostrar elementos de navegación no necesarios.

### 3.1.3 Interfaces de software

El sistema de Veterinaria San Marcos se integra con tecnologías de software que permiten su funcionamiento principal:

#### 1. Navegadores web modernos
- Descripción: navegadores como Chrome, Edge o Firefox.
- Propósito: ejecutar la SPA React y gestionar la interacción del usuario.
- Formato: HTML5, CSS3, JavaScript y React.

#### 2. LocalStorage del navegador
- Descripción: almacenamiento local del navegador para simular persistencia de datos.
- Propósito: guardar información de productos, solicitudes, clientes, categorías y carrito.
- Formato: JSON almacenado en el navegador.

#### 3. React Router DOM
- Descripción: librería para la gestión de rutas internas.
- Propósito: controlar navegación entre páginas públicas y administrativas.
- Formato: rutas como `/`, `/productos`, `/carrito`, `/admin`, `/iniciar-sesion`.

### 3.1.4 Interfaces de comunicación

#### 1. Entorno de desarrollo local
- El proyecto se ejecuta localmente mediante Vite.
- Puerto principal: 5173.
- Protocolo: HTTP local del entorno de desarrollo.

#### 2. Arquitectura de intercambio de datos
- Axios conecta el inicio de sesión y la administración de usuarios con la API Spring Boot.
- Los DTO preparan los cuerpos de las solicitudes en `src/dto`. Las páginas administran estado y errores y pasan los datos a los componentes por props.
- Productos, categorías, clientes, solicitudes y carrito usan persistencia local.

#### 3. Seguridad y acceso
- El frontend conserva el JWT de la sesión administrativa y envía la cabecera `Authorization: Bearer` en las operaciones protegidas.
- Spring Security verifica el JWT y el rol `ADMIN` en las rutas de administración de usuarios.

---

## 8. Observaciones finales

- La carpeta `coverage/` se ignora en Git para no enviarse al repositorio.

## 9. Material complementario

- Documentación adicional del proyecto: https://drive.google.com/drive/folders/1oSNjotZyatbSU6T7p3fspve0Uem-BSEX?usp=drive_link
