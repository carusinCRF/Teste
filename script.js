document.addEventListener('DOMContentLoaded', () => {
    const images = ['a1.png', 'a2.png', 'a3.png'];
    const carrossel = document.getElementById('carrossel');

    images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            carrossel.appendChild(img);
        };
        img.onerror = (error) => {
            console.error(`Erro ao carregar imagem ${src}: ${error}`);
        };
    });

    let index = 0;
    const totalImages = images.length;
    const intervalTime = 5000;
    let autoSlideInterval;

    function updateCarrossel() {
        const offset = -index * 100; // Deslocamento em porcentagem
        carrossel.style.transform = `translateX(${offset}%)`;
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            index = (index + 1) % totalImages;
            updateCarrossel();
        }, intervalTime);
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        index = (index + 1) % totalImages;
        updateCarrossel();
        resetAutoSlide();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        index = (index - 1 + totalImages) % totalImages;
        updateCarrossel();
        resetAutoSlide();
    });

    // Start the auto-slide interval when the page loads
    autoSlideInterval = setInterval(() => {
        index = (index + 1) % totalImages;
        updateCarrossel();
    }, intervalTime);
});



// CARROSSEL FEEDBACK

document.addEventListener('DOMContentLoaded', () => {
    const feedbacks = [
        {
          id: 1,
          name: "sara jones",
          job: "ux designer",
          img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"
        },
        // Adicione mais objetos de feedback conforme necessário

        {
            id: 2,
            name: "Maria Clara",
            job: "Funcionário Publica",
            img:
              "imgProvasocial1.jpg",
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
          },
          /*{
            id: 3,
            name: "anees",
            job: "web designer",
            img:
              "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
          },*/
          {
            id: 3,
            name: "James",
            job: "Voluntário",
            img:
              "imgProvasocial2.jpg",
            text:
              "SLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
          },
          /*{
            id: 5,
            name: "san",
            job: "the boss",
            img:
              "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
          }*/
        ];
    
    const img = document.getElementById("person-img");
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");
    
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    
    let currentItem = 0;
    
    // Carrega o item inicial
    window.addEventListener("DOMContentLoaded", () => {
        showFeedback(currentItem);
    });
    
    // Mostra o feedback com base no índice
    function showFeedback(index) {
        const feedback = feedbacks[index];
        img.src = feedback.img;
        author.textContent = feedback.name;
        job.textContent = feedback.job;
        info.textContent = feedback.text;
    }
    
    // Mostra o próximo feedback
    nextBtn.addEventListener("click", () => {
        currentItem++;
        if (currentItem > feedbacks.length - 1) {
            currentItem = 0;
        }
        showFeedback(currentItem);
    });
    
    // Mostra o feedback anterior
    prevBtn.addEventListener("click", () => {
        currentItem--;
        if (currentItem < 0) {
            currentItem = feedbacks.length - 1;
        }
        showFeedback(currentItem);
    });
});


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






//FOOTER MENSAGEM DE ERRO

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



//FAZENDO CONEXÃO COM AS FOTOS DAS RECORDAÇÕES

document.addEventListener('DOMContentLoaded', () => {
    const foto1 = document.getElementById('foto1');

    if (foto1) {
        foto1.addEventListener('click', () => {
            window.location.href = "FotosIImaio.html";
        });
    }
});

//-----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const foto1 = document.getElementById('foto2');

    if (foto1) {
        foto1.addEventListener('click', () => {
            window.location.href = "FotosIMaio.html";
        });
    }
});

//------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const foto1 = document.getElementById('foto3');

    if (foto1) {
        foto1.addEventListener('click', () => {
            window.location.href = "FotosSaudAbr.html";
        });
    }
});

//------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const foto1 = document.getElementById('foto6');

    if (foto1) {
        foto1.addEventListener('click', () => {
            window.location.href = "FotosMarcoI.html";
        });
    }
});

//------------------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('RedirecionarRecordacoes').addEventListener('click', function() {
        window.location.href = 'VerMaisFotos.html';
    });
});

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