// priority: 1
"use strict";

const registerTFIMaterialRecipes = (event) => {
    // TODO: Systematize, once done testing

    forEachMaterial(material => {
        const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

        if (tfcProperty == null) return;

        const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1);

        if (!dustItem.isEmpty()) {
            const tinyDustItem = ChemicalHelper.get(TagPrefix.dustTiny, material, 1);
            TFCMeltingRecipe(event, tinyDustItem, material, 144/9, 'tiny_dust');
            const smallDustItem = ChemicalHelper.get(TagPrefix.dustSmall, material, 1);
            TFCMeltingRecipe(event, smallDustItem, material, 144/4, 'small_dust');
            TFCMeltingRecipe(event, dustItem, material, 144, 'dust');

            if (material.hasProperty(PropertyKey.INGOT)) {
                const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
                if (!ingotItem.isEmpty()) {
                    event.recipes.tfc.quern(dustItem, ingotItem)
                        .id(`tfinfinity:quern/${material.getName()}_ingot_to_dust`);
                }
            }
        }

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCMeltingRecipe(event, ingotItem, material, 144, 'ingot');
            TFCCastingRecipe(event, ingotItem, 'tfc:ceramic/ingot_mold', false, null, material, 'ingot', 144);
            TFCCastingRecipe(event, ingotItem, 'tfc:ceramic/fire_ingot_mold', true, null, material, 'ingot', 144);
        }

        const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);

        let weldingTier = tfcProperty.getWeldingTier();

        if (!doubleIngotItem.isEmpty()) {
            TFCMeltingRecipe(event, doubleIngotItem, material, 144*2, 'double_ingot');
            TFCWeldingRecipe(event, doubleIngotItem, ingotItem, ingotItem, material, 'ignore', weldingTier, 1, 1, 'double_ingot')
        }

        const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);

        if (!plateItem.isEmpty() && !doubleIngotItem.isEmpty()) {
            TFCMeltingRecipe(event, plateItem, material, 144, 'plate');
            TFCAnvilRecipe(event, plateItem, doubleIngotItem, ['hit_last', 'hit_second_last', 'hit_third_last'], false, material, 'plate')
        }

        const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);

        if (!doublePlateItem.isEmpty()) {
            TFCMeltingRecipe(event, doublePlateItem, material, 144*2, 'double_plate');
            TFCWeldingRecipe(event, doublePlateItem, plateItem, plateItem, material, 'ignore', weldingTier, 1, 2, 'double_plate');
        }

        const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);

        if (!rodItem.isEmpty()) {
            TFCMeltingRecipe(event, rodItem, material, 144/2, 'rod');
            // TODO: add Rod Casting
            TFCAnvilRecipe(event, rodItem.withCount(2), ingotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], false, material, 'rod')
        }

        const longRodItem = ChemicalHelper.get(TagPrefix.rodLong, material, 1);

        weldingTier = tfcProperty.getAnvilTier();

        if (!longRodItem.isEmpty()) {
            TFCMeltingRecipe(event, longRodItem, material, 144, 'long_rod');
            TFCWeldingRecipe(event, longRodItem, rodItem, rodItem, material, 'ignore', weldingTier, 1, 2, 'long_rod');
        }

        const boltItem = ChemicalHelper.get(TagPrefix.bolt, material, 1);

        if (!boltItem.isEmpty()) {
            TFCMeltingRecipe(event, boltItem, material, getMaterialAmount(TagPrefix.bolt, material) * 144, 'bolt');

            TFCAnvilRecipe(event, boltItem.withCount(4), rodItem, ['punch_last', 'draw_second_last', 'draw_third_last'], false, material, 'bolt');
        }

        const screwItem = ChemicalHelper.get(TagPrefix.screw, material, 1);

        if (!screwItem.isEmpty()) {
            TFCMeltingRecipe(event, screwItem, material, getMaterialAmount(TagPrefix.screw, material) * 144, 'screw');

            TFCAnvilRecipe(event, screwItem.withCount(4), rodItem, ['punch_last', 'punch_second_last', 'shrink_third_last'], false, material, 'screw');
        }

        const ringItem = ChemicalHelper.get(TagPrefix.ring, material, 1);

        if (!ringItem.isEmpty()) {
            TFCMeltingRecipe(event, ringItem, material, getMaterialAmount(TagPrefix.ring, material) * 144, 'ring');

            TFCAnvilRecipe(event, ringItem.withCount(2), rodItem, ['bend_last', 'hit_second_last', 'bend_third_last'], false, material, 'ring');
        }

        // TODO: other TFC Items

        const springItem = ChemicalHelper.get(TagPrefix.spring, material, 1);

        if (!springItem.isEmpty()) {
            TFCMeltingRecipe(event, springItem, material, getMaterialAmount(TagPrefix.spring, material) * 144, 'spring');

            TFCAnvilRecipe(event, springItem, longRodItem, ['hit_last', 'bend_second_last', 'bend_third_last'], false, material, 'spring');
        }

        const smallSpringItem = ChemicalHelper.get(TagPrefix.springSmall, material, 1);

        if (!smallSpringItem.isEmpty()) {
            TFCMeltingRecipe(event, smallSpringItem, material, getMaterialAmount(TagPrefix.springSmall, material) * 144, 'small_spring');

            TFCAnvilRecipe(event, smallSpringItem.withCount(2), rodItem, ['hit_last', 'bend_second_last', 'bend_third_last'], false, material, 'small_spring');
        }

        const nuggetItem = ChemicalHelper.get(TagPrefix.nugget, material, 1);

        if (!nuggetItem.isEmpty()) {
            TFCMeltingRecipe(event, nuggetItem, material, 144/9, 'nugget');

            // TODO: add Nugget Casting

            TFCAnvilRecipe(event, nuggetItem.withCount(9), ingotItem, ['punch_last', 'hit_second_last', 'punch_third_last'], false, material, 'nugget')
        }

        const smallGearItem = ChemicalHelper.get(TagPrefix.gearSmall, material, 1);

        if (!smallGearItem.isEmpty()) {
            TFCMeltingRecipe(event, smallGearItem, material, getMaterialAmount(TagPrefix.gearSmall, material) * 144, 'small_gear');

            // TODO: add Small Gear Casting

            TFCAnvilRecipe(event, smallGearItem, ingotItem, ['hit_last', 'shrink_second_last', 'draw_third_last'], false, material, 'small_gear');
        }

        const gearItem = ChemicalHelper.get(TagPrefix.gear, material, 1);

        if (!gearItem.isEmpty()) {
            TFCMeltingRecipe(event, gearItem, material, 144*4, 'gear');
            
            TFCWeldingRecipe(event, gearItem, doublePlateItem, doublePlateItem, material, 'ignore', 4, 1, 2, 'gear');
        }

        const buzzsawBladeItem = ChemicalHelper.get(TagPrefix.toolHeadBuzzSaw, material, 1);

        if (!buzzsawBladeItem.isEmpty()) {
            TFCAnvilRecipe(event, buzzsawBladeItem, doublePlateItem, ['bend_last', 'hit_second_last', 'draw_third_last'], false, material, 'buzzsaw_blade');
        }

        // Additional TFC Blocks/Items
        const anvilItem = ChemicalHelper.get(InfinityTagPrefix.anvil, material, 1);

        if (!anvilItem.isEmpty()) {
            TFCMeltingRecipe(event, anvilItem, material, getMaterialAmount(InfinityTagPrefix.anvil, material) * 144, 'anvil');
        }

        const barsItem = ChemicalHelper.get(InfinityTagPrefix.bars, material, 1);

        if (!barsItem.isEmpty()) {
            TFCMeltingRecipe(event, barsItem, material, getMaterialAmount(InfinityTagPrefix.bars, material) * 144, 'bars');
            TFCAnvilRecipe(event, barsItem.withCount(4), ingotItem, ['upset_last', 'punch_second_last', 'punch_third_last'], false, material, 'bars');
            TFCAnvilRecipe(event, barsItem.withCount(8), doubleIngotItem, ['upset_last', 'punch_second_last', 'punch_third_last'], false, material, 'bars_double');
        }

        // TODO: Bell

        const chainItem = ChemicalHelper.get(InfinityTagPrefix.chain, material, 1);

        if (!chainItem.isEmpty()) {
            TFCMeltingRecipe(event, chainItem, material, getMaterialAmount(InfinityTagPrefix.chain, material) * 144, 'chain');
            TFCAnvilRecipe(event, chainItem.withCount(16), ingotItem, ['hit_any', 'draw_not_last'], false, material, 'chain');
        }

        const lampItem = ChemicalHelper.get(InfinityTagPrefix.lamp, material, 1);
        const unfinishedLampItem = ChemicalHelper.get(InfinityTagPrefix.lampUnfinished, material, 1);

        if (!lampItem.isEmpty() && !unfinishedLampItem.isEmpty()) {
            TFCMeltingRecipe(event, lampItem, material, 144, 'lamp');
            TFCMeltingRecipe(event, unfinishedLampItem, material, 144, 'unfinished_lamp');
            TFCAnvilRecipe(event, unfinishedLampItem, ingotItem, ['bend_last', 'bend_second_last', 'draw_third_last'], false, material, 'unfinished_lamp')
        }

        const trapdoorItem = ChemicalHelper.get(InfinityTagPrefix.trapdoor, material, 1);

        if (!trapdoorItem.isEmpty()) {
            TFCMeltingRecipe(event, trapdoorItem, material, 144, 'trapdoor');
            TFCAnvilRecipe(event, trapdoorItem, plateItem, ['bend_last', 'draw_second_last', 'draw_third_last'], false, material, 'trapdoor');
        }

        const grateItem = ChemicalHelper.get(InfinityTagPrefix.grate, material, 1);

        if (!grateItem.isEmpty()) {
            TFCMeltingRecipe(event, grateItem, material, getMaterialAmount(InfinityTagPrefix.grate, material) * 144, 'grate');
        }

        const platedBlockItem = ChemicalHelper.get(InfinityTagPrefix.blockPlated, material, 1);
        const platedSlabItem = ChemicalHelper.get(InfinityTagPrefix.slabPlated, material, 1);
        const platedStairsItem = ChemicalHelper.get(InfinityTagPrefix.stairsPlated, material, 1);

        if (!platedBlockItem.isEmpty()) {
            TFCMeltingRecipe(event, platedBlockItem, material, getMaterialAmount(InfinityTagPrefix.blockPlated, material) * 144, 'plated_block');
            TFCMeltingRecipe(event, platedSlabItem, material, getMaterialAmount(InfinityTagPrefix.slabPlated, material) * 144, 'plated_slab');
            TFCMeltingRecipe(event, platedStairsItem, material, getMaterialAmount(InfinityTagPrefix.stairsPlated, material) * 144, 'plated_stairs');
        }
    })
}