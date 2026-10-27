// priority: 0
"use strict";

const registerTFIMaterialFluidTags = (event) => {
    forEachMaterial(material => {
        const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

        if (tfcProperty === null) return;

        let fluid = tfcProperty.getOutputFluid() !== null ? tfcProperty.getOutputFluid() : material.getFluid();

        event.add('tfc:usable_in_ingot_mold', fluid);

        if (material.hasFlag(InfinityMaterialFlags.TFC_CASTABLE) && material.hasProperty(PropertyKey.TOOL)) {
            event.add('tfc:usable_in_tool_head_mold', fluid)
        }
    })
}

const registerTFIMaterialItemTags = (event) => {
    event.add('c:ingots/any_iron', ['#c:ingots/wrought_iron', '#c:ingots/cast_iron'])

    event.add('c:rods/cast_iron', 'gtceu:iron_rod')
    event.add('c:plates/cast_iron', 'gtceu:iron_plate')
    event.add('c:double_plates/cast_iron', 'gtceu:double_iron_plate')

    event.add('c:wax', 'firmalife:beeswax')

    event.add('c:plates/any_bronze', ['#c:plates/bronze', '#c:plates/bismuth_bronze', '#c:plates/black_bronze'])
    event.add('c:double_plates/any_bronze', ['#c:double_plates/bronze', '#c:double_plates/bismuth_bronze', '#c:double_plates/black_bronze'])

    event.add('c:chipped_gems/any_quartz', ['#c:chipped_gems/quartzite', '#:chipped_gems/nether_quartz'])
    event.add('c:flawed_gems/any_quartz', ['#c:flawed_gems/quartzite', '#:flawed_gems/nether_quartz'])
    event.add('c:gems/any_quartz', ['#c:gems/quartzite', '#:gems/nether_quartz'])
    event.add('c:flawless_gems/any_quartz', ['#c:flawless_gems/quartzite', '#:flawless_gems/nether_quartz'])
    event.add('c:exquisite_gems/any_quartz', ['#c:exquisite_gems/quartzite', '#:exquisite_gems/nether_quartz'])
    
    event.add('c:dusts/any_quartz', ['#c:dusts/quartzite', '#:dusts/nether_quartz'])

    forEachMaterial(material => {
        if (!material.hasProperty(InfinityPropertyKey.TFC_PROPERTY)) {
            return;
        }

        const bars = InfinityHelpers.get(InfinityTagPrefix.bars, material, 1);

        if (!bars.isEmpty()) {
            event.add('tfinfinity:metal_bars', bars.getId())
        }
    })
}
