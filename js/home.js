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
    let img = document.createElement('img');
    onSaleContainer.appendChild(img);
    img.src= onSale[index].src;
    let button = document.createElement('button');
    let dataDescr = document.createElement('p');
    let oldPrice = document.createElement('del');
    let text = document.createElement('p');
    let newPrice = document.createElement('ins');
    onSaleContainer.appendChild(dataDescr);
    onSaleContainer.appendChild(oldPrice);
    onSaleContainer.appendChild(text);
    onSaleContainer.appendChild(newPrice);
    onSaleContainer.appendChild(button);
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
    dataDescr.textContent = `${Toy.boysToys[i].name}  old price :`;
    oldPrice.textContent = ` ${Toy.boysToys[i].price} `;
    text.textContent= 'new price : ';
    newPrice.textContent= `${priceOnSale} !`;
  }
}

renderImagesOnSale();
