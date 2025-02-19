import { badRequest, carTaken, emailNotValideAlert } from "../../data/json/Alerts.data.js";
import { db } from "./app.js";
import { getDatabase, ref, set, onValue, push, onChildAdded, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
import { carsArrData } from "./our-cars-app.js";

// FROM SERVER (TO APP) //
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);


const thisCar = carsArrData[id-1];
console.log(thisCar);


const para = ['Cutie', 'Locuri', 'Brand', 'Aer condiționat', 'Anul', 'Categorie'];
const details = [thisCar.transmission, `${thisCar.seats} Locuri`, thisCar.brand, thisCar.airCond ? 'Da' : 'Nu', thisCar.year, 'Standart'];
const price = thisCar.taxPerKm;

let DetailsList = '';
para.forEach((e, index)=>{
    DetailsList+=
        `<div class="car_details_item">
            <div class="car_details_item_card">
                <div class="car_details_item_card_col_1">
                    <div class="detail_type capitalise">${details[index]}</div>
                    <div class="detail_title uppercase">${e}</div>
                </div>
                <div class="car_details_item_card_col_2">
                    <div class="detail_nr">${index+1}</div>
                </div>
            </div>
        </div>`;
});

const Details = 
            `<div class="car_details">
                <div class="car_details_list">
                    ${DetailsList}
                </div>
            </div>`;


            let stars = ``;

for(let i = 0; i < Math.round(thisCar.rating); i++){
            stars += 
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: var(--orange)">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>`
        }
    
        for(let i = Math.round(thisCar.rating); i < 5; i++){
            stars += 
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill: var(--white)">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>`
        }

const SectionContent = 
            `<div id="car_page_block">
                <div class="car_page_cotainer content_block ">
                    <div class="car_conteiner_col_1">
                        <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        <div class="car_text small_p">
                            Ferrari 365 GTB4 Daytona, a legendary sports car from the late 1960s, exudes timeless elegance and powerful performance. With its sleek and aerodynamic design, the Daytona is a symbol of automotive excellence....
                        </div>
                    </div>
                    <div class="car_conteiner_col_2">
                        <div class="car_conteiner_col_2_header">
                            <p class="extra_big_p">${thisCar.model}</p>
                            <div class="car_rating">
                                ${stars}
                            </div>
                        </div>
                        <div class="car_conteiner_col_2_body">
                            ${Details}        
                        </div>
                        <div class="car_conteiner_col_2_footer">
                            <div class="car_price_block">
                                <div class="price_content">
                                    <div class="price_content_sum">
                                        <sup>$</sup>${price}
                                    </div>
                                    <div class="price_content_time">
                                        / per hour
                                    </div>
                                </div>
                                <div class="price_content">
                                    <div class="price_content_sum">
                                        <sup>$</sup>${price*24}
                                    </div>
                                    <div class="price_content_time">
                                        / per day
                                    </div>
                                </div>
                            </div>

                            <a href="#car_form_point" class="round_btn capitalise orange_btn">
                                Book now
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;


document.querySelector('.carInfoBlock').innerHTML = SectionContent;






// TO SERVER (FROM APP) //
// GENERAL
const carIdInput = document.querySelector('#carIdInput');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const phoneInput = document.querySelector('#phoneInput');
const typeSelect = document.querySelector('#typeSelect');
const passNrInput = document.querySelector('#passNrInput');

//PICKUP
const pickupDateInput = document.querySelector('#pickupDateInput');
const pickupTimeInput = document.querySelector('#pickupTimeInput');
const pickupLocationInput = document.querySelector('#pickupLocationInput');

//DROPOFF
const dropoffDateInput = document.querySelector('#dropoffDateInput');
const dropoffTimeInput = document.querySelector('#dropoffTimeInput');
const dropoffLocationInput = document.querySelector('#dropoffLocationInput');

//MESSAGE
const messageInput = document.querySelector('#messageInput');

//PRICE SUM
const calcBtn = document.querySelector('#calcSumBtn');
const sumP = document.querySelector('#sum');

//BOOK BTN
const bookBtn = document.querySelector('#bookCarBtn');



// DB
const bookingListRef = ref(db, `bookingReg/`);




function checkData() {
    if(
        nameInput.value == '' ||
        emailInput.value == '' ||
        phoneInput.value == '' ||
        typeSelect.value == 0 ||
        passNrInput.value == '' ||
        pickupDateInput.value == '' ||
        pickupTimeInput.value == '' ||
        pickupLocationInput.value == 0 ||
        dropoffDateInput.value == '' ||
        dropoffTimeInput.value == '' ||
        dropoffLocationInput.value == 0
    ){
        return false;
    } else {
        return true;
    }
}

function checkEmail() {
    const email = emailInput.value;
    if(email.includes('@') && email.includes('.')){
        return true;
    } else {
        return false;
    }
}


function fetchData(carId, pickupDateTime, dropoffDateTime){

}

async function checkAvailability(carId, pickupDateTime, dropoffDateTime) {
    return new Promise((resolve, reject) => {
        try {
            onValue(bookingListRef, (snapshot) => {
                let isAvailable = true;
                snapshot.forEach((child) => {
                    const currentCar = child.val();
                    if (carId == currentCar.carId) {
                        const dbPickupTD = new Date(currentCar.pickupDate + " " + currentCar.pickupTime).getTime();
                        const dbDropoffTD = new Date(currentCar.dropoffDate + " " + currentCar.dropoffTime).getTime();

                        if ((pickupDateTime >= dbPickupTD && pickupDateTime < dbDropoffTD) ||
                            (dropoffDateTime > dbPickupTD && dropoffDateTime <= dbDropoffTD) ||
                            (pickupDateTime <= dbPickupTD && dropoffDateTime >= dbDropoffTD)) {
                            console.log('Car is taken');
                            isAvailable = false;
                        }
                    }
                });
                resolve(isAvailable);
            }, (error) => reject(error));
        } catch (err) {
            console.log(err);
            reject(false);
        }
    });
}
checkAvailability(id, (new Date (pickupDateInput.value + " " + pickupTimeInput.value)).getTime(), (new Date(dropoffDateInput.value + " " + dropoffTimeInput.value).getTime()));

function calcSum(tax, pickupDateTime, dropoffDateTime) {
    const sum = (((new Date(dropoffDateTime - pickupDateTime)).getTime()) / 1000 / 60 / 60 * tax).toFixed(2);
    return sum;
}

// console.log(nameInput.value)
// console.log(emailInput.value)
// console.log(phoneInput.value)
// console.log(typeSelect.value)
// console.log(passNrInput.value)
// console.log(pickupDateInput.value)
// console.log(pickupTimeInput.value)
// console.log(pickupLocationInput.value)
// console.log(messageInput.value)


// DISPLAY SUM
calcBtn.addEventListener('click', ()=>{
    if(checkData()){
        const sum = (calcSum(parseFloat(thisCar.taxPerKm), (new Date (pickupDateInput.value + " " + pickupTimeInput.value)).getTime(),  (new Date(dropoffDateInput.value + " " + dropoffTimeInput.value).getTime())));
        console.log(sum);
        sumP.textContent = `$${sum}`;
    } else {
        window.alert(badRequest)
    }
});


// BOOK CAR
bookBtn.addEventListener('click', async ()=>{
    const pickupDateTime = new Date(pickupDateInput.value + " " + pickupTimeInput.value);
    const dropoffDateTime = new Date(dropoffDateInput.value + " " + dropoffTimeInput.value);
    const isAvailable = await checkAvailability(id, (new Date (pickupDateInput.value + " " + pickupTimeInput.value)).getTime(), (new Date(dropoffDateInput.value + " " + dropoffTimeInput.value).getTime()));
    console.log(isAvailable);
    const isDataValid = checkData();
    const isEmailValid = checkEmail();

    if(isDataValid){
        if(isEmailValid){
            if(isAvailable){
                const sum = calcSum(parseFloat(thisCar.taxPerKm), (new Date (pickupDateInput.value + " " + pickupTimeInput.value)).getTime(),  (new Date(dropoffDateInput.value + " " + dropoffTimeInput.value).getTime()));
                const newBookingRef = push(bookingListRef);
                set(newBookingRef, {
                    carId: id,
                    clientName: nameInput.value,
                    dropoffDate: dropoffDateInput.value,
                    dropoffLocation: dropoffLocationInput.value,
                    dropoffTime: dropoffTimeInput.value,
                    email: emailInput.value,
                    message: messageInput.value,
                    passNr: passNrInput.value,
                    payingType: typeSelect.value,
                    phone: phoneInput.value,
                    pickupDate: pickupDateInput.value,
                    pickupLocation: pickupLocationInput.value,
                    pickupTime: pickupTimeInput.value,
                    sum: sum,
                });
                window.alert('Car booked successfully');
            } else {
                window.alert(carTaken);
            }
        } else {
            window.alert(badRequest)
        }
    } else {
        window.alert(emailNotValideAlert);
    }
});