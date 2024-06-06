document.addEventListener("DOMContentLoaded", function() {
    const products = {
        "arroz": { price: 10.00 },
        "molho de tomate": { price: 5.00 },
        "feijão": { price: 7.00 },
        "macarrão": { price: 4.00 },
        "açúcar": { price: 3.00 },
        "café": { price: 12.00 },
        "óleo de soja": { price: 8.00 },
        "farinha de trigo": { price: 6.00 },
        "leite": { price: 4.50 },
        "manteiga": { price: 5.50 },
        "pão": { price: 3.50 },
        "queijo": { price: 15.00 },
        "presunto": { price: 13.00 },
        "frango": { price: 20.00 },
        "carne bovina": { price: 25.00 }
    };

    const productForm = document.getElementById("productForm");
    const productNameInput = document.getElementById("productName");
    const productQuantityInput = document.getElementById("productQuantity");
    const productTableBody = document.getElementById("productTableBody");
    const totalPriceElement = document.getElementById("totalPrice");
    const finalizarButton = document.querySelector(".finalizar");

    let totalPrice = 0;

    productForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const productName = productNameInput.value;
        const productQuantity = parseInt(productQuantityInput.value);

        if (products[productName]) {
            const product = products[productName];
            const productTotalPrice = product.price * productQuantity;
            addProductToTable(productName, productQuantity, productTotalPrice);
            totalPrice += productTotalPrice;
            updateTotalPrice(totalPrice);
            productNameInput.value = "";
            productQuantityInput.value = "";
        } else {
            alert("Produto não encontrado!");
        }
    });

    finalizarButton.addEventListener("click", function() {
        const urlParams = new URLSearchParams();
        urlParams.append('totalPrice', totalPrice.toFixed(2));
        window.location.href = `../finalizacao_venda/finalizacao.html?${urlParams.toString()}`;
    });

    function addProductToTable(name, quantity, price) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${quantity}</td>
            <td>${price.toFixed(2)}</td>
        `;
        productTableBody.appendChild(row);
    }

    function updateTotalPrice(price) {
        totalPriceElement.textContent = price.toFixed(2);
    }
});
