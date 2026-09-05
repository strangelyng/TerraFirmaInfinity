// priority: 0
"use_strict";

const registerTFCRecipes = (event) => {
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
}