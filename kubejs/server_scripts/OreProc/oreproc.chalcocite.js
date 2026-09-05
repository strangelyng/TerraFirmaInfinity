// #region TFC Data
const registerChalcociteHeatData = (event) => {
    event.heat({
        ingredient: 'gtceu:chalcocite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:chalcocite_dust')
    
    event.heat({
        ingredient: 'gtceu:small_chalcocite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:small_chalcocite_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_chalcocite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:tiny_chalcocite_dust')
    
    event.heat({
        ingredient: 'gtceu:cuprous_oxide_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:cuprous_oxide_dust')
    
    event.heat({
        ingredient: 'gtceu:small_cuprous_oxide_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:small_cuprous_oxide_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_cuprous_oxide_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:tiny_cuprous_oxide_dust')
}

const registerChalcociteRecipes = (event) => {
    event.remove({ id: 'gtceu:electric_blast_furnace/chalcocite_metallurgy' });

    // #region Primitive Processing
    event.recipes.tfc.heating('gtceu:chalcocite_dust', 775)
        .resultItem(TFC.isp.of('gtceu:cuprous_oxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_chalcocite_dust')
        
    event.recipes.tfc.heating('gtceu:small_chalcocite_dust', 775)
        .resultItem(TFC.isp.of('gtceu:small_cuprous_oxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_small_chalcocite_dust')
        
    event.recipes.tfc.heating('gtceu:tiny_chalcocite_dust', 775)
        .resultItem(TFC.isp.of('gtceu:tiny_cuprous_oxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_tiny_chalcocite_dust')

    event.recipes.tfc.heating('gtceu:cuprous_oxide_dust', 1130)
        .resultFluid(Fluid.of('gtceu:copper', 128))
        .id('tfinfinity:heating/cuprous_oxide_dust')

    event.recipes.tfc.heating('gtceu:small_cuprous_oxide_dust', 1130)
        .resultFluid(Fluid.of('gtceu:copper', 32))
        .id('tfinfinity:heating/small_cuprous_oxide_dust')

    event.recipes.tfc.heating('gtceu:tiny_cuprous_oxide_dust', 1130)
        .resultFluid(Fluid.of('gtceu:copper', 14))
        .id('tfinfinity:heating/tiny_cuprous_oxide_dust')

    // #region LV Processing
    // Chalcocite Oxidative Roasting (Cu2S + 3O -> Cu2O + SO2)
    event.recipes.tfinfinity.roaster('oxidative_roasting_chalcocite')
        .itemInputs('gtceu:chalcocite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:cuprous_oxide_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}