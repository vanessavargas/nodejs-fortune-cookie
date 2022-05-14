
function nomeFuncao() {
  const posicao = Math.floor(Math.random() * sortes.length);
  var frase = sortes[posicao];
  const labelNome = document.querySelector("#resultado");
  labelNome.innerText = frase;
  console.log(sortes[posicao]);
  console.log(posicao);
}
        