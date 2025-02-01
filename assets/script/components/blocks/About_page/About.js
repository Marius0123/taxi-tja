import { PageHead } from "../../elements/main/PageHead.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { AboutSection } from "./AboutSection.js";
import { StepsSection } from "./StepsSection.js";
import { PartnersSection } from "./PartnersSection.js";

const main = document.querySelector("main");

const AboutContent = 
            `${PageHead} 
            ${AboutSection}
            ${StepsSection}
            ${GetCarAdd}
            ${PartnersSection}`;
        
const About = AboutContent;

main.innerHTML = About;