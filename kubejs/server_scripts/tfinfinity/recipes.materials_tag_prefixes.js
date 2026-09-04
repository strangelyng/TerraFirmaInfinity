// priority: 0
"use strict";

// #region GT TagPrefixes + extras

function processDust(event, material) {
    const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1);
    if (dustItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        const tinyDustItem = ChemicalHelper.get(TagPrefix.dustTiny, material, 1);
        TFCMeltingRecipe(event, tinyDustItem, material, calcAmountOfMetal(144/9, tfcProperty.getPercentOfMaterial()), 'tiny_dust'); // These numbers work out a bit funky if the percentOfMaterial is less than 100%
        const smallDustItem = ChemicalHelper.get(TagPrefix.dustSmall, material, 1);
        TFCMeltingRecipe(event, smallDustItem, material, calcAmountOfMetal(144/4, tfcProperty.getPercentOfMaterial()), 'small_dust');
        TFCMeltingRecipe(event, dustItem, material, calcAmountOfMetal(144, tfcProperty.getPercentOfMaterial()), 'dust');
    }

    if (material.hasProperty(PropertyKey.INGOT)) {
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
        let quernDust;

        if (tfcProperty !== null) {
            quernDust = tfcProperty.getOutputMaterial() != null && tfcProperty.getOutputMaterial() != material ? ChemicalHelper.get(TagPrefix.dust, tfcProperty.getOutputMaterial(), 1) : dustItem;
        } else {
            quernDust = dustItem;
        }

        if (!ingotItem.isEmpty()) {
            event.recipes.tfc.quern(quernDust, ingotItem)
                .id(`tfinfinity:quern/${material.getName()}_ingot_to_dust`);
                    
            event.recipes.gtceu.shaped(quernDust, [
                " X ",
                " m "
            ], {
                X: ingotItem.getItem()
            }).id(`gtceu:shaped/mortar_grind_${material.getName()}`)
        }
    }
}

function processPowder(event, material) {
    const powderItem = ChemicalHelper.get(InfinityTagPrefix.powder, material, 1);
    if (powderItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, powderItem, material, calcAmountOfMetal(144/4, tfcProperty.getPercentOfMaterial()), 'powder');
        
        const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1);
        if (!dustItem.isEmpty()) {
            event.recipes.tfc.quern(powderItem.withCount(4), dustItem)
                .id(`tfinfinity:quern/${material.getName()}_powder_from_dust`)
        }
    }
}

function processIngot(event, material) {
    const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
    if (ingotItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, ingotItem, material, 144, 'ingot');
        TFCCastingRecipe(event, ingotItem, 'tfc:ceramic/ingot_mold', false, null, material, 'ingot', 144);
        TFCCastingRecipe(event, ingotItem, 'tfc:ceramic/fire_ingot_mold', true, null, material, 'ingot', 144);

        EmbersStampingRecipe(event, ingotItem, 'embers:ingot_stamp', material, 'ingot', 144);
    }
}

function processIngotDouble(event, material) {
    const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);
    if (doubleIngotItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, doubleIngotItem, material, 144*2, 'double_ingot');

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCWeldingRecipe(event, doubleIngotItem, ingotItem, ingotItem, material, 'ignore', tfcProperty.getWeldingTier(), 1, 1, 'double_ingot'); // Adjust nonTFCTier and Circuit Numbers?
        }
    }
}

function processPlate(event, material) {
    const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);
    if (plateItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, plateItem, material, 144, 'plate');
        
        const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);
        
        if (!doubleIngotItem.isEmpty()) {
            TFCAnvilRecipe(event, plateItem, doubleIngotItem, ['hit_last', 'hit_second_last', 'hit_third_last'], false, material, 'plate');
        }

        EmbersStampingRecipe(event, plateItem, 'embers:plate_stamp', material, 'plate', 144*1.5)
    }
}

function processPlateDouble(event, material) {
    const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);
    if (doublePlateItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, doublePlateItem, material, 144*2, 'double_plate');

        const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);

        if (!plateItem.isEmpty()) {
            TFCWeldingRecipe(event, doublePlateItem, plateItem, plateItem, material, 'ignore', tfcProperty.getWeldingTier(), 1, 2, 'double_plate'); // Adjust nonTFCTier and Circuit Numbers?
        }
    }
}

function processBlock(event, material) {
    const blockItem = ChemicalHelper.get(TagPrefix.block, material, 1);
    if (blockItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, blockItem, material, getMaterialAmount(TagPrefix.block, material) * 144, 'block')
    }
}

function processRod(event, material) {
    const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);
    if (rodItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, rodItem, material, 144/2, 'rod');

        // TODO: Rod Casting?

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, rodItem.withCount(2), ingotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], false, material, 'rod')
        }
    }
}

function processRodLong(event, material) {
    const longRodItem = ChemicalHelper.get(TagPrefix.rodLong, material, 1);
    if (longRodItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, longRodItem, material, 144, 'long_rod');

        const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);

        if (!rodItem.isEmpty()) {
            TFCWeldingRecipe(event, longRodItem, rodItem, rodItem, material, 'ignore', tfcProperty.getWeldingTier(), 1, 2, 'long_rod'); // Adjust nonTFCTier and Circuit Numbers?
        }
    }
}

function processBolt(event, material) {
    const boltItem = ChemicalHelper.get(TagPrefix.bolt, material, 1);
    if (boltItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, boltItem, material, getMaterialAmount(TagPrefix.bolt, material) * 144, 'bolt');

        const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);

        if (!rodItem.isEmpty()) {
            TFCAnvilRecipe(event, boltItem.withCount(4), rodItem, ['punch_last', 'draw_second_last', 'draw_third_last'], false, material, 'bolt');
        }
    }
}

function processScrew(event, material) {
    const screwItem = ChemicalHelper.get(TagPrefix.screw, material, 1);
    if (screwItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, screwItem, material, getMaterialAmount(TagPrefix.screw, material) * 144, 'screw');

        const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);

        if (!rodItem.isEmpty()) {
            TFCAnvilRecipe(event, screwItem.withCount(4), rodItem, ['punch_last', 'punch_second_last', 'shrink_third_last'], false, material, 'screw');
        }
    }
}

function processRing(event, material) {
    const ringItem = ChemicalHelper.get(TagPrefix.ring, material, 1);
    if (ringItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, ringItem, material, getMaterialAmount(TagPrefix.ring, material) * 144, 'ring');

        const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);

        if (!rodItem.isEmpty()) {
            TFCAnvilRecipe(event, ringItem.withCount(2), rodItem, ['bend_last', 'hit_second_last', 'bend_third_last'], false, material, 'ring');
        }
    }
}

function processSpring(event, material) {
    const springItem = ChemicalHelper.get(TagPrefix.spring, material, 1);
    if (springItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, springItem, material, getMaterialAmount(TagPrefix.spring, material) * 144, 'spring');

        const longRodItem = ChemicalHelper.get(TagPrefix.rodLong, material, 1);

        if (!longRodItem.isEmpty()) {
            TFCAnvilRecipe(event, springItem, longRodItem, ['hit_last', 'bend_second_last', 'bend_third_last'], false, material, 'spring');
        }
    }
}

function processSpringSmall(event, material) {
    const smallSpringItem = ChemicalHelper.get(TagPrefix.springSmall, material, 1);
    if (smallSpringItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, smallSpringItem, material, getMaterialAmount(TagPrefix.springSmall, material) * 144, 'small_spring');

        const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);

        if (!rodItem.isEmpty()) {
            TFCAnvilRecipe(event, smallSpringItem.withCount(2), rodItem, ['hit_last', 'bend_second_last', 'bend_third_last'], false, material, 'small_spring');
        }
    }
}

function processNugget(event, material) {
    const nuggetItem = ChemicalHelper.get(TagPrefix.nugget, material, 1);
    if (nuggetItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, nuggetItem, material, 144/9, 'nugget');

        // TODO: Nugget Casting?

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, nuggetItem.withCount(9), ingotItem, ['punch_last', 'hit_second_last', 'punch_third_last'], false, material, 'nugget')
        }

        EmbersStampingRecipe(event, nuggetItem, 'embers:nugget_stamp', material, 'nugget', 144/9)
    }
}

function processGearSmall(event, material) {
    const smallGearItem = ChemicalHelper.get(TagPrefix.gearSmall, material, 1);
    if (smallGearItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, smallGearItem, material, getMaterialAmount(TagPrefix.gearSmall, material) * 144, 'small_gear');

        // TODO: Small Gear Casting?

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, smallGearItem, ingotItem, ['hit_last', 'shrink_second_last', 'draw_third_last'], false, material, 'small_gear');
        }

        EmbersStampingRecipe(event, smallGearItem, 'embers:gear_stamp', material, 'small_gear', 144)
    }
}

function processGear(event, material) {
    const gearItem = ChemicalHelper.get(TagPrefix.gear, material, 1);
    if (gearItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, gearItem, material, 144*4, 'gear');

        const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);

        if (!doublePlateItem.isEmpty()) {
            TFCWeldingRecipe(event, gearItem, doublePlateItem, doublePlateItem, material, 'ignore', 4, 1, 2, 'gear'); // Adjust nonTFCTier and Circuit Numbers?
        }
    }
}

// #region Tool Heads
function processBuzzsawBlade(event, material) {
    const buzzsawBladeItem = ChemicalHelper.get(TagPrefix.toolHeadBuzzSaw, material, 1);
    if (buzzsawBladeItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, buzzsawBladeItem, material, getMaterialAmount(TagPrefix.toolHeadBuzzSaw, material) * 144, 'buzzsaw_blade');

        const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);

        if (!doublePlateItem.isEmpty()) {
            TFCAnvilRecipe(event, buzzsawBladeItem, doublePlateItem, ['bend_last', 'hit_second_last', 'draw_third_last'], false, material, 'buzzsaw_blade');
        }
    }
}

function processScrewdriverHead(event, material) {
    const screwdriverHeadItem = ChemicalHelper.get(TagPrefix.toolHeadScrewdriver, material, 1);
    if (screwdriverHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, screwdriverHeadItem, material, 144, 'screwdriver_head');

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, screwdriverHeadItem, ingotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'screwdriver_tip');
        }
    }
}

function processWrenchHead(event, material) {
    const wrenchHeadItem = ChemicalHelper.get(TagPrefix.toolHeadWrench, material, 1);
    if (wrenchHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, wrenchHeadItem, material, 144*2, 'wrench_tip');

        const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);

        if (!doubleIngotItem.isEmpty()) {
            TFCAnvilRecipe(event, wrenchHeadItem, doubleIngotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'wrench_tip');
        }
    }
}

function processWireCutterHead(event, material) {
    const wireCutterHeadItem = ChemicalHelper.get(TagPrefix.toolHeadWireCutter, material, 1);
    if (wireCutterHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, wireCutterHeadItem, material, 144*2, 'wire_cutter_head');

        const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);

        if (!doubleIngotItem.isEmpty()) {
            TFCAnvilRecipe(event, wireCutterHeadItem, doubleIngotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'wire_cutter_head');
        }
    }
}

function processPickaxeHead(event, material) {
    const pickaxeHeadItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadPickaxe, material, 1);
    if (pickaxeHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, pickaxeHeadItem, material, 144, 'pickaxe_head');
        TFCCastingRecipe(event, pickaxeHeadItem, 'tfc:ceramic/pickaxe_head_mold', false, null, material, InfinityTagPrefix.toolHeadPickaxe, 144);
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, pickaxeHeadItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'pickaxe_head');
        }
    }
}

function processAxeHead(event, material) {
    const axeHeadItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadAxe, material, 1);
    if (axeHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, axeHeadItem, material, 144, 'axe_head');
        TFCCastingRecipe(event, axeHeadItem, 'tfc:ceramic/axe_head_mold', false, null, material, InfinityTagPrefix.toolHeadAxe, 144);
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, axeHeadItem, ingotItem, ['punch_last', 'hit_second_last', 'upset_third_last'], true, material, 'axe_head');
        }
    }
}

function processShovelHead(event, material) {
    const shovelHeadItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadShovel, material, 1);
    if (shovelHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, shovelHeadItem, material, 144, 'shovel_head');
        TFCCastingRecipe(event, shovelHeadItem, 'tfc:ceramic/shovel_head_mold', false, null, material, InfinityTagPrefix.toolHeadShovel, 144);
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, shovelHeadItem, ingotItem, ['punch_last', 'hit_not_last'], true, material, 'shovel_head');
        }
    }
}

function processHoeHead(event, material) {
    const hoeHeadItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadHoe, material, 1);
    if (hoeHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, hoeHeadItem, material, 144, 'hoe_head');
        TFCCastingRecipe(event, hoeHeadItem, 'tfc:ceramic/hoe_head_mold', false, null, material, InfinityTagPrefix.toolHeadHoe, 144);
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, hoeHeadItem, ingotItem, ['punch_last', 'hit_not_last', 'bend_not_last'], true, material, 'hoe_head');
        }
    }
}

function processChiselHead(event, material) {
    const chiselHeadItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadChisel, material, 1);
    if (chiselHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, chiselHeadItem, material, 144, 'chisel_head');
        TFCCastingRecipe(event, chiselHeadItem, 'tfc:ceramic/chisel_head_mold', false, null, material, InfinityTagPrefix.toolHeadChisel, 144);
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, chiselHeadItem, ingotItem, ['hit_last', 'draw_not_last', 'hit_not_last'], true, material, 'chisel_head');
        }
    }
}

function processHammerHead(event, material) {
    const hammerHeadItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadHammer, material, 1);
    if (hammerHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, hammerHeadItem, material, 144, 'hammer_head');
        TFCCastingRecipe(event, hammerHeadItem, 'tfc:ceramic/hammer_head_mold', false, null, material, InfinityTagPrefix.toolHeadHammer, 144);
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, hammerHeadItem, ingotItem, ['punch_last', 'shrink_not_last'], true, material, 'hammer_head');
        }
    }
}

function processSawBlade(event, material) {
    const sawBladeItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadSaw, material, 1);
    if (sawBladeItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, sawBladeItem, material, 144, 'saw_blade');
        TFCCastingRecipe(event, sawBladeItem, 'tfc:ceramic/saw_blade_mold', false, null, material, InfinityTagPrefix.toolHeadSaw, 144);
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, sawBladeItem, ingotItem, ['hit_last', 'hit_second_last'], true, material, 'saw_blade');
        }
    }
}

function processKnifeBlade(event, material) {
    const knifeBladeItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadKnife, material, 1);
    if (knifeBladeItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, knifeBladeItem, material, 144, 'knife_blade');
        TFCCastingRecipe(event, knifeBladeItem, 'tfc:ceramic/knife_blade_mold', false, null, material, InfinityTagPrefix.toolHeadKnife, 144);
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, knifeBladeItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'knife_blade');
        }
    }
}

function processScytheBlade(event, material) {
    const scytheBladeItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadScythe, material, 1);
    if (scytheBladeItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, scytheBladeItem, material, 144*2, 'scythe_blade');
        TFCCastingRecipe(event, scytheBladeItem, 'tfc:ceramic/scythe_blade_mold', false, null, material, InfinityTagPrefix.toolHeadScythe, 288);
        
        const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);

        if (!doubleIngotItem.isEmpty()) {
            TFCAnvilRecipe(event, scytheBladeItem, doubleIngotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'scythe_blade');
        }
    }
}

function processSwordBlade(event, material) {
    const swordBladeItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadSword, material, 1);
    if (swordBladeItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, swordBladeItem, material, 144*2, 'sword_blade');
        TFCCastingRecipe(event, swordBladeItem, 'tfc:ceramic/sword_blade_mold', false, null, material, InfinityTagPrefix.toolHeadSword, 288);
        
        const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);

        if (!doubleIngotItem.isEmpty()) {
            TFCAnvilRecipe(event, swordBladeItem, doubleIngotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'sword_blade');
        }
    }
}

function processMaceHead(event, material) {
    const maceHeadItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadMace, material, 1);
    if (maceHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, maceHeadItem, material, 144*2, 'mace_head');
        TFCCastingRecipe(event, maceHeadItem, 'tfc:ceramic/mace_head_mold', false, null, material, InfinityTagPrefix.toolHeadMace, 288);
        
        const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);

        if (!doubleIngotItem.isEmpty()) {
            TFCAnvilRecipe(event, maceHeadItem, doubleIngotItem, ['hit_last', 'bend_not_last', 'shrink_not_last'], true, material, 'mace_head');
        }
    }
}

function processFileHead(event, material) {
    const fileHeadItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadFile, material, 1);
    if (fileHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, fileHeadItem, material, 144, 'file_head');

        // TODO File Head Casting
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, fileHeadItem, ingotItem, ['upset_last', 'bend_not_last', 'punch_not_last'], true, material, 'file_head');
        }
    }
}

function processMiningHammerHead(event, material) {
    const miningHammerHeadItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadMiningHammer, material, 1);
    if (miningHammerHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, miningHammerHeadItem, material, 144*2, 'mining_hammer_head');
        
        const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);

        if (!doubleIngotItem.isEmpty()) {
            TFCAnvilRecipe(event, miningHammerHeadItem, doubleIngotItem, ['punch_last', 'shrink_not_last'], true, material, 'mining_hammer_head');
        }
    }
}

function processSpadeHead(event, material) {
    const spadeHeadItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadSpade, material, 1);
    if (spadeHeadItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, spadeHeadItem, material, 144*2, 'spade_head');
        
        const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);

        if (!doubleIngotItem.isEmpty()) {
            TFCAnvilRecipe(event, spadeHeadItem, doubleIngotItem, ['punch_last', 'hit_not_last'], true, material, 'spade_head');
        }
    }
}

function processButcheryKnifeBlade(event, material) {
    const butcheryKnifeBladeItem = ChemicalHelper.get(InfinityTagPrefix.toolHeadButcheryKnife, material, 1);
    if (butcheryKnifeBladeItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, butcheryKnifeBladeItem, material, 144, 'butchery_knife_blade');
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, butcheryKnifeBladeItem, ingotItem, ['punch_last', 'bend_not_last', 'bend_not_last'], true, material, 'butchery_knife_blade');
        }
    }
}

// #region TFC-based TagPrefixes
function processAnvil(event, material) {
    const anvilItem = ChemicalHelper.get(InfinityTagPrefix.anvil, material, 1);
    if (anvilItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, anvilItem, material, getMaterialAmount(InfinityTagPrefix.anvil, material) * 144, 'anvil');
    }
}

function processBars(event, material) {
    const barsItem = ChemicalHelper.get(InfinityTagPrefix.bars, material, 1);
    if (barsItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, barsItem, material, getMaterialAmount(InfinityTagPrefix.bars, material) * 144, 'bars');
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, barsItem.withCount(4), ingotItem, ['upset_last', 'punch_second_last', 'punch_third_last'], false, material, 'bars');
        }

        const doubleIngotItem = ChemicalHelper.get(InfinityTagPrefix.ingotDouble, material, 1);

        if (!doubleIngotItem.isEmpty()) {
            TFCAnvilRecipe(event, barsItem.withCount(8), doubleIngotItem, ['upset_last', 'punch_second_last', 'punch_third_last'], false, material, 'bars_double');
        }
    }
}

function processBell(event, material) {
    const bellItem = ChemicalHelper.get(InfinityTagPrefix.bell, material, 1);
    if (bellItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, bellItem, material, 144, 'bell');
        TFCCastingRecipe(event, bellItem, 'tfc:ceramic/bell_mold', false, null, material, 'bell', 144);
    }
}

function processChain(event, material) {
    const chainItem = ChemicalHelper.get(InfinityTagPrefix.chain, material, 1);
    if (chainItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, chainItem, material, getMaterialAmount(InfinityTagPrefix.chain, material) * 144, 'chain');
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, chainItem.withCount(16), ingotItem, ['hit_any', 'draw_not_last'], false, material, 'chain');
        }
    }
}

function processLamp(event, material) {
    const lampItem = ChemicalHelper.get(InfinityTagPrefix.lamp, material, 1);
    const unfinishedLampItem = ChemicalHelper.get(InfinityTagPrefix.lampUnfinished, material, 1);
    if (lampItem.isEmpty() || unfinishedLampItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, lampItem, material, 144, 'lamp');
        TFCMeltingRecipe(event, unfinishedLampItem, material, 144, 'unfinished_lamp');
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

        if (!ingotItem.isEmpty()) {
            TFCAnvilRecipe(event, unfinishedLampItem, ingotItem, ['bend_last', 'bend_second_last', 'draw_third_last'], false, material, 'unfinished_lamp')
        }
    }
}

function processTrapdoor(event, material) {
    const trapdoorItem = ChemicalHelper.get(InfinityTagPrefix.trapdoor, material, 1);
    if (trapdoorItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, trapdoorItem, material, 144, 'trapdoor');
        
        const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);

        if (!plateItem.isEmpty()) {
            TFCAnvilRecipe(event, trapdoorItem, plateItem, ['bend_last', 'draw_second_last', 'draw_third_last'], false, material, 'trapdoor');
        }
    }
}

function processGrate(event, material) {
    const grateItem = ChemicalHelper.get(InfinityTagPrefix.grate, material, 1);
    if (grateItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
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
}

function processPlatedBlock(event, material) {
    const platedBlockItem = ChemicalHelper.get(InfinityTagPrefix.blockPlated, material, 1);
    const platedSlabItem = ChemicalHelper.get(InfinityTagPrefix.slabPlated, material, 1);
    const platedStairsItem = ChemicalHelper.get(InfinityTagPrefix.stairsPlated, material, 1);
    if (platedBlockItem.isEmpty()) return;

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    if (tfcProperty !== null) {
        TFCMeltingRecipe(event, platedBlockItem, material, getMaterialAmount(InfinityTagPrefix.blockPlated, material) * 144, 'plated_block');
        TFCMeltingRecipe(event, platedSlabItem, material, getMaterialAmount(InfinityTagPrefix.slabPlated, material) * 144, 'plated_slab');
        TFCMeltingRecipe(event, platedStairsItem, material, getMaterialAmount(InfinityTagPrefix.stairsPlated, material) * 144, 'plated_stairs');

        let recipeIdName = material != GTMaterials.Iron ? material.getName() : 'cast_iron';

        event.shaped(platedSlabItem.withCount(6), [
            'AAA'
            ], {
                A: platedBlockItem
            }
        ).id(`tfc:crafting/metal/block/${recipeIdName}_slab`)

        event.shaped(platedStairsItem.withCount(8), [
            'A  ',
            'AA ',
            'AAA'
            ], {
                A: platedBlockItem
            }
        ).id(`tfc:crafting/metal/block/${recipeIdName}_stairs`)
        
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
}