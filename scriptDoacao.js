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

//Módulos de tipos de doações
document.addEventListener('DOMContentLoaded', function () {
    var modal1 = document.getElementById('modal1');
    var btn1 = document.getElementById('tipo1');
    var span1 = modal1.getElementsByClassName('close')[0];

    var modal2 = document.getElementById('modal2');
    var btn2 = document.getElementById('tipo2');
    var span2 = modal2.getElementsByClassName('close')[0];

    btn1.onclick = function () {
        modal1.style.display = 'block';
        setTimeout(function() {
            modal1.classList.add('show');
        }, 10); // Pequeno atraso para permitir que o display: block seja aplicado
    }

    span1.onclick = function () {
        modal1.classList.remove('show');
        setTimeout(function() {
            modal1.style.display = 'none';
        }, 300); // Tempo para a transição completar antes de esconder
    }

    btn2.onclick = function () {
        modal2.style.display = 'block';
        setTimeout(function() {
            modal2.classList.add('show');
        }, 10); // Pequeno atraso para permitir que o display: block seja aplicado
    }

    span2.onclick = function () {
        modal2.classList.remove('show');
        setTimeout(function() {
            modal2.style.display = 'none';
        }, 300); // Tempo para a transição completar antes de esconder
    }

    window.onclick = function (event) {
        if (event.target == modal1) {
            modal1.classList.remove('show');
            setTimeout(function() {
                modal1.style.display = 'none';
            }, 300); // Tempo para a transição completar antes de esconder
        } else if (event.target == modal2) {
            modal2.classList.remove('show');
            setTimeout(function() {
                modal2.style.display = 'none';
            }, 300); // Tempo para a transição completar antes de esconder
        }
    }
});
//ANIMAÇÃO CONTATO
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
