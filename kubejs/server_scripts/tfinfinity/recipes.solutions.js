const registerSolutionRecipes = (event) => {
    // Sodium Hydroxide
    event.recipes.gtceu.mixer('tfinfinity:sodium_hydroxide_solution')
        .itemInputs('3x gtceu:sodium_hydroxide_dust')
        .inputFluids('1000x minecraft:water')
        .outputFluids('1000x tfinfinity:sodium_hydroxide_solution')
        .circuit(10)
        .duration(20*2)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.distillery('tfinfinity:distill_sodium_hydroxide_solution')
        .inputFluids('1000x tfinfinity:sodium_hydroxide_solution')
        .itemOutputs('3x gtceu:sodium_hydroxide_dust')
        .duration(60)
        .EUt(GTValues.VHA[GTValues.LV])

    // Chloralkali Process
    event.remove({ id: 'gtceu:electrolyzer/salt_water_electrolysis'})

    event.recipes.gtceu.electrolyzer('tfinfinity:diaphragm_cell_chloralkali_process')
        .notConsumableItem('gtceu:nickel_rod')
        .chancedInput('gtceu:graphite_rod', 500)
        .notConsumableItem('tfinfinity:asbestos_fiber_diaphragm')
        .inputFluids('2000x gtceu:salt_water')
        .outputFluids('1000x gtceu:hydrogen', '1000x gtceu:chlorine', '1000x tfinfinity:caustic_brine')
        .duration(36*20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.distillery('tfinfinity:distill_caustic_brine')
        .inputFluids('1000x tfinfinity:caustic_brine')
        .outputFluids('1000x tfinfinity:sodium_hydroxide_solution')
        .itemOutputs('2x gtceu:salt_dust')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV])
        
    // Potassium Hydroxide
    event.recipes.gtceu.mixer('tfinfinity:potassium_hydroxide_solution')
        .itemInputs('3x gtceu:potassium_hydroxide_dust')
        .inputFluids('1000x minecraft:water')
        .outputFluids('1000x tfinfinity:potassium_hydroxide_solution')
        .circuit(10)
        .duration(20*2)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.distillery('tfinfinity:distill_potassium_hydroxide_solution')
        .inputFluids('1000x tfinfinity:potassium_hydroxide_solution')
        .itemOutputs('3x gtceu:potassium_hydroxide_dust')
        .duration(60)
        .EUt(GTValues.VHA[GTValues.LV])

    // Sodium Carbonate
    event.recipes.gtceu.mixer('tfinfinity:sodium_carbonate_solution')
        .itemInputs('6x gtceu:soda_ash_dust')
        .inputFluids('1000x minecraft:water')
        .outputFluids('1000x tfinfinity:sodium_carbonate_solution')
        .circuit(10)
        .duration(20*2)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.distillery('tfinfinity:distill_sodium_carbonate_solution')
        .inputFluids('1000x tfinfinity:sodium_carbonate_solution')
        .itemOutputs('6x gtceu:soda_ash_dust')
        .duration(60)
        .EUt(GTValues.VHA[GTValues.LV])

    // Sodium Sulfate
    event.recipes.gtceu.mixer('tfinfinity:sodium_sulfate_solution')
        .itemInputs('6x tfinfinity:sodium_sulfate_dust')
        .inputFluids('1000x minecraft:water')
        .outputFluids('1000x tfinfinity:sodium_sulfate_solution')
        .circuit(10)
        .duration(20*2)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.distillery('tfinfinity:distill_sodium_sulfate_solution')
        .inputFluids('1000x tfinfinity:sodium_sulfate_solution')
        .itemOutputs('6x tfinfinity:sodium_sulfate_dust')
        .duration(60)
        .EUt(GTValues.VHA[GTValues.LV])
}