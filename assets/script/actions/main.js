import { Slide1 } from "../components/blocks/Index_page/HeroSection/Slides/Slide1.js";
import { Slide2 } from "../components/blocks/Index_page/HeroSection/Slides/Slide2.js";

const leftArrow = document.querySelector("#slider_ctrl_arrow_left");
const rigthArrow = document.querySelector("#slider_ctrl_arrow_right");

const indexHeroSliderWrapper = document.querySelector("#index_hero_slider_wrapper");

const slidesArr = [Slide1, Slide2];
let currentSlideIndex = 1;
let currentSlide = slidesArr[currentSlideIndex];

function changeSlide(i){
    currentSlideIndex = i;
    currentSlide = slidesArr[currentSlideIndex];
}

leftArrow.addEventListener('click', ()=>{
    const isStart = currentSlideIndex == 0;
    isStart ? changeSlide(slidesArr.length - 1) : changeSlide(--currentSlideIndex);
    console.log(currentSlideIndex);
    indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];

});

rigthArrow.addEventListener('click', ()=>{
    const isEnd = currentSlideIndex == slidesArr.length - 1;
    isEnd ? changeSlide(0) : changeSlide(++currentSlideIndex);
    console.log(currentSlideIndex);
    indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];
});
