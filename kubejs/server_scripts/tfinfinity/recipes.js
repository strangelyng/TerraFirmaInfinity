// priority: 1
"use strict";

const registerTFIRecipes = (event) => {
    // TODO: Systematize, once done testing

    const material = GTMaterials.Copper;

    const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, ingotItem, material, 144, 'ingot');
        TFCCastingRecipe(event, ingotItem, 'tfc:ceramic/ingot_mold', false, null, material, 'ingot', 144);
        TFCCastingRecipe(event, ingotItem, 'tfc:ceramic/fire_ingot_mold', true, null, material, 'ingot', 144);
    }

    const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);

    let weldingTier = tfcProperty.getWeldingTier();

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, doubleIngotItem, material, 144*2, 'double_ingot');
        TFCWeldingRecipe(event, doubleIngotItem, ingotItem, ingotItem, material, 'ignore', weldingTier, 1, 1, 'double_ingot')
    }

    const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, plateItem, material, 144, 'plate');
        TFCAnvilRecipe(event, plateItem, doubleIngotItem, ['hit_last', 'hit_second_last', 'hit_third_last'], false, material, 'plate')
    }

    const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, doublePlateItem, material, 144*2, 'double_plate');
        TFCWeldingRecipe(event, doublePlateItem, plateItem, plateItem, material, 'ignore', weldingTier, 1, 2, 'double_plate');
    }

    const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, rodItem, material, 144/2, 'rod');
        // TODO: add Rod Casting
        TFCAnvilRecipe(event, rodItem.withCount(2), ingotItem, ['draw_last'], false, material, 'rod')
    }

    const longRodItem = ChemicalHelper.get(TagPrefix.rodLong, material, 1);

    weldingTier = tfcProperty.getAnvilTier();

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, longRodItem, material, 144, 'long_rod');
        TFCWeldingRecipe(event, longRodItem, rodItem, rodItem, material, 'ignore', weldingTier, 1, 2, 'long_rod');
    }
}