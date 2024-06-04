const urlParams = new URLSearchParams(window.location.search);
        const totalPrice = urlParams.get('totalPrice');

        document.getElementById('totalPrice').textContent = 'Preço Total: R$ ' + totalPrice;


        const finalizarButton = document.querySelector('.finalizar');
        const popup = document.getElementById('popup');
        const btnFecharPopup = document.getElementById('btnFecharPopup');

        finalizarButton.addEventListener('click', function() {
            setTimeout(function() {
                popup.classList.add('visible');
            }, 900); 
        });

        btnFecharPopup.addEventListener('click', function() {
            popup.classList.remove('visible');
            window.location.href = "../caixa/caixa.html";
        });