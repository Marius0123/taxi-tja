import { HeroSection } from "./HeroSection/HeroSection.js";
import { AboutSection } from "../About_page/AboutSection.js";

const main = document.querySelector("#main");

main.innerHTML = 
            `${HeroSection}
            ${AboutSection}`;