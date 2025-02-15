import { emailExistsAlert, emailNotValideAlert, emailSuccess } from "../../data/json/Alerts.data.js";
import { db } from "./app.js";
import { ref, set, onValue, push, onChildAdded, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";


const emailInput = document.querySelector('#emailInput');
const submitBtn = document.querySelector('#submitBtn');

const subsListRef = ref(db, `newsLetterSubs/`);

const emailsReg = [];

onChildAdded(subsListRef, (data)=>{
    emailsReg.push(data.val().email);
});

// console.log(emailsReg);

submitBtn.addEventListener('click', (e)=>{
    const {value} = emailInput;
    if(value.includes('@') && value.includes('.')){
        const isTaken = emailsReg.includes(value.toLocaleString());
        if(isTaken){
            window.alert(emailExistsAlert);
        } else {
            console.log('is new');
            try {
                const newSubsRef = push(subsListRef);
                set(newSubsRef, {
                    email: value,
                    timeJoind: (new Date()).toLocaleString(),
                });
            } catch (err) {
                console.log(err);
            }
            console.log('email added');
            emailInput.value = '';
            window.alert(emailSuccess);
        }
    } else {
        window.alert(emailNotValideAlert);
    }
    console.log(value);
});


