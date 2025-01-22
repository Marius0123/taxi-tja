import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { PageHead } from "../../elements/main/PageHead.js";

const main = document.querySelector("main");

const ContactsContent = 
            `${PageHead}
            
            ${GetCarAdd}`;
        
const Contacts = ContactsContent;

main.innerHTML = Contacts;