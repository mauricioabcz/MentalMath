document.addEventListener("DOMContentLoaded", () => {
    const algarismosInput = document.getElementById("algarismos");
    const confirmBtn = document.getElementById("confirm");
    const generateBtn = document.getElementById("generate");
    const showResultsBtn = document.getElementById("showResults");

    const configDiv = document.getElementById("config");
    const mainContentDiv = document.getElementById("mainContent");
    const numbersDiv = document.getElementById("numbers");
    const resultsDiv = document.getElementById("results");

    const num1Elem = document.getElementById("num1");
    const num2Elem = document.getElementById("num2");

    const sumElem = document.getElementById("sum");
    const subElem = document.getElementById("sub");
    const mulElem = document.getElementById("mul");
    const divElem = document.getElementById("div");
    const timeElem = document.getElementById("time");

    let num1, num2, startTime, algarismos;

    function gerarNumero(algarismos) {
        const min = 10 ** (algarismos - 1);
        const max = 10 ** algarismos - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    confirmBtn.addEventListener("click", () => {
        algarismos = parseInt(algarismosInput.value);
        if (isNaN(algarismos) || algarismos < 1 || algarismos > 9) {
            alert("Digite um número entre 1 e 9.");
            return;
        }

        configDiv.classList.add("hidden");
        mainContentDiv.classList.remove("hidden");
    });

    generateBtn.addEventListener("click", () => {
        num1 = gerarNumero(algarismos);
        num2 = gerarNumero(algarismos);

        num1Elem.textContent = `Número 1: ${num1}`;
        num2Elem.textContent = `Número 2: ${num2}`;
        numbersDiv.classList.remove("hidden");
        resultsDiv.classList.add("hidden");

        startTime = new Date().getTime();
    });

    showResultsBtn.addEventListener("click", () => {
        const endTime = new Date().getTime();
        const elapsedTime = ((endTime - startTime) / 1000).toFixed(3);

        sumElem.textContent = num1 + num2;
        subElem.textContent = num1 - num2;
        mulElem.textContent = num1 * num2;
        divElem.textContent = num2 !== 0 ? (num1 / num2).toFixed(3) : "Indefinido";
        timeElem.textContent = elapsedTime;

        resultsDiv.classList.remove("hidden");
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            alert("Execução interrompida!");
            window.location.reload();
        }
    });
});
