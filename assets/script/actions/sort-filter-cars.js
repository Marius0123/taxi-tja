import { brandsArrData, carsArrData, transArrData } from "../app/our-cars-app.js";

const main = document.querySelector('main');

main.addEventListener('click', (event)=>{
    if(event.target.classList.contains("submitBtn") || event.target.parentElement.classList.contains("submitBtn")){
        const brandInput = document.querySelector('#brand');
        const transInput = document.querySelector('#trans');
        const airCondInput = document.querySelector('#airCond');
        const sortInput = document.querySelector('#sort');

        // console.log(brandInput.value);
        const selectedBrand = brandsArrData[(parseInt(brandInput.value) - 1)];
        const selectedTrans = transArrData[(parseInt(transInput.value) - 1)];

        let List = ``;
        const selectedCars = [];
        
        carsArrData.forEach((car)=>{
            if(!selectedBrand){
                if(!selectedTrans){
                    if(parseInt(airCondInput.value) == -1){
                        selectedCars.push(car);
                    } else if(car.airCond == airCondInput.value){
                        selectedCars.push(car);
                    }
                } else if(car.transmission == selectedTrans) {
                    if(parseInt(airCondInput.value) == -1){
                        selectedCars.push(car);
                    } else if(car.airCond == airCondInput.value){
                        selectedCars.push(car);
                    }
                }
            } else if(car.brand == selectedBrand.name){
                if(!selectedTrans){
                    if(parseInt(airCondInput.value) == -1){
                        selectedCars.push(car);
                    } else if(car.airCond == airCondInput.value){
                        selectedCars.push(car);
                    }
                } else if(car.transmission == selectedTrans) {
                    if(parseInt(airCondInput.value) == -1){
                        selectedCars.push(car);
                    } else if(car.airCond == airCondInput.value){
                        selectedCars.push(car);
                    }
                }
            }
            // console.log(parseInt(airCondInput.value) == -1);
        });

        switch(parseInt(sortInput.value)){
            case 1: 
                console.log('case nr 1');
                selectedCars.sort(
                    (p1, p2) => (p1.brand > p2.brand) ? 1 : (p1.brand < p2.brand) ? -1 : 0);
                break;
            case 2: 
                console.log('case nr 2');
                selectedCars.sort(
                    (p1, p2) => (p1.brand < p2.brand) ? 1 : (p1.brand > p2.brand) ? -1 : 0);
                break;

            case 3: 
                console.log('case nr 3');
                selectedCars.sort(
                    (p1, p2) => (p1.rating > p2.rating) ? 1 : (p1.rating < p2.rating) ? -1 : 0);
                break;
            case 4: 
                console.log('case nr 4');
                selectedCars.sort(
                    (p1, p2) => (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0);
                break;

            case 5: 
                console.log('case nr 5');
                selectedCars.sort(
                    (p1, p2) => (p1.taxPerKm > p2.taxPerKm) ? 1 : (p1.taxPerKm < p2.taxPerKm) ? -1 : 0);
                break;
            case 6: 
                console.log('case nr 6');
                selectedCars.sort(
                    (p1, p2) => (p1.taxPerKm < p2.taxPerKm) ? 1 : (p1.taxPerKm > p2.taxPerKm) ? -1 : 0);
                break;
        }


        selectedCars.forEach((car)=>{
            // console.log(car);
            let stars = ``;
            // console.log(car.id);
            for(let i = 0; i < Math.round(car.rating); i++){
                stars += 
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: var(--orange)">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>`
            }
        
            for(let i = Math.round(car.rating); i < 5; i++){
                stars += 
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: var(--white)">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>`
            }
            List += 
                    `<div class="car_card">
                        <div class="car_card_bg"></div>
                        <div class="car_card_header">
                            <img src="https://purepng.com/public/uploads/large/purepng.com-ferrariferrariferrari-carsferrari-automobilescarssport-1701527480809r62e9.png" alt="">
                        </div>
                        <div class="car_card_body">
                            <div class="car_name">
                                <a href="./car.html" class="orange_hover bold_p smaller_section_title">${car.model} (${car.year})</a>
                            </div>
                            <div class="car_details_list">
                                <div class="car_details_l_item">
                                    <div class="car_details_l_i_name">Transmission: </div>
                                    <div class="car_details_l_i_data">${car.transmission}</div>
                                </div>
                                <div class="car_details_l_item">
                                    <div class="car_details_l_i_name">Per KM:</div>
                                    <div class="car_details_l_i_data">${car.taxPerKm}</div>
                                </div>
                                <div class="car_details_l_item">
                                    <div class="car_details_l_i_name">Passengers:</div>
                                    <div class="car_details_l_i_data">${car.seats}</div>
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
                            <a href="./car.html" class="round_btn capitalise orange_btn">
                                More details
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                            </a>
                        </div>
                    </div>`
            }
        );
        
        if(List.length == 0){
            document.querySelector('.cars_content_block').innerHTML = `<p class="smaller_section_title" style="text-align: center;">Cars not found</p>`;
        } else {
            document.querySelector('.cars_content_block').innerHTML = 
                    `<div class="cars_content">
                        ${List}
                    </div>`;
        }
    }
});
