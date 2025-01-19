import {StickyHeaderRow} from './StickyHeaderBlocks/StickyHeaderRow.js';

const StickyHeaderContent = 
            `<div class="sticky_header_container">
                <div class="sticky_header_content_wrapper">
                    <div class="content_block">
                        <div class="sticky_header_content_block">
                            ${StickyHeaderRow}
                        </div>
                    </div>
                </div>
            </div>`;
        
export const StickyHeader = StickyHeaderContent;