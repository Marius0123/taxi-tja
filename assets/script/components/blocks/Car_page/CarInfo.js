const para = ['Transmission', 'Seats', 'Brand', 'Air conditioning', 'Year', 'Category'];
const details = ['Manual', '5 Seats', 'Audi', 'Yes', 2019, 'Standart'];

const price = 23;

let DetailsList = '';
para.forEach((e, index)=>{
    DetailsList+=
        `<div class="car_details_item">
            <div class="car_details_item_card">
                <div class="car_details_item_card_col_1">
                    <div class="detail_type capitalise">${details[index]}</div>
                    <div class="detail_title uppercase">${e}</div>
                </div>
                <div class="car_details_item_card_col_2">
                    <div class="detail_nr">${index+1}</div>
                </div>
            </div>
        </div>`;
});

const Details = 
            `<div class="car_details">
                <div class="car_details_list">
                    ${DetailsList}
                </div>
            </div>`;

const SectionContent = 
            `<div id="car_page_block">
                <div class="car_page_cotainer content_block ">
                    <div class="car_conteiner_col_1">
                        <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        <div class="car_text small_p">
                            Ferrari 365 GTB4 Daytona, a legendary sports car from the late 1960s, exudes timeless elegance and powerful performance. With its sleek and aerodynamic design, the Daytona is a symbol of automotive excellence....
                        </div>
                    </div>
                    <div class="car_conteiner_col_2">
                        <div class="car_conteiner_col_2_header">
                            <p class="extra_big_p">Car model</p>
                            <div class="car_rating">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="car_conteiner_col_2_body">
                            ${Details}        
                        </div>
                        <div class="car_conteiner_col_2_footer">
                            <div class="car_price_block">
                                <div class="price_content">
                                    <div class="price_content_sum">
                                        <sup>$</sup>${price}
                                    </div>
                                    <div class="price_content_time">
                                        / per oră
                                    </div>
                                </div>
                                <div class="price_content">
                                    <div class="price_content_sum">
                                        <sup>$</sup>${price*24}
                                    </div>
                                    <div class="price_content_time">
                                        / per zi
                                    </div>
                                </div>
                            </div>

                            <a href="#car_form_point" class="round_btn capitalise orange_btn">
                                Rezervează
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;

export const CarInfo = SectionContent;