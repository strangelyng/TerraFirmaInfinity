ServerEvents.recipes(event => {
    // #region Mixing
    
    // #region Distillation
    event.recipes.gtceu.distillery('sodium_carbonate_from_solution')
        .inputFluids('1000x tfinfinity:sodium_carbonate_solution')
        .itemOutputs('6x gtceu:soda_ash_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.recipes.gtceu.distillery('calcium_chloride_from_solution')
        .inputFluids('1000x tfinfinity:calcium_chloride_solution')
        .itemOutputs('3x gtceu:calcium_chloride_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.recipes.gtceu.distillery('sodium_hydroxide_from_solution')
        .inputFluids('1000x tfinfinity:sodium_hydroxide_solution')
        .itemOutputs('3x gtceu:sodium_hydroxide_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.recipes.gtceu.distillery('potassium_hydroxide_from_solution')
        .inputFluids('1000x tfinfinity:potassium_hydroxide_solution')
        .itemOutputs('3x gtceu:potassium_hydroxide_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.recipes.gtceu.distillery('calcium_hydroxide_from_solution')
        .inputFluids('1000x tfinfinity:calcium_hydroxide_solution')
        .itemOutputs('5x gtceu:calcium_hydroxide_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.recipes.gtceu.distillery('potassium_sulfate_from_solution')
        .inputFluids('1000x tfinfinity:potassium_sulfate_solution')
        .itemOutputs('7x gtceu:potassium_sulfate_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.recipes.gtceu.distillery('sodium_sulfate_from_solution')
        .inputFluids('1000x tfinfinity:sodium_sulfate_solution')
        .itemOutputs('7x tfinfinity:sodium_sulfate_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu.distillery('magnesium_chloride_from_solution')
        .inputFluids('1000x tfinfinity:magnesium_chloride_solution')
        .itemOutputs('3x gtceu:magnesium_chloride_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.distillery('magnesium_sulfate_from_solution')
        .inputFluids('1000x tfinfinity:magnesium_sulfate_solution')
        .itemOutputs('6x tfinfinity:magnesium_sulfate_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
})