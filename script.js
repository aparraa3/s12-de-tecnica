
function analizarCalificaciones() {

    // Declaracion del vector unidimensional
    let calificaciones = [];

    // Variables para los resultados
    let referencia;
    let superiores = 0;
    let inferiores = 0;
    let iguales = 0;
    let coincidencias = 0;
    let notaMayor;
    let posicionMayor = 0;
    let posiciones = "";

    let resultados = document.getElementById("resultados");

    // Ingresar y validar las 15 calificaciones
    for (let i = 0; i < 15; i++) {

        let valor = document.getElementById("nota" + (i + 1)).value;

        if (valor.trim() === "") {
            alert("Debe ingresar todas las 15 calificaciones.");
            resultados.style.display = "none";
            return;
        }

        let nota = Number(valor);

        if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
            alert("Las calificaciones deben estar entre 0 y 10.");
            resultados.style.display = "none";
            return;
        }

        calificaciones[i] = nota;
    }

    // Obtener la calificacion de referencia
    let valorReferencia = document.getElementById("referencia").value;

    if (valorReferencia.trim() === "") {
        alert("Ingrese una calificacion de referencia.");
        resultados.style.display = "none";
        return;
    }

    referencia = Number(valorReferencia);

    if (!Number.isFinite(referencia) || referencia < 0 || referencia > 10) {
        alert("La calificacion de referencia debe estar entre 0 y 10.");
        resultados.style.display = "none";
        return;
    }

    // Inicializar la nota mayor
    notaMayor = calificaciones[0];

    // Recorrer el vector para buscar y analizar
    for (let i = 0; i < 15; i++) {

        // Comparar con la calificacion de referencia
        if (calificaciones[i] === referencia) {

            coincidencias++;
            iguales++;

            // Guardar todas las posiciones encontradas
            if (posiciones !== "") {
                posiciones += ", ";
            }

            // Mostrar posiciones desde 1 hasta 15
            posiciones += (i + 1);

        } else if (calificaciones[i] > referencia) {

            superiores++;

        } else {

            inferiores++;
        }

        // Identificar la calificacion mas alta
        if (calificaciones[i] > notaMayor) {

            notaMayor = calificaciones[i];
            posicionMayor = i + 1;
        }
    }

    // Mostrar resultados
    let contenido = "";

    contenido += "<h2>Resultados del analisis</h2>";

    contenido += "<div class='resultado-item'>";
    contenido += "<strong>Calificacion buscada:</strong> " + referencia;
    contenido += "</div>";

    // Comprobar si existen coincidencias
    if (coincidencias > 0) {

        contenido += "<div class='resultado-item exito'>";
        contenido += "Se encontraron " + coincidencias + " coincidencia(s).";
        contenido += "</div>";

        contenido += "<div class='resultado-item'>";
        contenido += "<strong>Posiciones encontradas:</strong> ";
        contenido += posiciones;
        contenido += "</div>";

    } else {

        contenido += "<div class='resultado-item error'>";
        contenido += "No se encontraron coincidencias con la calificación buscada.";
        contenido += "</div>";
    }

    contenido += "<div class='resultado-item'>";
    contenido += "<strong>Estudiantes con nota superior:</strong> " + superiores;
    contenido += "</div>";

    contenido += "<div class='resultado-item'>";
    contenido += "<strong>Estudiantes con nota inferior:</strong> " + inferiores;
    contenido += "</div>";

    contenido += "<div class='resultado-item'>";
    contenido += "<strong>Estudiantes con nota igual:</strong> " + iguales;
    contenido += "</div>";

    contenido += "<div class='resultado-item'>";
    contenido += "<strong>Calificacion mas alta:</strong> " + notaMayor;
    contenido += "</div>";

    contenido += "<div class='resultado-item'>";
    contenido += "<strong>Primera posicion de la nota mas alta:</strong> ";
    contenido += posicionMayor;
    contenido += "</div>";

    resultados.innerHTML = contenido;
    resultados.style.display = "block";
}
