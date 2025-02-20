import { brandsArrData, transArrData, carsArrData } from "../app/our-cars-app.js";

let Partners = ``;
brandsArrData.forEach((e, index)=>{
    if(index!=3){
        Partners+=
        `<div class="partner_item">
            <a href="${e.link}">
                <img src="${e.logo}" alt="" title="${e.name}">
            </a>
        </div>`;
    }
    
});

document.querySelector('.partners_content').innerHTML = Partners;