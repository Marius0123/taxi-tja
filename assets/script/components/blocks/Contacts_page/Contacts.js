import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { PageHead } from "../../elements/main/PageHead.js";
import { ContactsBlock } from "./ContactsBlock.js";

const main = document.querySelector("main");

document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/contacts.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/mobile-styles/local-style/contacts.css"> `;


const ContactsContent = 
            `${PageHead}
            ${ContactsBlock}
            ${GetCarAdd}`;
        
const Contacts = ContactsContent;

main.innerHTML = Contacts;