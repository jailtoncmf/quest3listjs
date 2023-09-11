function mostrarTabuada() {

  var numero = prompt("Digite um número para ver a tabuada:");


  if (numero === null || isNaN(numero)) {
    document.write("Por favor, insira um número válido.");
    return;
  }


  var tabuada = "Tabuada do " + numero + ":<br>";


  for (var i = 1; i <= 15; i++) {
    tabuada += numero + " x " + i + " = " + (numero * i) + "<br>";
  }


  document.write(tabuada);
}


mostrarTabuada();
