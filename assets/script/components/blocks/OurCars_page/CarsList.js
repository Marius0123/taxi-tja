import { carsArrData } from "../../../app/our-cars-app.js";

let List = ``;

carsArrData.forEach((car, index)=>{
    let stars = ``;
    // console.log(car.rating)
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
                        <a href="./car.html?id=${index+1}" class="orange_hover bold_p smaller_section_title">${car.model} (${car.year})</a>
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
                    <a href="./car.html?id=${index+1}" class="round_btn capitalise orange_btn">
                        More details
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>
                </div>
            </div>`
});


export const CarsList = List;