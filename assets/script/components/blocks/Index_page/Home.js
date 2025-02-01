import { HeroSection } from "./HeroSection/HeroSection.js";
import { AboutSection } from "../About_page/AboutSection.js";
import { StepsSection } from "../About_page/StepsSection.js";

const main = document.querySelector("#main");

main.innerHTML = 
            `${HeroSection}
            ${AboutSection}
            ${StepsSection}
            `;