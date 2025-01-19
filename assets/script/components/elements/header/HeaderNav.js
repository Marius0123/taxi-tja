import { HeaderNavData } from "../../../../data/json/HeaderNav.data.js";

let HeaderNavContent = '';
const pageType = document.querySelector("#pageType").value;
console.log(pageType)
HeaderNavData.forEach((e)=>{

    const link = pageType != 'index' ? (e.link == './' ? '../' : e.link) : (e.link == './' ? './' : './pages/' + e.link);

    HeaderNavContent+=
        `<div class="header_nav_list_item">
            <a href="${link}" class="header_nav_list_item_link">
                <div class="header_nav_list_item_name">
                    <p>${e.name}</p>
                </div>
            </a>
        </div>`
});

export const HeaderNav = HeaderNavContent;