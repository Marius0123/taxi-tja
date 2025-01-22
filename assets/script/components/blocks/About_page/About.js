import { PageHead } from "../../elements/main/PageHead.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";

const main = document.querySelector("main");

const AboutContent = 
            `${PageHead} 
            
            ${GetCarAdd}`;
        
const About = AboutContent;

main.innerHTML = About;