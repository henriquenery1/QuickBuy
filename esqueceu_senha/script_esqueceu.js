const enviarButton = document.querySelector('.btn_enviar')
const btnFecharPopup = document.getElementById('btnFecharPopup');
const popup = document.getElementById('popup');


enviarButton.addEventListener('click', function() {
    setTimeout(function() {
        popup.classList.add('visible');
        }, 900); 
    });

btnFecharPopup.addEventListener('click', function() {
    popup.classList.remove('visible');
    window.location.href = "../login/login.html";
});

