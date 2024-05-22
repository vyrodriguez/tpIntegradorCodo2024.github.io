document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const focus = params.get('focus');
    if (focus) {
        document.querySelector(`.box-main-${focus}`).style.display = 'block';
    }
});

// Referenciar contenido de páginas según el parametro focus
window.onload = function() {
    console.log("El script se ha cargado correctamente.");
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const focus = urlParams.get('focus');

    console.log("Parámetro focus:", focus);

    // Muestra solo el contenedor relevante basado en el parámetro 'focus'
    if (focus) {
        const targetBox = document.querySelector(`.box-main-${focus}`);
        console.log("Elemento encontrado:", targetBox);

        if (targetBox) {
            targetBox.style.display = 'block';
        } else {
            console.log("No se encontró un elemento que coincida con el parámetro focus.");
        }
    }
};


// Para cambiar el título de la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const focus = urlParams.get('focus');

    // Comprobar el valor del parámetro 'focus' y cambiar el título de la página
    if (focus) {
        switch(focus) {
            case 'bizcochuelo':
                document.title = "Bizcochuelo de Chocolate - Dulce Capricho";
                break;
            case 'cheesecake':
                document.title = "Cheesecake de Dulce de Leche - Dulce Capricho";
                break;
            case 'lemonpie':
                document.title = "Lemon Pie Tradicional - Dulce Capricho";
                break;
            case 'trufas':
                document.title = "Trufas de Chocolate - Dulce Capricho";
                break;
            case 'cupcake':
                document.title = "Cupcake de Vainilla - Dulce Capricho";
                break;
            case 'alfajor':
                document.title = "Alfajores de Maicena - Dulce Capricho";
                break;
            default:
                document.title = "Dulce Capricho";
        }
    }
});