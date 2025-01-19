import {RelativeHeader} from './blocks/header/RelativeHeader.js';
import { StickyHeader } from './blocks/header/StickyHeader.js';

const header = document.querySelector("#header");

const checkPoint = 170;
let onPlace = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    console.log(currentScroll);
    console.info(onPlace);
    if(currentScroll >= checkPoint && !onPlace){
        document.querySelector('body').style.background = "white";
        onPlace = 1;
        
    } else if(currentScroll <= checkPoint){
        document.querySelector('body').style.background = "black";
        onPlace = 0;
    }
});




const headerContent = `
    ${StickyHeader}
`;

header.innerHTML = headerContent;