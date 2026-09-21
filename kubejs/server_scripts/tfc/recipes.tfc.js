// priority: 0
"use_strict";

const registerTFCRecipes = (event) => {
    let recipesToRemove = [
        'tfc:anvil/copper_door',
        'tfc:anvil/iron_door',
        'tfc:anvil/wrought_iron_grill',

        'tfc:anvil/minecart_wrought_iron',
        'tfc:anvil/minecart_steel',
        'tfc:anvil/steel_pipe',
        'tfc:crafting/hopper'
    ]

    recipesToRemove.forEach(recipeId => {
        event.remove({ id: recipeId });
    })

    event.shaped('tfc:white_kaolin_clay', [
        'XX',
        'XX'
    ], {
        X: 'tfc:kaolin_clay'
    }).id('tfinfinity:shaped/white_kaolin_clay')

    event.shaped('3x tfc:ceramic/unfired_brick', [
        'XXX',
        'XfX'
    ], {
        X: 'minecraft:clay_ball',
        f: 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form').id('tfinfinity:shaped/unfired_brick')

    event.shaped('3x tfc:ceramic/unfired_fire_brick', [
        'XXX',
        'XfX'
    ], {
        X: 'tfc:fire_clay',
        f: 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form').id('tfinfinity:shaped/unfired_fire_brick')
    

    // Replace Sheets with Plates
    TFCAnvilRecipe(event, 'minecraft:copper_door', '#c:double_plates/copper', ['hit_last', 'punch_not_last', 'draw_not_last'], false, GTMaterials.Copper, 'door');
    TFCAnvilRecipe(event, 'minecraft:iron_door', '#c:double_plates/wrought_iron', ['hit_last', 'punch_not_last', 'draw_not_last'], false, GTMaterials.WroughtIron, 'door');
    TFCAnvilRecipe(event, 'tfc:wrought_iron_grill', '#c:double_plates/wrought_iron', ['punch_last', 'draw_any', 'punch_not_last'], false, GTMaterials.WroughtIron, 'grill');

    event.recipes.gtceu.shaped('tfc:bloomery', [
        'AAA',
        'AhA',
        'AAA'
    ], {
        A: '#c:double_plates/any_bronze'
    }).id('tfc:crafting/bloomery')
    
    event.recipes.gtceu.shaped('tfc:firebox', [
        'ABA',
        'BhB',
        'ABA'
    ], {
        A: '#c:double_plates/any_bronze',
        B: '#c:ingots/cast_iron'
    }).id('tfc:crafting/firebox')

    event.shaped('tfc:calendar_clock', [
        ' A ',
        'BCB',
        ' C '
    ], {
        A: 'minecraft:glass_pane',
        B: '#c:plates/brass',
        C: 'tfc:brass_mechanisms'
    }).id('tfc:crafting/calendar_clock')

    event.shaped('tfc:thermometer', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'minecraft:glass_pane',
        B: '#c:dusts/redstone',
        C: '#tfc:glass_bottles',
        D: '#c:plates/brass'
    }).id('tfc:crafting/thermometer')

    event.shaped('tfc:vane', [
        ' A ',
        'BCB',
        ' B '
    ], {
        A: '#c:plates/wrought_iron',
        B: '#c:rods/wrought_iron',
        C: 'tfc:brass_mechanisms'
    }).id('tfc:crafting/vane')

    event.shapeless('tfc:reinforced_fire_bricks', [
        'tfc:fire_bricks',
        '#c:plates/wrought_iron'
    ]).id('tfc:crafting/reinforced_fire_bricks_from_iron')

    event.shapeless('tfc:reinforced_fire_bricks', [
        'tfc:fire_bricks',
        '#c:plates/steel'
    ]).id('tfc:crafting/reinforced_fire_bricks_from_steel')

    event.shaped('tfc:stove', [
        ' A ',
        'A A',
        ' A '
    ], {
        A: '#c:plates/cast_iron'
    }).id('tfc:crafting/stove')

    event.shaped('2x tfc:fireproof_door', [
        'AA',
        'AA',
        'AA'
    ], {
        A: '#c:plates/cast_iron'
    }).id('tfc:crafting/fireproof_door')

    event.shaped('tfc:blast_furnace', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#c:double_plates/wrought_iron',
        B: 'tfc:crucible'
    }).id('tfc:crafting/blast_furnace')

    event.shaped('tfc:trip_hammer', [
        'ABC',
        'ABC'
    ], {
        A: '#c:plates/steel',
        B: 'tfc:brass_mechanisms',
        C: '#c:rods/steel'
    }).id('tfc:crafting/trip_hammer')

    event.shaped('tfc:power_loom', [
        'ABA',
        'BCB',
        'CDC'
    ] , {
        A: '#c:plates/steel',
        B: '#c:rods/wooden',
        C: 'tfc:brass_mechanisms',
        D: '#tfc:looms'
    }).id('tfc:crafting/power_loom')

    event.shaped('tfc:anemometer', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#c:rods/brass',
        B: 'tfc:brass_mechanisms'
    }).id('tfc:crafting/anemometer')

    event.shaped('4x tfc:fire_brick_shelf', [
        'AAA',
        'A A',
        'B B'
    ], {
        A: 'tfc:ceramic/fire_brick',
        B: '#c:rods/cast_iron'
    }).id('tfc:crafting/fire_brick_shelf')
}