document.addEventListener('DOMContentLoaded', () => {
    fetch('js/recetas.json')
        .then(response => response.json())
        .then(data => {
            const recetas = data.recetas;
            recetas.forEach(receta => renderReceta(receta));
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});


function renderReceta(receta) {
    const bloque = document.getElementById('bloque');

    const slug = receta.titulo.toLowerCase().replace(/ /g, '-');

    const heroReceta = document.createElement('div');
    heroReceta.classList.add('hero-receta');
    heroReceta.id = `hero-receta-${slug}`;
    heroReceta.innerHTML = `
        <div class="hero-receta--titulo">
            <h1>${receta.titulo}</h1>
            <p>${receta.descripcion}</p>
        </div>
        <div class="hero-receta--imagen">
            <div class="container-boton">
                    <button class="boton-receta">
                        Ver receta
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z"></path>
                            <path d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z"></path>
                        </svg>
                    </button>
                <img src="${receta.imagen}" class="imagen-receta">
            </div>
        </div>
    `;

    const preparacionReceta = document.createElement('div');
    preparacionReceta.classList.add('preparacion-receta');
    preparacionReceta.id = `preparacion-receta-${slug}`;
    preparacionReceta.innerHTML = `
        <div class="preparacion-receta--ingredientes">
            <h2>Ingredientes</h2>
            <table>
                ${receta.ingredientes.map(ing => `
                    <tr>
                        <td>${ing.nombre}</td>
                        <td>${ing.cantidad}</td>
                    </tr>
                `).join('')}
            </table>
        </div>
        <div class="preparacion-receta--preparacion">
            <h2>Preparación</h2>
            <p>
                ${receta.preparacion.map(paso => `<span>${paso}</span><br><br>`).join('')}
            </p>
        </div>
    `;

    bloque.appendChild(heroReceta);
    bloque.appendChild(preparacionReceta);
}
