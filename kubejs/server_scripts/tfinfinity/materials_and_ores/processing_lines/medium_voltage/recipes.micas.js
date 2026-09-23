const registerTFIMicaGroupRecipes = (event) => {
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
        .itemOutputs('3x tfinfinity:fluorite_dust')
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

    // TODO: Tailings Separation?

    // Secondary Recovery
    // 2KAlSi3O8 + 4H2SO4 -> K2SO4 + Al2(SO4)3 + 6SiO2 + 4H2O
    event.recipes.gtceu.chemical_reactor('potassium_feldspar_leaching')
        .itemInputs('13x gtceu:potassium_feldspar_dust')
        .inputFluids('2000x gtceu:sulfuric_acid')
        .itemOutputs('12x gtceu:silicon_dioxide_dust')
        .outputFluids('1000x tfinfinity:potassium_feldspar_slurry') // Not quite Potassium Alum
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('potassium_feldspar_slurry_separation') // Not quite accurate
        .inputFluids('2000x tfinfinity:potassium_feldspar_slurry')
        .inputFluids('6000x gtceu:ammonia')
        .itemOutputs('14x tfinfinity:aluminium_hydroxide_dust')
        .itemOutputs('7x gtceu:potassium_sulfate_dust')
        .outputFluids('3000x tfinfinity:ammonium_sulfate')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    // #region Glauconite (Saponite)
    // KMg2Al2Si3O12H2(H2O) + 5H2SO4 -> 0.5K2SO4 + 2MgSO4 + Al2(SO4)3 + 3SiO2 + 2H2O (1H disappears)
    // TODO: Add Roasting Step to dehydrate (^ H2O) ??

    event.recipes.gtceu.chemical_bath('glauconite_sand_leaching')
        .itemInputs('23x gtceu:glauconite_sand_dust')
        .inputFluids('5000x gtceu:sulfuric_acid')
        .itemOutputs('9x gtceu:silicon_dioxide_dust')
        .outputFluids('2000x tfinfinity:glauconite_sand_leach_liquor')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('aluminium_hydroxide_precipitation_from_glauconite')
        .inputFluids('2000x tfinfinity:glauconite_sand_leach_liquor')
        .inputFluids('6000x tfinfinity:sodium_hydroxide_solution') // + 3Na2SO4
        .outputFluids('5000x tfinfinity:dealuminated_glauconite_sand_leach_liquor')
        .itemOutputs('14x tfinfinity:aluminium_hydroxide_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('magnesium_hydroxide_precipitation_from_glauconite')
        .inputFluids('5000x tfinfinity:dealuminated_glauconite_sand_leach_liquor')
        .inputFluids('4000x tfinfinity:sodium_hydroxide_solution') // + 2Na2SO4
        .outputFluids('1750x tfinfinity:dense_potassium_sodium_sulfate_solution')
        .itemOutputs('10x tfinfinity:magnesium_hydroxide_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.electric_blast_furnace('magnesium_hydroxide_calcination')
        .itemInputs('5x tfinfinity:magnesium_hydroxide_dust')
        .itemOutputs('2x gtceu:magnesia_dust')
        .blastFurnaceTemp(1273)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
        
    // #region Mica (Muscovite)
    // KAl3Si3F2O10 + 10HCl + 2H2O -> KCl + 3AlCl3 + 3H4SiO4 + 2HF
    event.recipes.gtceu.chemical_reactor('mica_acid_leaching')
        .itemInputs('19x gtceu:mica_dust')
        .inputFluids('10000x gtceu:hydrochloric_acid')
        .outputFluids('4000x tfinfinity:mica_leach_liquor')
        .itemOutputs('9x gtceu:silicon_dioxide_dust')
        .outputFluids('2000x tfinfinity:hydrogen_fluoride')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('aluminium_hydroxide_precipitation_from_mica')
        .inputFluids('4000x tfinfinity:mica_leach_liquor')
        .inputFluids('9000x tfinfinity:sodium_hydroxide_solution') // 9NaCl
        .itemOutputs('21x tfinfinity:aluminium_hydroxide_dust')
        .outputFluids('1750x tfinfinity:dense_potassium_sodium_sulfate_solution') // Produces slightly less sodium sulfate than should be in the solution
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // KAl3Si3F2O10 + NaCl + 10CaCO3 -> KCl + 3CaAlO2 + 3Ca2SiO4 + CaF2 + 10CO2 (Imbalanced, 4O leftover)
    // event.recipes.gtceu.electric_blast_furnace('mica_clinker')
    //     .itemInputs('19x gtceu:mica_dust')
    //     .itemInputs('2x gtceu:salt_dust')
    //     .itemInputs('60x gtceu:calcite_dust') // LMAO
    //     .itemOutputs('tfinfinity:mica_clinker')
    //     .outputFluids('10000x gtceu:carbon_dioxide')
    //     .blastFurnaceTemp(1700)
    //     .duration(400)
    //     .EUt(GTValues.VA[GTValues.MV])

    // event.recipes.gtceu.chemical_bath('wash_mica_clinker')
    //     .itemInputs('tfinfinity:mica_clinker')
    //     .inputFluids('1000x minecraft:water')
    //     .outputFluids('1000x tfinfinity:rock_salt_solution')
    //     .blastFurnaceTemp(1700)
    //     .duration(200)
    //     .EUt(GTValues.VA[GTValues.LV])

    // TODO: FIX THE WEIRD RATIO STUFF, SOMEHOW
    event.recipes.gtceu.distillery('potassium_sulfate_from_dense_sulfate_solution') // Precipitation by Boiling, add dedicated Crystallizer
        .inputFluids('500x tfinfinity:dense_potassium_sodium_sulfate_solution')
        .itemOutputs('1x gtceu:potassium_sulfate_dust')
        .outputFluids('1300x tfinfinity:sodium_sulfate_solution') // Produces slightly less sodium sulfate than the chemical formula would imply
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
}