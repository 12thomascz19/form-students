function agregarEstudiante() {
    const nombre = document.getElementById("nombre").value;
    const institucion = document.getElementById("institucion").value;
    const grado = document.getElementById("grado").value;

    const tablaBody = document.getElementById("tabla-body");
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${institucion}</td>
        <td>${grado}</td>
        <td><input type="number" min="0" max="10" class="nota"></td>
        <td><input type="number" min="0" max="10" class="nota"></td>
        <td><input type="number" min="0" max="10" class="nota"></td>
        <td><input type="number" min="0" max="10" class="nota"></td>
        <td><input type="number" min="0" max="10" class="nota"></td>
        <td class="promedio">-</td>
    `;
    
    tablaBody.appendChild(nuevaFila);

    document.getElementById("nombre").value = '';
    document.getElementById("institucion").value = '';
    document.getElementById("grado").value = '';
}

function calcularTodosLosPromedios() {
    const filas = document.querySelectorAll("#tabla-body tr");

    filas.forEach(fila => {
        const notas = fila.querySelectorAll(".nota");
        let suma = 0;
        let count = 0;

        notas.forEach(nota => {
            const valor = parseFloat(nota.value);
            if (!isNaN(valor)) {
                suma += valor;
                count++;
            }
        });

        const promedio = count > 0 ? (suma / count).toFixed(2) : '-';
        fila.querySelector(".promedio").textContent = promedio;
    });
}
