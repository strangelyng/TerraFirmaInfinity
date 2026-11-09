const registerPrimitiveResinRecipes = (event) => {
    // Conifer Pitch Tree Tapping
    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:conifer_pitch', 2),
        'tfc:wood/log/douglas_fir'
    ).minTemp(-10).id('tfinfinity:tree_tapping/douglas_fir_conifer_pitch')

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:conifer_pitch', 2),
        'afc:wood/log/ancient_douglas_fir'
    ).minTemp(-10).id('tfinfinity:tree_tapping/ancient_douglas_fir_conifer_pitch')

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:conifer_pitch', 4),
        'tfc:wood/log/pine'
    ).minTemp(-15).id('tfinfinity:tree_tapping/pine_conifer_pitch')

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:conifer_pitch', 4),
        'afc:wood/log/ancient_pine'
    ).minTemp(-15).id('tfinfinity:tree_tapping/ancient_pine_conifer_pitch')

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:conifer_pitch', 3),
        'tfc:wood/log/spruce'
    ).minTemp(-15).id('tfinfinity:tree_tapping/spruce_conifer_pitch')

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:conifer_pitch', 3),
        'afc:wood/log/ancient_spruce'
    ).minTemp(-15).id('tfinfinity:tree_tapping/ancient_spruce_conifer_pitch')

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:conifer_pitch', 2),
        'tfc:wood/log/white_cedar'
    ).minTemp(-10).id('tfinfinity:tree_tapping/white_cedar_conifer_pitch')

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:conifer_pitch', 2),
        'afc:wood/log/ancient_white_cedar'
    ).minTemp(-10).id('tfinfinity:tree_tapping/ancient_white_cedar_conifer_pitch')

    event.recipes.gtceu.extractor('tfinfinity:conifer_logs')
        .itemInputs('#tfinfinity:conifer_logs')
        .outputFluids('250x tfinfinity:conifer_pitch')
        .duration(20*20)
        .EUt(5)

    // Sticky Resin
    event.remove({ id: 'gtceu:smelting/sticky_resin_from_slime' })

    event.recipes.tfc.pot('#c:small_dusts/charcoal', Fluid.of('tfinfinity:conifer_pitch', 750), 1200, 300)
        .itemOutput('gtceu:sticky_resin')
        .id('tfinfinity:pot/sticky_resin_from_conifer_pitch')

    event.recipes.firmalife.vat('#c:small_dusts/charcoal', Fluid.of('tfinfinity:conifer_pitch', 750), 600, 300)
        .outputItem('gtceu:sticky_resin')
        .id('tfinfinity:vat/sticky_resin_from_conifer_pitch')

    event.recipes.gtceu.fluid_solidifier('tfinfinity:sticky_resin_from_conifer_pitch')
        .itemInputs('#c:small_dusts/charcoal')
        .inputFluids('750x tfinfinity:conifer_pitch')
        .itemOutputs('2x gtceu:sticky_resin')
        .duration(10*20)
        .EUt(20)

    event.remove({ id: 'gtceu:centrifuge/sticky_resin_separation' })

    event.recipes.gtceu.centrifuge('tfinfinity:sticky_resin')
        .itemInputs('gtceu:sticky_resin')
        .itemOutputs('gtceu:plant_ball')
        .chancedOutput('gtceu:carbon_dust', 2500)
        .outputFluids('100x gtceu:glue')
        .duration(20*20)
        .EUt(5)

    event.recipes.gtceu.centrifuge('tfinfinity:conifer_logs')
        .itemInputs('#tfinfinity:conifer_logs')
        .chancedOutput('gtceu:sticky_resin', 6400)
        .chancedOutput('gtceu:plant_ball', 4000)
        .chancedOutput('gtceu:carbon_dust', 3000)
        .chancedOutput('gtceu:wood_dust', 3000)
        .outputFluids('60x gtceu:methane')
        .duration(20*10)
        .EUt(5)
}