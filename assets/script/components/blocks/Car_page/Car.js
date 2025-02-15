import { PageHead } from "../../elements/main/PageHead.js";

const main = document.querySelector("main");
const pageType = document.querySelector("#pageType").value;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/faq.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/mobile-styles/local-style/faq.css"> `;


const AboutContent = 
            `${PageHead}`;
        
const About = AboutContent;

main.innerHTML = About;