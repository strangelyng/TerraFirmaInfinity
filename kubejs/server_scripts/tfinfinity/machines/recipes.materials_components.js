// priority: 1
"use strict";

const registerTFIComponentRecipes = (event) => {
    event.recipes.gtceu.shaped('tfinfinity:steam_motor', [
        'ABC',
        'BCB',
        'CBA'
    ], {
        A: '#c:plates/copper',
        B: 'gtceu:bronze_tiny_fluid_pipe',
        C: '#c:rods/copper'
    }).id('tfinfinity:shaped/steam_motor')
    
    event.recipes.gtceu.shaped('tfinfinity:steam_piston', [
        'AAA',
        'BCC',
        'BDE'
    ], {
        A: '#c:plates/copper',
        B: 'gtceu:bronze_tiny_fluid_pipe',
        C: '#c:rods/copper',
        D: 'tfinfinity:steam_motor',
        E: '#c:small_gears/bronze'
    }).id('tfinfinity:shaped/steam_piston')
    
    event.recipes.gtceu.shaped('tfinfinity:steam_pump', [
        'ABC',
        'dDw',
        'CEF'
    ], {
        A: '#c:screws/copper',
        B: '#c:small_gears/bronze',
        C: 'gtceu:sticky_resin',
        D: 'gtceu:copper_normal_fluid_pipe',
        E: 'tfinfinity:steam_motor',
        F: 'gtceu:bronze_tiny_fluid_pipe',
    }).id('tfinfinity:shaped/steam_pump')
    
    event.recipes.gtceu.shaped('tfinfinity:steam_conveyor', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#c:leather',
        B: 'tfinfinity:steam_motor',
        C: 'gtceu:bronze_tiny_fluid_pipe',
    }).id('tfinfinity:shaped/steam_conveyor_leather')
    
    event.recipes.gtceu.shaped('tfinfinity:steam_conveyor', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#c:plates/rubber',
        B: 'tfinfinity:steam_motor',
        C: 'gtceu:bronze_tiny_fluid_pipe',
    }).id('tfinfinity:shaped/steam_conveyor_rubber')
    
    event.recipes.gtceu.shaped('tfinfinity:steam_conveyor', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#c:plates/silicone_rubber',
        B: 'tfinfinity:steam_motor',
        C: 'gtceu:bronze_tiny_fluid_pipe',
    }).id('tfinfinity:shaped/steam_conveyor_silicone_rubber')
    
    event.recipes.gtceu.shaped('tfinfinity:steam_conveyor', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#c:plates/styrene_butadiene_rubber',
        B: 'tfinfinity:steam_motor',
        C: 'gtceu:bronze_tiny_fluid_pipe',
    }).id('tfinfinity:shaped/steam_conveyor_styrene_butadiene_rubber')
}