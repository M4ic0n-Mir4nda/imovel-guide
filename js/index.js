// Btn Inputs
const btnEnviarMensagem = document.querySelector('.btn-mensagem');
const btnCalcularRegradeTres = document.querySelector('.btn-calcular');
const inputTelefone = document.querySelector('.telefone');
//

// Modal
const openModalBtn = document.querySelector('#open-modal');
const closenModalBtn = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () => {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalBtn, closenModalBtn, fade].forEach((el) => {
    el.addEventListener('click', () => toggleModal())
})
//

// Download imagem
const btnGenerateImage = document.querySelector('#generate-image');

btnGenerateImage.addEventListener('click', () =>  {
    html2canvas(document.querySelector(".download-image")).then(canvas => {
        let link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpg');
        link.download = 'fachada-casa';
        link.click();
    })
});
//

// Open menu Hamburguer
function openSideBar() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Close menu Hamburguer
function closeSideBar() {
document.getElementById("mySidenav").style.width = "0";
}
//

function mascaraCpf(input) {
        let clean = input.value.replace(/\D/g, '');
        clean = clean.slice(0, 11);

        let formatadado = '';
        for (let i = 0; i < clean.length; i++) {
            formatadado += clean[i];
            if (i === 2 || i === 5) {
                formatadado += '.';
            } else if (i === 8) {
                formatadado += '-';
            }
        }

        input.value = formatadado;
}

function mascaraTelefone(input) {
        let clean = input.value.replace(/\D/g, '');
        clean = clean.slice(0, 11);

        let formatado = '';
        if (formatado.length === 0) {
            formatado = '(';
        }
        for (let i = 0; i < clean.length; i++) {
            formatado += clean[i];
            if (formatado.length === 3) {
                formatado += ')';
            }
            if (i === 1) {
                formatado += ' ';
            } else if (i === 5) {
                formatado += '-';
            }
        }

        input.value = formatado;
}

function calculoRegraDeTres(valor1, valor2, valor3) {
    const a = Number(valor1.value);
    const b = Number(valor2.value);
    const c = Number(valor3.value);

    let x = (b * c) / a; // formula > regra de 3 simples (proporcional)

    return x;
}

document.addEventListener('click', (event) => {
    const el = event.target;
    if (el.classList.contains('telefone')) {
        el.textContent = '(99) 9999-9999';
    }
    event.preventDefault();
})

btnEnviarMensagem.addEventListener('click', (event) => {
    const cpf = document.querySelector('.cpf-input');
    const telefone = document.querySelector('.telefone-input');
    const assunto = document.querySelector('.assunto-input');

    if (cpf.value.length !== 14 || telefone.value.length !== 14 || assunto.value === '') {
        event.preventDefault();
        alert('Preencha todos os dados!');
        return;
    }
    alert('Enviado');
    event.preventDefault();
});

btnCalcularRegradeTres.addEventListener('click', (event) => {
    const valor1 = document.querySelector('.valor-1');
    const valor2 = document.querySelector('.valor-2');
    const valor3 = document.querySelector('.valor-3');
    const resultadoInput = document.querySelector('.resultado');

    if (valor1.value === '' || isNaN(valor1.value) || valor2.value === '' || isNaN(valor2.value) || valor3.value === '' || isNaN(valor3.value)) {
        alert('Preencha os campos corretamente!')
        event.preventDefault();
        return;
    }

    const total = calculoRegraDeTres(valor1, valor2, valor3);

    resultadoInput.value = total;

    valor1.value = '';
    valor2.value = '';
    valor3.value = '';

    event.preventDefault();
});