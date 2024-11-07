function agregarEstudiante() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const institucion = document.getElementById("institucion").value;
    const grado = document.getElementById("grado").value;

    // Crear una nueva fila en la tabla para el estudiante
    const tablaBody = document.getElementById("tabla-body");
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${institucion}</td>
        <td>${grado}</td>
        <td><input type="number" min="0" max="10" class="nota"></td>
        <td><input type="number" min="0" max="10" class="nota"></td>
        <td><input type="number" min="0" max="10" class="nota"></td>
        <td class="promedio">-</td>
    `;
    
    // Agregar la nueva fila al cuerpo de la tabla
    tablaBody.appendChild(nuevaFila);

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = '';
    document.getElementById("institucion").value = '';
    document.getElementById("grado").value = '';
}

function calcularTodosLosPromedios() {
    // Obtener todas las filas de estudiantes en la tabla
    const filas = document.querySelectorAll("#tabla-body tr");

    // Recorrer cada fila para calcular el promedio
    filas.forEach(fila => {
        // Obtener las tres notas de la fila actual
        const notas = fila.querySelectorAll(".nota");
        let suma = 0;
        let count = 0;

        // Calcular la suma de las notas
        notas.forEach(nota => {
            const valor = parseFloat(nota.value);
            if (!isNaN(valor)) {
                suma += valor;
                count++;
            }
        });

        // Calcular y mostrar el promedio en la columna de "Promedio"
        const promedio = count > 0 ? (suma / count).toFixed(2) : '-';
        fila.querySelector(".promedio").textContent = promedio;
    });
}