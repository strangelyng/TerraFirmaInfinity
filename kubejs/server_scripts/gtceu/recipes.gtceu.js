// priority: 0
"use_strict";

const registerGTCEURecipes = (event) => {
    event.remove({ type: 'gtceu:primitive_blast_furnace' });

    // #region Primitive Recipes
    event.recipes.tfc.heating(
        'gtceu:compressed_coke_clay',
        1399
    ).resultItem('gtceu:coke_oven_brick').id('tfinfinity:heating/coke_oven_brick')

    event.shaped('4x gtceu:coke_oven_bricks', [
        'BMB',
        'MBM',
        'BMB'
    ], {
        B: 'gtceu:coke_oven_brick',
        M: 'tfc:mortar'
    }).id('gtceu:shaped/casing_coke_bricks')
}