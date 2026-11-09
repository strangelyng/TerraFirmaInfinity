const registerWaxRecipes = (event) => {
    event.recipes.gtceu.fluid_solidifier('tfinfinity:candle_tallow')
        .itemInputs('#c:strings')
        .inputFluids('40x tfc:tallow')
        .itemOutputs('tfc:candle')
        .duration(20)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.fluid_solidifier('tfinfinity:candle_wax')
        .itemInputs('#c:strings')
        .inputFluids('144x gtceu:wax')
        .itemOutputs('4x tfc:candle')
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.ULV])
}