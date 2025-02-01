import { PageHead } from "../../elements/main/PageHead.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { PricingCardsList } from "./PricingCardsList.js";

const main = document.querySelector("main");

document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/pricing.css"> `;


const AboutContent = 
            `${PageHead} 
            ${PricingCardsList}
            ${GetCarAdd}`;
        
const About = AboutContent;

main.innerHTML = About;