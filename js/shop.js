const Toy = function(name,src) {
  this.name = name;
  this.src = src;
  Toy.all.push(this);
};
Toy.all = [];


const Cart = function(items) {
  this.items = items;
};

const CartItem = function(toy, quantity) {
  this.toy = toy;
  this.quantity = quantity;
};

Cart.prototype.addItem = function (toy, quantity) {
  let newItem  = new CartItem(toy,quantity);
  this.items.push(newItem);

};

Cart.prototype.saveToLocalStorage = function () {
  let stringArr = JSON.stringify(this.items);
  localStorage.setItem('cart',stringArr);
};

Cart.prototype.removeItem = function(item) {
  this.items.splice(item,1);
};

