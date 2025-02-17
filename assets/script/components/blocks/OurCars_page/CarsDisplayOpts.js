import { brandsArrData, transArrData } from "../../../app/our-cars-app.js";

let BrandOpts = ``;
brandsArrData.forEach((e, index)=>{
    BrandOpts+=
            `<option value="${index+1}">${e.name}</option>`;
});

let TransmissionOpts = ``;
transArrData.forEach((e, index)=>{
    TransmissionOpts+=
            `<option value="${index+1}">${e}</option>`;
});


const SectionContent  = 
            `<section class="cars_filter_and_sort_section">
                <div class="cars_filter_and_sort_block content_block">
                    <form action="">
                        <div class="cars_filter_and_sort_wrapper">
                            <div class="cars_filter_content">
                                <p class="smaller_section_title">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                                    </svg>
                                    Filter
                                </p>
                                <div class="filter_ops_wrapper">
                                    <div class="filter_ops_content">
                                        <select name="brand" id="brand">
                                            <option value="null" selected disabled value="0">-Brand-</option>
                                            <option value="null" value="-1">Toate</option>
                                            ${BrandOpts}
                                        </select>
                                        <select name="trans" id="trans">
                                            <option value="null" selected disabled value="0">-Cutie-</option>
                                            <option value="null" value="-1">Toate</option>
                                            ${TransmissionOpts}
                                        </select>
                                        <select name="airCond" id="airCond">
                                            <option selected disabled value="-1">-Aer Cond.-</option>
                                            <option value="-1">Toate</option>
                                            <option value="1">Da</option>
                                            <option value="0">Nu</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="cars_sort_content">
                                <p class="smaller_section_title">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
                                    </svg>
                                    Sort
                                </p>
                                <div class="sort_ops_wrapper">
                                    <div class="filter_ops_content">
                                        <select name="sort" id="sort">
                                            <option value="1" selected disabled hidden>-Sort-</option>
                                            <option value="1">Name A -> Z</option>
                                            <option value="2">Name Z -> A</option>
                                            <option value="3">Rating 1 -> 5</option>
                                            <option value="4">Rating 5 -> 1</option>
                                            <option value="5">Price low -> high</option>
                                            <option value="6">Price high -> low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cars_apply_container">
                            <button  id="submitBtn" type="button" class="round_btn capitalise orange_btn submitBtn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                                Apply
                            </button>
                        </div>
                    </form>
                </div>
            </section>`;

export const CarsDisplayOpts = SectionContent;