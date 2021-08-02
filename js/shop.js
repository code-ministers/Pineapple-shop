
const Toy = function (name, src, price, gender) {
  this.name = name;
  this.src = src;
  this.price = price;
  this.boyToy(gender);
  this.girlToy(gender);

  Toy.all.push(this);
};
Toy.all = [];
Toy.boysToys = [];
Toy.girlsToys = [];

Toy.prototype.boyToy = function (gender) {
  if (gender === 'b') {
    Toy.boysToys.push(this);
  }
};

Toy.prototype.girlToy = function (gender) {
  if (gender === 'g') {
    Toy.girlsToys.push(this);
  }
};

const Cart = function (items) {
  this.items = items;
};

const CartItem = function (toy, quantity) {
  this.toy = toy;
  this.quantity = quantity;
};

Cart.prototype.addItem = function (toy, quantity) {
  let newItem = new CartItem(toy, quantity);
  this.items.push(newItem);

};



Cart.prototype.saveToLocalStorage = function () {
  let stringArr = JSON.stringify(this.items);
  localStorage.setItem('cart', stringArr);
};

Cart.prototype.removeItem = function (item) {
  this.items.splice(item, 1);
};


function generateProduct() {
  new Toy('blue-elephant', '/img/boy/blue-elephant.png', '5JD', 'b');
  new Toy('building-blocks', '/img/boy/building-blocks.png', '4JD', 'b');
  new Toy('car', '/img/boy/car.png ', '3JD', 'b');
  new Toy('clipart-lion', 'img/boy/clipart-lion.png', '5JD', 'b');
  new Toy('elephant', '/img/boy/elephant.png', '6JD', 'b');
  new Toy('on-the-beach', '/img/boy/on-the-beach.png', '7JD', 'b');
  new Toy('pizzle-truck', '/img/boy/puzzle-truck.png', '10JD', 'b');
  new Toy('ring-stack', '/img/boy/ring-stack.png', '3JD', 'b');
  new Toy('robot', '/img/boy/robot.png ', '12JD', 'b');
  new Toy('school-bus', '/img/boy/school-bus.png ', '6JD', 'b');
  new Toy('rocking-horse', '/img/boy/rocking-horse.png', '20JD', 'b');
  new Toy('superMan', '/img/boy/superMan.png ', '7JD', 'b');
  new Toy('homeGirls', '/img/girl/homeGirls.png', '12JD', 'g');
  new Toy('horseForGirls', '/img/girl/hoursForGirls.png', '15JD', 'g');
  new Toy('lego-minnie-mouse', '/img/girl/lego-minnie-mouse.png ', '15JD', 'g');
  new Toy('newGirls-toys', '/img/girl/newGirls-toys.png ', '7JD', 'g');
  new Toy('planForGirls', '/img/girl/planForGirls.png ', '5JD', 'g');
  new Toy('DollToys', '/img/girl/DollToys.png ', '4JD', 'g');
  new Toy('teddy-bear', '/img/girl/teddy-bear.png ', '5JD', 'g');
  new Toy('tedyBear-toy', '/img/girl/tedyBear-toy.png ', '5JD', 'g');
  new Toy('tedybear', '/img/girl/tedybear.png ', '5JD', 'g');
  new Toy('toddler-girls', '/img/girl/toddler-girls.png ', '8JD', 'g');
  new Toy('toyfordrgirls', '/img/girl/toyfordrgirls.png ', '6JD', 'g');
  new Toy('toys-rabbit', '/img/girl/toys-rabbit.png ', '5JD', 'g');

}

generateProduct();

let imageEl = document.getElementById('images');
function renderFunction() {

  

  for (let i = 0; i < Toy.all.length; i++) {
    // console.log(Toy.all[i]);
    let data = document.createElement('img');
    let dataDescr = document.createElement('p')
    let button=document.createElement('button')
    imageEl.appendChild(data);
    imageEl.appendChild(dataDescr);
    imageEl.appendChild(button);
    button.textContent='add to cart';
    data.src = Toy.all[i].src;
    dataDescr.textContent = `${Toy.all[i].name}     ${Toy.all[i].price}`;
    // console.log(Toy.all[i].name + "   " +  Toy.all[i].price);
    // console.log(dataDescr);
  }
  
}

renderFunction();

let lableEl = document.getElementById('mySelect');

lableEl.addEventListener('click', forSelection);

function forSelection(event) {
  event.preventDefault();

  Toy.all = 0;
  // console.log(Toy.all);
  // let boy=event.target.gender;
  for (let i = 0; i < Toy.boysToys.length; i++) {
    
    let button=document.createElement('button')
    let dataBoy = document.createElement('img');
    let dataDescr = document.createElement('p')
    imageEl.appendChild(dataBoy);
    imageEl.appendChild(dataDescr);
    imageEl.appendChild(button);
    button.textContent='add to cart';
    dataBoy.src =Toy.boysToys[i].src;
    dataDescr.textContent = `${Toy.boysToys[i].name}     ${Toy.boysToys[i].price}`;
    // console.log(boy);
    
  }

}
