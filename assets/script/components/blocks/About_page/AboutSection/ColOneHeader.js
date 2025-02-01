import { CompanyInfoData } from "../../../../../data/json/CompanyInfo.data.js";

const {name} = CompanyInfoData;

const ColContent = 
            `<div class="about_section_data_column_header">
                <div class="orange_subtitle">
                    About ${name}
                </div>
                <div class="section_title extra_big_p">
                    Unlock the <br> possibilities with Rent A Car
                </div>
            </div>`;

export const ColOneHeader = ColContent;