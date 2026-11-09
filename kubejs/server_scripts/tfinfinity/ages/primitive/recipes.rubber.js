const registerPrimitiveRubberRecipes = (event) => {
    // Latex Tree Tapping
    event.remove({ id: 'afc:tree_tapping/hevea_latex' })
    event.remove({ id: 'afc:tree_tapping/rubber_fig_latex' })

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:latex', 2),
        'afc:wood/log/hevea'
    ).tempRange(14, 50).id('tfinfinity:tree_tapping/hevea_latex')

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:latex', 2),
        'afc:wood/log/ancient_hevea'
    ).tempRange(14, 50).id('tfinfinity:tree_tapping/ancient_hevea_latex')

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:latex', 1),
        'afc:wood/log/rubber_fig'
    ).tempRange(6, 50).id('tfinfinity:tree_tapping/rubber_fig_latex')

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:latex', 1),
        'afc:wood/log/ancient_rubber_fig'
    ).tempRange(6, 50).id('tfinfinity:tree_tapping/ancient_rubber_fig_latex') 

    // Latex Extraction
    event.recipes.gtceu.extractor('tfinfinity:latex_logs')
        .itemInputs('#tfinfinity:latex_logs')
        .outputFluids('250x tfinfinity:latex')
        .duration(20*20)
        .EUt(5)

    event.recipes.gtceu.centrifuge('tfinfinity:latex_logs')
        .itemInputs('#tfinfinity:latex_logs')
        .chancedOutput('gtceu:raw_rubber_dust', 6400)
        .chancedOutput('gtceu:plant_ball', 4000)
        .chancedOutput('gtceu:sticky_resin', 3000)
        .chancedOutput('gtceu:wood_dust', 3000)
        .outputFluids('60x gtceu:methane')
        .duration(20*10)
        .EUt(5)

    // Latex to Rubber
    event.remove({ id: 'afc:pot/rubber' })
    event.remove({ id: 'afc:pot/rubber_temp'})
    event.remove({ id: 'afc:vat/rubber'})

    event.recipes.tfc.pot('#c:small_dusts/sulfur', Fluid.of('tfinfinity:latex', 1000), 1000, 600)
        .fluidOutput(Fluid.of('tfinfinity:vulcanized_latex', 1000))
        .id('tfinfinity:pot/vulcanized_latex')

    event.recipes.firmalife.vat('#c:small_dusts/sulfur', Fluid.of('tfinfinity:latex', 1000), 600, 600)
        .outputFluid(Fluid.of('tfinfinity:vulcanized_latex', 1000))
        .id('tfinfinity:vat/vulcanized_latex')

    event.recipes.gtceu.chemical_reactor('tfinfinity:vulcanized_latex')
        .itemInputs('#c:small_dusts/sulfur')
        .inputFluids('1000x tfinfinity:latex')
        .outputFluids('1000x tfinfinity:vulcanized_latex')
        .duration(5*20)
        .EUt(20)

    event.recipes.gtceu.fluid_solidifier('tfinfinity:solidify_vulcanized_latex')
        .inputFluids('1000x tfinfinity:vulcanized_latex')
        .itemOutputs('4x gtceu:raw_rubber_dust')
        .duration(5*20)
        .EUt(7)
}