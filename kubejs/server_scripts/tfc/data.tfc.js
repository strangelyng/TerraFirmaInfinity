// priority: 0
"use strict";

const registerTFCData = (event) => {
    event.fuel({
        ingredient: '#c:gems/coke',
        duration: 2100,
        temperature: 1540
    })

    event.itemSize({
        ingredient: 'tfc:kaolin_clay',
        weight: 'very_light',
        size: 'very_small'
    }, 'tfinfinity:kaolin_clay')


    /* GT Tag Prefixes */

    // Components
    event.itemSize({
        ingredient: Ingredient.of('#c:plates').or('#c:double_plates'),
        weight: 'medium',
        size: 'large'
    }, 'tfinfinity:plates')

    event.itemSize({
        ingredient: '#c:rods/long',
        weight: 'medium',
        size: 'normal'
    }, 'tfinfinity:rods/long')

    event.itemSize({
        ingredient: '#c:springs',
        weight: 'medium',
        size: 'normal'
    }, 'tfinfinity:springs')

    event.itemSize({
        ingredient: '#c:rotors',
        weight: 'medium',
        size: 'normal'
    }, 'tfinfinity:rotors')

    event.itemSize({
        ingredient: '#c:small_gears',
        weight: 'medium',
        size: 'normal'
    }, 'tfinfinity:small_gears')

    event.itemSize({
        ingredient: '#c:gears',
        weight: 'heavy',
        size: 'large'
    }, 'tfinfinity:gears')

    event.itemSize({
        ingredient: '#c:turbine_blades',
        weight: 'heavy',
        size: 'large'
    }, 'tfinfinity:turbine_blades')

    event.itemSize({
        ingredient: 'gtceu:turbine_rotor',
        weight: 'very_heavy',
        size: 'very_large'
    }, 'tfinfinity:turbine_rotor')

    // Tools
    event.itemSize({
        ingredient: Ingredient.of('#c:raw_materials').or('#c:rich_raw_materials').or('#c:poor_raw_materials').or('#c:crushed_ores').or('#c:refined_ores').or('#c:purified_ores'),
        weight: 'light',
        size: 'small'
    }, 'tfinfinity:raw_materials')

    event.itemSize({
        ingredient: Ingredient.of('#minecraft:swords').or('#minecraft:axes').or('#c:tools/wrench').or('#c:tools/mining_hammer').or('#c:tools/spade'),
        weight: 'very_heavy',
        size: 'very_large'
    }, 'tfinfinity:tools')

    // Pipes
    event.itemSize({
        ingredient: '#c:tiny_fluid_pipes',
        weight: 'very_light',
        size: 'very_small'
    }, 'tfinfinity:tiny_fluid_pipes')
    
    event.itemSize({
        ingredient: Ingredient.of('#c:small_fluid_pipes').or('#c:small_item_pipes').or('#c:small_restrictive_pipes'),
        weight: 'very_light',
        size: 'small'
    }, 'tfinfinity:small_pipes')
    
    event.itemSize({
        ingredient: Ingredient.of('#c:normal_fluid_pipes').or('#c:normal_item_pipes').or('#c:normal_restrictive_pipes'),
        weight: 'light',
        size: 'normal'
    }, 'tfinfinity:normal_pipes')
    
    event.itemSize({
        ingredient: Ingredient.of('#c:large_fluid_pipes').or('#c:large_item_pipes').or('#c:large_restrictive_pipes'),
        weight: 'light',
        size: 'large'
    }, 'tfinfinity:large_pipes')
    
    event.itemSize({
        ingredient: Ingredient.of('#c:huge_fluid_pipes').or('#c:huge_item_pipes').or('#c:huge_restrictive_pipes'),
        weight: 'medium',
        size: 'large'
    }, 'tfinfinity:huge_pipes')
    
    event.itemSize({
        ingredient: Ingredient.of('#c:quadruple_fluid_pipes').or('#c:nonuple_fluid_pipes'),
        weight: 'medium',
        size: 'large'
    }, 'tfinfinity:multi_fluid_pipes')

    // Wires and Cables
    event.itemSize({
        ingredient: Ingredient.of('#c:single_wires').or('#c:single_cables'),
        weight: 'very_light',
        size: 'very_small'
    }, 'tfinfinity:cables_1x')
    
    event.itemSize({
        ingredient: Ingredient.of('#c:double_wires').or('#c:double_cables'),
        weight: 'very_light',
        size: 'very_small'
    }, 'tfinfinity:cables_2x')
    
    event.itemSize({
        ingredient: Ingredient.of('#c:quadruple_wires').or('#c:quadruple_cables'),
        weight: 'light',
        size: 'small'
    }, 'tfinfinity:cables_4x')
    
    event.itemSize({
        ingredient: Ingredient.of('#c:octal_wires').or('#c:octal_cables'),
        weight: 'light',
        size: 'normal'
    }, 'tfinfinity:cables_8x')
    
    event.itemSize({
        ingredient: Ingredient.of('#c:hex_wires').or('#c:hex_cables'),
        weight: 'medium',
        size: 'normal'
    }, 'tfinfinity:cables_16x')
}