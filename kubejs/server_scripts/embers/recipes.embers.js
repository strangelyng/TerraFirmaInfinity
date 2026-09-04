// priority: 0
"use_strict";

const registerEmbersRecipes = (event) => {
    // #region Caminite Knapping
    event.recipes.tfc.knapping(
        '3x tfinfinity:unfired_caminite_brick',
        'tfinfinity:caminite',
        [
            'XXXXX',
            '     ',
            'XXXXX',
            '     ',
            'XXXXX'
        ]
    ).id('tfinfinity:knapping/unfired_caminite_brick')

    event.recipes.tfc.knapping(
        'embers:raw_caminite_plate',
        'tfinfinity:caminite',
        [
            '     ',
            ' XXX ',
            ' XXX ',
            ' XXX ',
            '     '
        ]
    ).id('tfinfinity:knapping/raw_caminite_plate')

    event.recipes.tfc.knapping(
        'embers:raw_ingot_stamp',
        'tfinfinity:caminite',
        [
            'XXXXX',
            'X  XX',
            'X  XX',
            'X  XX',
            'XXXXX'
        ]
    ).id('tfinfinity:knapping/raw_ingot_stamp')

    event.recipes.tfc.knapping(
        'embers:raw_plate_stamp',
        'tfinfinity:caminite',
        [
            'XXXXX',
            'X   X',
            'X   X',
            'X   X',
            'XXXXX'
        ]
    ).id('tfinfinity:knapping/raw_plate_stamp')

    event.recipes.tfc.knapping(
        'embers:raw_gear_stamp',
        'tfinfinity:caminite',
        [
            ' X X ',
            'X   X',
            '  X  ',
            'X   X',
            ' X X '
        ]
    ).id('tfinfinity:knapping/raw_gear_stamp')

    event.recipes.tfc.knapping(
        'embers:raw_nugget_stamp',
        'tfinfinity:caminite',
        [
            'XXXXX',
            'XXXXX',
            'XX XX',
            'XXXXX',
            'XXXXX'
        ]
    ).id('tfinfinity:knapping/raw_nugget_stamp')

    event.shaped(
        'embers:raw_flat_stamp',
        [
            'X X',
            ' X ',
            'X X'
        ], {
            X: 'embers:caminite_blend'
        }
    ).id('tfinfinity:shapeless/raw_flat_stamp')

    event.shapeless('5x embers:caminite_blend',
        ['4x minecraft:clay_ball', '#minecraft:sand']
    ).id('embers:caminite_blend')

    event.shapeless('embers:caminite_blend',
        ['tfinfinity:unfired_caminite_brick']
    ).id('tfinfinity:shapeless/unfired_caminite_brick_recycling')

    let rawStamps = [
        'embers:raw_caminite_plate',
        'embers:raw_ingot_stamp',
        'embers:raw_plate_stamp',
        'embers:raw_gear_stamp',
        'embers:raw_nugget_stamp',
        'embers:raw_flat_stamp'
    ].forEach((item) => {
        event.shapeless('5x embers:caminite_blend',
            [item]
        ).id(`tfinfinity:shapeless/${item.split(":")[1]}_recycling`)
    })

    // #region Caminite Heating
    event.recipes.tfc.heating(
        'tfinfinity:unfired_caminite_brick',
        1399
    ).resultItem('embers:caminite_brick').id('tfinfinity:heating/caminite_brick')

    event.recipes.tfc.heating(
        'embers:raw_caminite_plate',
        1399
    ).resultItem('embers:caminite_plate').id('tfinfinity:heating/caminite_plate')
    
    event.recipes.tfc.heating(
        'embers:raw_ingot_stamp',
        1399
    ).resultItem('embers:ingot_stamp').id('tfinfinity:heating/ingot_stamp')
    
    event.recipes.tfc.heating(
        'embers:raw_plate_stamp',
        1399
    ).resultItem('embers:plate_stamp').id('tfinfinity:heating/plate_stamp')
    
    event.recipes.tfc.heating(
        'embers:raw_gear_stamp',
        1399
    ).resultItem('embers:gear_stamp').id('tfinfinity:heating/gear_stamp')
    
    event.recipes.tfc.heating(
        'embers:raw_nugget_stamp',
        1399
    ).resultItem('embers:nugget_stamp').id('tfinfinity:heating/nugget_stamp')
    
    event.recipes.tfc.heating(
        'embers:raw_flat_stamp',
        1399
    ).resultItem('embers:flat_stamp').id('tfinfinity:heating/flat_stamp')

    // #endregion

    event.smelting('embers:caminite_brick', 'tfinfinity:unfired_caminite_brick')
        .cookingTime(200)
        .id('embers:caminite_brick')
}