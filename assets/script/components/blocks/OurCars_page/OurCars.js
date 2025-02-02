import { PageHead } from "../../elements/main/PageHead.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { StepsSection } from "../About_page/StepsSection.js";

const main = document.querySelector("main");
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/about.css"> `;


const AboutContent = 
            `${PageHead} 
            ${StepsSection}
            ${GetCarAdd}`;
        
const About = AboutContent;

main.innerHTML = About;