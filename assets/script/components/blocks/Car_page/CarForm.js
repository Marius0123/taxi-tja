const SectionContent = 
            `<div id="car_pop_up" class="content_block">
                <div id="car_form_point"></div>
                <div class="car_pop_up_wrapper">
                    <div class="car_form_header content_block section_head">
                        <div class="orange_subtitle">Formular de încheriere</div>
                        <div class="section_title extra_big_p">Ia cheile aventurii tale</div>
                    </div>
                    <div class="car_pop_up_body">
                        <form action="" id="carForm">
                             <p class="car_form_sec_title capitalise">Detalii generale</p>
                            <div class="car_pop_up_sec_1">
                                <input type="text" placeholder="Nume deplin*" id="nameInput" required>
                                <input type="text" placeholder="Email*" id="emailInput" required>
                                <input type="tel" placeholder="Nr. telefon*" id="phoneInput" required>
                                <input type="number" name="" id="passNrInput" placeholder="Nr. de pasageri*" required>
                                <select name="" id="typeSelect" required>
                                    <option selected disabled hidden value="0">Tipul plății*</option>
                                    <option value="1">Per oră</option>
                                    <option value="2">Per zi</option>
                                </select>
                               
                            </div>
                            <p class="car_form_sec_title capitalise">Detalii preluare</p>
                            <div class="car_pop_up_sec_2">
                                <input type="date" name="" required id="pickupDateInput">
                                <input type="time" name="" id="pickupTimeInput" placeholder="Select time*" required>
                                <select name="" id="pickupLocationInput" required>
                                    <option selected disabled hidden value="0">Locul preluării*</option>
                                    <option value="1">Oficiu</option>
                                    <option value="2">Aeroport</option>
                                    <option value="2">Altul</option>
                                </select>
                            </div>
                            <p class="car_form_sec_title capitalise">Detalii lăsare</p>
                            <div class="car_pop_up_sec_2">
                                <input type="date" name="" required id="dropoffDateInput">
                                <input type="time" name="" id="dropoffTimeInput" placeholder="Select time*" required>
                                <select name="" id="dropoffLocationInput" required>
                                    <option selected disabled hidden value="0">Locul lăsării*</option>
                                    <option value="1">Oficiu</option>
                                    <option value="2">Aeroport</option>
                                    <option value="2">Altul</option>
                                </select>
                            </div>
                             <p class="car_form_sec_title capitalise">Detalii rezervare</p>
                            <div class="car_pop_up_sec_3">
                                <textarea name="" id="messageInput" placeholder="Mesaj"></textarea>
                            </div>
                            <div class="car_pop_up_sec_4">
                                <div class="calc_block">
                                    <button type="button" id="calcSumBtn" class="round_btn capitalise orange_btn">Calculează</button>
                                    <p id="sum">$---.--</p>
                                </div>
                                <button type="button" id="bookCarBtn" class="round_btn capitalise orange_btn">Rezervează</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>`;

export const CarForm = SectionContent;