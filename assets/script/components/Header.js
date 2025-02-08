import {RelativeHeader} from './blocks/header/RelativeHeader.js';
import { StickyHeader } from './blocks/header/StickyHeader.js';


const header = document.querySelector("#header");
const headerScript = document.querySelector("#headerScript");

const pageType = document.querySelector("#pageType").value;



document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/header.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${pageType == 'index' ? '' : '.'}./assets/style/mobile-styles/header.css"> `;

export const checkPoint = 170;
export let onPlace = 0;
let headerContent = RelativeHeader;
header.innerHTML = headerContent;



window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    //console.log(currentScroll);
    // console.info(onPlace);
    if(currentScroll > checkPoint && !onPlace){
        onPlace = 1;
        headerContent = StickyHeader;
        header.innerHTML = headerContent;
        document.querySelector('header').style.position = "sticky";
        if(currentScroll > checkPoint+10){
            document.querySelector('#sticky_header_container').style.height = "auto";
        }
        
        
    } else if(currentScroll < checkPoint){
        document.querySelector('header').style.position = "relative";
        onPlace = 0;
        headerContent = RelativeHeader;
        header.innerHTML = headerContent;
    }
});


