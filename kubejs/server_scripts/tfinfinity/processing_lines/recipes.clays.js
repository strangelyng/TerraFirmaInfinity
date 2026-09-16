ServerEvents.recipes(event => {
    // Fullers Earth
    // Roasting step to drive off moisture?
    event.recipes.gtceu.chemical_bath('fullers_earth_hydrochloric_acid_leaching')
        .itemInputs('25x gtceu:fullers_earth_dust')
        .inputFluids('4000x gtceu:hydrochloric_acid')
        .itemOutputs('12x gtceu:silicon_dioxide_dust')
        .outputFluids('2000x tfinfinity:magnesium_chloride_solution')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_bath('fullers_earth_sulfuric_acid_leaching')
        .itemInputs('25x gtceu:fullers_earth_dust')
        .inputFluids('2000x gtceu:sulfuric_acid')
        .itemOutputs('12x gtceu:silicon_dioxide_dust')
        .outputFluids('2000x tfinfinity:magnesium_sulfate_solution')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    // Clay
    /*
    event.recipes.gtceu.mixer('clay_slurry')
        .itemInputs('13x gtceu:clay_dust')
        .inputFluids('1000x minecraft:water')
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.centrifuge('filtered_clay_slurry')
        .inputFluids('1000x tfinfinity:clay_slurry')
        .outputFluids('1000x tfinfinity:filtered_clay_slurry')
        // .itemOutputs() // Large solids byproduct?
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('filtered_clay_slurry_acid_leaching')
        .inputFluids('1000x tfinfinity:filtered_clay_slurry')
        .inputFluids('6000x gtceu:hydrochloric_acid')
        .outputFluids('1000x tfinfinity:clarified_clay_slurry')
        .outputFluids('6000x gtceu:diluted_hydrochloric_acid')
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('clarified_clay_slurry_dealumination')
        .inputFluids('1000x tfinfinity:clarified_clay_slurry')
        .inputFluids('4000x tfinfinity:sodium_hydroxide_solution')
        .itemOutputs('14x tfinfinity:ferrous_aluminium_hydroxide_sludge')
        .outputFluids('1000x tfinfinity:dealuminated_clay_slurry')
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('wash_ferrous_aluminium_hydroxide_sludge')
        .inputFluids('7x tfinfinity:ferrous_aluminium_hydroxide_sludge')
        .inputFluids('2000x minecraft:water')
        .itemOutputs('7x tfinfinity:aluminium_hydroxide_dust')
        .outputFluids('1000x tfinfinity:red_mud')
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])
    */
})