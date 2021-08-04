'use strict';

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
}


let onSaleContainer = document.getElementById('onSale');

let onSale = Toy.all;

function getRandomIndex() {
  return Math.floor(Math.random() * onSale.length);
}

function renderImagesOnSale(){
  for(let i =0 ; i<3 ; i++){
    let index = getRandomIndex();
    let priceOnSale = onSale[index].price/2;
    let div = document.createElement('div');
    onSaleContainer.appendChild(div);
    let img = document.createElement('img');
    div.appendChild(img);
    img.src= onSale[index].src;
    let button = document.createElement('button');
    let name = document.createElement('p');
    let dataDescr = document.createElement('p');
    let oldPrice = document.createElement('del');
    let text = document.createElement('p');
    let newPrice = document.createElement('ins');
    div.appendChild(name);
    div.appendChild(dataDescr);
    dataDescr.appendChild(oldPrice);
    div.appendChild(text);
    text.appendChild(newPrice);
    div.appendChild(button);
    button.textContent = 'add to cart';
    let object = onSale[index];
    // console.log(object);
    button.addEventListener('click', handleSubmitBoys);
    function handleSubmitBoys() {
    object.quantity++;
      if (!selectedArray.includes(object)) {
        console.log('found');
        selectedArray.push(object);
      }
    store();
    }
    name.textContent = object.name;
    oldPrice.textContent = `${object.price} JD`;
    dataDescr.textContent = `old price : ${oldPrice.textContent}`;
    newPrice.textContent= `${priceOnSale} JD!`;
    text.textContent= `new price : ${newPrice.textContent}`;
  }
}

renderImagesOnSale();
