import { PageHead } from "../../elements/main/PageHead.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { AboutSection } from "./AboutSection.js";
import { StepsSection } from "./StepsSection.js";
import { PartnersSection } from "./PartnersSection.js";
import { TestimonialSection } from "./TestimonialsSection.js";

const main = document.querySelector("main");
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/about.css"> `;


const AboutContent = 
            `${PageHead} 
            ${AboutSection}
            ${StepsSection}
            ${TestimonialSection}
            ${PartnersSection}
            ${GetCarAdd}
            `;
        
const About = AboutContent;

main.innerHTML = About;