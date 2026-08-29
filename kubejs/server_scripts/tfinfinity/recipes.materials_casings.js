// priority: 1
"use strict";

const registerTFICasingRecipes = (event) => {
    event.recipes.gtceu.shaped('2x tfinfinity:dwarven_machine_casing', [
        'AhA',
        'ABA',
        'AwA'
    ], {
        A: '#c:plates/lead',
        B: 'embers:caminite_bricks'
    }).id('tfinfinity:shaped/dwarven_machine_casing')

    event.recipes.gtceu.shaped('tfinfinity:lead_machine_casing', [
        'AAA',
        'AhA',
        'AAA'
    ], {
        A: '#c:plates/lead'
    }).id('tfinfinity:shaped/lead_machine_casing')

    event.recipes.gtceu.shaped('tfinfinity:lead_brick_casing', [
        'AAA',
        'AhA',
        'BBB'
    ], {
        A: '#c:plates/lead',
        B: 'embers:caminite_bricks'
    }).id('tfinfinity:shaped/lead_brick_casing')
}