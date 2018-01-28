
var productsInBasket = [];
var productCount =0;
var	addProductToBasket = function(id) {
	// var basketCount = document.getElementById('basketCount');	
	for (var i = 0; i < products.length; i++) {
		if (products[i].id == id){
			productsInBasket.push(products[i]);
			productCount++;
		}		
	}
	setBasketCount();
	// alert(productsInBasket);	
}
var setBasketCount = function () {
	var basketCount = document.getElementById('basketCount');
	basketCount.innerHTML = productsInBasket.length;
}
window.onload = function() {
	showData();
};

var showData = function() {
	var phoneList = document.getElementById('phoneList');
	for (var i = 0; i < products.length; i++) {
		var phone = document.createElement('div'); // create new div
		phone.innerHTML = 
		'<h2>'+ products[i].name +'</h2>' +
		'<p>' + products[i].description + '</p>' +
		'<span onclick="addProductToBasket('+ products[i].id +')" title="Добавте в корзину">'+
		'<img src="images/phones/'+ products[i].image +'" style="width: 30%; cursor: pointer;" />'+
		'</span>' + '<span class="price">' + products[i].price +'₴</span>';

		phoneList.appendChild(phone);

	}
}

var showBasket = function() {
	var totalSum = 0;
	var modal = document.getElementById('basket-modal');
	modal.style.display = "block";
	var products = document.getElementById('products');

	var productToDelete = products.getElementsByClassName("product");
	// видаляє попередньо відображені товари в корзині
	while (productToDelete[0]) {
		productToDelete[0].parentNode.removeChild(productToDelete[0]);
	}
	//заповнює корзину товарами
	for (var i = 0; i < productsInBasket.length; i++) {
		var product = document.createElement('div');			
		product.classList.add("product");
		product.innerHTML = '<span>'+productsInBasket[i].name+' за ціною '+ productsInBasket[i].price +
		'₴&nbsp;'+'&nbsp;'+'</span>';
		var removeElem = document.createElement('button');
		removeElem.innerHTML = '&times;';
		removeElem.setAttribute("id",  i);
		removeElem.onclick = function(event){
			var i = event.target.getAttribute('id');
			productsInBasket.splice(i, 1);
			setBasketCount();
			showBasket();	
		};
		
		product.appendChild(removeElem);
		
		products.appendChild(product);
		totalSum +=productsInBasket[i].price;
	}
	//добавляє підсумок ціни
	var total = document.createElement('div');
	total.classList.add("product");
	if(totalSum > 0){
		total.innerHTML = '<p> На загальну суму '+totalSum+'₴</p>';	
	} else {
		total.innerHTML = '<p> Нажаль Ваша корзина порожня </p>';
	}	
	products.appendChild(total);
}

var closeBasket = function () {	
	var modal = document.getElementById('basket-modal');
	modal.style.display = "none";
}
