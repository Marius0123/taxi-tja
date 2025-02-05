import { FaqList } from "./FaqSection/FaqList.js";

const SectionContent = 
            `<section id="faq_section">
                <div class="faq_block">
                    <div class="faq_container content_block">
                        <div class="faq_col_text">
                            <div class="faq_content">
                                <div class="faq_content_header">
                                    <div class="section_title extra_big_p title_fade_in">
                                        Get every single answer here For Faq.
                                    </div>
                                    <div class="medium_p">
                                        Special wedding garments are often worn, and the ceremony is sometimes followed by a wedding reception. Music, poetry.
                                    </div>
                                </div>
                                <div class="faq_content_body">
                                    ${FaqList}
                                </div>
                            </div>
                        </div>
                        <div class="faq_col_img">
                        </div>
                    </div>
                </div>
            </section>`;

export const FaqSection = SectionContent;