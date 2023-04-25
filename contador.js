document.addEventListener('DOMContentLoaded', function() {
    var contador = 0;
    var contadorElemento = document.getElementById('contador');
  
    document.getElementById('contador-boton').addEventListener('click', function() {
      contador++;
      console.log('El botón se ha presionado ' + contador + ' veces.');
      contadorElemento.innerHTML = contador;
    });
  
    document.getElementById('contador-boton-down').addEventListener('click', function() {
      if (contador > 0) {
        contador--;
        console.log('El botón se ha reducido a ' + contador + ' veces.');
        contadorElemento.innerHTML = contador;
      }
    });
  });
  