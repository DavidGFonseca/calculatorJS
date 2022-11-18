/*Este código HTML foi descrito para inclusão em protifolio pessoal, somente para demonstrar
as tecnologias estudar em cursos e experiencias adquiridas*/

//Declarando as variaveis
const dataOperacao = document.querySelectorAll("[jsoperator]");
const dataDelete = document.querySelector("[jsdelete]");
const dataClear = document.querySelector("[jsclear]");
const dataResult = document.querySelector("[jsequals]");
const dataSave = document.querySelector("[jssave]");
const dataOutput = document.querySelector("[jsoutput]");

//Aplicando o conceitos de classes para trabalhar com OO
class Calculator {
  constructor(visor) {
    this.visor = visor;
    this.allClear();
  }

  addOperacao(valor) {
    if (this.visor.innerText.includes("..")) return;
    this.visor.innerText += valor;
  }

  allClear() {
    this.visor.innerText = "";
  }

  deleteLast() {
    const temp = this.visor.innerText;
    this.visor.innerText = temp.substring(0, temp.length - 1);
  }

  resultado() {
    const result = eval(this.visor.innerText);
    this.visor.innerText = result;
  }

  salveResult() {}
}

const calculator = new Calculator(dataOutput);

dataClear.addEventListener("click", () => {
  calculator.allClear();
});

for (let numeros of dataOperacao) {
  numeros.addEventListener("click", () => {
    calculator.addOperacao(numeros.innerText);
  });
}

dataDelete.addEventListener("click", () => {
  calculator.deleteLast();
});

dataResult.addEventListener("click", () => {
  calculator.resultado();
});

dataSave.addEventListener("click", () => {});
