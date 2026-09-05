// priority: 1
"use strict";

const registerTFIMaterialRecipes = (event) => {
    event.remove({ id: /tfc:anvil\/metal\/.*/ })
    event.remove({ id: /tfc:casting\/.*/ })
    event.remove({ id: /tfc:heating\/hanging_sign\/.*/ })
    event.remove({ id: /tfc:heating\/metal\/.*/ })
    event.remove({ id: /tfc:heating\/ore\/.*/ })
    event.remove({ id: /tfc:welding\/metal\/.*/ })

    forEachMaterial(material => {
        if (material.hasProperty(PropertyKey.DUST)) {
            processDust(event, material);
            processPowder(event, material);
        }

        const toolProperty = material.getProperty(PropertyKey.TOOL);
        if (toolProperty !== null) {
            processScrewdriverHead(event, material);
            processGTTool(event, GTToolType.SCREWDRIVER, TagPrefix.toolHeadScrewdriver, material);
            processWrenchHead(event, material);
            processGTTool(event, GTToolType.WRENCH, TagPrefix.toolHeadWrench, material);
            processWireCutterHead(event, material);
            processGTTool(event, GTToolType.WIRE_CUTTER, TagPrefix.toolHeadWireCutter, material);

            processPickaxeHead(event, material);
            processGTTool(event, GTToolType.PICKAXE, InfinityTagPrefix.toolHeadPickaxe, material);
            processAxeHead(event, material);
            processGTTool(event, GTToolType.AXE, InfinityTagPrefix.toolHeadAxe, material);
            processShovelHead(event, material);
            processGTTool(event, GTToolType.SHOVEL, InfinityTagPrefix.toolHeadShovel, material);
            processHoeHead(event, material);
            processGTTool(event, GTToolType.HOE, InfinityTagPrefix.toolHeadHoe, material);
            processChiselHead(event, material);
            processGTTool(event, InfinityToolType.CHISEL, InfinityTagPrefix.toolHeadChisel, material);
            processHammerHead(event, material);
            processGTTool(event, GTToolType.HARD_HAMMER, InfinityTagPrefix.toolHeadHammer, material);
            processSawBlade(event, material);
            processGTTool(event, GTToolType.SAW, InfinityTagPrefix.toolHeadSaw, material);
            processKnifeBlade(event, material);
            processGTTool(event, GTToolType.KNIFE, InfinityTagPrefix.toolHeadKnife, material);
            processScytheBlade(event, material);
            processGTTool(event, GTToolType.SCYTHE, InfinityTagPrefix.toolHeadScythe, material);
            processSwordBlade(event, material);
            processGTTool(event, GTToolType.SWORD, InfinityTagPrefix.toolHeadSword, material);
            processMaceHead(event, material);
            processGTTool(event, InfinityToolType.MACE, InfinityTagPrefix.toolHeadMace, material);
            processFileHead(event, material);
            processGTTool(event, GTToolType.FILE, InfinityTagPrefix.toolHeadFile, material);
            processMiningHammerHead(event, material);
            processGTTool(event, GTToolType.MINING_HAMMER, InfinityTagPrefix.toolHeadMiningHammer, material);
            processSpadeHead(event, material);
            processGTTool(event, GTToolType.SPADE, InfinityTagPrefix.toolHeadSpade, material);
            processButcheryKnifeBlade(event, material);
            processGTTool(event, GTToolType.BUTCHERY_KNIFE, InfinityTagPrefix.toolHeadButcheryKnife, material);

            processTuyere(event, material);
            processPropickHead(event, material);
            processJavelinHead(event, material);
            processFishHook(event, material);

            processShears(event, material);
        }

        if (material.hasProperty(PropertyKey.INGOT)) {
            processIngot(event, material);
            processIngotDouble(event, material);
            processPlate(event, material);
            processPlateDouble(event, material);
            processBlock(event, material);
            processRod(event, material);
            processRodLong(event, material);
            processBolt(event, material);
            processScrew(event, material);
            processRing(event, material);
            processSpring(event, material);
            processSpringSmall(event, material);
            processNugget(event, material);
            processGearSmall(event, material);
            processGear(event, material);

            processBuzzsawBlade(event, material);

            processAspectus(event, material);
        }

        if (material.hasProperty(PropertyKey.GEM)) {
            processPlate(event, material);
            processBlock(event, material);
            processRod(event, material);
            processBolt(event, material);
            processScrew(event, material);
            processGearSmall(event, material);
            processGear(event, material);
            
            processBuzzsawBlade(event, material);
        }

        if (material.hasProperty(InfinityPropertyKey.TFC_PROPERTY)) {
            processAnvil(event, material);
            processBars(event, material);
            processBell(event, material);
            processChain(event, material);
            processLamp(event, material);
            processTrapdoor(event, material);
            processGrate(event, material);
            processPlatedBlock(event, material);

            processTFCHangingSigns(event, material);
        }

        if (material.hasFlag(InfinityMaterialFlags.HAS_TFC_ARMOR)) {
            processTFCArmor(event, material);
            processTFCShield(event, material);
            processTFCHorseArmor(event, material);
        }

        if (material.hasProperty(PropertyKey.ORE)) {
            processSmallOre(event, material);
            processPoorRawOre(event, material);
            processNormalRawOre(event, material);
            processRichRawOre(event, material);
            processCrushedOre(event, material);
            processPurifiedOre(event, material);
            processRefinedOre(event, material);
            processImpureDust(event, material);
            processPureDust(event, material);
        }
    })
}