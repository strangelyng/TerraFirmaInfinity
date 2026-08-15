function registerTFISiliconCarbideRecipes(event) {
    event.recipes.gtceu.electric_blast_furnace('tfi:silicon_carbide_dust')
        .itemInputs('gtceu:silicon_dioxide_dust', '3x gtceu:graphite_dust')
        .itemOutputs('tfi:silicon_carbide_dust') // Replace Dust with Crude Ingot that is milled into dust
        .outputFluids('2000x gtceu:carbon_monoxide')
        .blastFurnaceTemp(2773)
        .duration(400).EUt(GTValues.VA[GTValues.MV])
}