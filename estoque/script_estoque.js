document.addEventListener("DOMContentLoaded", function () {
	const products = [
		{
			name: "arroz",
			code: "001",
			category: "grãos",
			quantity: Math.floor(Math.random() * 10) + 1,
			price: 10.00
		},
		{
			name: "molho de tomate",
			code: "002",
			category: "molhos",
			quantity: Math.floor(Math.random() * 10) + 1,
			price: 5.00
		},
		{
			name: "feijão",
			code: "003",
			category: "grãos",
			quantity: Math.floor(Math.random() * 10) + 1,
			price: 7.00
		},
		{
			name: "macarrão",
			code: "004",
			category: "massas",
			quantity: Math.floor(Math.random() * 10) + 1,
			price: 4.00
		},
		{
			name: "açúcar",
			code: "005",
			category: "doces",
			quantity: Math.floor(Math.random() * 10) + 1,
			price: 3.00
		},
		{
			name: "café",
			code: "006",
			category: "bebidas",
			quantity: Math.floor(Math.random() * 10) + 1,
			price: 12.00
		},
		{
			name: "queijo",
			code: "007",
			category: "laticínios",
			quantity: Math.floor(Math.random() * 10) + 1,
			price: 8.00
		},
		{
			name: "farinha",
			code: "008",
			category: "farinhas",
			quantity: Math.floor(Math.random() * 10) + 1,
			price: 6.00
		},
		{
			name: "leite",
			code: "009",
			category: "laticínios",
			quantity: Math.floor(Math.random() * 10) + 1,
			price: 4.50
		},
		{
			name: "pão",
			code: "010",
			category: "padaria",
			quantity: Math.floor(Math.random() * 10) + 1,
			price: 3.50
		}
	];

	for (let index = 0; index < products.length; index++) {
		const element = products[index];

		const row = document.createElement("tr");
		row.innerHTML = `
				<td>${element.name}</td>
				<td>${element.code}</td>
				<td>${element.category}</td>
				<td>${element.quantity}</td>
				<td>${element.price.toFixed(2)}</td>
			`;

		productTableBody.appendChild(row);
	}
	
	const productForm = document.getElementById("productForm");
	productForm.addEventListener("submit", function (event) {
		event.preventDefault();
		

		const productNameInput = document.getElementById("productName");
		const productCodeInput = document.getElementById("productCode");
		const productCategoryInput = document.getElementById("productCategory");
		const productQtdInput = document.getElementById("productQtd");
		const productPriceInput = document.getElementById("productPrice");
	
		const productName = productNameInput.value;
		const productCode = productCodeInput.value;
		const productCategory = productCategoryInput.value;
		const productQtd = productQtdInput.value;
		const productPrice = productPriceInput.value;
		
		console.log(productName);



		const row = document.createElement("tr");
		row.innerHTML = `
				<td>${productName}</td>
				<td>${productCode}</td>
				<td>${productCategory}</td>
				<td>${productQtd}</td>
				<td>${productPrice}</td>
			`;

		productTableBody.appendChild(row);

		productNameInput.value = ''
		productCodeInput.value = ''
		productCategoryInput.value = ''
		productQtdInput.value = ''
		productPriceInput.value = ''
	});
})
