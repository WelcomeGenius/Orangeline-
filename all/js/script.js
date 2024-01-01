//--===============FEATURED-SLIDER

const slider = document.querySelector(".slider-container");

//--===============AUTO-PLAY

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
let Pbox = document.getElementsByClassName("sliderBox");

function autoPlay() {
       
  if(slider.scrollLeft > (maxScrollLeft - 2)){
      slider.scrollLeft -= maxScrollLeft;
  }else{
      slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 40);

//--===============PAUSE SLIDER ON-HOVER
    
for (let i = 0; i < Pbox.length; i++) {
        
  Pbox[i].addEventListener("mouseover", () => {
      clearInterval(play);
  })
  Pbox[i].addEventListener("mouseout", () => {
      return play = setInterval(autoPlay, 60);
  })
}