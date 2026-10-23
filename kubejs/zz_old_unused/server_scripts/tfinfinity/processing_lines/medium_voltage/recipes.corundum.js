const registerTFICorundumGroupRecipes = (event) => {
    // #region Ruby
    // (Al2O3)(Cr2O3) + 6NaOH -> 2NaAlO2 + 2Na2CrO4
    event.recipes.gtceu.chemical_bath('ruby_alkali_fusion')
        .itemInputs('10x gtceu:ruby_dust')
        .inputFluids('6000x tfinfinity:sodium_hydroxide_solution')
        .outputFluids('3000x tfinfinity:ruby_leach_liquor')
        .blastFurnaceTemp(1700)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    
    event.recipes.gtceu.chemical_reactor('ruby_leach_liquor_carbonation')
        .inputFluids('3000x tfinfinity:ruby_leach_liquor')
        .inputFluids('1000x gtceu:carbon_dioxide')
        .itemOutputs('14x tfinfinity:aluminium_hydroxide_dust')
        .outputFluids('2000x tfinfinity:sodium_chromate')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Sapphire
    // TODO: This could be made more interesting
    event.recipes.gtceu.chemical_bath('sodium_aluminate_from_sapphire')
        .itemInputs('5x gtceu:sapphire_dust')
        .inputFluids('2000x tfinfinity:sodium_hydroxide_solution')
        .outputFluids('2000x tfinfinity:sodium_aluminate')
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_bath('sodium_aluminate_from_green_sapphire')
        .itemInputs('5x gtceu:green_sapphire_dust')
        .inputFluids('2000x tfinfinity:sodium_hydroxide_solution')
        .outputFluids('2000x tfinfinity:sodium_aluminate')
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
}