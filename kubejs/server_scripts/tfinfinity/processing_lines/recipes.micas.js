ServerEvents.recipes(event => {
    // #region Lepidolite
    // KLi2AlSi4F2O10 + K2SO4 -> Li2SO4 + KAlSi2O6 + 2SiO2 + 2KF
    event.recipes.gtceu.electric_blast_furnace('lepidolite_sulfate_cake_dust')
        .itemInputs('20x gtceu:lepidolite_dust')
        .itemInputs('7x gtceu:potassium_sulfate_dust')
        .itemOutputs('23x tfinfinity:lepidolite_sulfate_cake_dust')
        .blastFurnaceTemp(1700)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_bath('wash_lepidolite_sulfate_cake_dust')
        .itemInputs('23x tfinfinity:lepidolite_sulfate_cake_dust')
        .inputFluids('3000x minecraft:water')
        .outputFluids('3000x tfinfinity:lepidolite_leach_liquor')
        .itemOutputs('13x gtceu:potassium_feldspar_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('lepidolite_leach_liquor_defluorination')
        .inputFluids('3000x tfinfinity:lepidolite_leach_liquor')
        .itemInputs('5x gtceu:calcium_hydroxide_dust')
        .itemOutputs('3x gtceu:fluorite_dust')
        .outputFluids('3000x tfinfinity:defluorinated_lepidolite_leach_liquor')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('lithium_carbonate_precipitation_from_lepidolite')
        .inputFluids('3000x tfinfinity:defluorinated_lepidolite_leach_liquor')
        .itemInputs('6x gtceu:soda_ash_dust')
        .itemOutputs('6x tfinfinity:lithium_carbonate_dust')
        .outputFluids('3000x tfinfinity:lepidolite_tailings')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    // Tailings Separation?

    // Secondary Recovery
    // 2KAlSi3O8 + 4H2SO4 -> K2SO4 + Al2(SO4)3 + 6SiO2 + 4H2O
    event.recipes.gtceu.chemical_reactor('potassium_feldspar_leaching')
        .itemInputs('13x gtceu:potassium_feldspar_dust')
        .inputFluids('2000x gtceu:sulfuric_acid')
        .itemOutputs('12x gtceu:silicon_dioxide_dust')
        .outputFluids('1000x tfinfinity:potassium_feldspar_slurry') // Not quite Potassium Alum
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('potassium_feldspar_slurry_separation') // Not quite
        .inputFluids('2000x tfinfinity:potassium_feldspar_slurry')
        .inputFluids('6000x gtceu:ammonia')
        .itemOutputs('14x tfinfinity:aluminium_hydroxide_dust')
        .itemOutputs('7x gtceu:potassium_sulfate_dust')
        .outputFluids('3000x tfinfinity:ammonium_sulfate')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    // #region Mica (Muscovite)
    // KAl3Si3F2O10 + Na2CO3 + 4CaO -> KAlO2 + 2NaAlO2 + CaF2 + 3CaSiO3 + CO2
})