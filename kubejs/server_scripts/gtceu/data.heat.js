// priority: 0
"use strict";

const registerGTMaterialHeats = (event) => {

    // TODO: Systematize, once done testing
    function makeItemHeatByTagPrefix(tagPrefix, material, tfcProperty) {
        let item = ChemicalHelper.get(tagPrefix, material, 1);
        let prefixHeatCapacity = Math.max(0.124, tfcProperty.getHeatCapacity(tagPrefix)); // Ensure that heatCapacity value doesn't get tooooo low

        if (!item.isEmpty()) event.heat({
            ingredient: item,
            heatCapacity: prefixHeatCapacity,
            forgingTemperature: tfcProperty.getForgingTemp(),
            weldingTemperature: tfcProperty.getWeldingTemp()
        }, `tfinfinity:${material.getName()}/${tagPrefix.name}`)
    }

    function makeFluidHeat(material, tfcProperty) {
        let fluid = tfcProperty.getOutputFluid() !== null ? tfcProperty.getOutputFluid() : material.getFluid();

        if (fluid !== null) {
            event.fluidHeat({
                fluid: fluid,
                meltTemperature: tfcProperty.getMeltTemp(),
                specificHeatCapacity: tfcProperty.getSpecificHeatCapacity()
            })
        }
    }

    forEachMaterial(material => {
        let tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

        if (tfcProperty !== null) {
            makeItemHeatByTagPrefix(TagPrefix.dustTiny, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.dustSmall, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.dust, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.rod, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.rodLong, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.bolt, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.screw, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.nugget, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.gearSmall, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.gear, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.plate, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.plateDouble, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.springSmall, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.spring, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.ring, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.block, material, tfcProperty)

            makeItemHeatByTagPrefix(TagPrefix.ingot, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.ingotDouble, material, tfcProperty)

            makeItemHeatByTagPrefix(TagPrefix.toolHeadBuzzSaw, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.toolHeadScrewdriver, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.toolHeadWireCutter, material, tfcProperty)
            makeItemHeatByTagPrefix(TagPrefix.toolHeadWrench, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadPickaxe, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadAxe, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadShovel, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadHoe, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadChisel, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadHammer, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadSaw, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadKnife, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadScythe, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadSword, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadMace, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadFile, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadMiningHammer, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadSpade, material, tfcProperty)
            makeItemHeatByTagPrefix(InfinityTagPrefix.toolHeadButcheryKnife, material, tfcProperty)

            makeItemHeatByTagPrefix(InfinityTagPrefix.anvil, material, tfcProperty);
            makeItemHeatByTagPrefix(InfinityTagPrefix.bars, material, tfcProperty);
            makeItemHeatByTagPrefix(InfinityTagPrefix.chain, material, tfcProperty);
            makeItemHeatByTagPrefix(InfinityTagPrefix.lamp, material, tfcProperty);
            makeItemHeatByTagPrefix(InfinityTagPrefix.lampUnfinished, material, tfcProperty);
            makeItemHeatByTagPrefix(InfinityTagPrefix.trapdoor, material, tfcProperty);
            makeItemHeatByTagPrefix(InfinityTagPrefix.grate, material, tfcProperty);
            makeItemHeatByTagPrefix(InfinityTagPrefix.blockPlated, material, tfcProperty);
            makeItemHeatByTagPrefix(InfinityTagPrefix.slabPlated, material, tfcProperty);
            makeItemHeatByTagPrefix(InfinityTagPrefix.stairsPlated, material, tfcProperty);

            makeItemHeatByTagPrefix(InfinityTagPrefix.oreSmall, material, tfcProperty);
            makeItemHeatByTagPrefix(InfinityTagPrefix.poorRawOre, material, tfcProperty);
            makeItemHeatByTagPrefix(TagPrefix.rawOre, material, tfcProperty);
            makeItemHeatByTagPrefix(InfinityTagPrefix.richRawOre, material, tfcProperty);
            makeItemHeatByTagPrefix(TagPrefix.crushed, material, tfcProperty);
            makeItemHeatByTagPrefix(TagPrefix.crushedPurified, material, tfcProperty);
            makeItemHeatByTagPrefix(TagPrefix.crushedRefined, material, tfcProperty);
            makeItemHeatByTagPrefix(TagPrefix.dustImpure, material, tfcProperty);
            makeItemHeatByTagPrefix(TagPrefix.dustPure, material, tfcProperty);

            // Fluid Heat
            makeFluidHeat(material, tfcProperty);
        }
    })
}