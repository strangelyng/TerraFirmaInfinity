// priority: 0
"use strict";

function processSmallOre(event, material) {
    const smallOreItem = ChemicalHelper.get(InfinityTagPrefix.oreSmall, material, 1);
    if (smallOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, smallOreItem, material, calcAmountOfMetal(16, tfcProperty.getPercentOfMaterial()), 'small_ore');
    }
}

function processPoorRawOre(event, material) {
    const poorRawOreItem = ChemicalHelper.get(InfinityTagPrefix.poorRawOre, material, 1);
    if (poorRawOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, poorRawOreItem, material, calcAmountOfMetal(24, tfcProperty.getPercentOfMaterial()), 'poor_ore');
    }
}

function processNormalRawOre(event, material) {
    const rawOreItem = ChemicalHelper.get(TagPrefix.rawOre, material, 1);
    if (rawOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, rawOreItem, material, calcAmountOfMetal(36, tfcProperty.getPercentOfMaterial()), 'normal_ore');
    }
}

function processRichRawOre(event, material) {
    const richRawOreItem = ChemicalHelper.get(InfinityTagPrefix.richRawOre, material, 1);
    if (richRawOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, richRawOreItem, material, calcAmountOfMetal(48, tfcProperty.getPercentOfMaterial()), 'rich_ore');
    }
}

function processCrushedOre(event, material) {
    const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1);
    if (crushedOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, crushedOreItem, material, calcAmountOfMetal(64, tfcProperty.getPercentOfMaterial()), 'crushed_ore');
    }
}

function processPurifiedOre(event, material) {
    const purifiedOreItem = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1);
    if (purifiedOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, purifiedOreItem, material, calcAmountOfMetal(80, tfcProperty.getPercentOfMaterial()), 'purified_ore');
    }
}

function processRefinedOre(event, material) {
    const refinedOreItem = ChemicalHelper.get(TagPrefix.crushedRefined, material, 1);
    if (refinedOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, refinedOreItem, material, calcAmountOfMetal(90, tfcProperty.getPercentOfMaterial()), 'refined_ore');
    }
}

function processImpureDust(event, material) {
    const impureDustItem = ChemicalHelper.get(TagPrefix.dustImpure, material, 1);
    if (impureDustItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, impureDustItem, material, calcAmountOfMetal(80, tfcProperty.getPercentOfMaterial()), 'impure_dust');
    }
}

function processPureDust(event, material) {
    const pureDustItem = ChemicalHelper.get(TagPrefix.dustPure, material, 1);
    if (pureDustItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, pureDustItem, material, calcAmountOfMetal(100, tfcProperty.getPercentOfMaterial()), 'pure_dust');
    }
}