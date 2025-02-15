import { emailExistsAlert, emailNotValideAlert, emailSuccess } from "../../data/json/Alerts.data.js";
import { db } from "./app.js";
import { ref, set, onValue, push, onChildAdded, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";


const contactForm = document.querySelector('#contactForm');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const subjectInput = document.querySelector('#subjectInput');
const contentInput = document.querySelector('#contentInput');
const submitBtn = document.querySelector('#submitBtn');

const contactsListRef = ref(db, `contacts/`);

let isDisabled = false;

submitBtn.addEventListener('click', ()=>{
    if(isDisabled){
        window.alert("You just sent a message. Please wait");
    } else {
        const name = nameInput.value;
        const email = emailInput.value;
        const subject = subjectInput.value;
        const content = contentInput.value;

        if(email.includes('@') && email.includes('.')){
            try {
                const newContactsRef = push(contactsListRef);
                set(newContactsRef, {
                    name: name,
                    email: email,
                    subject: subject,
                    content: content,
                    time: (new Date()).toLocaleString(),
                });
            } catch (err) {
                console.log(err);
            }
            console.log('email added');
            contactForm.reset();
            window.alert(emailSuccess);
        } else {
            window.alert(emailNotValideAlert);
        }
        isDisabled = true;
        setTimeout(()=>{
            isDisabled = false;
        }, 60 * 1000);
    }

});