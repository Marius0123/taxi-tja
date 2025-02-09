import { PageHead } from "../../elements/main/PageHead.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { FaqSection } from "./FaqSection.js";

const main = document.querySelector("main");
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/faq.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/mobile-styles/local-style/faq.css"> `;


const AboutContent = 
            `${PageHead} 
            ${FaqSection}
            ${GetCarAdd}`;
        
const About = AboutContent;

main.innerHTML = About;