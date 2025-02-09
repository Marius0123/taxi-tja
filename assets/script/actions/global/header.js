import { MobileNav } from "../../components/blocks/header/MobileHeaderBlocks/MobileNav.js";
import { checkPoint } from "../../components/Header.js";


const header = document.querySelector("#header");
const headerMobileContainer = document.querySelector(".header_mobile_container");
const root = document.documentElement;

let isDisplayed = false;
let isDisabled = false;
let fadeOutTiming = 300;

window.addEventListener('scroll', ()=>{
    const currentScroll = window.scrollY;
    if(currentScroll < checkPoint){
        root.style.setProperty('--mobile-nav-top-margin', '100px');
        // headerMobileContainer.style.top = "100px";
        if(isDisplayed){
            isDisabled = true;
            if(document.querySelector('#mobile_nav')){
                document.querySelector('#mobile_nav').setAttribute('class', 'mobile_nav_fade_out');
            }
            setTimeout(()=>{
                headerMobileContainer.innerHTML = '';
                isDisabled = false;
            }, fadeOutTiming);
            isDisplayed = !isDisplayed;
        }
    } else {
        root.style.setProperty('--mobile-nav-top-margin', '64.6px');
    }
});

header.addEventListener("click", (event)=>{
    console.log(isDisabled)
    if(event.target.classList.contains("nav_btn") || event.target.parentElement.classList.contains("nav_btn")){
        console.log("Got it");
        
        if(!isDisplayed && !isDisabled){
            headerMobileContainer.innerHTML = MobileNav;
            document.querySelector('#mobile_nav').setAttribute('class', 'mobile_nav_fade_in');

        } else {
            if(event.target.classList.contains("nav_btn")){
                event.target.setAttribute('disabled', 'true');
            } else {
                event.target.parentElement.setAttribute('disabled', 'true');
            }
            if(document.querySelector('#mobile_nav')){
                document.querySelector('#mobile_nav').setAttribute('class', 'mobile_nav_fade_out');
            }
            setTimeout(()=>{
                headerMobileContainer.innerHTML = '';
                if(event.target.classList.contains("nav_btn")){
                    event.target.removeAttribute('disabled');
                } else {
                    event.target.parentElement.removeAttribute('disabled');
                }
            }, fadeOutTiming);
        }
    }
    

    isDisplayed = !isDisplayed;
});

