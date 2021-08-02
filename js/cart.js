
'use strict';


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const T1 = document.getElementById('cart'); 
console.log(T1);
T1.addEventListener('click', removeItemFromCart);
let cart;



let testitems=[[1,"boy",11],[2,"girl",20]];
let stringArr = JSON.stringify(testitems);
localStorage.setItem('cart', stringArr);

console.log(testitems.length);
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cartItems[0]);

  let cartItemsArray = new Array();
  for (let i = 0; i < testitems.length; i++) {
    console.log(testitems.length)
    cartItemsArray.push(new CartItem(testitems[i][0],testitems[i][1]));
console.log(cartItemsArray);
  }
  cart = new Cart(testitems);
}



function showCart() {
  // TODO: Find the table11 body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
console.log("showcart"); 
let cartTBodyEls = document.getElementById('cart').getElementsByTagName('tbody');
console.log(cartTBodyEls);

  for (let i = 0; i < 1; i++) {

    let cartTBodyEl = cartTBodyEls[i];
   
    for (let  j = 0; j < testitems.length; j++) {
   

      let newRowEl = document.createElement('tr');

      let qtyN = document.createElement('td');
      qtyN .textContent =testitems[j][0] ;
      newRowEl.appendChild(qtyN);
     
      let qtyTDEl = document.createElement('td');
      qtyTDEl.textContent =testitems[j][1] ;
      newRowEl.appendChild(qtyTDEl);
   
      let itemTDEl = document.createElement('td');
      itemTDEl.textContent = testitems[j][2];
      newRowEl.appendChild(itemTDEl);

      cartTBodyEl.appendChild(newRowEl);

      
// let deleteTDEl = document.createElement('td');
// deleteTDEl.setAttribute('id',testitems[i] );
// let anchorEl = document.createElement('button');
// anchorEl.setAttribute('href', '#delete-link');
// anchorEl.setAttribute('id', testitems[i]);
// anchorEl.addEventListener('click', removeItemFromCart);
// anchorEl.textContent = 'Remove';
// deleteTDEl.appendChild(anchorEl);
// newRowEl.appendChild(deleteTDEl);

    }
  }
}




// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it

function renderCart()
 {
  loadCart();
  showCart();
  //clearCart();
}

//TODO: Remove all of the rows (tr) in the cart table11 (tbody)


  function clearCart() {
    console.log("clearCart");
   
    let cartTBodyEls = document.getElementById('cart').getElementsByTagName('tbody');
     // from stackoverflow  
    for (let tbody of cartTBodyEls) {
      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
    }

  }



// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart


function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table11
  
    let itemToRemove = event.target.id; 

    console.log(itemToRemove);

    for (let i = 0; i < testitems.length; i++)
    {
      console.log(testitems[i]);

      if (testitems[i][0]=== itemToRemove)
      {
        console.log("yes");
        cart.removeItem(testitems[i]);
      }
    }
    
    cart.saveToLocalStorage();
    renderCart();
  

}


// This will initialize the page and draw the cart on screen
renderCart();







