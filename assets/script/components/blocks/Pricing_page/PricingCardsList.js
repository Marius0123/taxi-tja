import { PricingCards } from "./PricingCards.js";

const CardListContent = 
    `<section id="pricing">
        <div class="pricing_block">
            <div class="pricing_container">
                <div class="princing_wrapper">
                    <div class="content_block">
                        <div class="pricing_content">
                            ${PricingCards}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export const PricingCardsList = CardListContent;