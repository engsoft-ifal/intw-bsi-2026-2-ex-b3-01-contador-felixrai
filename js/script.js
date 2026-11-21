let valor = 0;

const total = document.querySelector("#total");
const somar = document.querySelector("#somar");
const zerar = document.querySelector("#zerar");

total.textContent = valor;

somar.addEventListener("click", function() {
  valor = valor + 1;
  total.textContent = valor;
});

zerar.addEventListener("click", function() {
  valor = 0;
  total.textContent = valor;
});
