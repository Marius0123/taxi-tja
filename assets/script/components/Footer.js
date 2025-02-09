import { Footer } from "./blocks/footer/FooterContent.js";
const pageType = document.querySelector("#pageType").value;

document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/footer.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/mobile-styles/footer.css"> `;


const footer = document.querySelector("#footer");

const footerContent = Footer;

footer.innerHTML = footerContent;
