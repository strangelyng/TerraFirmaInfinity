// priority: 0
"use strict";

function processSmallOre(event, material) {
    const materialName = material.getName();

    const smallOreItem = ChemicalHelper.get(InfinityTagPrefix.oreSmall, material, 1);
    if (smallOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, smallOreItem, material, calcAmountOfMetal(16, tfcProperty.getPercentOfMaterial()), 'small_ore');
    }

    const smallDustItem = ChemicalHelper.get(TagPrefix.dustSmall, material, 1);
    if (smallDustItem.isEmpty()) return;

    event.recipes.tfc.quern(smallDustItem, smallOreItem)
        .id(`tfinfinity:quern/small_${materialName}`)

    event.recipes.gtceu.forge_hammer(`hammer_small_${materialName}_ore_to_small_dust`)
        .itemInputs(smallOreItem)
        .itemOutputs(smallDustItem)
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV])
        .category(GTRecipeCategories.ORE_FORGING)
        
    event.recipes.gtceu.macerator(`macerate_small_${materialName}_ore_to_small_dust`)
        .itemInputs(smallOreItem)
        .itemOutputs(smallDustItem)
        .chancedOutput(smallDustItem, 5000)
        .chancedOutput(smallDustItem, 2500)
        .duration(400)
        .EUt(2)
        .category(GTRecipeCategories.ORE_CRUSHING)
}

function processPoorRawOre(event, material) {
    const materialName = material.getName();

    const poorRawOreItem = ChemicalHelper.get(InfinityTagPrefix.poorRawOre, material, 1);
    if (poorRawOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, poorRawOreItem, material, calcAmountOfMetal(24, tfcProperty.getPercentOfMaterial()), 'poor_ore', true);
    }

    const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1);

    if (crushedOreItem.isEmpty()) return;
    
    const oreProperty = material.getProperty(PropertyKey.ORE);
    const oreMultiplier = oreProperty.getOreMultiplier();
    crushedOreItem.setCount(crushedOreItem.getCount() * oreMultiplier);

    const smallDustItem = ChemicalHelper.get(TagPrefix.dustSmall, material, 2);

    if (oreMultiplier > 1) {
        event.recipes.tfc.quern(
            crushedOreItem.copyWithCount(oreMultiplier / 2),
            poorRawOreItem
        ).id(`tfinfinity:quern/crushed_ore_from_poor_raw_${materialName}`)

        event.recipes.gtceu.forge_hammer(`hammer_poor_raw_${materialName}_ore_to_crushed_ore`)
            .itemInputs(poorRawOreItem)
            .itemOutputs(crushedOreItem.copyWithCount(oreMultiplier / 2))
            .duration(100)
            .EUt(GTValues.VH[GTValues.LV])
            .category(GTRecipeCategories.ORE_FORGING)
    } else {
        event.recipes.tfc.quern(
            smallDustItem,
            poorRawOreItem
        ).id(`tfinfinity:quern/crushed_ore_from_poor_raw_${materialName}`)

        event.recipes.gtceu.forge_hammer(`hammer_poor_raw_${materialName}_ore_to_crushed_ore`)
            .itemInputs(poorRawOreItem)
            .itemOutputs(smallDustItem)
            .duration(10)
            .EUt(GTValues.VH[GTValues.LV])
            .category(GTRecipeCategories.ORE_FORGING)
    }

    const byproductMaterial = oreProperty.getOreByProduct(0, material);
    let byproductItem = ChemicalHelper.get(TagPrefix.gem, byproductMaterial, 1);

    if (byproductItem.isEmpty()) {
        byproductItem = ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1);
    }

    event.recipes.gtceu.macerator(`macerate_poor_raw_${materialName}_ore_to_crushed_ore`)
        .itemInputs(poorRawOreItem)
        .itemOutputs(crushedOreItem)
        .chancedOutput(byproductItem, 700)
        .duration(400)
        .EUt(2)
        .category(GTRecipeCategories.ORE_CRUSHING)
}

function processNormalRawOre(event, material) {
    const rawOreItem = ChemicalHelper.get(TagPrefix.rawOre, material, 1);
    if (rawOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, rawOreItem, material, calcAmountOfMetal(36, tfcProperty.getPercentOfMaterial()), 'normal_ore', true);
    }

    const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1);

    if (crushedOreItem.isEmpty()) return;
    
    const oreProperty = material.getProperty(PropertyKey.ORE);
    const oreMultiplier = oreProperty.getOreMultiplier();
    crushedOreItem.setCount(oreMultiplier);

    event.recipes.tfc.quern(
        crushedOreItem,
        rawOreItem
    ).id(`tfinfinity:quern/crushed_ore_from_normal_raw_${material.getName()}`)
}

function processRichRawOre(event, material) {
    const materialName = material.getName();

    const richRawOreItem = ChemicalHelper.get(InfinityTagPrefix.richRawOre, material, 1);
    if (richRawOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, richRawOreItem, material, calcAmountOfMetal(48, tfcProperty.getPercentOfMaterial()), 'rich_ore', true);
    }

    const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1);

    if (crushedOreItem.isEmpty()) return;
    
    const oreProperty = material.getProperty(PropertyKey.ORE);
    const oreMultiplier = oreProperty.getOreMultiplier() * 2;
    crushedOreItem.setCount(oreMultiplier);

    event.recipes.tfc.quern(
        crushedOreItem,
        richRawOreItem
    ).id(`tfinfinity:quern/crushed_ore_from_rich_raw_${materialName}`)

    event.recipes.gtceu.forge_hammer(`hammer_rich_raw_${materialName}_ore_to_crushed_ore`)
        .itemInputs(richRawOreItem)
        .itemOutputs(crushedOreItem)
        .duration(10)
        .EUt(GTValues.VH[GTValues.LV])
        .category(GTRecipeCategories.ORE_FORGING)


    const byproductMaterial = oreProperty.getOreByProduct(0, material);
    let byproductItem = ChemicalHelper.get(TagPrefix.gem, byproductMaterial, 1);

    if (byproductItem.isEmpty()) {
        byproductItem = ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1);
    }

    event.recipes.gtceu.macerator(`macerate_rich_raw_${materialName}_ore_to_crushed_ore`)
        .itemInputs(richRawOreItem)
        .itemOutputs(crushedOreItem)
        .chancedOutput(crushedOreItem.copyWithCount(oreMultiplier / 2), 5000)
        .chancedOutput(byproductItem, 2100)
        .duration(400)
        .EUt(2)
        .category(GTRecipeCategories.ORE_CRUSHING)
}

function processRawOreBlock(event, material) {
    const materialName = material.getName();

    const rawOreBlockItem = ChemicalHelper.get(TagPrefix.rawOreBlock, material, 1);
    if (rawOreBlockItem.isEmpty()) return;

    event.remove({ id: `gtceu:compressor/compress_${materialName}_to_raw_ore_block` })

    const richRawOreItem = ChemicalHelper.get(InfinityTagPrefix.richRawOre, material, 4);

    if (richRawOreItem.isEmpty()) return;

    event.recipes.gtceu.forge_hammer(`decompress_${materialName}_to_raw_ore`)
        .itemInputs(rawOreBlockItem)
        .itemOutputs(richRawOreItem)
        .duration(300)
        .EUt(2)
        .category(GTRecipeCategories.ORE_FORGING)
}

function processCrushedOre(event, material) {
    const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1);
    if (crushedOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, crushedOreItem, material, calcAmountOfMetal(64, tfcProperty.getPercentOfMaterial()), 'crushed_ore', true, 0);
    }
}

function processPurifiedOre(event, material) {
    const purifiedOreItem = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1);
    if (purifiedOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, purifiedOreItem, material, calcAmountOfMetal(80, tfcProperty.getPercentOfMaterial()), 'purified_ore', true, 1);
    }
}

function processRefinedOre(event, material) {
    const refinedOreItem = ChemicalHelper.get(TagPrefix.crushedRefined, material, 1);
    if (refinedOreItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, refinedOreItem, material, calcAmountOfMetal(90, tfcProperty.getPercentOfMaterial()), 'refined_ore', true, 2);
    }
}

function processImpureDust(event, material) {
    const impureDustItem = ChemicalHelper.get(TagPrefix.dustImpure, material, 1);
    if (impureDustItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, impureDustItem, material, calcAmountOfMetal(80, tfcProperty.getPercentOfMaterial()), 'impure_dust', true, 0);
    }
}

function processPureDust(event, material) {
    const pureDustItem = ChemicalHelper.get(TagPrefix.dustPure, material, 1);
    if (pureDustItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, pureDustItem, material, calcAmountOfMetal(100, tfcProperty.getPercentOfMaterial()), 'pure_dust', true, 1);
    }
}