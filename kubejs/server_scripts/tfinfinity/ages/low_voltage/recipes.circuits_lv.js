const registerLVCircuitRecipes = (event) => {

    event.recipes.gtceu.fluid_solidifier('tfinfinity:solidify_glue_ball')
        .notConsumableItem('gtceu:ball_casting_mold')
        .inputFluids('100x gtceu:glue')
        .itemOutputs('tfc:glue')
        .duration(5*20)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.extractor('tfinfinity:glue_extraction')
        .itemInputs('tfc:glue')
        .outputFluids('100x gtceu:glue')
        .duration(20*10)
        .EUt(5)
}