import { CompanyInfoData } from "../../../../data/json/CompanyInfo.data.js";

const {logo} = CompanyInfoData;

const LogoContent = 
            `<div class="header_logo">
                <div class="header_logo_container">
                    <a href="">
                        <img src="${logo[0]}" alt="">
                    </a>
                </div>
            </div>`;
    
export const HeaderLogo = LogoContent;