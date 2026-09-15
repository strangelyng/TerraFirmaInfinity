ServerEvents.recipes(event => {
    // #region Sodium Aluminate 
    event.recipes.gtceu.chemical_reactor('sodium_aluminate_from_alumina')
        .itemInputs('5x tfinfinity:alumina_dust')
        .inputFluids('2000x tfinfinity:sodium_hydroxide_solution')
        .inputFluids('3000x minecraft:water')
        .outputFluids('2000x tfinfinity:sodium_aluminate')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.recipes.gtceu.chemical_reactor('sodium_aluminate_from_hydroxide')
        .itemInputs('7x tfinfinity:aluminium_hydroxide_dust')
        .inputFluids('1000x tfinfinity:sodium_hydroxide_solution')
        .outputFluids('1000x tfinfinity:sodium_aluminate')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Aluminium Hydroxide
    event.recipes.gtceu.chemical_reactor('aluminium_hydroxide_from_sodium_aluminate')
        .inputFluids('2000x tfinfinity:sodium_aluminate')
        .inputFluids('1000x gtceu:carbon_dioxide')
        .itemOutputs('14x tfinfinity:aluminium_hydroxide_dust')
        .outputFluids('1000x tfinfinity:sodium_carbonate_solution')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.autoclave('crystallize_aluminium_hydroxide_from_sodium_aluminate')
        .itemInputs('4x tfinfinity:aluminium_hydroxide_dust')
        .inputFluids('1000x tfinfinity:sodium_aluminate')
        .itemOutputs('11x tfinfinity:aluminium_hydroxide_dust')
        .outputFluids('1000x tfinfinity:sodium_hydroxide_solution')
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Alumina
    event.recipes.gtceu.electric_blast_furnace('aluminium_hydroxide_calcination')
        .itemInputs('14x tfinfinity:aluminium_hydroxide_dust')
        .itemOutputs('5x tfinfinity:alumina_dust')
        .blastFurnaceTemp(1273)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Aluminium Fluoride
    event.recipes.gtceu.chemical_reactor('aluminium_fluoride_from_hydroxide')
        .itemInputs('7x tfinfinity:aluminium_hydroxide_dust')
        .inputFluids('3000x gtceu:hydrofluoric_acid')
        .outputFluids('1000x tfinfinity:aluminium_fluoride')
        .outputFluids('3000x minecraft:water')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('aluminium_fluoride_from_alumina')
        .itemInputs('5x tfinfinity:alumina_dust')
        .inputFluids('6000x gtceu:hydrofluoric_acid')
        .outputFluids('2000x tfinfinity:aluminium_fluoride')
        .outputFluids('3000x minecraft:water')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Synthetic Cryolite
    event.recipes.gtceu.chemical_reactor('cryolite_from_sodium_aluminate')
        .inputFluids('6000x gtceu:hydrofluoric_acid')
        .inputFluids('3000x tfinfinity:sodium_aluminate')
        .itemOutputs('10x gtceu:cryolite_dust')
        .itemOutputs('5x tfinfinity:alumina_dust')
        .outputFluids('3000x minecraft:water')
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    // #region Hall-Heroult
    event.recipes.tfinfinity.electrolytic_cell('aluminium')
        .notConsumableItem('gtceu:carbon_rod')
        .chancedInput('gtceu:carbon_rod', 100)
        .notConsumableFluid('4320x gtceu:cryolite')
        .notConsumableFluid('500x tfinfinity:aluminium_fluoride')
        .itemInputs('10x tfinfinity:alumina_dust')
        .itemInputs('3x gtceu:carbon_dust')
        .outputFluids('576x gtceu:aluminium')
        .outputFluids('3000x gtceu:carbon_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    // #region Minerals
    // Alunite
    // KAl3S2H6O14 -> 0.5K2SO4 + 1.5Al2O3 + 1.5SO3 + 3H2O
    event.recipes.tfinfinity.roaster('alunite_calcination')
        .itemInputs('26x gtceu:alunite_dust')
        .itemOutputs('tfinfinity:roasted_alunite_calcine')
        .outputFluids('2000x gtceu:sulfur_trioxide')
        // .outputFluids('3000x gtceu:steam')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_bath('wash_roasted_alunite_calcine')
        .itemInputs('tfinfinity:roasted_alunite_calcine')
        .inputFluids('500x minecraft:water')
        .itemOutputs('7x tfinfinity:alumina_dust')
        .itemOutputs('2x tfinfinity:small_alumina_dust')
        .outputFluids('500x tfinfinity:potassium_sulfate_solution')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
})