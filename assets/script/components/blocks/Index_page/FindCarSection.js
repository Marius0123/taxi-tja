// import { brandsArrData, transArrData } from "../../../app/our-cars-app.js";

// let BrandOpts = ``;
// brandsArrData.forEach((e, index)=>{
//     BrandOpts+=
//             `<option value="${index+1}">${e.name}</option>`;
// });

// let TransmissionOpts = ``;
// transArrData.forEach((e, index)=>{
//     TransmissionOpts+=
//             `<option value="${index+1}">${e}</option>`;
// });


const SectionContent = 
            `<section id="find_car_section">
                <div class="find_car_block">
                    <div class="find_car_container">
                        <div class="find_car_content content_block ">
                            <div class="find_car_img">
                                <img src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                            </div>
                            <div class="find_car_form_block">
                                <div class="capitalise extra_big_p">
                                    Găsește-ți mașina aici!
                                </div>
                                <div class="find_car_form_container">
                                    <form action="./pages/our-cars.html">
                                        <select name="brands" id="brands">
                                            <option value="-1" selected disabled>-Brand-</option>
                                            
                                        </select>
                                        <select name="transmission" id="transmission">
                                            <option value="-1" selected disabled>-Cutie-</option>
                                            
                                        </select>
                                        <select name="airConditioning" id="">
                                            <option selected disabled value="-1">-Aer Cond.-</option>
                                            <option value="true">Da</option>
                                            <option value="false">Nu</option>
                                        </select>
                                        <button type="submit" class="round_btn black_btn capitalise">
                                            Caută
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const FindCarSection = SectionContent;