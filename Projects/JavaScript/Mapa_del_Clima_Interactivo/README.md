# 🌍 Proyecto: Mapa del Clima Interactivo

## 📌 Descripción
Aplicación web que permite buscar una ciudad, consultar su clima en tiempo real mediante una **API**, mostrar la posición en un **mapa dibujado en canvas**, y guardar ciudades favoritas en **LocalStorage**.

Este proyecto combina **JavaScript avanzado** con:
* Consumo de **APIs externas**.
* Uso de **Canvas** (`<canvas>`) para gráficos.
* **Persistencia con LocalStorage**.

## 🎯 Requisitos del Proyecto

### 1. Búsqueda de ciudad
* Input para escribir el nombre de la ciudad.
* Botón **Buscar** que dispare la petición a la API.
* Validar que el campo no esté vacío.

### 2. Datos del clima (API OpenWeather)
Al buscar una ciudad, mostrar:
* Nombre de la ciudad.
* Temperatura actual.
* Estado del clima (ej. "Nublado", "Soleado").
* Humedad.
* Icono correspondiente al clima.

👉 API sugerida: OpenWeatherMap Current Weather API. Necesitarás un **API key** gratuita.

### 3. Mapa con Canvas
* Tener un `<canvas>` con un mapa del mundo (imagen o vector básico).
* Dibujar un **marcador en la ubicación geográfica** (latitud/longitud devuelta por la API).
* El marcador puede ser un círculo rojo, o un icono dibujado en el canvas.

### 4. Favoritos con LocalStorage
* Botón **⭐ Guardar en favoritos** para añadir la ciudad actual.
* Lista de ciudades favoritas persistente (se carga desde LocalStorage al iniciar).
* Posibilidad de **eliminar favoritos**.

## 📂 Estructura de Archivos

```
/mapa-clima
│── index.html      → Estructura base de la aplicación
│── style.css       → Estilos de la interfaz
│── app.js          → Lógica de JavaScript
│── /assets
│     └── mapa.png  → Imagen base del mapa para el canvas
```

## 🛠️ Pasos sugeridos para desarrollarlo

### 1. **Preparar el HTML**
* Input de búsqueda.
* Botón Buscar.
* Sección de resultados con datos del clima.
* `<canvas>` para dibujar el mapa.
* Lista de favoritos.

### 2. **Conectar con la API**
* Hacer `fetch` a la API de OpenWeatherMap usando la ciudad ingresada.
* Extraer: nombre, temperatura, clima, humedad, coordenadas (lat, lon).
* Mostrar resultados en pantalla.

### 3. **Dibujar en el Canvas**
* Cargar una imagen del mapa dentro del canvas.
* Convertir lat/lon en coordenadas X/Y en el canvas.
* Dibujar un marcador (ej: círculo rojo) en esa posición.

### 4. **Implementar LocalStorage**
* Guardar la ciudad en un array de favoritos.
* Persistir el array en LocalStorage.
* Renderizar los favoritos cada vez que se abra la app.
* Permitir eliminar elementos.

## 💡 Extras (para nivel pro)
* Animar el marcador en canvas (parpadeo o rebote).
* Agregar **pronóstico de 5 días** (API de OpenWeatherMap Forecast).
* Dibujar varias ciudades favoritas al mismo tiempo en el mapa.
* Agregar **modo oscuro** con CSS y toggle en JS.

## ✅ Objetivo Final
Al terminar, tendrás una aplicación donde el usuario puede:
1. Buscar cualquier ciudad.
2. Ver su clima en tiempo real.
3. Ver su ubicación marcada en un mapa en Canvas.
4. Guardar ciudades favoritas de manera persistente.

## 🖼️ Mockup del HTML (estructura visual)

```
---------------------------------------------------------
| 🌍 Mapa del Clima Interactivo                         |
---------------------------------------------------------

[ Buscar ciudad: (___________) [🔍 Buscar] ]

---------------------------------------------------------
| 📊 Resultados del Clima                               |
---------------------------------------------------------
Ciudad: Madrid
Temperatura: 25°C
Clima: Soleado ☀️
Humedad: 40%

[ ⭐ Guardar en favoritos ]

---------------------------------------------------------
| 🗺️ Mapa (Canvas)                                      |
---------------------------------------------------------
| +-----------------------------------------------+     |
| |                                               |     |
| |              [ Mapa del mundo ]               |     |
| |                                               |     |
| |                ⭕ <- marcador                  |     |
| |                                               |     |
| +-----------------------------------------------+     |

---------------------------------------------------------
| ⭐ Ciudades Favoritas                                |
---------------------------------------------------------
- Barcelona [❌]
- Buenos Aires [❌]
- Tokio [❌]
```

## 📂 Traducción a estructura HTML sugerida

```html
<header>
  <h1>🌍 Mapa del Clima Interactivo</h1>
</header>

<main>
  <!-- Buscador -->
  <section id="buscador">
    <input type="text" id="ciudadInput" placeholder="Buscar ciudad...">
    <button id="buscarBtn">🔍 Buscar</button>
  </section>

  <!-- Resultados -->
  <section id="resultados">
    <h2>📊 Resultados del Clima</h2>
    <p id="nombreCiudad"></p>
    <p id="temperatura"></p>
    <p id="clima"></p>
    <p id="humedad"></p>
    <button id="guardarBtn">⭐ Guardar en favoritos</button>
  </section>

  <!-- Mapa Canvas -->
  <section id="mapa">
    <h2>🗺️ Mapa</h2>
    <canvas id="mapaCanvas" width="600" height="400"></canvas>
  </section>

  <!-- Favoritos -->
  <section id="favoritos">
    <h2>⭐ Ciudades Favoritas</h2>
    <ul id="listaFavoritos"></ul>
  </section>
</main>

<footer>
  <p>&copy; 2025 - Proyecto con API + Canvas + LocalStorage</p>
</footer>
```

## 🛠️ Plan de Desarrollo Paso a Paso

### Fase 1 – Estructura HTML

Crear `index.html` con:
* Header con título.
* Sección de búsqueda con input y botón.
* Sección de resultados del clima.
* Canvas para el mapa.
* Lista de ciudades favoritas.
* Footer.
* Asignar ids claros a los elementos para poder manipularlos desde JavaScript.

✅ **Objetivo:** Tener la interfaz lista y funcional en HTML, aunque aún no haga nada.

### Fase 2 – Conexión con API de Clima

* Crear `app.js` y enlazarlo en el HTML.
* Obtener el valor del input y agregar un evento al botón "Buscar".
* Hacer un `fetch` a la API de OpenWeatherMap usando la ciudad ingresada.
* Extraer los datos necesarios: nombre, temperatura, estado del clima, humedad, coordenadas.
* Mostrar los datos en la sección de resultados del clima.
* Manejar errores (ciudad no encontrada, API caída, input vacío).

✅ **Objetivo:** Mostrar información real del clima al buscar una ciudad.

### Fase 3 – Dibujar la ciudad en Canvas

* Cargar un mapa base (imagen) en el canvas.
* Convertir las coordenadas geográficas (latitud/longitud) a coordenadas X/Y del canvas.
* Dibujar un marcador (círculo o icono) en la ubicación de la ciudad.
* Limpiar el canvas y dibujar nuevamente cada vez que se busque otra ciudad.

✅ **Objetivo:** Tener un mapa interactivo con marcador dinámico.

### Fase 4 – Guardar y mostrar favoritos con LocalStorage

* Crear un array para almacenar ciudades favoritas.
* Al presionar el botón "⭐ Guardar en favoritos", agregar la ciudad al array y persistirlo en LocalStorage.
* Al cargar la app, leer LocalStorage y renderizar la lista de favoritos.
* Añadir un botón ❌ para eliminar cada ciudad de favoritos y actualizar LocalStorage.
* Posibilidad: al hacer clic en un favorito, mostrar su clima y marcador en el mapa.

✅ **Objetivo:** Manejar persistencia de datos y interacción con favoritos.

### Fase 5 – Extras y mejoras

* Agregar animaciones en el canvas (ej: marcador que parpadea).
* Mostrar pronóstico de varios días usando la API Forecast.
* Implementar modo oscuro/claro y guardar la preferencia en LocalStorage.
* Validaciones adicionales y mejorar la interfaz con CSS.
* Optimización del código y comentarios claros.

✅ **Objetivo:** Convertir tu app en un proyecto completo y profesional.

## 🌐 Diagrama de flujo del proyecto

```
[ Usuario ]
     |
     | Ingresa ciudad en input y presiona "Buscar"
     v
[ JavaScript ]
     |
     | -> Captura el valor del input
     | -> Valida que no esté vacío
     v
[ API OpenWeatherMap ]
     |
     | -> Recibe la petición con la ciudad
     | -> Devuelve datos: nombre, temperatura, clima, humedad, lat/lon
     v
[ JavaScript ]
     |
     | -> Muestra los datos en la sección de Resultados del clima
     | -> Convierte lat/lon a coordenadas X/Y del canvas
     | -> Dibuja marcador en canvas
     | -> Permite guardar ciudad en favoritos
     v
[ Canvas ]
     |
     | -> Dibuja mapa base
     | -> Dibuja marcador en la posición correcta
     v
[ LocalStorage ]
     |
     | -> Guarda la ciudad en favoritos
     | -> Permite eliminar favoritos
     | -> Carga favoritos al iniciar la app
     v
[ HTML ]
     |
     | -> Renderiza la lista de favoritos
     | -> Renderiza la sección de resultados y el canvas
     v
[ Usuario ]
     |
     | -> Ve resultados, mapa y favoritos
     | -> Puede interactuar con ellos
```

## 💡 Notas sobre el flujo

* El input del usuario dispara todo el proceso.
* La API entrega los datos del clima y las coordenadas de la ciudad.
* El canvas es independiente del HTML, solo se dibuja mediante JS.
* LocalStorage mantiene la persistencia de favoritos incluso si se recarga la página.
* Todo se conecta visualmente a través del DOM (HTML), pero la lógica principal está en JS.