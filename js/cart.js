
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
//table.addEventListener('click', removeItemFromCart);
console.log(table);
//table.addEventListener('click', removeItemFromCart);
let cart;
let cartItems=[];
let totalPrice=0;


function loadCart() {

  cartItems = JSON.parse(localStorage.getItem('cart')) || [];
}


function renderCart()
{
 loadCart();
 console.log(cartItems);
clearCart();
showCart();

}


//TODO: Remove all of the rows (tr) in the cart table11 (tbody)


function clearCart() {

  console.log("clearCart");

  let tbody= document.querySelector('tbody');
  while(tbody.firstChild){
    tbody.removeChild(tbody.firstChild);
  }

}



function showCart() {
  // TODO: Find the table11 body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

console.log("showcart");
let cartTBodyEls = document.querySelector('tbody');
console.log(cartTBodyEls);

    for (let  j = 0; j <cartItems.length; j++) {
      //
      let newRowEl = document.createElement('tr');
      cartTBodyEls.appendChild(newRowEl);
     // newRowEl.setAttribute('id',j);
      let qtyN = document.createElement('td');
      qtyN .textContent=j;
      newRowEl.appendChild(qtyN);
     
      let qtyNa = document.createElement('td');
      qtyNa.textContent =cartItems[j].name;
      newRowEl.appendChild(qtyNa);
   
      let itemQ = document.createElement('td');
      itemQ.textContent = cartItems[j].quantity;
      newRowEl.appendChild(itemQ);

      let itemP = document.createElement('td');
      itemP.textContent = `${cartItems[j].price} JD`;
      newRowEl.appendChild(itemP);
      totalPrice+=cartItems[j].price;
      

      let buttunElement = document.createElement('button');
      newRowEl.appendChild(buttunElement);
      buttunElement.setAttribute('id',j);
     // buttunElement.type='button';
      buttunElement.textContent= 'Remove';
 
      buttunElement.addEventListener('click', removeItemFromCart);
    }
  //   let cartTBodyEls2 = document.querySelector('tfoot');
  //   let newRowEl = document.createElement('tr');
  //   cartTBodyEls2 .appendChild(newRowEl);
  //  // newRowEl.setAttribute('id',j);
  //   let qtyN = document.createElement('td');
  //   qtyN .textContent=totalPrice;
  //   newRowEl.appendChild(qtyN);

  //   console.log(totalPrice);

  }





// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it




 

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart







// This will initialize the page and draw the cart on screen



function removeItemFromCart(event) {

console.log(event.target.id);
console.log(cartItems);


if(cartItems[event.target.id].quantity>1)
{
  cartItems[event.target.id].quantity--;
}

else {
 cartItems.splice(event.target.id,1);
} 


// totalPrice-=cartItems[event.target.id].price ; 
// console.log(cartItems[event.target.id].price );
// console.log(totalPrice);
 let stringArr = JSON.stringify(cartItems);
 localStorage.setItem('cart', stringArr);



 renderCart();
}


renderCart();


function myFunction() { 

  document.getElementById("contact").reset(); 
  alert ("Thank you for choosing  our store for toys kids products ^_^ "); 
  clearCart();
  cartItems=[];
  let stringArr = JSON.stringify(cartItems);
  localStorage.setItem('cart', stringArr);
   
 
}