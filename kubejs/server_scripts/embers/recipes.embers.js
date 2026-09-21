// priority: 0
"use_strict";

const registerEmbersRecipes = (event) => {
    let recipesToRemove = [
        'embers:dawnstone_anvil/tool_breakdown',
        'embers:raw_ingot_stamp',
        'embers:raw_caminite_plate',
        'embers:raw_plate_stamp',
        'embers:raw_gear_stamp',
        'embers:raw_nugget_stamp',
        'embers:raw_flat_stamp',

        /embers:melting\/gears\/.*/,
        /embers:melting\/ingots\/.*/,
        /embers:melting\/nuggets\/.*/,
        /embers:melting\/ores\/.*/,
        /embers:melting\/plates\/.*/,
        /embers:melting\/raw_materials\/.*/,
        /embers:melting\/storage_blocks\/.*/,
        
        /embers:stamping\/gears\/.*/,
        /embers:stamping\/ingots\/.*/,
        /embers:stamping\/nuggets\/.*/,
        /embers:stamping\/plates\/.*/,
        /embers:stamping\/.*_aspectus/
    ].forEach(recipeId => {
        event.remove({ id: recipeId });
    })

    event.shaped('3x tfinfinity:unfired_caminite_brick', [
        'XXX',
        'XfX'
    ], {
        X: 'embers:caminite_blend',
        f: 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form').id('tfinfinity:shaped/unfired_caminite_brick')

    event.shaped('4x embers:caminite_bricks', [
        'BMB',
        'MBM',
        'BMB'
    ], {
        B: 'embers:caminite_brick',
        M: 'tfc:mortar'
    }).id('embers:caminite_bricks')

    event.shaped('4x embers:archaic_bricks', [
        'BMB',
        'MBM',
        'BMB'
    ], {
        B: 'embers:archaic_brick',
        M: 'tfc:mortar'
    }).id('embers:archaic_bricks')

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
    
    event.recipes.tfc.knapping(
        'tfinfinity:raw_rod_stamp',
        'tfinfinity:caminite',
        [
            'XXXX ',
            'XXX X',
            'XX XX',
            'X XXX',
            ' XXXX'
        ]
    ).id('tfinfinity:knapping/raw_rod_stamp')
    
    // event.recipes.tfc.knapping(
    //     'tfinfinity:raw_bolt_stamp',
    //     'tfinfinity:caminite',
    //     [
    //         'XXXXX',
    //         'XX  X',
    //         'X   X',
    //         'X  XX',
    //         'XXXXX'
    //     ]
    // ).id('tfinfinity:knapping/raw_bolt_stamp')
    
    event.recipes.tfc.knapping(
        'tfinfinity:raw_ring_stamp',
        'tfinfinity:caminite',
        [
            'XXXXX',
            'X   X',
            'X X X',
            'X   X',
            'XXXXX'
        ]
    ).id('tfinfinity:knapping/raw_ring_stamp')

    event.shaped('tfinfinity:raw_large_gear_stamp', [
        'XXX',
        'XGX',
        'XXX'
    ], {
        X: 'embers:caminite_blend',
        G: '#c:gears'
    }).id('tfinfinity:shaped/raw_large_gear_stamp').keepIngredient('#c:gears')

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
        'embers:raw_flat_stamp',
        
        'tfinfinity:raw_rod_stamp',
        // 'tfinfinity:raw_bolt_stamp'
    ].forEach((item) => {
        event.shapeless('5x embers:caminite_blend',
            [item]
        ).id(`tfinfinity:shapeless/${item.split(":")[1]}_recycling`)
    })

    event.shapeless('8x embers:caminite_blend',
        'tfinfinity:raw_large_gear_stamp'
    ).id('tfinfinity:shapeless/raw_large_gear_stamp_recycling')

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
    
    event.recipes.tfc.heating(
        'tfinfinity:raw_large_gear_stamp',
        1399
    ).resultItem('tfinfinity:large_gear_stamp').id('tfinfinity:heating/large_gear_stamp')
    
    event.recipes.tfc.heating(
        'tfinfinity:raw_rod_stamp',
        1399
    ).resultItem('tfinfinity:rod_stamp').id('tfinfinity:heating/rod_stamp')
    
    // event.recipes.tfc.heating(
    //     'tfinfinity:raw_bolt_stamp',
    //     1399
    // ).resultItem('tfinfinity:bolt_stamp').id('tfinfinity:heating/bolt_stamp')
    
    event.recipes.tfc.heating(
        'tfinfinity:raw_ring_stamp',
        1399
    ).resultItem('tfinfinity:ring_stamp').id('tfinfinity:heating/ring_stamp')

    // #endregion

    event.smelting('embers:caminite_brick', 'tfinfinity:unfired_caminite_brick')
        .cookingTime(200)
        .id('embers:caminite_brick')
}