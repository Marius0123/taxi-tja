import { Slide1 } from "../components/blocks/Index_page/HeroSection/Slides/Slide1.js";
import { Slide2 } from "../components/blocks/Index_page/HeroSection/Slides/Slide2.js";

const leftArrow = document.querySelector("#slider_ctrl_arrow_left");
const rigthArrow = document.querySelector("#slider_ctrl_arrow_right");

const indexHeroSliderWrapper = document.querySelector("#index_hero_slider_wrapper");

const slidesArr = [Slide1, Slide2];
let currentSlideIndex = 1;
const changeSlideIntervat = 9000;

function changeSlideIndex(i){
    currentSlideIndex = i;
}

let changeSlideAuto = setInterval(()=>{
    const isEnd = currentSlideIndex == slidesArr.length - 1;
    isEnd ? changeSlideIndex(0) : changeSlideIndex(++currentSlideIndex);
    console.log(currentSlideIndex);
    indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];
}, changeSlideIntervat);

leftArrow.addEventListener('click', ()=>{
    const isStart = currentSlideIndex == 0;
    isStart ? changeSlideIndex(slidesArr.length - 1) : changeSlideIndex(--currentSlideIndex);
    console.log(currentSlideIndex);
    indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];
    clearInterval(changeSlideAuto);
    changeSlideAuto = setInterval(()=>{
        const isEnd = currentSlideIndex == slidesArr.length - 1;
        isEnd ? changeSlideIndex(0) : changeSlideIndex(++currentSlideIndex);
        console.log(currentSlideIndex);
        indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];
    }, changeSlideIntervat);
});

rigthArrow.addEventListener('click', ()=>{
    const isEnd = currentSlideIndex == slidesArr.length - 1;
    isEnd ? changeSlideIndex(0) : changeSlideIndex(++currentSlideIndex);
    console.log(currentSlideIndex);
    indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];
    clearInterval(changeSlideAuto);
    changeSlideAuto = setInterval(()=>{
        const isEnd = currentSlideIndex == slidesArr.length - 1;
        isEnd ? changeSlideIndex(0) : changeSlideIndex(++currentSlideIndex);
        console.log(currentSlideIndex);
        indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];
    }, changeSlideIntervat);
});

