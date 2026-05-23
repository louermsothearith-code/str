
const products=[
{name:"Coca Cola",price:2500},
{name:"Water",price:1000},
{name:"Snack",price:3000}
];

let cart=[];

function renderProducts(){
const list=document.getElementById("product-list");
list.innerHTML="";
products.forEach((p,i)=>{
list.innerHTML += `
<div class='product'>
<b>${p.name}</b><br>
${p.price}៛
<button onclick='addToCart(${i})'>Add</button>
</div>`;
});
}

function addToCart(i){
cart.push(products[i]);
renderCart();
}

function renderCart(){
const list=document.getElementById("cart-list");
list.innerHTML="";
let total=0;

cart.forEach(item=>{
total += item.price;
list.innerHTML += `<div>${item.name} - ${item.price}៛</div>`;
});

document.getElementById("total").innerText=total+"៛";
}

function checkout(){
alert("Sale completed");
cart=[];
renderCart();
}

renderProducts();
