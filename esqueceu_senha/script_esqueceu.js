const enviarButton = document.querySelector('.btn_enviar')

enviarButton.addEventListener('click', function() {
    setTimeout(function() {
        const popup = document.getElementById('popup');
        }, 900); 
    });

btnFecharPopup.addEventListener('click', function() {
    popup.classList.remove('visible');
    window.location.href = "../login/login.html";
});

