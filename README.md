#  Nombre de tu Proyecto (Ej: 3builD)

##  ¿Qué es este proyecto?

Ejemplo: Este es un sitio web interactivo desarrollado desde cero para exhibir un catálogo de impresiones 3d, es un proyecto para el tp1 de prog2 utn. Permite a los usuarios navegar por diferentes vistas de manera rápida, utilizando una estructura limpia de HTML, CSS y JavaScript nativo.

##  Tecnologías Utilizadas

- **HTML:** Living Standard.
- **CSS:** CSS Baseline 2026.
- **JavaScript:** ES2026 (Vanilla JS puro, hecho 100% a mano sin frameworks).

##  Estructura del proyecto

```text
tp1-prog2-utn/
├── index.html
├── views/
│   ├── catalogo.html
│   └── contacto.html
├── css/
│   ├── global.css
│   ├── index.css
│   └── catalogo.css
├── js/
│   ├── main.js
│   └── catalogo.js
└── assets/
    └── images/
        ├── maceta_groot.jpeg
        └── maceta_pareja.jfif
```

### Descripción

| Directorio / Archivo | Descripción |
|---|---|
| `index.html` | Página principal del sitio. |
| `views/` | Contiene las páginas HTML secundarias. |
| `css/` | Contiene las hojas de estilo del proyecto. |
| `css/global.css` | Estilos compartidos por todo el sitio. |
| `css/index.css` | Estilos específicos de la página principal. |
| `css/catalogo.css` | Estilos específicos del catálogo. |
| `js/` | Contiene los scripts JavaScript. |
| `js/main.js` | Lógica y funcionalidades generales del sitio. |
| `js/catalogo.js` | Lógica específica del catálogo, como filtros y búsqueda. |
| `assets/images/` | Imágenes y recursos visuales utilizados por el sitio. |

##  Cómo clonar y visualizar el proyecto

### 1. Clonar el repositorio

Para obtener una copia local del proyecto, abrí tu terminal y ejecutá:

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
```

Luego ingresá a la carpeta:

```bash
cd nombre-del-repositorio
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

##  Manejo de Ramas en Git

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

##  Flujo de trabajo habitual

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

