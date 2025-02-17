const SectionContent = 
            `<div id="car_pop_up" class="content_block">
                <div id="car_form_point"></div>
                <div class="car_pop_up_wrapper">
                    <div class="car_form_header content_block section_head">
                        <div class="orange_subtitle">Rent A Car</div>
                        <div class="section_title extra_big_p">Get the keys to your adventure Rent</div>
                    </div>
                    <div class="car_pop_up_body">
                        <form action="" id="carForm">
                             <p class="car_form_sec_title capitalise">General details</p>
                            <div class="car_pop_up_sec_1">
                                <input type="text" placeholder="Your name*" id="nameInput" required>
                                <input type="text" placeholder="Your email*" id="emailInput" required>
                                <input type="tel" placeholder="Your phone*" id="phoneInput" required>
                                <input type="number" name="" id="passNrInput" placeholder="Number of passagers*" required>
                                <select name="" id="typeSelect" required>
                                    <option selected disabled hidden value="0">Trip type*</option>
                                    <option value="1">Per hour</option>
                                    <option value="2">Per day</option>
                                </select>
                               
                            </div>
                            <p class="car_form_sec_title capitalise">Pickup details</p>
                            <div class="car_pop_up_sec_2">
                                <input type="date" name="" required id="pickupDateInput">
                                <input type="time" name="" id="pickupTimeInput" placeholder="Select time*" required>
                                <select name="" id="pickupLocationInput" required>
                                    <option selected disabled hidden value="0">Pickup location*</option>
                                    <option value="1">Office</option>
                                    <option value="2">Airport</option>
                                    <option value="2">Other</option>
                                </select>
                            </div>
                            <p class="car_form_sec_title capitalise">Dropoff details</p>
                            <div class="car_pop_up_sec_2">
                                <input type="date" name="" required id="dropoffDateInput">
                                <input type="time" name="" id="dropoffTimeInput" placeholder="Select time*" required>
                                <select name="" id="dropoffLocationInput" required>
                                    <option selected disabled hidden value="0">Dropoff location*</option>
                                    <option value="1">Office</option>
                                    <option value="2">Airport</option>
                                    <option value="2">Other</option>
                                </select>
                            </div>
                             <p class="car_form_sec_title capitalise">Booking details</p>
                            <div class="car_pop_up_sec_3">
                                <textarea name="" id="messageInput" placeholder="Message"></textarea>
                            </div>
                            <div class="car_pop_up_sec_4">
                                <div class="calc_block">
                                    <button type="button" id="calcSumBtn" class="round_btn capitalise orange_btn">Calculate</button>
                                    <p id="sum">$320.00</p>
                                </div>
                                <button type="button" id="bookCarBtn" class="round_btn capitalise orange_btn">Book now</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>`;

export const CarForm = SectionContent;