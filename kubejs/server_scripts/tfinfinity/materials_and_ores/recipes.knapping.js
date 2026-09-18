const registerTFIKnappingRecipes = (event) => {
    // #region Fire Clay
    event.recipes.tfc.knapping(
        'tfinfinity:ceramic/unfired_fire_small_gear_mold',
        'tfc:fire_clay',
        [
            ' X X ',
            'X   X',
            '  X  ',
            'X   X',
            ' X X '
        ]
    ).id('tfinfinity:knapping/unfired_fire_small_gear_mold')

    event.recipes.tfc.heating(
        'tfinfinity:ceramic/unfired_fire_small_gear_mold',
        1399
    ).resultItem('tfinfinity:ceramic/fire_small_gear_mold').id('tfinfinity:heating/fire_small_gear_mold')

    event.shapeless('5x tfc:fire_clay',
        'tfinfinity:ceramic/unfired_fire_small_gear_mold'
    ).id('tfinfinity:shapeless/unfired_fire_small_gear_mold_to_fire_clay')
    
    event.recipes.tfc.knapping(
        'tfinfinity:ceramic/unfired_fire_rod_mold',
        'tfc:fire_clay',
        [
            'XXXX ',
            'XXX X',
            'XX XX',
            'X XXX',
            ' XXXX'
        ]
    ).id('tfinfinity:knapping/unfired_fire_rod_mold')

    event.recipes.tfc.heating(
        'tfinfinity:ceramic/unfired_fire_rod_mold',
        1399
    ).resultItem('tfinfinity:ceramic/fire_rod_mold').id('tfinfinity:heating/fire_rod_mold')

    event.shapeless('5x tfc:fire_clay',
        'tfinfinity:ceramic/unfired_fire_rod_mold'
    ).id('tfinfinity:shapeless/unfired_fire_rod_mold_to_fire_clay')
    
    // #region Clay
    event.recipes.tfc.knapping(
        '2x tfinfinity:ceramic/unfired_nugget_mold',
        'tfc:clay',
        [
            'XXXXX',
            'XXXXX',
            'XX XX',
            'XXXXX',
            'XXXXX'
        ]
    ).id('tfinfinity:knapping/unfired_nugget_mold')

    event.recipes.tfc.heating(
        'tfinfinity:ceramic/unfired_nugget_mold',
        1399
    ).resultItem('tfinfinity:ceramic/nugget_mold').id('tfinfinity:heating/nugget_mold')

    event.shapeless('2x minecraft:clay_ball',
        'tfinfinity:ceramic/unfired_nugget_mold'
    ).id('tfinfinity:shapeless/unfired_nugget_mold_to_clay')
}