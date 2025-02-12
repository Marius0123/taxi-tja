import { PageHead } from "../../elements/main/PageHead.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { StepsSection } from "../About_page/StepsSection.js";
import { CarsSection } from "./CarsSection.js";
import { CarsDisplayOpts } from "./CarsDisplayOpts.js";
import { CarsBlockNumber } from "./CarsBlockNumber.js";

const main = document.querySelector("main");
const pageType = document.querySelector("#pageType").value;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/about.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/local-styles/cars.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/mobile-styles/local-style/about.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/mobile-styles/local-style/cars.css"> `;


const CarsContent = 
            `${PageHead} 
            ${CarsDisplayOpts}
            ${CarsSection}
            ${CarsBlockNumber}
            ${StepsSection}
            ${GetCarAdd}`;
        
const CarsPage = CarsContent;

main.innerHTML = CarsPage;