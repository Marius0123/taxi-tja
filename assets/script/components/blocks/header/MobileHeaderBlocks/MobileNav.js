import { HeaderNavData } from "../../../../../data/json/HeaderNav.data.js";

let NavList = ``;
const pageType = document.querySelector("#pageType").value;

HeaderNavData.forEach((e)=>{
    const link = pageType != 'index' ? (e.link == './' ? '../' : e.link) : (e.link == './' ? './' : './pages/' + e.link);
    NavList+=
        `<div class="mobile_nav_item">
            <a href="${link}">${e.name}</a>
        </div>`;
});

const NavContent = 
            `<div id="mobile_nav" class="header_mobile">
                <div class="mobile_nav_wrapper content_block">
                    <div class="mobile_nav_content">
                        ${NavList}
                    </div>
                </div>
            </div>`;

export const MobileNav = NavContent;