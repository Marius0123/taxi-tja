import { CompanyInfoData } from "../../../../data/json/CompanyInfo.data.js";

const {logo} = CompanyInfoData;

const FooterLogoContent = 
            `<div class="footer_content_row_one_logo">
                <img src="${logo[logo.length - 1]}" alt="">
            </div>`;

export const FooterLogo = FooterLogoContent;