import { HeroSection } from "./HeroSection/HeroSection.js";
import { AboutSection } from "../About_page/AboutSection.js";
import { StepsSection } from "../About_page/StepsSection.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { PartnersSection } from "../About_page/PartnersSection.js";
import { PricingCardsList } from "../Pricing_page/PricingCardsList.js";
import { TestimonialSection } from "../About_page/TestimonialsSection.js";
import { OurCarsSection } from "./OurCarsSection.js";
import { FindCarAndStatsSection } from "./FindCarAndStatsSection.js";

const main = document.querySelector("#main");
const pageType = document.querySelector("#pageType").value;
// GLOBAL STYLES
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/pricing.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/about.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/index.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/cars.css"> `;

// MOBILE STYLES
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/mobile-styles/local-style/about.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/mobile-styles/local-style/index.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/mobile-styles/local-style/pricing.css"> `;



main.innerHTML = 
            `${HeroSection}
            ${AboutSection}
            ${FindCarAndStatsSection}
            ${StepsSection}
            ${OurCarsSection}
            ${PricingCardsList}
            ${GetCarAdd}
            ${TestimonialSection}
            ${PartnersSection}
            `;