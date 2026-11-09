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

    // Calcium Hydroxide
    event.recipes.gtceu.mixer('tfinfinity:calcium_hydroxide_solution')
        .itemInputs('5x gtceu:calcium_hydroxide_dust')
        .inputFluids('1000x minecraft:water')
        .outputFluids('1000x tfinfinity:calcium_hydroxide_solution')
        .circuit(10)
        .duration(20*2)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.distillery('tfinfinity:distill_calcium_hydroxide_solution')
        .inputFluids('1000x tfinfinity:calcium_hydroxide_solution')
        .itemOutputs('5x gtceu:calcium_hydroxide_dust')
        .duration(60)
        .EUt(GTValues.VHA[GTValues.LV])

    // Limewater - Dilute Calcium Hydroxide Solution (CaO)(H2O)2
    event.recipes.gtceu.mixer('tfinfinity:limewater')
        .itemInputs('1x gtceu:quicklime_dust')
        .inputFluids('1000x minecraft:water')
        .outputFluids('1000x tfc:limewater')
        .duration(20*2)
        .EUt(GTValues.VHA[GTValues.LV])

    // Potash Lye - Dilute Potassium Hydroxide Solution
    event.recipes.gtceu.mixer('tfinfinity:potash_lye')
        .itemInputs('3x gtceu:potash_dust')
        .inputFluids('1000x minecraft:water')
        .outputFluids('1000x tfc:lye')
        .duration(20*2)
        .EUt(GTValues.VHA[GTValues.LV])
}