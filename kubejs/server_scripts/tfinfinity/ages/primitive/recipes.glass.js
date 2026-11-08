const registerPrimitiveGlassRecipes = (event) => {
    event.recipes.tfc.glassworking(
        'gtceu:glass_tube',
        '#tfc:glass_batches_tier_3',
        [
            'tfc:blow',
            'tfc:blow',
            'tfc:pinch'
        ]
    ).id('tfinfinity:glassworking/glass_tube')

    event.recipes.tfc.glassworking(
        'gtceu:glass_vial',
        '#tfc:glass_batches_tier_3',
        [
            'tfc:blow',
            'tfc:stretch',
            'tfc:stretch'
        ]
    ).id('tfinfinity:glassworking/glass_vial')
}