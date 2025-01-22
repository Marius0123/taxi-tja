import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { PageHead } from "../../elements/main/PageHead.js";
import { ContactsBlock } from "./ContactsBlock.js";

const main = document.querySelector("main");

const ContactsContent = 
            `${PageHead}
            ${ContactsBlock}
            ${GetCarAdd}`;
        
const Contacts = ContactsContent;

main.innerHTML = Contacts;