// MENU HAMBURGUER
// PARA APARECER O MENU
document.getElementById('botaoMenuInicial').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300); // Tempo igual à duração da transição
    } else {
        menu.style.display = 'block';
        setTimeout(() => {
            menu.classList.add('show');
        }, 10); // Pequeno atraso para permitir que o navegador registre o display:block antes da transição
    }
});

// Parte do formulário
document.addEventListener('DOMContentLoaded', function () {
    var nomeLabel = document.getElementById('nomeLabel');
    var emailLabel = document.getElementById('emailLabel');
    var numeroLabel = document.getElementById('numeroLabel');
    var formacaoLabel = document.getElementById('formacaoLabel');
    var nomeInput = document.getElementById('nomeInput');
    var emailInput = document.getElementById('emailInput');
    var numeroInput = document.getElementById('numeroInput');
    var formacaoInput = document.getElementById('FormacaoInput');

    var lista = [
        nomeLabel,
        emailLabel,
        document.getElementById("resposta1"),
        numeroLabel,
        document.getElementById("resposta2"),
        formacaoLabel,
        document.getElementById("resposta3"),
        document.getElementById("obrigado")
    ];

    var indice = 0;

    function verificadorEstado() {
        var elemento = lista[indice];
        elemento.style.display = "none";
        indice++;

        if (indice < lista.length - 1) {
            elemento = lista[indice];
            elemento.style.display = "block";

            // Altera o texto da label e mostra/esconde os campos de acordo com o índice
            if (indice === 1) {
                nomeLabel.textContent = 'Digite seu email:';
                nomeInput.style.display = 'none'; // Esconde o campo de nome
                emailLabel.style.display = 'block'; // Mostra o label do campo de email
                emailInput.style.display = 'block'; // Mostra o campo de email
            } else if (indice === 3) {
                numeroLabel.textContent = 'Digite seu número:';
                numeroInput.parentNode.style.display = 'block'; // Mostra o parágrafo que contém o campo de número
                numeroInput.style.display = 'block'; // Mostra o campo de número
            } else if (indice === 5) {
                formacaoLabel.textContent = 'Informe sua formação:';
                formacaoInput.parentNode.style.display = 'block'; // Mostra o parágrafo que contém o campo de formação
                formacaoInput.style.display = 'block'; // Mostra o campo de formação
            }
        } else if (indice === lista.length - 1) {
            var obrigado = document.getElementById("obrigado");
            obrigado.style.display = "block";
            botaoProximo.disabled = true;  // Desativa o botão
            botaoProximo.style.display = "none";  // Oculta o botão
        }
    }

    var botaoProximo = document.getElementById('botaoProximo');
    botaoProximo.addEventListener('click', verificadorEstado);

    // Inicializar a primeira entrada como visível
    lista[indice].style.display = "block";
});



//FOOTER

document.getElementById('btnInfo').addEventListener('click', function(event) {
    event.preventDefault();
    if (validateFormInfo()) {
        displaySuccessMessage('infoSuccessMessage', 'Formulário enviado com sucesso!');
    }
});

document.getElementById('btnContato').addEventListener('click', function(event) {
    event.preventDefault();
    if (validateFormContato()) {
        displaySuccessMessage('contatoSuccessMessage', 'Formulário enviado com sucesso!');
    }
});

function validateFormInfo() {
    var emailInfo = document.getElementById('emailInfo').value;
    var isValid = true;

    // Reset error messages
    var emailInfoError = document.getElementById('emailInfoError');
    emailInfoError.style.display = 'none';
    
    // Reset success message
    var infoSuccessMessage = document.getElementById('infoSuccessMessage');
    infoSuccessMessage.style.display = 'none';

    // Validate email
    if (!validateEmail(emailInfo)) {
        emailInfoError.textContent = 'Por favor, insira um email válido.';
        emailInfoError.style.display = 'block';
        isValid = false;
    }

    return isValid;
}

function validateFormContato() {
    var nomeCont = document.getElementById('nomeCont').value;
    var emailCont = document.getElementById('emailCont').value;
    var telCont = document.getElementById('telCont').value;
    var assuntoCont = document.getElementById('assuntoCont').value;
    var mensg = document.getElementById('mensg').value;
    var isValid = true;

    // Reset error messages
    var nomeContError = document.getElementById('nomeContError');
    var emailContError = document.getElementById('emailContError');
    var telContError = document.getElementById('telContError');
    var assuntoContError = document.getElementById('assuntoContError');
    var mensgError = document.getElementById('mensgError');
    
    nomeContError.style.display = 'none';
    emailContError.style.display = 'none';
    telContError.style.display = 'none';
    assuntoContError.style.display = 'none';
    mensgError.style.display = 'none';
    
    // Reset success message
    var contatoSuccessMessage = document.getElementById('contatoSuccessMessage');
    contatoSuccessMessage.style.display = 'none';

    // Validate nome
    if (nomeCont.trim() === '') {
        nomeContError.textContent = 'Por favor, insira seu nome.';
        nomeContError.style.display = 'block';
        isValid = false;
    }

    // Validate email
    if (!validateEmail(emailCont)) {
        emailContError.textContent = 'Por favor, insira um email válido.';
        emailContError.style.display = 'block';
        isValid = false;
    }

    // Validate telefone
    if (!validatePhone(telCont)) {
        telContError.textContent = 'Por favor, insira um telefone válido.';
        telContError.style.display = 'block';
        isValid = false;
    }

    // Validate assunto
    if (assuntoCont.trim() === '') {
        assuntoContError.textContent = 'Por favor, insira o assunto.';
        assuntoContError.style.display = 'block';
        isValid = false;
    }

    // Validate mensagem
    if (mensg.trim() === '') {
        mensgError.textContent = 'Por favor, insira uma mensagem.';
        mensgError.style.display = 'block';
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^[0-9]+$/;
    return re.test(phone);
}

function displaySuccessMessage(elementId, message) {
    var successMessageElement = document.getElementById(elementId);
    successMessageElement.textContent = message;
    successMessageElement.style.display = 'block';
}



//suavidade contato
document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});