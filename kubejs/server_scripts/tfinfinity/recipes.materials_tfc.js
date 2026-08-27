// priority: 1
"use strict";

function processTuyere(event, material) {
    const tuyereItem = tryGetItem(`tfc:metal/tuyere/${material.getName()}`);
    if (tuyereItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, tuyereItem, material, 144*2, 'tuyere');

        const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);

        if (!doublePlateItem.isEmpty()) {
            TFCAnvilRecipe(event, tuyereItem, doublePlateItem, ['bend_last', 'bend_second_last'], true, material, 'tuyere');
        }
    }
}

function processPropickHead(event, material) {
    const propickHeadItem = tryGetItem(`tfc:metal/propick_head/${material.getName()}`);
    if (propickHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, propickHeadItem, material, 144, 'propick_head');
        TFCCastingRecipe(event, propickHeadItem, 'tfc:ceramic/propick_head_mold', false, null, material, 'propick_head', 144);

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, propickHeadItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'propick_head');
        }
    }
}

function processJavelinHead(event, material) {
    const javelinHeadItem = tryGetItem(`tfc:metal/javelin_head/${material.getName()}`);
    if (javelinHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, javelinHeadItem, material, 144, 'javelin_head');
        TFCCastingRecipe(event, javelinHeadItem, 'tfc:ceramic/javelin_head_mold', false, null, material, 'javelin_head', 144);

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, javelinHeadItem, ingotItem, ['hit_last', 'hit_second_last', 'draw_third_last'], true, material, 'javelin_head');
        }
    }
}

function processFishHook(event, material) {
    const fishHookItem = tryGetItem(`tfc:metal/fish_hook/${material.getName()}`);
    if (fishHookItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, fishHookItem, material, 144, 'fish_hook');

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, fishHookItem, ingotItem, ['bend_any', 'hit_any', 'draw_not_last'], false, material, 'fish_hook');
        }
    }
}

function processTFCArmor(event, material) {
    const materialName = material.getName();

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty == null) return;

    const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
    const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);
    const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);
    const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);

    const unfinishedHelmetItem = tryGetItem(`tfc:metal/unfinished_helmet/${materialName}`);
    const helmetItem = tryGetItem(`tfc:metal/helmet/${materialName}`);

    if (!unfinishedHelmetItem.isEmpty() && !helmetItem.isEmpty()) {
        TFCAnvilRecipe(event, unfinishedHelmetItem, doublePlateItem, ['hit_last', 'bend_second_last', 'bend_third_last'], true, material, 'unfinished_helmet');
        TFCMeltingRecipe(event, unfinishedHelmetItem, material, 144*2, 'unfinished_helmet');
        TFCMeltingRecipe(event, helmetItem, material, 144*3, 'helmet');
        TFCWeldingRecipe(event, helmetItem, unfinishedHelmetItem, plateItem, material, 'copy_best', tfcProperty.getAnvilTier(), 1, 1, 'helmet');
    }

    const unfinishedChestplateItem = tryGetItem(`tfc:metal/unfinished_chestplate/${materialName}`);
    const chestplateItem = tryGetItem(`tfc:metal/chestplate/${materialName}`);

    if (!unfinishedChestplateItem.isEmpty() && !chestplateItem.isEmpty()) {
        TFCAnvilRecipe(event, unfinishedChestplateItem, doublePlateItem, ['hit_last', 'hit_second_last', 'upset_third_last'], true, material, 'unfinsihed_chestplate');
        TFCMeltingRecipe(event, unfinishedChestplateItem, material, 144*2, 'unfinished_chestplate');
        TFCMeltingRecipe(event, chestplateItem, material, 144*4, 'chestplate');
        TFCWeldingRecipe(event, chestplateItem, unfinishedChestplateItem, doublePlateItem, material, 'copy_best', tfcProperty.getAnvilTier(), 1, 1, 'chestplate');
    } 

    const unfinishedGreavesItem = tryGetItem(`tfc:metal/unfinished_greaves/${materialName}`);
    const greavesItem = tryGetItem(`tfc:metal/greaves/${materialName}`);

    if (!unfinishedGreavesItem.isEmpty() && !greavesItem.isEmpty()) {
        TFCAnvilRecipe(event, unfinishedGreavesItem, doublePlateItem, ['bend_any', 'draw_any', 'hit_any'], true, material, 'unfinished_greaves');
        TFCMeltingRecipe(event, unfinishedGreavesItem, material, 144*2, 'unfinished_greaves');
        TFCMeltingRecipe(event, greavesItem, material, 144*3, 'greaves');
        TFCWeldingRecipe(event, greavesItem, unfinishedGreavesItem, plateItem, material, 'copy_best', tfcProperty.getAnvilTier(), 1, 1, 'greaves');
    }

    const unfinishedBootsItem = tryGetItem(`tfc:metal/unfinished_boots/${materialName}`);
    const bootsItem = tryGetItem(`tfc:metal/boots/${materialName}`);

    if (!unfinishedBootsItem.isEmpty() && !bootsItem.isEmpty()) {
        TFCAnvilRecipe(event, unfinishedBootsItem, plateItem, ['bend_last', 'bend_second_last', 'shrink_third_last'], true, material, 'unfinished_boots');
        TFCMeltingRecipe(event, unfinishedBootsItem, material, 144, 'unfinished_boots');
        TFCMeltingRecipe(event, bootsItem, material, 144*2, 'boots');
        TFCWeldingRecipe(event, bootsItem, unfinishedBootsItem, plateItem, material, 'copy_best', tfcProperty.getAnvilTier(), 1, 1, 'boots');
    }
}

function processTFCShield(event, material) {
    const shieldItem = tryGetItem(`tfc:metal/shield/${material.getName()}`);
    if (shieldItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, shieldItem, material, 144*2, 'shield');

        const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);

        if (!doublePlateItem.isEmpty()) {
            TFCAnvilRecipe(event, shieldItem, doublePlateItem, ['upset_last', 'bend_second_last', 'bend_third_last'], true, material, 'shield');
        }
    }
}

function processTFCHorseArmor(event, material) {
    const horseArmorItem = tryGetItem(`tfc:metal/horse_armor/${material.getName()}`);
    if (horseArmorItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, horseArmorItem, material, 144*6, 'horse_armor');
    }
}

function processTFCHangingSigns(event, material) {
    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);
    if (tfcProperty === null) return;

    const TFC_WOODS = [
        'acacia', 'ash', 'aspen', 'birch', 'blackwood', 'chestnut', 'douglas_fir', 
        'hickory', 'kapok', 'mangrove', 'maple', 'oak', 'palm', 'pine', 'rosewood', 
        'sequoia', 'spruce', 'sycamore', 'white_cedar', 'willow'
    ]

    const AFC_WOODS = [
        'baobab', 'eucalyptus', 'mahogany', 'hevea', 'tualang', 'teak', 'cypress',
        'fig', 'ironwood', 'ipe', 'araucaria', 'beech', 'ginkgo', 'mahoe'
    ]

    let hangingSignItems = [];

    for (const wood of TFC_WOODS) {
        let signItem = tryGetItem(`tfc:wood/hanging_sign/${material.getName()}/${wood}`);

        if (signItem.isEmpty()) {
            break;
        } else {
            hangingSignItems.push(signItem);
        }
    }

    for (const wood of AFC_WOODS) {
        let signItem = tryGetItem(`afc:wood/hanging_sign/${material.getName()}/${wood}`);

        if (signItem.isEmpty()) {
            break;
        } else {
            hangingSignItems.push(signItem);
        }
    }

    if (hangingSignItems.length > 0) {
        TFCMeltingRecipe(event, hangingSignItems, material, 144/24, 'hanging_sign');
    }
}