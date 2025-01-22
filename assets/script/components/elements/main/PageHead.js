import { HeaderNavData } from "../../../../data/json/HeaderNav.data.js";

const pageKey = document.querySelector('#pageKey').value;
console.log(pageKey);

const pageNavIndex = HeaderNavData.findIndex((e)=>e.key==pageKey);
console.log(pageNavIndex);

const pageName = HeaderNavData[pageNavIndex].name;
console.log(pageName);

const PageHeadContent = 
            `<section class="page_head">
                <div class="page_head_container">
                    <div class="dark_fader">
                        <div class="content_block">
                            <div class="page_head_content">
                                <div class="page_head_content_text">
                                    <div class="page_head_links">
                                        <div class="page_head_link_one_block">
                                            <a href="/">
                                                <p class="page_head_link_one page_head_link capitalise">Home</p>
                                            </a>
                                        </div>
                                        <div class="page_head_links_devidor"></div>
                                        <div class="page_head_link_two_block">
                                            <p class="page_head_link_two page_head_link capitalise">${pageName}</p>
                                        </div>
                                    </div>
                                    <p class="page_title capitalise">${pageName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const PageHead = PageHeadContent;