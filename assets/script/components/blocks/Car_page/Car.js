import { PageHead } from "../../elements/main/PageHead.js";
import { CarForm } from "./CarForm.js";
import { CarInfo } from "./CarInfo.js";

const main = document.querySelector("main");
const pageType = document.querySelector("#pageType").value;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/car.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/mobile-styles/local-style/car.css"> `;


const AboutContent = 
            `${PageHead}
            ${CarInfo}
            ${CarForm}`;
        
const About = AboutContent;

main.innerHTML = About;