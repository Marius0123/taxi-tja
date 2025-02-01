import { StepsList } from "./StepsSection/StepsList.js";

export const SectionContent = 
            `<section id="steps_section">
                <div class="steps_block">
                    <div class="steps_container">
                        <div class="steps_sec_head content_block ">
                            <div class="orange_subtitle">Rent A Car</div>
                            <div class="section_title extra_big_p">Get the keys to your adventure Rent</div>
                        </div>
                        <div class="steps_wrapper">
                            <div class="steps_content content_block">
                                ${StepsList}
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const StepsSection = SectionContent;