import { PageHead } from "../../elements/main/PageHead.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { StepsSection } from "../About_page/StepsSection.js";
import { CarsSection } from "./CarsSection.js";

const main = document.querySelector("main");
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/about.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/cars.css"> `;


const AboutContent = 
            `${PageHead} 
            ${CarsSection}
            ${StepsSection}
            ${GetCarAdd}`;
        
const About = AboutContent;

main.innerHTML = About;