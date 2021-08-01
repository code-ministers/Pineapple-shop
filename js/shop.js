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
    // DONE: Fill in this instance method to remove one item from the cart.
    // Note: You will have to decide what kind of parameter to pass in here!
    for (let i = 0; i < this.items.length; i++)
    {
      if (this.items[i].toy === item.toy)
      {
        this.items.splice(i, 1);
      }
    } 
  };

