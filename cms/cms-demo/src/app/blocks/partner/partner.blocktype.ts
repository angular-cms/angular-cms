import { BlockData, BlockType, CmsImage, Property, UIHint } from '@angular-cms/core';
import { PartnerComponent } from './partner.component';

@BlockType({
    displayName: 'Partner Block',
    componentRef: PartnerComponent
})
export class PartnerBlock extends BlockData {

    @Property({
        displayName: 'Partner Name',
        displayType: UIHint.Text
    })
    name: string;

    @Property({
        displayName: 'Partner Image',
        displayType: UIHint.Image
    })
    image: CmsImage;

    @Property({
        displayName: 'Partner Site',
        displayType: UIHint.Text
    })
    link: string;
}