document.addEventListener("DOMContentLoaded", function () {
    const mensagemHora = document.getElementById("mensagem-hora");
    const imagemHora = document.getElementById("imagem-hora");
    const body = document.body;

    function atualizarHora() {
        const agora = new Date();
        const horas = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');
        const segundos = agora.getSeconds().toString().padStart(2, '0');
        const horarioAtual = `${horas}:${minutos}:${segundos}`;

        if (agora.getHours() >= 0 && agora.getHours() < 12) {
            body.setAttribute("data-tema", "claro");
            mensagemHora.textContent = `Agora são ${horarioAtual}.`;
            imagemHora.src = "sol.jpg"; 
        } else if (agora.getHours() >= 12 && agora.getHours() < 18) {
            body.setAttribute("data-tema", "verde");
            mensagemHora.textContent = `Agora são ${horarioAtual}.`;
            imagemHora.src = "soltarde.jpg";  
        } else {
            body.setAttribute("data-tema", "marinho");
            mensagemHora.textContent = `Agora são ${horarioAtual}.`;
            imagemHora.src = "lua.jpg";  
        }
    }

    setInterval(atualizarHora, 1000);
    atualizarHora();
});

document.getElementById("tabuada-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoTabuada = document.getElementById("resultado-tabuada");
    resultadoTabuada.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        li.textContent = `${numero} x ${i} = ${numero * i}`;
        resultadoTabuada.appendChild(li);
    }
});

const numeros = [];

document.getElementById("analisador-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const numero = parseInt(document.getElementById("novo-numero").value);
    const listaNumeros = document.getElementById("lista-numeros");
    const resultadoAnalise = document.getElementById("resultado-analise");

    if (!numeros.includes(numero)) {
        numeros.push(numero);
        const li = document.createElement("li");
        li.textContent = `Número adicionado: ${numero}`;
        listaNumeros.appendChild(li);

        resultadoAnalise.textContent = "";
    } else {
        alert("Número já foi adicionado!");
    }

    document.getElementById("novo-numero").value = "";
});

document.getElementById("analisar").addEventListener("click", function () {
    if (numeros.length === 0) {
        alert("Adicione números primeiro!");
        return;
    }

    const soma = numeros.reduce((a, b) => a + b, 0);
    const media = soma / numeros.length;
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);

    const resultadoAnalise = document.getElementById("resultado-analise");
    resultadoAnalise.textContent = `
        Total de números: ${numeros.length}
        Soma: ${soma}
        Média: ${media.toFixed(2)}
        Maior: ${maior}
        Menor: ${menor}
    `;
});

document.getElementById("contagem-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const inicio = parseInt(document.getElementById("inicio").value);
    const fim = parseInt(document.getElementById("fim").value);
    const passo = parseInt(document.getElementById("passo").value);
    const resultadoContagem = document.getElementById("resultado-contagem");

    let contagem = "";
    if (inicio < fim) {
        if (passo <= 0 || passo > (fim - inicio)) {
            resultadoContagem.textContent = "Impossível contar com o intervalo fornecido.";
            return;
        }
        for (let i = inicio; i <= fim; i += passo) {
            contagem += i + " ";
        }
    } else {
        if (passo >= 0 || passo < (inicio - fim)) {
            resultadoContagem.textContent = "Impossível contar com o intervalo fornecido.";
            return;
        }
        for (let i = inicio; i >= fim; i -= passo) {
            contagem += i + " ";
        }
    }

    resultadoContagem.textContent = `Contagem: ${contagem}`;
});
