const registerTFIZeoliteGroupRecipes = (event) => {
    // #Zeolite (Natrolite)
    // TODO: Add Roasting Step to dehydrate (^ 2H2O) ??

    // Na2Al2Si3O10 + 3CaO -> 2NaAlO2 + 3CaSiO3
    event.recipes.gtceu.electric_blast_furnace('zeolite_sintering')
        .itemInputs('19x gtceu:zeolite_dust')
        .itemInputs('6x gtceu:quicklime_dust')
        .itemOutputs('tfinfinity:zeolite_sinter_cake')
        // .outputFluids('2000x gtceu:steam')
        .blastFurnaceTemp(1700)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_bath('wash_zeolite_sinter_cake')
        .itemInputs('tfinfinity:zeolite_sinter_cake')
        .inputFluids('4000x minecraft:water')
        .itemOutputs('15x tfinfinity:wollastonite_dust')
        .outputFluids('2000x tfinfinity:sodium_aluminate')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Pollucite
    // 0.5Cs2Al2Si4O12.2H2O + 4HCl -> CsCl + AlCl3 + 2SiO2 + 3H2O
    event.recipes.gtceu.chemical_bath('pollucite_leach_liquor')
        .itemInputs('13x gtceu:pollucite_dust')
        .inputFluids('4000x gtceu:hydrochloric_acid')
        .itemOutputs('6x gtceu:silicon_dioxide_dust')
        .outputFluids('3000x tfinfinity:pollucite_leach_liquor')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('dealuminated_pollucite_leach_liquor')
        .inputFluids('2000x tfinfinity:pollucite_leach_liquor')
        .inputFluids('2000x tfinfinity:sodium_hydroxide_solution')
        .itemOutputs('7x tfinfinity:aluminium_hydroxide_dust')
        .outputFluids('2000x tfinfinity:dealuminated_pollucite_leach_liquor')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('caesium_antimony_chloride_cake')
        .inputFluids('9000x tfinfinity:dealuminated_pollucite_leach_liquor')
        .itemInputs('8x tfinfinity:antimony_trichloride_dust')
        .outputFluids('9000x gtceu:salt_water')
        .itemOutputs('14x tfinfinity:caesium_antimony_chloride_cake_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('acidic_caesium_chloride_solution')
        .itemInputs('14x tfinfinity:caesium_antimony_chloride_cake_dust')
        .inputFluids('1000x minecraft:water')
        .inputFluids('3000x gtceu:hydrogen_sulfide')
        .itemOutputs('5x gtceu:stibnite_dust') // Antimony Trisulfide
        .outputFluids('3000x tfinfinity:acidic_caesium_chloride_solution')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('caesium_carbonate')
        .inputFluids('2000x tfinfinity:acidic_caesium_chloride_solution')
        .itemInputs('6x tfinfinity:ammonium_carbonate_dust')
        .itemOutputs('6x tfinfinity:caesium_carbonate_dust')
        .itemOutputs('2x gtceu:ammonium_chloride_dust')
        .outputFluids('4000x gtceu:hydrochloric_acid')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    // Antimony Trisulfide to Trichloride
    event.recipes.gtceu.chemical_reactor('antimony_trichloride_from_stibnite')
        .itemInputs('5x gtceu:stibnite_dust') // Antimony Trisulfide
        .inputFluids('6000x gtceu:hydrochloric_acid')
        .itemOutputs('8x tfinfinity:antimony_trichloride_dust')
        .outputFluids('3000x gtceu:hydrogen_sulfide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('antimony_trichloride_from_trioxide')
        .itemInputs('5x gtceu:antimony_trioxide_dust')
        .inputFluids('6000x gtceu:hydrochloric_acid')
        .itemOutputs('8x tfinfinity:antimony_trichloride_dust') // 2000x antimony trichloride solution?
        .outputFluids('3000x minecraft:water')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
    
    // Ammonium Carbonate
    event.recipes.gtceu.chemical_reactor('sodium_bicarbonate_from_salt') // Overwrite adding Circuit
        .itemInputs('2x gtceu:salt_dust')
        .inputFluids('2000x gtceu:ammonia')
        .inputFluids('1000x minecraft:water')
        .inputFluids('1000x gtceu:carbon_dioxide')
        .itemOutputs('2x gtceu:ammonium_chloride_dust')
        .itemOutputs('6x gtceu:sodium_bicarbonate_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(1)

    event.recipes.gtceu.chemical_reactor('ammonium_carbonate')
        .inputFluids('2000x gtceu:ammonia')
        .inputFluids('1000x minecraft:water')
        .inputFluids('1000x gtceu:carbon_dioxide')
        .itemOutputs('6x tfinfinity:ammonium_carbonate_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(2)
}