import { badRequest, carTaken, emailNotValideAlert } from "../../data/json/Alerts.data.js";
import { db } from "./app.js";
import { getDatabase, ref, set, onValue, push, onChildAdded, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// FROM SERVER (TO APP) //







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
        carIdInput.value == '' ||
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

async function checkAvailability(carId, pickupDateTime, dropoffDateTime){
    //try {
        onChildAdded(bookingListRef, (data)=>{
            const currentCar = data.val();
            if(carId == currentCar.carId) {
                const dbPickupTD = new Date(currentCar.pickupDate + " " + currentCar.pickupTime);
                const dbDropoffTD = new Date(currentCar.dropoffDate + " " + currentCar.dropoffTime);
                if((pickupDateTime > dbPickupTD && pickupDateTime < dbDropoffTD)
                    ||
                    (dropoffDateTime > dbPickupTD && dropoffDateTime < dbDropoffTD)){
                        console.log('this car is taken'); 
                        return false;
                } else {
                    console.log('this car is available');
                    return true;
                }
            } else {
                console.log('this car is available');
                return true;
            }
        });
    // } catch (err) {
    //     console.log(err);
    //     return false;
    // }
}

console.log(await checkAvailability(1, (new Date(pickupDateInput.value + " " + pickupTimeInput.value)), (new Date(dropoffDateInput.value + " " + dropoffTimeInput.value))));

function calcSum(tax, pickupDateTime, dropoffDateTime) {
    const sum = ((new Date(dropoffDateTime - pickupDateTime)).getHours) * tax;
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


bookBtn.addEventListener('click', ()=>{
    const pickupDateTime = new Date(pickupDateInput.value + " " + pickupTimeInput.value);
    const dropoffDateTime = new Date(dropoffDateInput.value + " " + dropoffTimeInput.value);
    const isAvailable = checkAvailability(carIdInput.value, pickupDateTime, dropoffDateTime);
    const isDataValid = checkData();
    const isEmailValid = checkEmail();

    if(isEmailValid){
        if(isDataValid){
            if(isAvailable){
                const sum = calcSum(20, pickupDateTime, dropoffDateTime);
                const newBookingRef = push(bookingListRef);
                set(newBookingRef, {
                    carId: carIdInput.value,
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
                window.alert('Car booked successfully')
            } else {
                window.alert(carTaken);
            }
        } else {
            window.alert(badRequest)
        }
    } else {
        window.alert(emailNotValideAlert);
    }

    // console.log(pickupDateTime);
});