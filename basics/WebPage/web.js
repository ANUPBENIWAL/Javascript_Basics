const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');

  title.addEventListener('click', () => {
    for (i = 0; i < accordionItems.length; i++) {
      if(accordionItems[i] != item){
        accordionItems[i].classList.remove('active');
      }else{
        // toggle the accordion item
        item.classList.toggle('active');
      }
    }

  });
});
const slider = document.querySelector(".slider");
const sliders  = document.querySelectorAll(".slide");
const prevBtn  = document.querySelectorAll(".prer-slide");
const nextBtn  = document.querySelectorAll(".next-slide");
let slideIndex=0;
slides[slideIndex].classList.add('active');
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
function prevSlide(){
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex ===0)? slides.length - 1 : slideIndex - 1;
  slides[slideIndex].classList.add('active');
  slider.style.transform = `translateX(-${slideIndex*100}%)`;

}

function nextSlide(){
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex ===slides.length - 1)? 0 : slideIndex + 1;
  slides[slideIndex].classList.add('active');
  slider.style.transform = `translateX(-${slideIndex*100}%)`;

}


