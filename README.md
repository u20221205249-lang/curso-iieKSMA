# Curso Introducción a la Ingeniería Electrónica (IIE)

Sitio web del curso **BEINEL54 – Introducción a la Ingeniería Electrónica**, del programa de
Ingeniería Electrónica de la Facultad de Ingeniería, Universidad Surcolombiana.

Sitio estático: HTML5, CSS3 y JavaScript sin dependencias ni proceso de compilación.
Se abre haciendo doble clic en `index.html` y se publica subiendo la carpeta tal cual.

---

## Estructura de archivos

```
sitio-iie/
├── index.html            Inicio: presentación y ruta del estudiante
├── curso.html            Información, competencias, resultados y evaluación
├── cdio.html             Concebir, Diseñar, Implementar, Operar
├── unidades.html         Las cuatro unidades temáticas
├── recursos.html         Talleres, Arduino, inventario LEGO, simulación, PCB
├── proyectos.html        Retos y proyecto integrador
├── galeria.html          Galería con visor de imágenes
├── README.md
├── css/
│   └── style.css         Hoja de estilos única (tokens, componentes, responsive)
├── js/
│   └── main.js           Menú, submenús, acordeones y visor de galería
└── assets/
    ├── img/              Logo, fotografías de la facultad y de las prácticas
    └── docs/             Guías de taller y de proyecto descargables
```

---

## Mapa de navegación

| Sección   | Página          | Subsecciones |
|-----------|-----------------|--------------|
| Inicio    | `index.html`    | Presentación · Ruta del estudiante |
| Curso     | `curso.html`    | Información · Competencias · Resultados de aprendizaje · Evaluación |
| CDIO      | `cdio.html`     | Concebir · Diseñar · Implementar · Operar |
| Unidades  | `unidades.html` | 1. LEGO · 2. Arduino · 3. PCB · 4. Proyecto Integrador |
| Recursos  | `recursos.html` | Talleres · Arduino · Inventario LEGO · Simulación · PCB · Galería |
| Proyectos | `proyectos.html`| Retos · Proyecto Integrador |

---

## Cómo publicar el sitio

### Opción A — GitHub Pages (recomendada, gratuita)

1. Crear una cuenta en <https://github.com> si no se tiene.
2. Crear un repositorio nuevo, por ejemplo `curso-iie`, marcándolo como **público**.
3. Subir **el contenido** de esta carpeta a la raíz del repositorio. `index.html` debe
   quedar en la raíz, no dentro de una subcarpeta.
4. Entrar a **Settings → Pages**.
5. En *Source* elegir **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guardar.
6. Esperar uno o dos minutos. La URL queda así:
   `https://USUARIO.github.io/curso-iie/`

### Opción B — Netlify (sin cuenta de Git)

1. Entrar a <https://app.netlify.com/drop>.
2. Arrastrar la carpeta completa del sitio sobre la página.
3. Netlify entrega una URL inmediata, del tipo `https://nombre-aleatorio.netlify.app`,
   que se puede renombrar desde *Site settings → Change site name*.

---

## Validación del código

Antes de entregar, verificar en los validadores oficiales del W3C pegando la URL publicada:

- HTML: <https://validator.w3.org/>
- CSS: <https://jigsaw.w3.org/css-validator/>

---

## Notas técnicas

- **Responsive:** diseño de una columna en móvil que pasa a dos, tres o cuatro columnas
  según el ancho. Puntos de corte en 430 px, 620 px, 860 px y 900 px.
- **Menú:** submenús desplegables en escritorio; menú hamburguesa con acordeón en móvil.
- **Accesibilidad:** enlace para saltar al contenido, foco visible, textos alternativos en
  todas las imágenes, atributos ARIA en menús y acordeones, y respeto por la preferencia
  de movimiento reducido del sistema.
- **Tipografías:** Space Grotesk para títulos e Inter para texto, cargadas desde Google Fonts.
  Si no hay conexión, el navegador recurre a las fuentes del sistema.
- **Colores institucionales:** vinotinto `#8F141B` y gris azulado `#4D626D`, tomados del
  logotipo de la Universidad Surcolombiana.

---

## Pendientes por agregar

- Inventario detallado de piezas del kit LEGO EV3 (`recursos.html#lego`).
- Guías y material de la unidad de PCB (`recursos.html#pcb`, `unidades.html#unidad-3`).
- Retos adicionales de la unidad 1 (`proyectos.html#retos`).

---

Docente del curso: Diego Sendoya
Universidad Surcolombiana · Facultad de Ingeniería · Neiva, Huila
