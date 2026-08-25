// priority: 1
"use strict";

const registerTFIMaterialRecipes = (event) => {
    let recipesToRemove = [
        'tfc:anvil/refined_iron_bloom',
        'tfc:blast_furnace/pig_iron',
        'tfc:bloomery/raw_iron_bloom'
    ]

    recipesToRemove.forEach(recipeId => {
        event.remove({ id: recipeId });
    })

    event.remove({ id: /tfc:anvil\/metal\/.*/ })
    event.remove({ id: /tfc:casting\/.*/ })
    event.remove({ id: /tfc:heating\/metal\/.*/ })
    event.remove({ id: /tfc:heating\/ore\/.*/ })
    event.remove({ id: /tfc:welding\/metal\/.*/ })

    // TODO: Systematize, once done testing
    forEachMaterial(material => {
        const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

        if (tfcProperty == null) return;

        const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1);

        if (!dustItem.isEmpty()) {
            const tinyDustItem = ChemicalHelper.get(TagPrefix.dustTiny, material, 1);
            TFCMeltingRecipe(event, tinyDustItem, material, calcAmountOfMetal(144/9, tfcProperty.getPercentOfMaterial()), 'tiny_dust');
            const smallDustItem = ChemicalHelper.get(TagPrefix.dustSmall, material, 1);
            TFCMeltingRecipe(event, smallDustItem, material, calcAmountOfMetal(144/4, tfcProperty.getPercentOfMaterial()), 'small_dust');
            TFCMeltingRecipe(event, dustItem, material, calcAmountOfMetal(144, tfcProperty.getPercentOfMaterial()), 'dust');

            if (material.hasProperty(PropertyKey.INGOT)) {
                const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

                const quernDust = tfcProperty.getOutputMaterial() != null && tfcProperty.getOutputMaterial() != material ? ChemicalHelper.get(TagPrefix.dust, tfcProperty.getOutputMaterial(), 1) : dustItem;
                
                if (!ingotItem.isEmpty()) {
                    event.recipes.tfc.quern(quernDust, ingotItem)
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

            if (material.hasFlag(InfinityMaterialFlags.HAS_TFC_OXIDATION)) {
                const exposedGrate = ChemicalHelper.get(InfinityTagPrefix.grateExposed, material, 1);
                TFCMeltingRecipe(event, exposedGrate, material, getMaterialAmount(InfinityTagPrefix.grateExposed, material) * 144, 'exposed_grate');

                const weatheredGrate = ChemicalHelper.get(InfinityTagPrefix.grateWeathered, material, 1);
                TFCMeltingRecipe(event, weatheredGrate, material, getMaterialAmount(InfinityTagPrefix.grateWeathered, material) * 144, 'weathered_grate');

                const oxidizedGrate = ChemicalHelper.get(InfinityTagPrefix.grateOxidized, material, 1);
                TFCMeltingRecipe(event, oxidizedGrate, material, getMaterialAmount(InfinityTagPrefix.grateOxidized, material) * 144, 'oxidized_grate');
            }
        }

        const platedBlockItem = ChemicalHelper.get(InfinityTagPrefix.blockPlated, material, 1);
        const platedSlabItem = ChemicalHelper.get(InfinityTagPrefix.slabPlated, material, 1);
        const platedStairsItem = ChemicalHelper.get(InfinityTagPrefix.stairsPlated, material, 1);

        if (!platedBlockItem.isEmpty()) {
            TFCMeltingRecipe(event, platedBlockItem, material, getMaterialAmount(InfinityTagPrefix.blockPlated, material) * 144, 'plated_block');
            TFCMeltingRecipe(event, platedSlabItem, material, getMaterialAmount(InfinityTagPrefix.slabPlated, material) * 144, 'plated_slab');
            TFCMeltingRecipe(event, platedStairsItem, material, getMaterialAmount(InfinityTagPrefix.stairsPlated, material) * 144, 'plated_stairs');

            if (material.hasFlag(InfinityMaterialFlags.HAS_TFC_OXIDATION)) {
                const exposedPlatedBlock = ChemicalHelper.get(InfinityTagPrefix.blockPlatedExposed, material, 1);
                const exposedPlatedSlab = ChemicalHelper.get(InfinityTagPrefix.slabPlatedExposed, material, 1);
                const exposedPlatedStairs = ChemicalHelper.get(InfinityTagPrefix.stairsPlatedExposed, material, 1);

                TFCMeltingRecipe(event, exposedPlatedBlock, material, getMaterialAmount(InfinityTagPrefix.blockPlatedExposed, material) * 144, 'exposed_plated_block');
                TFCMeltingRecipe(event, exposedPlatedSlab, material, getMaterialAmount(InfinityTagPrefix.slabPlatedExposed, material) * 144, 'exposed_plated_slab');
                TFCMeltingRecipe(event, exposedPlatedStairs, material, getMaterialAmount(InfinityTagPrefix.stairsPlatedExposed, material) * 144, 'exposed_plated_stairs');

                const weatheredPlatedBlock = ChemicalHelper.get(InfinityTagPrefix.blockPlatedWeathered, material, 1);
                const weatheredPlatedSlab = ChemicalHelper.get(InfinityTagPrefix.slabPlatedWeathered, material, 1);
                const weatheredPlatedStairs = ChemicalHelper.get(InfinityTagPrefix.stairsPlatedWeathered, material, 1);

                TFCMeltingRecipe(event, weatheredPlatedBlock, material, getMaterialAmount(InfinityTagPrefix.blockPlatedWeathered, material) * 144, 'weathered_plated_block');
                TFCMeltingRecipe(event, weatheredPlatedSlab, material, getMaterialAmount(InfinityTagPrefix.slabPlatedWeathered, material) * 144, 'weathered_plated_slab');
                TFCMeltingRecipe(event, weatheredPlatedStairs, material, getMaterialAmount(InfinityTagPrefix.stairsPlatedWeathered, material) * 144, 'weathered_plated_stairs');
                
                const oxidizedPlatedBlock = ChemicalHelper.get(InfinityTagPrefix.blockPlatedOxidized, material, 1);
                const oxidizedPlatedSlab = ChemicalHelper.get(InfinityTagPrefix.slabPlatedOxidized, material, 1);
                const oxidizedPlatedStairs = ChemicalHelper.get(InfinityTagPrefix.stairsPlatedOxidized, material, 1);

                TFCMeltingRecipe(event, oxidizedPlatedBlock, material, getMaterialAmount(InfinityTagPrefix.blockPlatedOxidized, material) * 144, 'oxidized_plated_block');
                TFCMeltingRecipe(event, oxidizedPlatedSlab, material, getMaterialAmount(InfinityTagPrefix.slabPlatedOxidized, material) * 144, 'oxidized_plated_slab');
                TFCMeltingRecipe(event, oxidizedPlatedStairs, material, getMaterialAmount(InfinityTagPrefix.stairsPlatedOxidized, material) * 144, 'oxidized_plated_stairs');
            }
        }

        // #region Ores
        const oreProperty = material.getProperty(PropertyKey.ORE);

        if (oreProperty == null) return;

        const smallOreItem = ChemicalHelper.get(InfinityTagPrefix.oreSmall, material, 1);

        if (!smallOreItem.isEmpty()) {
            TFCMeltingRecipe(event, smallOreItem, material, calcAmountOfMetal(16, tfcProperty.getPercentOfMaterial()), 'small_ore');
        }

        const poorRawOreItem = ChemicalHelper.get(InfinityTagPrefix.poorRawOre, material, 1);

        if (!poorRawOreItem.isEmpty()) {
            TFCMeltingRecipe(event, poorRawOreItem, material, calcAmountOfMetal(24, tfcProperty.getPercentOfMaterial()), 'poor_ore');
        }

        const rawOreItem = ChemicalHelper.get(TagPrefix.rawOre, material, 1);

        if (!rawOreItem.isEmpty()) {
            TFCMeltingRecipe(event, rawOreItem, material, calcAmountOfMetal(36, tfcProperty.getPercentOfMaterial()), 'normal_ore');
        }

        const richRawOreItem = ChemicalHelper.get(InfinityTagPrefix.richRawOre, material, 1);

        if (!rawOreItem.isEmpty()) {
            TFCMeltingRecipe(event, richRawOreItem, material, calcAmountOfMetal(48, tfcProperty.getPercentOfMaterial()), 'rich_ore');
        }

        const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1);

        if (!crushedOreItem.isEmpty()) {
            TFCMeltingRecipe(event, crushedOreItem, material, calcAmountOfMetal(64, tfcProperty.getPercentOfMaterial()), 'crushed_ore');
        }

        const purifiedOreItem = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1);

        if (!purifiedOreItem.isEmpty()) {
            TFCMeltingRecipe(event, purifiedOreItem, material, calcAmountOfMetal(80, tfcProperty.getPercentOfMaterial()), 'purified_ore');
        }

        const refinedOreItem = ChemicalHelper.get(TagPrefix.crushedRefined, material, 1);

        if (!refinedOreItem.isEmpty()) {
            TFCMeltingRecipe(event, refinedOreItem, material, calcAmountOfMetal(90, tfcProperty.getPercentOfMaterial()), 'refined_ore');
        }

        const impureDustItem = ChemicalHelper.get(TagPrefix.dustImpure, material, 1);

        if (!impureDustItem.isEmpty()) {
            TFCMeltingRecipe(event, impureDustItem, material, calcAmountOfMetal(80, tfcProperty.getPercentOfMaterial()), 'impure_dust');
        }

        const pureDustItem = ChemicalHelper.get(TagPrefix.dustPure, material, 1);

        if (!pureDustItem.isEmpty()) {
            TFCMeltingRecipe(event, pureDustItem, material, calcAmountOfMetal(100, tfcProperty.getPercentOfMaterial()), 'pure_dust');
        }
    })

    // #region Misc Materials
    event.recipes.tfc.bloomery('tfc:raw_iron_bloom',
        Item.of('minecraft:charcoal', 2),
        Fluid.of(GTMaterials.Iron.getFluid(), 144),
        14400
    ).id('tfinfinity:bloomery/raw_iron_bloom');

    TFCMeltingRecipe(event, Item.of('tfc:raw_iron_bloom'), GTMaterials.Iron, 144, 'raw_iron_bloom');
    TFCMeltingRecipe(event, Item.of('tfc:refined_iron_bloom'), GTMaterials.Iron, 144, 'refined_iron_bloom');

    event.recipes.tfc.anvil(Item.of('tfc:refined_iron_bloom'), Item.of('tfc:raw_iron_bloom'), ['hit_last', 'hit_second_last', 'hit_third_last'])
        .tier(2)
        .applyBonus(false)
        .id('tfinfinity:anvil/refined_iron_bloom');

    event.recipes.tfc.anvil(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.WroughtIron, 1), Item.of('tfc:refined_iron_bloom'), ['hit_last', 'hit_second_last', 'hit_third_last'])
        .tier(2)
        .applyBonus(false)
        .id('tfinfinity:anvil/wrought_iron_ingot');

    event.recipes.tfc.blast_furnace(
        Fluid.of(InfinityMaterials.PigIron.getFluid(), 1),
        Item.of('tfc:powder/flux'),
        Fluid.of(GTMaterials.Iron.getFluid(), 1)
    ).id('tfinfinity:blast_furnace/pig_iron')

    let hcSteelsToFluids = {
        'high_carbon_steel': InfinityMaterials.PigIron,
        'high_carbon_black_steel': InfinityMaterials.WeakSteel,
        'high_carbon_blue_steel': InfinityMaterials.WeakBlueSteel,
        'high_carbon_red_steel': InfinityMaterials.WeakRedSteel
    }

    Object.entries(hcSteelsToFluids).forEach(([ingot, material]) => {
        const hcIngotItem = tryGetItem(`tfc:metal/ingot/${ingot}`);

        if (!hcIngotItem.isEmpty()) {
            TFCMeltingRecipe(event, hcIngotItem, material, 144, 'from_high_carbon_ingot')

            event.recipes.tfc.quern(ChemicalHelper.get(TagPrefix.dust, material, 1), hcIngotItem)
                .id(`tfinfinity:quern/${material.getName()}_ingot_to_dust`);
        }
    })

    event.recipes.tfc.anvil(Item.of('tfc:metal/ingot/high_carbon_steel'),
        ChemicalHelper.get(TagPrefix.ingot, InfinityMaterials.PigIron, 1),
        ['hit_third_last', 'hit_second_last', 'hit_last'])
        .tier(-1)
        .applyBonus(false)
        .id('tfinfinity:anvil/high_carbon_steel_ingot')

    let hcSteelsToIngots = {
        'high_carbon_steel': GTMaterials.Steel,
        'high_carbon_black_steel': GTMaterials.BlackSteel,
        'high_carbon_blue_steel': GTMaterials.BlueSteel,
        'high_carbon_red_steel': GTMaterials.RedSteel,
    }

    Object.entries(hcSteelsToIngots).forEach(([inputMaterial, outputMaterial]) => {
        const outputIngot = ChemicalHelper.get(TagPrefix.ingot, outputMaterial, 1);
        const inputIngot = tryGetItem(`tfc:metal/ingot/${inputMaterial}`);

        if (!inputIngot.isEmpty()) {
            event.recipes.tfc.anvil(outputIngot, inputIngot, ['hit_third_last', 'hit_second_last', 'hit_last'])
                .tier(-1)
                .applyBonus(false)
                .id(`tfinfinity:anvil/${outputMaterial.getName()}/ingot`)
        }
    })
    
    let hcWeldingIngots = [
        'black_steel', 'blue_steel', 'red_steel'
    ]

    hcWeldingIngots.forEach(material => {
        const hcIngotItem = tryGetItem(`tfc:metal/ingot/high_carbon_${material}`);

        let input1;
        let input2;

        switch (material) {
            case 'black_steel': {
                input1 = ChemicalHelper.get(TagPrefix.ingot, InfinityMaterials.WeakSteel, 1);
                input2 = ChemicalHelper.get(TagPrefix.ingot, InfinityMaterials.PigIron, 1);
                break;
            }
            case 'blue_steel': {
                input1 = ChemicalHelper.get(TagPrefix.ingot, InfinityMaterials.WeakBlueSteel, 1);
                input2 = ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BlackSteel, 1);
                break;
            }
            case 'red_steel': {
                input1 = ChemicalHelper.get(TagPrefix.ingot, InfinityMaterials.WeakRedSteel, 1);
                input2 = ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BlackSteel, 1);
                break;
            }
        }

        if (!hcIngotItem.isEmpty()) {
            event.recipes.tfc.welding(TFC.isp.of(hcIngotItem).copyHeat(), input1, input2)
                .tier(-1)
                .bonusBehavior('ignore')
                .id(`tfinfinity:welding/high_carbon_${material}_ingot`)
        }
    })
}