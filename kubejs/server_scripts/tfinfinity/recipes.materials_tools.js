// priority: 1
"use strict";

const $ToolHelper = Java.loadClass('com.gregtechceu.gtceu.api.item.tool.ToolHelper');

function processShears(event, material) {
    const shearsItem = $ToolHelper.get(GTToolType.SHEARS, material);
    if (shearsItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        const knifeBladeItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadKnife, material, 1);

        if (!knifeBladeItem.isEmpty()) {
            TFCWeldingRecipe(event, shearsItem, knifeBladeItem, knifeBladeItem, material, 'copy_worst', tfcProperty.getAnvilTier(), 1, 1, 'shears'); // Do nonTFCTier and Circuit adjustment
        }
    }
}