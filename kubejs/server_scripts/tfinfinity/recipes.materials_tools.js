// priority: 1
"use strict";

const $ToolHelper = Java.loadClass('com.gregtechceu.gtceu.api.item.tool.ToolHelper');

const registerTFIToolHeadRecipes = (event) => {
    // TODO: Systematize, once done testing

    const material = GTMaterials.Copper;

    const materialName = material.getName();

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
    const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);
    const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);

    const pickaxeHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadPickaxe, material, 1);
    if (tfcProperty !== null && !pickaxeHead.isEmpty()) {
        TFCAnvilRecipe(event, pickaxeHead, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'pickaxe_head');
    }

    const axeHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadAxe, material, 1);
    if (tfcProperty !== null && !axeHead.isEmpty()) {
        TFCAnvilRecipe(event, axeHead, ingotItem, ['punch_last', 'hit_second_last', 'upset_third_last'], true, material, 'axe_head');
    }

    const shovelHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadShovel, material, 1);
    if (tfcProperty !== null && !shovelHead.isEmpty()) {
        TFCAnvilRecipe(event, shovelHead, ingotItem, ['punch_last', 'hit_not_last'], true, material, 'shovel_head');
    }

    const hoeHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadHoe, material, 1);
    if (tfcProperty !== null && !hoeHead.isEmpty()) {
        TFCAnvilRecipe(event, hoeHead, ingotItem, ['punch_last', 'hit_not_last', 'bend_not_last'], true, material, 'hoe_head');
    }

    const chiselHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadChisel, material, 1);
    if (tfcProperty !== null && !chiselHead.isEmpty()) {
        TFCAnvilRecipe(event, chiselHead, ingotItem, ['hit_last', 'draw_not_last', 'hit_not_last'], true, material, 'chisel_head');
    }

    const hammerHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadHammer, material, 1);
    if (tfcProperty !== null && !hammerHead.isEmpty()) {
        TFCAnvilRecipe(event, hammerHead, ingotItem, ['punch_last', 'shrink_not_last'], true, material, 'hammer_head');
    }

    const sawBlade = ChemicalHelper.get(InfinityTagPrefix.toolHeadSaw, material, 1);
    if (tfcProperty !== null && !sawBlade.isEmpty()) {
        TFCAnvilRecipe(event, sawBlade, ingotItem, ['hit_last', 'hit_second_last'], true, material, 'saw_blade');
    }

    const knifeBlade = ChemicalHelper.get(InfinityTagPrefix.toolHeadKnife, material, 1);
    if (tfcProperty !== null && !knifeBlade.isEmpty()) {
        TFCAnvilRecipe(event, knifeBlade, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'knife_blade');
    }

    const scytheBlade = ChemicalHelper.get(InfinityTagPrefix.toolHeadScythe, material, 1);
    if (tfcProperty !== null && !scytheBlade.isEmpty()) {
        TFCAnvilRecipe(event, scytheBlade, doubleIngotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'scythe_blade');
    }

    const swordBlade = ChemicalHelper.get(InfinityTagPrefix.toolHeadSword, material, 1);
    if (tfcProperty !== null && !swordBlade.isEmpty()) {
        TFCAnvilRecipe(event, swordBlade, doubleIngotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'sword_blade');
    }

    const maceHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadMace, material, 1);
    if (tfcProperty !== null && !maceHead.isEmpty()) {
        TFCAnvilRecipe(event, maceHead, doubleIngotItem, ['hit_last', 'bend_not_last', 'shrink_not_last'], true, material, 'mace_head');
    }

    const fileHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadFile, material, 1);
    if (tfcProperty !== null && !fileHead.isEmpty()) {
        TFCAnvilRecipe(event, fileHead, ingotItem, ['upset_last', 'bend_not_last', 'punch_not_last'], true, material, 'file_head');
    }

    const miningHammerHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadMiningHammer, material, 1);
    if (tfcProperty !== null && !miningHammerHead.isEmpty()) {
        TFCAnvilRecipe(event, miningHammerHead, doubleIngotItem, ['punch_last', 'shrink_not_last'], true, material, 'mining_hammer_head');
    }

    const spadeHead = ChemicalHelper.get(InfinityTagPrefix.toolHeadSpade, material, 1);
    if (tfcProperty !== null && !spadeHead.isEmpty()) {
        TFCAnvilRecipe(event, spadeHead, doubleIngotItem, ['punch_last', 'hit_not_last'], true, material, 'spade_head');
    }

    const butcheryKnifeBlade = ChemicalHelper.get(InfinityTagPrefix.toolHeadButcheryKnife, material, 1);
    if (tfcProperty !== null && !butcheryKnifeBlade.isEmpty()) {
        TFCAnvilRecipe(event, butcheryKnifeBlade, ingotItem, ['punch_last', 'bend_not_last', 'bend_not_last'], true, material, 'butchery_knife_blade');
    }

    const screwdriverHead = ChemicalHelper.get(TagPrefix.toolHeadScrewdriver, material, 1);
    if (tfcProperty !== null && !screwdriverHead.isEmpty()) {
        TFCAnvilRecipe(event, screwdriverHead, ingotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'screwdriver_tip');
    }

    const wrenchHead = ChemicalHelper.get(TagPrefix.toolHeadWrench, material, 1);
    if (tfcProperty !== null && !wrenchHead.isEmpty()) {
        TFCAnvilRecipe(event, wrenchHead, doubleIngotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'wrench_tip');
    }

    const wireCutterHead = ChemicalHelper.get(TagPrefix.toolHeadWireCutter, material, 1);
    if (tfcProperty !== null && !wireCutterHead.isEmpty()) {
        TFCAnvilRecipe(event, wireCutterHead, doubleIngotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'wire_cutter_head');
    }

    const shears = $ToolHelper.get(GTToolType.SHEARS, material);
    if (tfcProperty !== null && !shears.isEmpty() && !knifeBlade.isEmpty()) {
        TFCWeldingRecipe(event, shears, knifeBlade, knifeBlade, material, 'copy_worst', tfcProperty.getAnvilTier(), 1, 1, 'shears')
    }
}