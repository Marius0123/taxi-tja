import { HeroSection } from "./HeroSection/HeroSection.js";
import { AboutSection } from "../About_page/AboutSection.js";
import { StepsSection } from "../About_page/StepsSection.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { PartnersSection } from "../About_page/PartnersSection.js";
import { PricingCardsList } from "../Pricing_page/PricingCardsList.js";

const main = document.querySelector("#main");
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/pricing.css"> `;


main.innerHTML = 
            `${HeroSection}
            ${AboutSection}
            ${PricingCardsList}
            ${StepsSection}
            ${GetCarAdd}
            ${PartnersSection}
            `;