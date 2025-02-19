import { brandsArrData, transArrData, carsArrData } from "../app/our-cars-app.js";
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



const brands = document.querySelector('#brands');
const trans = document.querySelector('#transmission');

let BrandOpts = ``;
brandsArrData.forEach((e, index)=>{
    BrandOpts+=
            `<option value="${e.name}">${e.name}</option>`;
});

brands.innerHTML += BrandOpts;

let TransmissionOpts = ``;
transArrData.forEach((e, index)=>{
    TransmissionOpts+=
            `<option value="${e}">${e}</option>`;
});

trans.innerHTML += TransmissionOpts;










const carsArr = carsArrData;
carsArr.sort((p1, p2) => (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0);

let CarCards = ``;

for(let i = 0; i < 2; i++){
    let stars = ``;
            // console.log(car.id);
            for(let j = 0; j < Math.round(carsArr[i].rating); j++){
                stars += 
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: var(--orange)">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>`
            }
        
            for(let j = Math.round(carsArr[i].rating); j < 5; j++){
                stars += 
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: var(--white)">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>`
            }

    CarCards+=
            `<div class="car_card">
                        <div class="car_card_bg"></div>
                        <div class="car_card_header">
                            <img src="https://purepng.com/public/uploads/large/purepng.com-ferrariferrariferrari-carsferrari-automobilescarssport-1701527480809r62e9.png" alt="">
                        </div>
                        <div class="car_card_body">
                            <div class="car_name">
                                <a href="./pages/car.html?id=${carsArr[i].id}" class="orange_hover bold_p smaller_section_title">${carsArr[i].model} (${carsArr[i].year})</a>
                            </div>
                            <div class="car_details_list">
                                <div class="car_details_l_item">
                                    <div class="car_details_l_i_name">Transmission: </div>
                                    <div class="car_details_l_i_data">${carsArr[i].transmission}</div>
                                </div>
                                <div class="car_details_l_item">
                                    <div class="car_details_l_i_name">Per KM:</div>
                                    <div class="car_details_l_i_data">${carsArr[i].taxPerKm}</div>
                                </div>
                                <div class="car_details_l_item">
                                    <div class="car_details_l_i_name">Passengers:</div>
                                    <div class="car_details_l_i_data">${carsArr[i].seats}</div>
                                </div>
                                <div class="car_details_l_item">
                                    <div class="car_details_l_i_name">Rating:</div>
                                    <div class="car_details_l_i_data">
                                        <div class="car_card_rating">
                                            ${stars}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="car_card_footer">
                            <a href="./pages/car.html?id=${carsArr[i].id}" class="round_btn capitalise orange_btn">
                                More details
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                            </a>
                        </div>
                    </div>`;
}


const carsSection = document.querySelector('.our_cars_index_cars_content');
carsSection.innerHTML=CarCards;









let Partners = ``;
brandsArrData.forEach((e, index)=>{
    if(index!=3){
        Partners+=
        `<div class="partner_item">
            <a href="${e.link}">
                <img src="${e.logo}" alt="" title="${e.name}">
            </a>
        </div>`;
    }
    
});

console.log(Partners);



document.querySelector('.partners_content').innerHTML = Partners;