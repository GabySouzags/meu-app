import './Letreiro.css';



const texto = "conheça a Fatec";
let index = 0;
let speed = 100;

function escreverLetreiro() {
  const letreiro = document.getElementById('letreiro');
  
  if (index < texto.length) {
    letreiro.innerHTML += texto.charAt(index);
    index++;
    setTimeout(escreverLetreiro, speed);
  } else {
    index = 0;
    letreiro.innerHTML = '';
    setTimeout(escreverLetreiro, speed);
  }
}

escreverLetreiro(); // Chama a função uma vez para iniciar o efeito

export default escreverLetreiro; // Exporta a função para ser usada em outros arquivos, se necessário
