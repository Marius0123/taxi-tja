import { CompanyInfoData } from "../../../../data/json/CompanyInfo.data.js";

const {logo} = CompanyInfoData;

const pageType = document.querySelector("#pageType").value;
const logoSrc = pageType != 'index' ? "." + logo[0] : logo[0];

const LogoContent = 
            `<div class="header_logo">
                <div class="header_logo_container">
                    <a href="">
                        <img src="${logoSrc}" alt="">
                    </a>
                </div>
            </div>`;
    
export const HeaderLogo = LogoContent;