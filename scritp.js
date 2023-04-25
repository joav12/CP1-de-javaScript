let botao = document.getElementById("butao");
let texto = document.getElementById("texto");

botao.addEventListener("click", function() {
  texto.innerHTML = "<p>Hello World!!</p>";

  console.log("Esse código foi feito por João Victor Rosinhole");

  window.alert("O RM de meu criador é 97880");
});