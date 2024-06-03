document.addEventListener("DOMContentLoaded", function() {
    const products = {
        "Arroz": { quantity: 1, price: 10.00 },
        "Molho de tomate": { quantity: 1, price: 5.00 },
        "Feijão": { quantity: 1, price: 7.00 },
        "Macarrão": { quantity: 1, price: 4.00 },
        "Açúcar": { quantity: 1, price: 3.00 },
        "Café": { quantity: 1, price: 12.00 },
        "Óleo de soja": { quantity: 1, price: 8.00 },
        "Farinha de trigo": { quantity: 1, price: 6.00 },
        "Leite": { quantity: 1, price: 4.50 },
        "Manteiga": { quantity: 1, price: 5.50 },
        "Pão": { quantity: 1, price: 3.50 },
        "Queijo": { quantity: 1, price: 15.00 },
        "Presunto": { quantity: 1, price: 13.00 },
        "Frango": { quantity: 1, price: 20.00 },
        "Carne bovina": { quantity: 1, price: 25.00 }
    };

    const productForm = document.getElementById("productForm");
    const productNameInput = document.getElementById("productName");
    const productTableBody = document.getElementById("productTableBody");
    const totalPriceElement = document.getElementById("totalPrice");

    let totalPrice = 0;

    productForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const productName = productNameInput.value;
        if (products[productName]) {
            const product = products[productName];
            addProductToTable(productName, product.quantity, product.price);
            totalPrice += product.price;
            updateTotalPrice(totalPrice);
            productNameInput.value = "";
        } else {
            alert("Produto não encontrado!");
        }
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
