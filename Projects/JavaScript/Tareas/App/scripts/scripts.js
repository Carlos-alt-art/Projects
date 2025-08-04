// Referencias a los elementos del DOM
const entradaTarea = document.getElementById("taskInput");
const botonAgregarTarea = document.getElementById("addTaskBtn");
const listaTareas = document.getElementById("taskList");
const retroalimentacion = document.getElementById("feedback");

// Función principal para agregar tareas a la lista
function agregarTarea() {
  const textoTarea = entradaTarea.value.trim(); // Elimina espacios al inicio y al final

  // Validación: campo vacío
  if (textoTarea === "") {
    mostrarRetroalimentacion("Por favor, escribe una tarea válida.", "error");
    return;
  }

  // Validación: longitud máxima
  if (textoTarea.length > 50) {
    mostrarRetroalimentacion(
      "La tarea no puede exceder los 50 caracteres.",
      "error"
    );
    return;
  }

  // Validación: evitar tareas duplicadas
  const tareasExistentes = Array.from(
    listaTareas.querySelectorAll("li span")
  ).map((span) => span.textContent);
  if (tareasExistentes.includes(textoTarea)) {
    mostrarRetroalimentacion("La tarea ya existe.", "error");
    return;
  }

  // Crear nuevo elemento de tarea
  const elementoLista = document.createElement("li");
  elementoLista.className = "task-item";

  // Contenido HTML con botones de acción
  elementoLista.innerHTML = `
        <span>${textoTarea}</span>
        <div class="task-buttons">
            <button class="complete-btn">Completar</button>
            <button class="delete-btn">Eliminar</button>
        </div>
    `;

  // Botón para marcar tarea como completada
  elementoLista.querySelector(".complete-btn").addEventListener("click", () => {
    elementoLista.classList.toggle("completed");
    mostrarRetroalimentacion("Tarea actualizada.", "success");
  });

  // Botón para eliminar la tarea
  elementoLista.querySelector(".delete-btn").addEventListener("click", () => {
    elementoLista.remove();
    mostrarRetroalimentacion("Tarea eliminada.", "success");
  });

  // Agregar tarea a la lista
  listaTareas.appendChild(elementoLista);
  entradaTarea.value = ""; // Limpiar input
  mostrarRetroalimentacion("Tarea agregada con éxito.", "success");
}

// Evento para agregar tarea al hacer clic en el botón
botonAgregarTarea.addEventListener("click", agregarTarea);

// Permitir agregar tarea al presionar Enter en el input
entradaTarea.addEventListener("keypress", (e) => {
  if (e.key === "Enter") agregarTarea();
});

// Función para mostrar mensajes temporales al usuario
function mostrarRetroalimentacion(mensaje, tipo) {
  retroalimentacion.textContent = mensaje;
  retroalimentacion.className = `feedback ${tipo}`;
  retroalimentacion.style.display = "block";

  // Ocultar el mensaje después de 3 segundos
  temporizadorRetroalimentacion = setTimeout(() => {
    retroalimentacion.style.display = "none";
  }, 3000);
}
