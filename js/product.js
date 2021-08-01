'use strict';
//slied show
//render fun





  function  renderFunction (){

    let imageEl=document.getElementById('images');
   
    for (i=0; i<Toy.all.length; i++){
    
        let data=document.createElement('img');
        imageEl.appendChild(data);
        data.src=Toy.all.src[i];
          
    }
}

renderFunction();
   // let lableEl=document.getElementById('filter');
    
    
    //let opatioEl1 = lableEl.options[lableEl.selectedIndex].value;

   // let opationEl2 = lableEl.options[lableEl.selectedIndex].;//







//add to card 

//