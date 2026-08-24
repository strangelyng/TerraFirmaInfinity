// priority: 1
"use strict";

const $ToolHelper = Java.loadClass('com.gregtechceu.gtceu.api.item.tool.ToolHelper');

const registerTFIToolHeadRecipes = (event) => {
    // event.remove({ id: /tfc:anvil\/metal\/.*/ })

    // TODO: Systematize, once done testing

    // TODO: bucket

    forEachMaterial(material => {
        const materialName = material.getName();

        const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

        if (tfcProperty == null) return;
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
        const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);
        const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);
        const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);

        const pickaxeHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadPickaxe, material, 1);
        if (!pickaxeHead.isEmpty()) {
            TFCMeltingRecipe(event, pickaxeHead, material, 144, 'pickaxe_head');
            TFCCastingRecipe(event, pickaxeHead, 'tfc:ceramic/pickaxe_head_mold', false, null, material, InfinityTagPrefix.toolHeadPickaxe, 144);
            TFCAnvilRecipe(event, pickaxeHead, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'pickaxe_head');
        }

        const axeHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadAxe, material, 1);
        if (!axeHead.isEmpty()) {
            TFCMeltingRecipe(event, axeHead, material, 144, 'axe_head');
            TFCCastingRecipe(event, axeHead, 'tfc:ceramic/axe_head_mold', false, null, material, InfinityTagPrefix.toolHeadAxe, 144);
            TFCAnvilRecipe(event, axeHead, ingotItem, ['punch_last', 'hit_second_last', 'upset_third_last'], true, material, 'axe_head');
        }

        const shovelHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadShovel, material, 1);
        if (!shovelHead.isEmpty()) {
            TFCMeltingRecipe(event, shovelHead, material, 144, 'shovel_head');
            TFCCastingRecipe(event, shovelHead, 'tfc:ceramic/shovel_head_mold', false, null, material, InfinityTagPrefix.toolHeadShovel, 144);
            TFCAnvilRecipe(event, shovelHead, ingotItem, ['punch_last', 'hit_not_last'], true, material, 'shovel_head');
        }

        const hoeHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadHoe, material, 1);
        if (!hoeHead.isEmpty()) {
            TFCMeltingRecipe(event, hoeHead, material, 144, 'hoe_head');
            TFCCastingRecipe(event, hoeHead, 'tfc:ceramic/hoe_head_mold', false, null, material, InfinityTagPrefix.toolHeadHoe, 144);
            TFCAnvilRecipe(event, hoeHead, ingotItem, ['punch_last', 'hit_not_last', 'bend_not_last'], true, material, 'hoe_head');
        }

        const chiselHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadChisel, material, 1);
        if (!chiselHead.isEmpty()) {
            TFCMeltingRecipe(event, chiselHead, material, 144, 'chisel_head');
            TFCCastingRecipe(event, chiselHead, 'tfc:ceramic/chisel_head_mold', false, null, material, InfinityTagPrefix.toolHeadChisel, 144);
            TFCAnvilRecipe(event, chiselHead, ingotItem, ['hit_last', 'draw_not_last', 'hit_not_last'], true, material, 'chisel_head');
        }

        const hammerHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadHammer, material, 1);
        if (!hammerHead.isEmpty()) {
            TFCMeltingRecipe(event, hammerHead, material, 144, 'hammer_head');
            TFCCastingRecipe(event, hammerHead, 'tfc:ceramic/hammer_head_mold', false, null, material, InfinityTagPrefix.toolHeadHammer, 144);
            TFCAnvilRecipe(event, hammerHead, ingotItem, ['punch_last', 'shrink_not_last'], true, material, 'hammer_head');
        }

        const sawBlade = ChemicalHelper.get(InfinityTagPrefix.toolHeadSaw, material, 1);
        if (!sawBlade.isEmpty()) {
            TFCMeltingRecipe(event, sawBlade, material, 144, 'saw_blade');
            TFCCastingRecipe(event, sawBlade, 'tfc:ceramic/saw_blade_mold', false, null, material, InfinityTagPrefix.toolHeadSaw, 144);
            TFCAnvilRecipe(event, sawBlade, ingotItem, ['hit_last', 'hit_second_last'], true, material, 'saw_blade');
        }

        const knifeBlade = ChemicalHelper.get(InfinityTagPrefix.toolHeadKnife, material, 1);
        if (!knifeBlade.isEmpty()) {
            TFCMeltingRecipe(event, knifeBlade, material, 144, 'knife_blade');
            TFCCastingRecipe(event, knifeBlade, 'tfc:ceramic/knife_blade_mold', false, null, material, InfinityTagPrefix.toolHeadKnife, 144);
            TFCAnvilRecipe(event, knifeBlade, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'knife_blade');
        }

        const scytheBlade = ChemicalHelper.get(InfinityTagPrefix.toolHeadScythe, material, 1);
        if (!scytheBlade.isEmpty()) {
            TFCMeltingRecipe(event, scytheBlade, material, 144*2, 'scythe_blade');
            TFCCastingRecipe(event, scytheBlade, 'tfc:ceramic/scythe_blade_mold', false, null, material, InfinityTagPrefix.toolHeadScythe, 288);
            TFCAnvilRecipe(event, scytheBlade, doubleIngotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'scythe_blade');
        }

        const swordBlade = ChemicalHelper.get(InfinityTagPrefix.toolHeadSword, material, 1);
        if (!swordBlade.isEmpty()) {
            TFCMeltingRecipe(event, swordBlade, material, 144*2, 'sword_blade');
            TFCCastingRecipe(event, swordBlade, 'tfc:ceramic/sword_blade_mold', false, null, material, InfinityTagPrefix.toolHeadSword, 288);
            TFCAnvilRecipe(event, swordBlade, doubleIngotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'sword_blade');
        }

        const maceHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadMace, material, 1);
        if (!maceHead.isEmpty()) {
            TFCMeltingRecipe(event, maceHead, material, 144*2, 'mace_head');
            TFCCastingRecipe(event, maceHead, 'tfc:ceramic/mace_head_mold', false, null, material, InfinityTagPrefix.toolHeadMace, 288);
            TFCAnvilRecipe(event, maceHead, doubleIngotItem, ['hit_last', 'bend_not_last', 'shrink_not_last'], true, material, 'mace_head');
        }

        const fileHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadFile, material, 1);
        if (!fileHead.isEmpty()) {
            TFCMeltingRecipe(event, fileHead, material, 144, 'file_head');
            // Need Mold Item
            TFCAnvilRecipe(event, fileHead, ingotItem, ['upset_last', 'bend_not_last', 'punch_not_last'], true, material, 'file_head');
        }

        const miningHammerHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadMiningHammer, material, 1);
        if (!miningHammerHead.isEmpty()) {
            TFCMeltingRecipe(event, miningHammerHead, material, 144*2, 'mining_hammer_head');
            TFCAnvilRecipe(event, miningHammerHead, doubleIngotItem, ['punch_last', 'shrink_not_last'], true, material, 'mining_hammer_head');
        }

        const spadeHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadSpade, material, 1);
        if (!spadeHead.isEmpty()) {
            TFCMeltingRecipe(event, spadeHead, material, 144*2, 'spade_head');
            TFCAnvilRecipe(event, spadeHead, doubleIngotItem, ['punch_last', 'hit_not_last'], true, material, 'spade_head');
        }

        const butcheryKnifeBlade = ChemicalHelper.get(InfinityTagPrefix.toolHeadButcheryKnife, material, 1);
        if (!butcheryKnifeBlade.isEmpty()) {
            TFCMeltingRecipe(event, butcheryKnifeBlade, material, 144*2, 'butchery_knife_blade');
            TFCAnvilRecipe(event, butcheryKnifeBlade, ingotItem, ['punch_last', 'bend_not_last', 'bend_not_last'], true, material, 'butchery_knife_blade');
        }

        const screwdriverHead = ChemicalHelper.get(TagPrefix.toolHeadScrewdriver, material, 1);
        if (!screwdriverHead.isEmpty()) {
            TFCMeltingRecipe(event, screwdriverHead, material, 144, 'screwdriver_head');
            TFCAnvilRecipe(event, screwdriverHead, ingotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'screwdriver_tip');
        }

        const wrenchHead = ChemicalHelper.get(TagPrefix.toolHeadWrench, material, 1);
        if (!wrenchHead.isEmpty()) {
            TFCMeltingRecipe(event, wrenchHead, material, 144*2, 'wrench_tip');
            TFCAnvilRecipe(event, wrenchHead, doubleIngotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'wrench_tip');
        }

        const wireCutterHead = ChemicalHelper.get(TagPrefix.toolHeadWireCutter, material, 1);
        if (!wireCutterHead.isEmpty()) {
            TFCMeltingRecipe(event, wireCutterHead, material, 144*2, 'wire_cutter_head');
            TFCAnvilRecipe(event, wireCutterHead, doubleIngotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'wire_cutter_head');
        }

        const shears = $ToolHelper.get(GTToolType.SHEARS, material);
        if (!shears.isEmpty() && !knifeBlade.isEmpty()) {
            TFCWeldingRecipe(event, shears, knifeBlade, knifeBlade, material, 'copy_worst', tfcProperty.getAnvilTier(), 1, 1, 'shears')
        }

        /**
         * 
         * @param {String} string ItemId to get 
         * @returns If it exists, returns ItemStack of the Item, otherwise returns Item.empty;
         */
        function tryGetItem(string) {
            return Item.exists(string) ? Item.of(string) : Item.empty;
        }

        const tuyereItem = tryGetItem(`tfc:metal/tuyere/${materialName}`);

        if (!tuyereItem.isEmpty()) {
            TFCAnvilRecipe(event, tuyereItem, doublePlateItem, ['bend_last', 'bend_second_last'], true, material, 'tuyere');
            TFCMeltingRecipe(event, tuyereItem, material, 144*2, 'tuyere');
        }

        // #region Non-TagPrefix Items

        const propickHead = tryGetItem(`tfc:metal/propick_head/${materialName}`);
        const propickItem = tryGetItem(`tfc:metal/propick/${materialName}`);

        if (!propickItem.isEmpty() || !propickHead.isEmpty()) {
            TFCAnvilRecipe(event, propickHead, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'propick_head');
            TFCMeltingRecipe(event, propickHead, material, 144, 'propick_head');
            TFCCastingRecipe(event, propickHead, 'tfc:ceramic/propick_head_mold', false, null, material, 'propick_head', 144);
        }

        const javelinHead = tryGetItem(`tfc:metal/javelin_head/${materialName}`);
        const javelinItem = tryGetItem(`tfc:metal/javelin/${materialName}`);

        if (!javelinHead.isEmpty() || !javelinItem.isEmpty()) {
            TFCAnvilRecipe(event, javelinHead, ingotItem, ['hit_last', 'hit_second_last', 'draw_third_last'], true, material, 'javelin_head');
            TFCMeltingRecipe(event, javelinHead, material, 144, 'javelin_head');
            TFCCastingRecipe(event, javelinHead, 'tfc:ceramic/javelin_head_mold', false, null, material, 'javelin_head', 144);
        }

        const fishHook = tryGetItem(`tfc:metal/fish_hook/${materialName}`);
        const fishingRodItem = tryGetItem(`tfc:metal/fishing_rod/${materialName}`);

        if (!fishHook.isEmpty() || !fishingRodItem.isEmpty()) {
            TFCAnvilRecipe(event, fishHook, ingotItem, ['bend_any', 'hit_any', 'draw_not_last'], false, material, 'fish_hook');
            TFCMeltingRecipe(event, fishHook, material, 144, 'fish_hook');
        }

        // #region Armor
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

        const shieldItem = tryGetItem(`tfc:metal/shield/${materialName}`);

        if (!shieldItem.isEmpty()) {
            TFCMeltingRecipe(event, shieldItem, material, 144*2, 'shield');
            TFCAnvilRecipe(event, shieldItem, doublePlateItem, ['upset_last', 'bend_second_last', 'bend_third_last'], true, material, 'shield');
        }

        const horseArmorItem = tryGetItem(`tfc:metal/horse_armor/${materialName}`);

        if (!horseArmorItem.isEmpty()) {
            TFCMeltingRecipe(event, horseArmorItem, material, 144*6, 'horse_armor');
        }

        // #region Bells
        const bellItem = tryGetItem(materialName == 'gold' ? 'minecraft:bell' : `tfc:${materialName}_bell`);

        if (!bellItem.isEmpty()) {
            TFCCastingRecipe(event, bellItem, 'tfc:ceramic/bell_mold', false, null, material, 'bell', 144);
            TFCMeltingRecipe(event, bellItem, material, 144, 'bell');
        }
    })

    // #region Buckets
    TFCAnvilRecipe(event, 
        Item.of('tfc:metal/bucket/blue_steel'), 
        ChemicalHelper.get(TagPrefix.plate, GTMaterials.BlueSteel, 1),
        ['hit_last', 'bend_second_last', 'bend_third_last'],
        false,
        GTMaterials.BlueSteel,
        'bucket'
    );

    TFCAnvilRecipe(event,
        Item.of('tfc:metal/bucket/red_steel'),
        ChemicalHelper.get(TagPrefix.plate, GTMaterials.RedSteel, 1),
        ['hit_last', 'bend_second_last', 'bend_third_last'],
        false,
        GTMaterials.RedSteel,
        'bucket'
    )

    event.recipes.tfc.welding(TFC.isp.of('minecraft:bucket').copyHeat(), Item.of('tfc:metal/bucket/blue_steel'), Item.of('tfc:metal/bucket/red_steel'))
        .tier(6)
        .bonusBehavior('ignore')
        .id('tfinfinity:welding/bucket');
}