// #region TFC Data
const registerTetrahedriteHeatData = (event) => {
    event.heat({
        ingredient: 'gtceu:tetrahedrite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:tetrahedrite_dust')
    
    event.heat({
        ingredient: 'gtceu:small_tetrahedrite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:small_tetrahedrite_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_tetrahedrite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:tiny_tetrahedrite_dust')
}

const registerTetrahedriteRecipes = (event) => {
    event.remove({ id: 'gtceu:electric_blast_furnace/tetrahedrite_metallurgy' });

    // #region Primitive Processing
    event.recipes.tfc.heating('gtceu:tetrahedrite_dust', 700)
        .resultItem(TFC.isp.of('gtceu:ferrous_copper_sulfide_dust').copyHeat())
        .id('tfinfinity:heating/tetrahedrite_dust')
        
    event.recipes.tfc.heating('gtceu:small_tetrahedrite_dust', 700)
        .resultItem(TFC.isp.of('gtceu:small_ferrous_copper_sulfide_dust').copyHeat())
        .id('tfinfinity:heating/small_tetrahedrite_dust')
        
    event.recipes.tfc.heating('gtceu:tiny_tetrahedrite_dust', 700)
        .resultItem(TFC.isp.of('gtceu:tiny_ferrous_copper_sulfide_dust').copyHeat())
        .id('tfinfinity:heating/tiny_tetrahedrite_dust')
    
    // #region LV Processing
    // Cu2FeSbS3 + 3O -> CuO + 0.75Sb2O3 + 2SO2
    event.recipes.tfinfinity.roaster('oxidative_roasting_tetrahedrite')
        .itemInputs('gtceu:tetrahedrite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:cupric_oxide_dust', '3x gtceu:tiny_antimony_trioxide_dust')
        .outputFluids('2000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}