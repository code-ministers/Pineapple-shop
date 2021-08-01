const Toy = function(name,src) {
  this.name = name;
  this.src = src;
  Toy.all.push(this);
};
Toy.all = [];


