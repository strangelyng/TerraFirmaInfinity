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

    event.recipes.gtceu.shaped('2x tfinfinity:lead_pipe_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#c:plates/lead',
        B: 'gtceu:lead_normal_fluid_pipe',
        C: '#c:frames/lead'
    }).id('tfinfinity:shaped/lead_pipe_casing')

    event.recipes.gtceu.shaped('2x tfinfinity:stainless_steel_pipe_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#c:plates/stainless_steel',
        B: 'gtceu:stainless_steel_normal_fluid_pipe',
        C: '#c:frames/stainless_steel'
    }).id('tfinfinity:shaped/stainless_steel_pipe_casing')

    event.recipes.gtceu.shaped('2x tfinfinity:hp_steam_machine_casing', [
        'AhA',
        'ABA',
        'AwA'
    ], {
        A: '#c:plates/steel',
        B: 'minecraft:bricks'
    }).id('tfinifinity:shaped/hp_steam_machine_casing')
}