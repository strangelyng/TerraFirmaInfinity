const registerLVAluminiumRecipes = (event) => {
    event.remove({ id: 'gtceu:electric_blast_furnace/blast_aluminium' })
    event.remove({ id: 'gtceu:electric_blast_furnace/blast_aluminium_gas' })

    // Bayer Process
    event.recipes.gtceu.autoclave('tfinfinity:bauxite_bayer_process')
        .itemInputs('5x gtceu:bauxite_dust')
        .inputFluids('2000x tfinfinity:sodium_hydroxide_solution')
        .outputFluids('3000x tfinfinity:bayer_liquor')
        .duration(300)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.centrifuge('tfinfinity:bayer_liquor_separation')
        .inputFluids('3000x tfinfinity:bayer_liquor')
        .outputFluids('2000x tfinfinity:sodium_aluminate', '1000x tfinfinity:bauxite_tailings')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:aluminium_hydroxide_from_aluminate') // Precipitation
        .inputFluids('2000x tfinfinity:sodium_aluminate', '1000x gtceu:carbon_dioxide')
        .itemOutputs('14x tfinfinity:aluminium_hydroxide_dust')
        .outputFluids('1000x tfinfinity:sodium_carbonate_solution')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.autoclave('tfinfinity:crystallize_aluminium_hydroxide_from_sodium_aluminate') // Seed Crystal
        .itemInputs('7x tfinfinity:aluminium_hydroxide_dust')
        .inputFluids('1000x tfinfinity:sodium_aluminate')
        .itemOutputs('14x tfinfinity:aluminium_hydroxide_dust')
        .outputFluids('1000x tfinfinity:sodium_hydroxide_solution')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.electric_blast_furnace('tfinfinity:alumina_from_hydroxide') // TODO: Replace with Rotary Kiln/Fluid Flash Calciner
        .itemInputs('14x tfinfinity:aluminium_hydroxide_dust')
        .itemOutputs('5x tfinfinity:alumina_dust')
        .blastFurnaceTemp(1200)
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])

    // Hydrogen Fluoride
    event.recipes.gtceu.chemical_reactor('tfinfinity:hydrogen_fluoride_from_fluorite')
        .itemInputs('3x tfinfinity:fluorite_dust')
        .inputFluids('1000x gtceu:sulfuric_acid')
        .outputFluids('2000x tfinfinity:hydrogen_fluoride')
        .itemOutputs('6x gtceu:gypsum_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // Aluminium Fluoride
    event.recipes.gtceu.chemical_reactor('tfinfinity:aluminium_fluoride_from_hydroxide')
        .itemInputs('7x tfinfinity:aluminium_hydroxide_dust')
        .inputFluids('3000x tfinfinity:hydrogen_fluoride')
        .outputFluids('576x tfinfinity:aluminium_fluoride')
        .outputFluids('3000x gtceu:steam')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:aluminium_fluoride_from_alumina')
        .itemInputs('5x tfinfinity:alumina_dust')
        .inputFluids('6000x tfinfinity:hydrogen_fluoride')
        .outputFluids('1152x tfinfinity:aluminium_fluoride')
        .outputFluids('3000x gtceu:steam')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    // Hall-Heroult Process
    event.recipes.tfinfinity.electrolytic_cell('tfinfinity:aluminium')
        .notConsumableItem('gtceu:carbon_rod')
        .chancedInput('gtceu:carbon_rod', 1000)
        .notConsumableFluid('5616x tfinfinity:cryolite')
        .chancedFluidInput('144x tfinfinity:cryolite', 1600)
        .notConsumableFluid('288x tfinfinity:aluminium_fluoride')
        .chancedFluidInput('144x tfinfinity:aluminium_fluoride', 1600)
        .itemInputs('10x tfinfinity:alumina_dust')
        .itemInputs('3x gtceu:coke_dust')
        .outputFluids('576x gtceu:aluminium')
        .outputFluids('3000x gtceu:carbon_dioxide')
        .duration(840)
        .EUt(GTValues.VA[GTValues.MV])

    // Synthetic Cryolite (Technically MV)
    event.recipes.gtceu.chemical_reactor('tfinfinity:cryolite_synthesis')
        .inputFluids('6000x gtceu:hydrofluoric_acid')
        .inputFluids('3000x tfinfinity:sodium_aluminate')
        .itemOutputs('10x tfinfinity:cryolite_dust')
        .itemOutputs('5x tfinfinity:alumina_dust')
        .outputFluids('3000x minecraft:water')
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
}