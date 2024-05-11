var tarjetas = document.querySelectorAll('.tarjeta-receta');

document.getElementById('prueba').addEventListener('click', function() { 
    tarjetas.forEach(function(tarjeta) {
        tarjeta.style.display = 'none'; 
    });
    document.getElementById('prueba2').style.display='contents';
   })




