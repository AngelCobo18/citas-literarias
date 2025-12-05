// --------------------------
// BASE DE DATOS LOCAL (V1)
// --------------------------

const citas = [
    // --------- DEFREDS (CASI SIN QUERER) ---------
    {
        texto: "Por el día sobrevivía a base de amigos y poesía. Pero cada noche era una agonía. Deseaba que no llegara nunca, para no tener que tumbarme y pensar en su melena.",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Como llorar sin ganas. Como follar sin ansias. Como la vida sin ti.",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Te odio, te quiero.",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Esa persona que da igual el tiempo que pase, da igual dónde vivas y con quién...",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Habla mucho. Justo lo que calla es lo que no se puede saber.",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Si te mirara a los ojos una vez más, no me atrevería a decir nada...",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Que, aunque tú no lo sabías, yo en el fondo te esperaba.",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Pero he de confesarte que nunca he disfrutado tanto como entre tus brazos...",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Ver que ese desconocido, en algún momento, fue tu mayor conocido...",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Y aunque no lo creas, sus silencios dicen más que el resto del mundo a gritos.",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Respiro. Pero ya no vivo...",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Algunas veces recuerda aquello que pudo ser y dejó pasar por miedo.",
        autor: "Defreds",
        obra: "Casi sin querer"
    },
    {
        texto: "Y ahora quiero un billete para huir de recuerdos. Y sale demasiado caro...",
        autor: "Defreds",
        obra: "Casi sin querer"
    },

    // --------- MEMORIA DE MIS PUTAS TRISTES ---------
    {
        texto: "No hay un anciano que olvide dónde escondió su tesoro.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes"
    },
    {
        texto: "La fuerza invencible que ha impulsado al mundo no son los amores felices sino los contrariados.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes"
    },
    {
        texto: "El sexo es el consuelo que uno tiene cuando no le alcanza el amor.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes"
    },
    {
        texto: "Los celos saben más que la verdad.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes"
    },
    {
        texto: "Es imposible no terminar siendo como los otros creen que uno es.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes"
    },
    {
        texto: "No hay peor desgracia que morir solo.",
        autor: "Gabriel García Márquez",
        obra: "Memoria de mis putas tristes"
    },

    // Duplicadas para Cicerón y Julio César
    {
        texto: "No hay un anciano que olvide dónde escondió su tesoro.",
        autor: "Cicerón",
        obra: ""
    },
    {
        texto: "Es imposible no terminar siendo como los otros creen que uno es.",
        autor: "Julio César",
        obra: ""
    },

    // --------- HEMINGWAY (POR QUIÉN DOBLAN LAS CAMPANAS) ---------
    {
        texto: "Pensó que aburrimiento era una palabra que ningún campesino del mundo usaría...",
        autor: "Ernest Hemingway",
        obra: "Por quién doblan las campanas"
    },
    {
        texto: "Quiero lo que tú quieras. Quiero hacerlo todo...",
        autor: "Ernest Hemingway",
        obra: "Por quién doblan las campanas"
    },
    {
        texto: "La llegada de la noche le hacía sentirse siempre más solo...",
        autor: "Ernest Hemingway",
        obra: "Por quién doblan las campanas"
    },
    {
        texto: "Pero un hombre inteligente se ve obligado a emborracharse algunas veces...",
        autor: "Ernest Hemingway",
        obra: "Por quién doblan las campanas"
    }
];

// --------------------------
// CITA DEL DÍA
// --------------------------

function citaDelDia() {
    const hoy = new Date().getDate();
    const index = hoy % citas.length;
    document.getElementById("cita-del-dia").innerText = citas[index].texto;
}
citaDelDia();


// --------------------------
// BUSCADOR
// --------------------------

function buscar() {
    const q = document.getElementById("buscador").value.toLowerCase();
    const resultados = citas.filter(c => c.texto.toLowerCase().includes(q));
    mostrarResultados(resultados);
}


// --------------------------
// MOSTRAR AUTORES
// --------------------------

function mostrarAutores() {
    const autores = [...new Set(citas.map(c => c.autor))].sort();
    const cont = document.getElementById("contenido");
    cont.innerHTML = "<h2>Autores</h2>";

    autores.forEach(autor => {
        cont.innerHTML += `<p onclick="verAutor('${autor}')" class="link">${autor}</p>`;
    });
}

function verAutor(nombre) {
    const resultados = citas.filter(c => c.autor === nombre);
    mostrarResultados(resultados, nombre);
}


// --------------------------
// MOSTRAR OBRAS
// --------------------------

function mostrarObras() {
    const obras = [...new Set(citas.map(c => c.obra))].filter(o => o !== "").sort();

    const cont = document.getElementById("contenido");
    cont.innerHTML = "<h2>Obras</h2>";

    obras.forEach(obra => {
        cont.innerHTML += `<p onclick="verObra('${obra}')" class="link">${obra}</p>`;
    });
}

function verObra(titulo) {
    const resultados = citas.filter(c => c.obra === titulo);
    mostrarResultados(resultados, titulo);
}


// --------------------------
// MOSTRAR RESULTADOS
// --------------------------

function mostrarResultados(lista, titulo = "") {
    const cont = document.getElementById("contenido");

    cont.innerHTML = titulo ? `<h2>${titulo}</h2>` : "";

    lista.forEach(c => {
        cont.innerHTML += `
            <div class="cita">
                "${c.texto}"<br>
                <small>${c.autor} — ${c.obra}</small>
            </div>
        `;
    });
}
