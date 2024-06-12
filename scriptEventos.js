//MENU HAMBURGUE
//PARA APARECER O MENU
document.getElementById('botaoMenuInicial').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
//SUAVIDADE DO MENU AO APARECER
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

//Redirecionando para outras págians
document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.blocos');

    blocks.forEach(block => {
        block.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});


//Para acessar dinâmicamente as páginas
document.querySelectorAll('#fundo .blocos').forEach(bloco => {
    bloco.addEventListener('click', function() {
        const url = this.getAttribute('data-href');
        if (url) {
            window.location.href = url;
        }
    });
});
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


//ERRO 
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



//CONTATO
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