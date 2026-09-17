const registerTFISpodumeneRecipes = (event) => {
    // LiAlSi2O6 -> 0.5Li2O.Al2O3.4SiO2
    event.recipes.gtceu.electric_blast_furnace('beta_spodumene_dust')
        .itemInputs('10x gtceu:spodumene_dust')
        .itemOutputs('10x tfinfinity:beta_spodumene_dust')
        .blastFurnaceTemp(1700)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_bath('beta_spodumene_acid_leaching')
        .itemInputs('20x tfinfinity:beta_spodumene_dust')
        .itemOutputs('27x tfinfinity:spodumene_sulfate_cake_dust')
        .inputFluids('1000x gtceu:sulfuric_acid')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_bath('wash_spodumene_sulfate_cake')
        .itemInputs('27x tfinfinity:spodumene_sulfate_cake_dust')
        .inputFluids('2000x minecraft:water')
        .outputFluids('2000x tfinfinity:lithium_sulfate')
        .itemOutputs('20x tfinfinity:spodumene_sludge_residue_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('lithium_sulfate_carbonation')
        .inputFluids('2000x tfinfinity:lithium_sulfate')
        .itemInputs('6x gtceu:soda_ash_dust')
        .itemOutputs('6x tfinfinity:lithium_carbonate_dust')
        .outputFluids('1000x tfinfinity:sodium_sulfate_solution')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('lithium_carbonate_crystallization')
        .itemInputs('6x tfinfinity:lithium_carbonate_dust')
        .inputFluids('2000x gtceu:hydrochloric_acid')
        .outputFluids('2000x tfinfinity:lithium_chloride_solution')
        .outputFluids('1000x gtceu:carbon_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    // TODO: Distill into Crystals, then Electrolyze into Lithium Metal

    // Secondary Recovery
    // (Al2O3.4SiO2) + 2.5Na2CO3 ->[heat] NaAlO2 + 2Na2SiO3 + 2.5CO2 ^
    event.recipes.gtceu.electric_blast_furnace('spodumene_sludge_residue_dust_separation')
        .itemInputs('10x tfinfinity:spodumene_sludge_residue_dust')
        .itemInputs('15x gtceu:soda_ash_dust')
        .itemOutputs('tfinfinity:spodumene_residue_clinker')
        .outputFluids('2500x gtceu:carbon_dioxide')
        .blastFurnaceTemp(1700)
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_bath('wash_spodumene_residue_clinker')
        .itemInputs('tfinfinity:spodumene_residue_clinker')
        .inputFluids('2000x minecraft:water')
        .outputFluids('1000x tfinfinity:sodium_aluminate')
        .itemOutputs('12x tfinfinity:sodium_metasilicate_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu.chemical_reactor('silicon_dioxide_from_sodium_metasilicate')
        .itemInputs('6x tfinfinity:sodium_metasilicate_dust')
        .inputFluids('2000x gtceu:hydrochloric_acid')
        .itemOutputs('3x gtceu:silicon_dioxide_dust')
        .outputFluids('2000x gtceu:salt_water')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}