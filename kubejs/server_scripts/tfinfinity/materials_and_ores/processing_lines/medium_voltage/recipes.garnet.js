const registerTFIGarnetGroupRecipes = (event) => {
    // #region Wollastonite Treatment
    event.recipes.gtceu.chemical_bath('silicon_from_wollastonite')
        .itemInputs('5x tfinfinity:wollastonite_dust')
        .inputFluids('2000x gtceu:hydrochloric_acid')
        .itemOutputs('3x gtceu:silicon_dioxide_dust')
        .outputFluids('1000x tfinfinity:calcium_chloride_solution')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('calcium_carbonate_from_calcium_chloride_solution')
        .inputFluids('1000x tfinfinity:calcium_chloride_solution')
        .inputFluids('1000x tfinfinity:sodium_carbonate_solution')
        .itemOutputs('5x gtceu:calcium_carbonate_dust')
        .outputFluids('2000x gtceu:salt_water')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Almandine
    // Al2Fe3SiO12 + Na2CO3 + 3CaO + 1/2O2 -> 2NaAlO2 + Fe3O4 + 3CaSiO3 + CO2
    event.recipes.gtceu.electric_blast_furnace('almandine_sintering')
        .itemInputs('20x gtceu:almandine_dust')
        .itemInputs('6x gtceu:soda_ash_dust')
        .itemInputs('6x gtceu:quicklime_dust')
        .inputFluids('500x gtceu:oxygen')
        .itemOutputs('tfinfinity:almandine_sinter_cake')
        .outputFluids('2000x gtceu:carbon_dioxide')
        .blastFurnaceTemp(1700)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    
    event.recipes.gtceu.chemical_bath('wash_almandine_sinter_cake')
        .itemInputs('tfinfinity:almandine_sinter_cake')
        .inputFluids('4000x minecraft:water')
        .outputFluids('2000x tfinfinity:sodium_aluminate')
        .itemOutputs('15x tfinfinity:almandine_sludge_residue_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.electromagnetic_separator('almandine_sludge_separation')
        .itemInputs('tfinfinity:almandine_sludge_residue_dust')
        .itemOutputs('tfinfinity:wollastonite_dust')
        .chancedOutput('gtceu:magnetite_dust', 4500)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        
    // #region Andradite
    // Ca3Fe2(SiO4)3 + Na2CO3 -> 2NaFeO2 + 3CaSiO3
    event.recipes.gtceu.electric_blast_furnace('andradite_sintering')
        .itemInputs('20x gtceu:andradite_dust')
        .itemInputs('6x gtceu:soda_ash_dust')
        .itemOutputs('tfinfinity:andradite_sinter_cake')
        .outputFluids('2000x gtceu:carbon_dioxide')
        .blastFurnaceTemp(1700)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    
    event.recipes.gtceu.chemical_bath('wash_andradite_sinter_cake')
        .itemInputs('tfinfinity:andradite_sinter_cake')
        .inputFluids('2000x minecraft:water')
        .outputFluids('2000x tfinfinity:sodium_hydroxide_solution')
        .itemOutputs('15x tfinfinity:andradite_sludge_residue_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.centrifuge('andradite_sludge_separation')
        .itemInputs('tfinfinity:andradite_sludge_residue_dust')
        .itemOutputs('tfinfinity:wollastonite_dust')
        .chancedOutput('gtceu:hematite_dust', 3000)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        
    // #region Grossular
    // Ca3Al2(SiO4)3 + Na2CO3 -> 2NaAlO2 + 3CaSiO3 + CO2
    event.recipes.gtceu.electric_blast_furnace('grossular_sintering')
        .itemInputs('20x gtceu:grossular_dust')
        .itemInputs('6x gtceu:soda_ash_dust')
        .itemOutputs('tfinfinity:grossular_sinter_cake')
        .outputFluids('1000x gtceu:carbon_dioxide')
        .blastFurnaceTemp(1700)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    
    event.recipes.gtceu.chemical_bath('wash_grossular_sinter_cake')
        .itemInputs('tfinfinity:grossular_sinter_cake')
        .inputFluids('4000x minecraft:water')
        .outputFluids('2000x tfinfinity:sodium_aluminate')
        .itemOutputs('15x tfinfinity:wollastonite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        
    // #region Pyrope
    // Mg3Al2(SiO4)3 + Na2CO3 + 3CaO -> 2NaAlO2 + 3CaSiO3 + 3MgO + CO2
    event.recipes.gtceu.electric_blast_furnace('pyrope_sintering')
        .itemInputs('20x gtceu:pyrope_dust')
        .itemInputs('6x gtceu:soda_ash_dust')
        .itemInputs('6x gtceu:quicklime_dust')
        .itemOutputs('tfinfinity:pyrope_sinter_cake')
        .outputFluids('1000x gtceu:carbon_dioxide')
        .blastFurnaceTemp(1700)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    
    event.recipes.gtceu.chemical_bath('wash_pyrope_sinter_cake')
        .itemInputs('tfinfinity:pyrope_sinter_cake')
        .inputFluids('4000x minecraft:water')
        .outputFluids('2000x tfinfinity:sodium_aluminate')
        .itemOutputs('15x tfinfinity:pyrope_sludge_residue_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.centrifuge('pyrope_sludge_separation') // May Be Reworked?
        .itemInputs('tfinfinity:pyrope_sludge_residue_dust')
        .itemOutputs('tfinfinity:wollastonite_dust')
        .chancedOutput('gtceu:magnesia_dust', 4000)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        
    // #region Spessartine
    // Mn3Al2(SiO4)3 + Na2CO3 + 3CaO + 1.5O2 -> 2NaAlO2 + 3CaSiO3 + 3MnO2 + 2CO2
    event.recipes.gtceu.electric_blast_furnace('spessartine_sintering')
        .itemInputs('20x gtceu:spessartine_dust')
        .itemInputs('6x gtceu:soda_ash_dust')
        .itemInputs('6x gtceu:quicklime_dust')
        .inputFluids('1500x gtceu:oxygen')
        .itemOutputs('tfinfinity:spessartine_sinter_cake')
        .outputFluids('2000x gtceu:carbon_dioxide')
        .blastFurnaceTemp(1700)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    
    event.recipes.gtceu.chemical_bath('wash_spessartine_sinter_cake')
        .itemInputs('tfinfinity:spessartine_sinter_cake')
        .inputFluids('4000x minecraft:water')
        .outputFluids('2000x tfinfinity:sodium_aluminate')
        .itemOutputs('15x tfinfinity:spessartine_sludge_residue_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.centrifuge('spessartine_sludge_separation')
        .itemInputs('tfinfinity:spessartine_sludge_residue_dust')
        .itemOutputs('tfinfinity:wollastonite_dust')
        .chancedOutput('gtceu:pyrolusite_dust', 6000)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Uvarovite
    // Ca3Cr2Si3O12 + 2Na2CO3 + 1.5O2 -> 2Na2CrO4 + 3CaSiO3 + 2CO2
    event.recipes.gtceu.electric_blast_furnace('uvarovite_sintering')
        .itemInputs('20x gtceu:uvarovite_dust')
        .itemInputs('12x gtceu:soda_ash_dust')
        .inputFluids('1500x gtceu:oxygen')
        .itemOutputs('tfinfinity:uvarovite_sinter_cake')
        .outputFluids('2000x gtceu:carbon_dioxide')
        .blastFurnaceTemp(2000)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
    
    event.recipes.gtceu.chemical_bath('wash_uvarovite_sinter_cake')
        .itemInputs('tfinfinity:uvarovite_sinter_cake')
        .inputFluids('2000x minecraft:water')
        .outputFluids('2000x tfinfinity:sodium_chromate')
        .itemOutputs('15x tfinfinity:wollastonite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}