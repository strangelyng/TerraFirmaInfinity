// priority: 0
"use strict";

const registerEmbersData = (event) => {
    event.knappingType({
        inputItem: Ingredient.of('embers:caminite_blend', 5),
        amountToConsume: 5,
        clickSound: 'tfc:item.knapping.clay',
        icon: 'embers:caminite_blend',
        consumeAfterComplete: true,
        hasOffTexture: true
    }, 'tfinfinity:caminite')

    let rawCaminite = [
        'tfinfinity:unfired_caminite_brick',
        'embers:raw_caminite_plate',
        'embers:raw_ingot_stamp',
        'embers:raw_plate_stamp',
        'embers:raw_gear_stamp',
        'embers:raw_nugget_stamp',
        'embers:raw_flat_stamp'
    ].forEach((item) => {
        event.heat({
            ingredient: item,
            heatCapacity: 1.0
        }, `tfinfinity:${item.split(":")[1]}`)
    })
}