// priority: 0
"use_strict";

const registerTFCRecipes = (event) => {
    event.shaped('tfc:white_kaolin_clay', [
        'XX',
        'XX'
    ], {
        X: 'tfc:kaolin_clay'
    }).id('tfinfinity:shaped/white_kaolin_clay')
}