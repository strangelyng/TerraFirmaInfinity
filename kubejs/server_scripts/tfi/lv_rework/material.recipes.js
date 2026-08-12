function registerTFILVMaterialRecipes(event) {
    // #region Bauxite Processing
    event.recipes.gtceu.chemical_reactor('tfi:bauxite_slurry')
        .itemInputs('gtceu:crushed_bauxite_ore')
        .inputFluids('1000x tfc:lye')
        .outputFluids('1000x gtceu:bauxite_slurry')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.centrifuge('tfi:sodium_aluminate')
        .inputFluids('1000x gtceu:bauxite_slurry')
        .outputFluids('600x tfi:sodium_aluminate')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu.distillery('tfi:sodium_aluminate_dust')
        .inputFluids('1000x tfi:sodium_aluminate')
        .itemOutputs('tfi:sodium_aluminate_dust')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu.chemical_reactor('tfi:sodium_aluminate_dust')
        .inputFluids('2000x tfi:sodium_aluminate', '3000x minecraft:water', '1000x gtceu:carbon_dioxide')
        .itemOutputs('2x tfi:sodium_aluminate_dust', 'gtceu:soda_ash_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.autoclave('tfi:sodium_aluminate_dust')
        .notConsumableItem('tfi:flawless_sodium_aluminate_gem')
        .inputFluids('250x tfi:sodium_aluminate')
        .itemOutputs('tfi:sodium_aluminate_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.electric_blast_furnace('tfi:alumina_dust')
        .inputItems('2x sodium_aluminate_dust')
        .outputItems('1x alumina_dust')
        .duration(200)
        .blastFurnaceTemp(1470)
        .EUt(GTValues.VA[GTValues.MV], 1)
    
    event.recipes.gtceu.electrolyzer('tfi:aluminium_dust_from_solution')
        .inputFluids('1000x tfi:cryolite')
        .inputItems('tfi:alumina_dust')
        .outputFluids('1000x gtceu:aluminium', '1000x gtceu:carbon_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
    
}