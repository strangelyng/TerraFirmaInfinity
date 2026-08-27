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
            processWrenchHead(event, material);
            processWireCutterHead(event, material);

            processPickaxeHead(event, material);
            processAxeHead(event, material);
            processShovelHead(event, material);
            processHoeHead(event, material);
            processChiselHead(event, material);
            processHammerHead(event, material);
            processSawBlade(event, material);
            processKnifeBlade(event, material);
            processScytheBlade(event, material);
            processSwordBlade(event, material);
            processMaceHead(event, material);
            processFileHead(event, material);
            processMiningHammerHead(event, material);
            processSpadeHead(event, material);
            processButcheryKnifeBlade(event, material);

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