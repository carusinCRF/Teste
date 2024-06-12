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

//Para acessar dinâmicamente as páginas

document.querySelectorAll('#corpoParaTerFoots img').forEach(img => {
    img.addEventListener('click', function() {
        const url = this.getAttribute('data-href');
        if (url) {
            window.location.href = url;
        }
    });
});



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