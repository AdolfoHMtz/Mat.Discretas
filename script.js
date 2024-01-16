function comprobarSubconjunto() {
    // Obtener los conjuntos ingresados por el usuario
    var conjuntoA = document.getElementById('conjuntoA').value.split(',');
    var conjuntoB = document.getElementById('conjuntoB').value.split(',');
    // Verificar si A es un subconjunto de B
    var esSubconjunto = esSubconjuntoDe(conjuntoA, conjuntoB);
    // Mostrar el resultado
    mostrarResultado(esSubconjunto);
  }
  function comprobarSubconjuntoInverso() {
    // Obtener los conjuntos ingresados por el usuario
    var conjuntoA = document.getElementById('conjuntoA').value.split(',');
    var conjuntoB = document.getElementById('conjuntoB').value.split(',');
    // Verificar si B es un subconjunto de A
    var esSubconjuntoInverso = esSubconjuntoDe(conjuntoB, conjuntoA);
    // Mostrar el resultado
    mostrarResultadoInverso(esSubconjuntoInverso);
}
function mostrarResultadoInverso(esSubconjuntoInverso) {
    var resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = esSubconjuntoInverso
      ? 'B es un subconjunto de A'
      : 'B no es un subconjunto de A';
      if (esSubconjuntoInverso) {
        var cardinalidadA = document.getElementById('conjuntoA').value.split(',').length;
        var cardinalidadB = document.getElementById('conjuntoB').value.split(',').length;
        resultadoContainer.innerHTML += '<br>Cardinalidad de A: ' + cardinalidadA;
        resultadoContainer.innerHTML += '<br>Cardinalidad de B: ' + cardinalidadB;
    }
}

function mostrarResultado(esSubconjunto) {
  var resultadoContainer = document.getElementById('resultado');
  resultadoContainer.innerHTML = esSubconjunto
    ? 'A es un subconjunto de B'
    : 'A no es un subconjunto de B';
    if (esSubconjunto) {
      var cardinalidadA = document.getElementById('conjuntoA').value.split(',').length;
      var cardinalidadB = document.getElementById('conjuntoB').value.split(',').length;

      resultadoContainer.innerHTML += '<br>Cardinalidad de A: ' + cardinalidadA;
      resultadoContainer.innerHTML += '<br>Cardinalidad de B: ' + cardinalidadB;
  }
}
  function esSubconjuntoDe(conjuntoA, conjuntoB) {
    return conjuntoA.every(elemento => conjuntoB.includes(elemento));
  }


function calcularConjuntoPotencia() {
  // Obtener el conjunto ingresado por el usuario
  var conjuntoC = document.getElementById('conjuntoC').value.split(',');
  // Calcular el conjunto potencia
  var potencia = calcularPotenciaDeConjunto(conjuntoC);
  // Mostrar el resultado
  mostrarResultadoPotencia(potencia);
}
function calcularPotenciaDeConjunto(conjunto) {
  var potencia = [[]];
  for (var i = 0; i < conjunto.length; i++) {
      var currentElement = conjunto[i];
      var tempSubset = [];
      for (var j = 0; j < potencia.length; j++) {
          var subset = potencia[j].slice();
          subset.push(currentElement);
          tempSubset.push(subset);
      }
      potencia = potencia.concat(tempSubset);
  }
  return potencia;
}
function mostrarResultadoPotencia(potencia) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = potencia.length;
  resultadoContainer.innerHTML = '<strong>Conjunto Potencia:</strong><br>' +
      'Elementos: ' + JSON.stringify(potencia) + '<br>' +
      'Cardinalidad: ' + cardinalidad;
}



function calcularUnion() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoX = document.getElementById('conjuntoX').value.split(',');
  var conjuntoY = document.getElementById('conjuntoY').value.split(',');
  // Calcular la Unión de conjuntos
  var union = calcularUnionDeConjuntos(conjuntoX, conjuntoY);
  // Mostrar el resultado
  mostrarResultadoUnion(union);
}
function calcularUnionDeConjuntos(conjuntoX, conjuntoY) {
  var union = Array.from(new Set([...conjuntoX, ...conjuntoY]));
  return union;
}
function mostrarResultadoUnion(union) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = union.length;

  resultadoContainer.innerHTML = '<strong>Unión de Conjuntos:</strong><br>' +
      'Elementos: ' + JSON.stringify(union) + '<br>' +
      'Cardinalidad: ' + cardinalidad;
}


function calcularInterseccion() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoM = document.getElementById('conjuntoM').value.split(',');
  var conjuntoN = document.getElementById('conjuntoN').value.split(',');
  // Calcular la Intersección de conjuntos
  var interseccion = calcularInterseccionDeConjuntos(conjuntoM, conjuntoN);
  // Mostrar el resultado
  mostrarResultadoInterseccion(interseccion);
}
function calcularInterseccionDeConjuntos(conjuntoM, conjuntoN) {
  var interseccion = conjuntoM.filter(elemento => conjuntoN.includes(elemento));
  return interseccion;
}
function mostrarResultadoInterseccion(interseccion) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = interseccion.length;
  resultadoContainer.innerHTML = '<strong>Intersección de Conjuntos:</strong><br>' +
      'Elementos: ' + JSON.stringify(interseccion) + '<br>' +
      'Cardinalidad: ' + cardinalidad;
}


function calcularDiferencia() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoP = document.getElementById('conjuntoP').value.split(',');
  var conjuntoQ = document.getElementById('conjuntoQ').value.split(',');

  // Calcular la Diferencia de conjuntos
  var diferencia = calcularDiferenciaDeConjuntos(conjuntoP, conjuntoQ);

  // Mostrar el resultado
  mostrarResultadoDiferencia(diferencia);
}
function calcularDiferenciaDeConjuntos(conjuntoP, conjuntoQ) {
  var diferencia = conjuntoP.filter(elemento => !conjuntoQ.includes(elemento));
  return diferencia;
}
function mostrarResultadoDiferencia(diferencia) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = diferencia.length;
  resultadoContainer.innerHTML = '<strong>Diferencia de Conjuntos:</strong><br>' +
      'Elementos: ' + JSON.stringify(diferencia) + '<br>' +
      'Cardinalidad: ' + cardinalidad;
}


