function comprobarSubconjunto() {
    // Obtener los conjuntos ingresados por el usuario
    var conjuntoA = document.getElementById('conjuntoA').value.split(',');
    var conjuntoB = document.getElementById('conjuntoB').value.split(',');
  
    // Verificar si A es un subconjunto de B
    var esSubconjunto = esSubconjuntoDe(conjuntoA, conjuntoB);
  
    // Mostrar el resultado
    mostrarResultado(esSubconjunto);
  }
  
  function esSubconjuntoDe(conjuntoA, conjuntoB) {
    return conjuntoA.every(elemento => conjuntoB.includes(elemento));
  }
  
  function mostrarResultado(esSubconjunto) {
    var resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = esSubconjunto
      ? 'A es un subconjunto de B'
      : 'A no es un subconjunto de B';
  }