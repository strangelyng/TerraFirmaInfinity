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

    event.add('tfinfinity:conifer_logs', ['#tfc:pine_logs', '#tfc:douglas_fir_logs', '#tfc:spruce_logs', '#tfc:white_cedar_logs'])

    event.add('tfinfinity:latex_logs', ['#afc:hevea_logs', '#afc:rubber_fig_logs'])

    event.add('tfinfinity:recycle_fire_clay_5x',
        [
            'tfinfinity:ceramic/unfired_fire_small_gear_mold',
            'tfinfinity:ceramic/unfired_fire_rod_mold',
            'tfc:ceramic/unfired_crucible',
            'tfc:ceramic/unfired_mold_table'
        ]
    )

    event.add('tfinfinity:recycle_fire_clay_1x',
        [
            'tfc:ceramic/unfired_fire_brick',
            'tfc:ceramic/unfired_channel'
        ]
    )

    event.add('tfinfinity:recycle_clay_5x',
        [
            'tfc:ceramic/unfired_pan',
            'tfc:ceramic/unfired_spindle_head',
            'tfc:ceramic/unfired_pot',
            'tfc:ceramic/unfired_vessel',
            'tfc:ceramic/unfired_large_vessel',
            'tfc:ceramic/unfired_jug',
            'tfc:ceramic/unfired_pickaxe_head_mold',
            'tfc:ceramic/unfired_propick_head_mold',
            'tfc:ceramic/unfired_axe_head_mold',
            'tfc:ceramic/unfired_shovel_head_mold',
            'tfc:ceramic/unfired_hoe_head_mold',
            'tfc:ceramic/unfired_chisel_head_mold',
            'tfc:ceramic/unfired_hammer_head_mold',
            'tfc:ceramic/unfired_saw_blade_mold',
            'tfc:ceramic/unfired_javelin_head_mold',
            'tfc:ceramic/unfired_sword_blade_mold',
            'tfc:ceramic/unfired_mace_head_mold',
            'tfc:ceramic/unfired_knife_blade_mold',
            'tfc:ceramic/unfired_scythe_blade_mold',
            'tfc:ceramic/unfired_bell_mold',
            'tfc:ceramic/unfired_blowpipe',
            'firmalife:clay_oven_bottom',
            'firmalife:clay_oven_top',
            'firmalife:clay_oven_chimney',
        ]
    )

    event.add('tfinfinity:recycle_clay_2x',
        [
            'tfinfinity:ceramic/unfired_nugget_mold',
            'tfc:ceramic/unfired_flower_pot',
            'tfc:ceramic/unfired_ingot_mold'
        ]
    )

    event.add('tfinfinity:recycle_clay_1x',
        [
            'tfc:ceramic/unfired_brick',
            'tfc:ceramic/unfired_bowl'
        ]
    )

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
