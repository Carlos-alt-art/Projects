// URL https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid={API key}

const apiKey = "xxxxxxxxxxxxxxxxxxx";

var inputBuscador = document.getElementById("buscarBtn");

/*
When I put getInfo(), JavaScript immediately starts the function, 
but if I put getInfo, it will start only when I press the button.
*/

inputBuscador.addEventListener("click", getInfo);

async function getInfo() {
  const ciudadInput = document.getElementById("ciudadInput");
  const valueSearh = ciudadInput.value;

  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${valueSearh}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(endpoint, { cache: "no-cache" });

    if (response.ok) {
      const jsonresponse = await response.json();
      showResult(jsonresponse);
    }
  } catch (error) {
    console.log(error);
  }
}

var nombreCiudad = document.getElementById("nombreCiudad");
var temperatura = document.getElementById("temperatura");
var clima = document.getElementById("clima");
var humedad = document.getElementById("humedad");
var horaLocal = document.getElementById("horaLocal");

function showResult(res) {
  const timezone = res.timezone;
  const currentTemp = res.main.temp;
  const currentWeatherMain = res.weather[0].main;
  const currentHumidity = res.main.humidity;

  const dt = res.dt;
  const localTime = new Date((dt + timezone) * 1000);
  const localHour = localTime.getUTCHours();

  nombreCiudad.innerText = `Ciudad: ${res.name}`;
  temperatura.innerText = `Temperatura: ${currentTemp}°C`;
  clima.innerText = `Clima: ${currentWeatherMain}`;
  humedad.innerText = `Humedad: ${currentHumidity}%`;
  horaLocal.innerText = `Hora local: ${localHour}:${localTime
    .getUTCMinutes()
    .toString()
    .padStart(2, "0")}`;

  // Determinar si es día o noche usando getHours()
  let nuevaHora = localHour >= 6 && localHour < 18 ? "dia" : "noche";

  actualizarCanvas(nuevaHora);
}

/*

Ciudad: Madrid     timezone
Temperatura: 25°C   current.temp
Clima: Soleado ☀️ current.weather.main
Humedad: 40% current.humidity


*/

/*

- Para funciones autónomas o principales como getInfo() y showResult(), usa funciones normales.

- Para callbacks cortos (por ejemplo, dentro de un forEach, un map, o un addEventListener), usa funciones flecha.


const showResult = (res) => {
    const date = res[0].date;
    console.log(date);
}

const getInfo = async () => {
    const valueSearh = ciudadInput.value;
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

    try {
        const response = await fetch(endpoint, { cache: 'no-cache' });

        if (response.ok) {
            const jsonresponse = await response.json();
            showResult(jsonresponse);
        }
    } catch (error) {
        console.log(error);
    }
}


*/

const canvas = document.getElementById("mapaCanvas");
const ctx = canvas.getContext("2d");

// Variables para el sol/luna y cielo
let hora = "dia"; // puede ser "dia" o "noche" según la API

// Función para dibujar el cielo
function dibujarCielo() {
  if (hora === "dia") {
    // Fondo azul cielo
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Sol
    ctx.beginPath();
    ctx.arc(500, 80, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
  } else {
    // Fondo noche
    ctx.fillStyle = "#0B0C2A"; // azul oscuro
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Luna
    ctx.beginPath();
    ctx.arc(500, 80, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#F0F0F0";
    ctx.fill();

    // Estrellas
    for (let i = 0; i < 50; i++) {
      ctx.beginPath();
      let x = Math.random() * canvas.width;
      let y = (Math.random() * canvas.height) / 2; // mitad superior
      ctx.arc(x, y, 2, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
    }
  }
}

// Función para dibujar nubes (solo de día)
function dibujarNubes() {
  if (hora === "dia") {
    function dibujarNube(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.arc(x + 20, y - 10, 20, 0, 2 * Math.PI);
      ctx.arc(x + 40, y, 20, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
    }
    dibujarNube(100, 80);
    dibujarNube(200, 50);
    dibujarNube(300, 100);
  }
}

// Función principal para actualizar el canvas
function actualizarCanvas(nuevaHora) {
  hora = nuevaHora; // "dia" o "noche" según la API
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujarCielo();
  dibujarNubes();
}

// Ejemplo: cambiar según la API
// Supongamos que tienes un valor de la API llamado `icon`
// que es "01d" para día y "01n" para noche
// Entonces podrías hacer algo así:
function mostrarClimaCanvas(icon) {
  if (icon.includes("d")) {
    actualizarCanvas("dia");
  } else {
    actualizarCanvas("noche");
  }
}

const now = new Date();
const hour = now.getHours();

// Determinar día o noche
const horaInicial = hour >= 6 && hour < 18 ? "dia" : "noche";

// Inicializar canvas
actualizarCanvas(horaInicial);

/*
Guardar ciudad Favorita
*/

var buttonguardarBtn = document.getElementById("guardarBtn");

buttonguardarBtn.addEventListener("click", guardarCiudad);

var listaFavoritos = document.getElementById("listaFavoritos");


function guardarCiudad() {

      const ciudadInput = document.getElementById("ciudadInput");
  const valueSearh = ciudadInput.value;


  nombreCiudad.innerText = `Ciudad: ${valueSearh}`;

  listaFavoritos.innerHTML += `<li>${nombreCiudad.innerText}
  </li>`;




}
