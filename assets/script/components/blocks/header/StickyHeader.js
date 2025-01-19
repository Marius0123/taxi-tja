import {StickyHeaderRow} from './StickyHeaderBlocks/StickyHeaderRow.js';

const StickyHeaderContent = 
            `<div class="sticky_header_container">
                <div class="content_block">
                    <div class="sticky_header_content_block">
                        ${StickyHeaderRow}
                    </div>
                </div>
            </div>`;
        
export const StickyHeader = StickyHeaderContent;