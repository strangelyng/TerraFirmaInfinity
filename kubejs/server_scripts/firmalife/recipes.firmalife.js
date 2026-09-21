// priority: 0
"use_strict";

const registerFirmalifeRecipes = (event) => {
    event.remove({ id: 'firmalife:alloy/stainless_steel' });
    
    event.remove({ id: /firmalife:anvil\/metal\/.*/ });
    event.remove({ id: 'firmalife:anvil/stainless_steel_jar_lid' });
    
    event.remove({ id: /firmalife:casting\/.*/ });

    event.remove({ id: /firmalife:heating\/metal\/.*/ });
    event.remove({ id: /firmalife:heating\/ore\/.*/ });

    event.remove({ id: /firmalife:welding\/.*/ });

    let recipesToRemove = [
        'firmalife:anvil/pie_pan',
        'firmalife:anvil/sprinkler',

        'firmalife:crafting/metal/block/chromium',
        'firmalife:crafting/metal/block/stainless_steel'
    ]

    recipesToRemove.forEach(recipeId => {
        event.remove({ id: recipeId });
    })

    TFCAnvilRecipe(event, 'firmalife:sprinkler', '#c:plates/copper', ['hit_last', 'hit_second_last', 'punch_third_last'], false, GTMaterials.Copper, 'sprinkler');
    TFCAnvilRecipe(event, '4x firmalife:pie_pan', '#c:plates/cast_iron', ['hit_last', 'hit_second_last', 'draw_third_last'], false, GTMaterials.Iron, 'pie_pan');

    global.TFC_WOODS.forEach(woodType => {
        event.shapeless(`firmalife:wood/barrel_press/${woodType}`, [
            `firmalife:wood/stomping_barrel/${woodType}`,
            '#c:rods/wrought_iron',
            '#c:plates/wrought_iron',
            'tfc:brass_mechanisms'
        ]).id(`firmalife:crafting/wood/barrel_press/${woodType}`)
    })

    global.AFC_LUMBER.forEach(lumberType => {
        event.shapeless(`afc:wood/barrel_press/${lumberType}`, [
            `afc:wood/stomping_barrel/${lumberType}`,
            '#c:rods/wrought_iron',
            '#c:plates/wrought_iron',
            'tfc:brass_mechanisms'
        ]).id(`afc:crafting/wood/barrel_press/${lumberType}`)
    })

    event.shapeless('firmalife:barrel_stave', [
        '#gtceu:crafting_tools/hammer',
        '2x firmalife:treated_lumber',
        '#c:plates/wrought_iron'
    ]).damageIngredient('#gtceu:crafting_tools/hammer').id('firmalife:crafting/barrel_stave')

    event.replaceInput({ input: 'firmalife:beeswax' }, 'firmalife:beeswax', '#c:wax')

    event.shaped('firmalife:oven_insulation', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#c:wax',
        B: '#tfc:welding_flux',
        C: '#c:plates/wrought_iron'
    }).id('firmalife:crafting/oven_insulation')

    event.shaped('firmalife:ashtray', [
        'AAA',
        'BCB'
    ], {
        A: '#c:powders/salt',
        B: 'firmalife:sealed_bricks',
        C: '#c:plates/wrought_iron'
    }).id('firmalife:crafting/ashtray')

    event.shaped('firmalife:compost_tumbler', [
        'ABA',
        'CDC'
    ], {
        A: '#c:plates/wrought_iron',
        B: 'tfc:composter',
        C: 'create:shaft',
        D: 'tfc:glue'
    }).id('firmalife:crafting/compost_tumbler')

    event.shaped('2x firmalife:hydroponic_planter', [
        'AA',
        'BB',
        'C '
    ], {
        A: 'tfc:compost',
        B: 'firmalife:treated_lumber',
        C: '#c:plates/wrought_iron'
    }).id('firmalife:crafting/hydroponic_planter')

    // Copper Greenhouse
    event.shaped('8x firmalife:copper_greenhouse_wall', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: '#c:rods/copper',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/copper_greenhouse_wall')

    event.shaped('8x firmalife:copper_greenhouse_panel_wall', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: '#c:rods/copper',
        B: 'firmalife:reinforced_glass'
    }).id('firmalife:crafting/copper_greenhouse_panel_wall')

    event.shaped('4x firmalife:copper_greenhouse_panel_roof', [
        'B  ',
        'AB ',
        'AAB'
    ], {
        A: '#c:rods/copper',
        B: 'firmalife:reinforced_glass'
    }).id('firmalife:crafting/copper_greenhouse_panel_roof')

    event.shaped('4x firmalife:copper_greenhouse_roof', [
        'B  ',
        'AB ',
        'AAB'
    ], {
        A: '#c:rods/copper',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/copper_greenhouse_roof')

    event.shaped('8x firmalife:copper_greenhouse_roof_top', [
        'ABA',
        'BAB'
    ], {
        A: '#c:rods/copper',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/copper_greenhouse_roof_top')

    event.shaped('8x firmalife:copper_greenhouse_trapdoor', [
        'ABA',
        'BAB'
    ], {
        A: '#c:rods/copper',
        B: 'firmalife:reinforced_glass'
    }).id('firmalife:crafting/copper_greenhouse_trapdoor')

    event.shaped('2x firmalife:copper_greenhouse_door', [
        'AB',
        'AB',
        'AB'
    ], {
        A: '#c:rods/copper',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/copper_greenhouse_door')

    event.shapeless('firmalife:copper_greenhouse_port', [
        'firmalife:copper_greenhouse_wall',
        'gtceu:copper_small_fluid_pipe'
    ]).id('firmalife:crafting/copper_greenhouse_port')

    // Iron Greenhouse
    event.shaped('8x firmalife:iron_greenhouse_wall', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: '#c:rods/wrought_iron',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/iron_greenhouse_wall')

    event.shaped('8x firmalife:iron_greenhouse_panel_wall', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: '#c:rods/wrought_iron',
        B: 'firmalife:reinforced_glass'
    }).id('firmalife:crafting/iron_greenhouse_panel_wall')

    event.shaped('4x firmalife:iron_greenhouse_panel_roof', [
        'B  ',
        'AB ',
        'AAB'
    ], {
        A: '#c:rods/wrought_iron',
        B: 'firmalife:reinforced_glass'
    }).id('firmalife:crafting/iron_greenhouse_panel_roof')

    event.shaped('4x firmalife:iron_greenhouse_roof', [
        'B  ',
        'AB ',
        'AAB'
    ], {
        A: '#c:rods/wrought_iron',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/iron_greenhouse_roof')

    event.shaped('8x firmalife:iron_greenhouse_roof_top', [
        'ABA',
        'BAB'
    ], {
        A: '#c:rods/wrought_iron',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/iron_greenhouse_roof_top')

    event.shaped('8x firmalife:iron_greenhouse_trapdoor', [
        'ABA',
        'BAB'
    ], {
        A: '#c:rods/wrought_iron',
        B: 'firmalife:reinforced_glass'
    }).id('firmalife:crafting/iron_greenhouse_trapdoor')

    event.shaped('2x firmalife:iron_greenhouse_door', [
        'AB',
        'AB',
        'AB'
    ], {
        A: '#c:rods/wrought_iron',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/iron_greenhouse_door')

    event.shapeless('firmalife:iron_greenhouse_port', [
        'firmalife:iron_greenhouse_wall',
        'gtceu:copper_small_fluid_pipe'
    ]).id('firmalife:crafting/iron_greenhouse_port')

    // Stainless Greenhouse
    event.shaped('8x firmalife:stainless_steel_greenhouse_wall', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: '#c:rods/stainless_steel',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/stainless_steel_greenhouse_wall')

    event.shaped('8x firmalife:stainless_steel_greenhouse_panel_wall', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: '#c:rods/stainless_steel',
        B: 'firmalife:reinforced_glass'
    }).id('firmalife:crafting/stainless_steel_greenhouse_panel_wall')

    event.shaped('4x firmalife:stainless_steel_greenhouse_panel_roof', [
        'B  ',
        'AB ',
        'AAB'
    ], {
        A: '#c:rods/stainless_steel',
        B: 'firmalife:reinforced_glass'
    }).id('firmalife:crafting/stainless_steel_greenhouse_panel_roof')

    event.shaped('4x firmalife:stainless_steel_greenhouse_roof', [
        'B  ',
        'AB ',
        'AAB'
    ], {
        A: '#c:rods/stainless_steel',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/stainless_steel_greenhouse_roof')

    event.shaped('8x firmalife:stainless_steel_greenhouse_roof_top', [
        'ABA',
        'BAB'
    ], {
        A: '#c:rods/stainless_steel',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/stainless_steel_greenhouse_roof_top')

    event.shaped('8x firmalife:stainless_steel_greenhouse_trapdoor', [
        'ABA',
        'BAB'
    ], {
        A: '#c:rods/stainless_steel',
        B: 'firmalife:reinforced_glass'
    }).id('firmalife:crafting/stainless_steel_greenhouse_trapdoor')

    event.shaped('2x firmalife:stainless_steel_greenhouse_door', [
        'AB',
        'AB',
        'AB'
    ], {
        A: '#c:rods/stainless_steel',
        B: '#c:glass_blocks/colorless'
    }).id('firmalife:crafting/stainless_steel_greenhouse_door')

    event.shapeless('firmalife:stainless_steel_greenhouse_port', [
        'firmalife:stainless_steel_greenhouse_wall',
        'gtceu:copper_small_fluid_pipe'
    ]).id('firmalife:crafting/stainless_steel_greenhouse_port')
}