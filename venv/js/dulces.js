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

//  ----  CONTACTO  -------

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	dni: /^.{6,12}$/, // 6 a 12 digitos.
     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	tel: /^\d{10,14}$/ // 10 a 14 numeros.
}

const campos = {
	nombre: false,
	apellido: false,
	dni: false,
	email: false,
	tel: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

        case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;

        case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;

		case "dni":
			validarCampo(expresiones.dni, e.target, 'dni');
			
		break;

        case "tel":
			validarCampo(expresiones.tel, e.target, 'tel');
		break;
			
	}
    
    }

    const validarCampo = (expresion, input, campo) => {
        if(expresion.test(input.value)){
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        } else {
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
    
   
   
   
    formulario.addEventListener( "submit", (e) => {
        e.preventDefault();
    
        const terminos = document.getElementById('terminos');
        if(campos.nombre && campos.apellido && campos.email && campos.dni && campos.tel  && terminos.checked){
            formulario.reset();
    
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
                document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
            }, 4000);
    
            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
            
        }
    });
    


