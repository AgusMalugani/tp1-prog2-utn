# 3uilD

## ¿Qué es este proyecto?

**3uilD** es un sitio web desarrollado desde cero para exhibir y vender un catálogo de impresiones 3D. Es el trabajo práctico 1 (TP1) de Programación 2 (UTN).

Permite navegar entre distintas vistas (inicio, productos, carrito, nosotros, login y registro) con una estructura limpia de HTML, CSS y JavaScript nativo, sin frameworks.

## Tecnologías utilizadas

- **HTML:** Living Standard.
- **CSS:** CSS Baseline 2026.
- **JavaScript:** ES2026 (Vanilla JS, sin frameworks).

## Estructura del proyecto

```text
tp1-prog2-utn/
├── index.html
├── style.css
├── favicon.ico
├── README.md
├── .gitignore
├── assets/
│   └── images/
│       ├── maceta_groot.jpeg
│       ├── maceta_pareja.jfif
│       ├── perro.jfif
│       ├── porta_capsula.jfif
│       ├── porta_lapices.jfif
│       └── porta_llave.jfif
├── css/
│   ├── product.css
│   └── sobre-mi.style.css
├── js/
│   ├── app.js
│   └── sobre-mi.js
└── views/
    ├── carrito.html
    ├── login.html
    ├── productos.html
    ├── register.html
    └── sobre-mi.html
```

### Descripción

| Directorio / Archivo | Descripción |
|---|---|
| `index.html` | Página principal del sitio (inicio / hero). |
| `style.css` | Estilos globales compartidos por el sitio. |
| `favicon.ico` | Ícono del sitio. |
| `views/` | Páginas HTML secundarias. |
| `views/productos.html` | Catálogo de productos impresos en 3D. |
| `views/carrito.html` | Vista del carrito de compras. |
| `views/sobre-mi.html` | Página institucional / sobre el equipo. |
| `views/login.html` | Vista de inicio de sesión. |
| `views/register.html` | Vista de registro de usuario. |
| `css/` | Hojas de estilo específicas por vista. |
| `css/product.css` | Estilos del catálogo de productos. |
| `css/sobre-mi.style.css` | Estilos de la página Nosotros. |
| `js/` | Scripts JavaScript del proyecto. |
| `js/app.js` | Lógica general (por ejemplo, carrito). |
| `js/sobre-mi.js` | Lógica específica de la página Nosotros. |
| `assets/images/` | Imágenes de productos y recursos visuales. |

## Cómo clonar y visualizar el proyecto

### 1. Clonar el repositorio

Para obtener una copia local del proyecto, abrí tu terminal y ejecutá:

```bash
git clone https://github.com/tu-usuario/tp1-prog2-utn.git
```

Luego ingresá a la carpeta:

```bash
cd tp1-prog2-utn
```

### 2. Visualizar en el navegador

Como este proyecto está construido exclusivamente con tecnologías nativas, **no requiere instalación de dependencias (`npm`) ni configuración de servidores complejos**.

Existen dos opciones para visualizarlo:

#### Opción rápida

Navegá hasta la carpeta del proyecto y hacé doble clic sobre:

```text
index.html
```

Esto abrirá el sitio directamente en el navegador predeterminado.

#### Opción recomendada para desarrollo

Abrí la carpeta del proyecto en tu editor de código y utilizá una extensión como **Live Server** sobre `index.html`.

Esto permite:

- Ejecutar el proyecto mediante un servidor local.
- Recargar automáticamente la página al guardar cambios.
- Evitar problemas relacionados con rutas o recursos locales.

## Manejo de ramas en Git

El proyecto sigue un flujo de trabajo organizado para el desarrollo colaborativo mediante las siguientes ramas:

### `main`

Es la rama principal del proyecto.

Contiene el código **estable y listo para producción**.

Solo recibe cambios provenientes de `develop` una vez que las funcionalidades fueron correctamente probadas.

### `develop`

Es la rama de **integración** del proyecto.

Aquí se incorporan y prueban las nuevas funcionalidades antes de ser integradas en `main`.

### `feature/nombre-tarea`

Son las ramas utilizadas por cada desarrollador para implementar nuevas funcionalidades, vistas o modificaciones.

Todas las ramas `feature/*` deben crearse a partir de `develop`.

## Flujo de trabajo habitual

### 1. Posicionarse en `develop`

```bash
git checkout develop
```

Actualizar la rama:

```bash
git pull
```

### 2. Crear una rama para la nueva funcionalidad

```bash
git checkout -b feature/nombre-tarea
```

Ejemplo:

```bash
git checkout -b feature/catalogo-productos
```

### 3. Realizar los cambios

Una vez finalizado el trabajo, agregar los archivos modificados:

```bash
git add .
```

Crear el commit:

```bash
git commit -m "feat: agregar catálogo de productos"
```

### 4. Subir la rama al repositorio remoto

```bash
git push -u origin feature/nombre-tarea
```

### 5. Integrar los cambios en `develop`

Crear un **Pull Request** desde:

```text
feature/nombre-tarea
        ↓
     develop
```

Una vez revisado y aprobado, se integra la funcionalidad.

### 6. Pasar a producción

Cuando `develop` contiene una versión estable y correctamente probada, se integra en:

```text
develop
   ↓
 main
```

La rama `main` representa la versión estable del proyecto.
