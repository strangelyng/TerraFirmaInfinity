// #region TFC Data
const registerBismuthiniteHeatData = (event) => {
    event.heat({
        ingredient: 'tfinfinity:bismuthinite_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:bismuthinite_dust')
    
    event.heat({
        ingredient: 'tfinfinity:small_bismuthinite_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:small_bismuthinite_dust')
    
    event.heat({
        ingredient: 'tfinfinity:tiny_bismuthinite_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:tiny_bismuthinite_dust')
    
    event.heat({
        ingredient: 'gtceu:bismuth_oxide_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:bismuth_oxide_dust')
    
    event.heat({
        ingredient: 'gtceu:small_bismuth_oxide_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:small_bismuth_oxide_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_bismuth_oxide_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:tiny_bismuth_oxide_dust')
}

const registerBismuthiniteRecipes = (event) => {
    // #region Primitive Processing
    event.recipes.tfc.heating('tfinfinity:bismuthinite_dust', 220)
        .resultItem(TFC.isp.of('gtceu:bismuth_oxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_bismuthinite_dust')
        
    event.recipes.tfc.heating('tfinfinity:small_bismuthinite_dust', 220)
        .resultItem(TFC.isp.of('gtceu:small_bismuth_oxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_small_bismuthinite_dust')
        
    event.recipes.tfc.heating('tfinfinity:tiny_bismuthinite_dust', 220)
        .resultItem(TFC.isp.of('gtceu:tiny_bismuth_oxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_tiny_bismuthinite_dust')

    event.recipes.tfc.heating('gtceu:bismuth_oxide_dust', 270)
        .resultFluid(Fluid.of('gtceu:bismuth', 128))
        .id('tfinfinity:heating/bismuth_oxide_dust')

    event.recipes.tfc.heating('gtceu:small_bismuth_oxide_dust', 270)
        .resultFluid(Fluid.of('gtceu:bismuth', 32))
        .id('tfinfinity:heating/small_bismuth_oxide_dust')

    event.recipes.tfc.heating('gtceu:tiny_bismuth_oxide_dust', 270)
        .resultFluid(Fluid.of('gtceu:bismuth', 14))
        .id('tfinfinity:heating/tiny_bismuth_oxide_dust')

    // #region LV Processing
    // Chalcocite Oxidative Roasting (Bi2S3 + 3O -> Bi2O3 + SO2)
    event.recipes.tfinfinity.roaster('oxidative_roasting_bismuthinite')
        .itemInputs('tfinfinity:bismuthinite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:bismuth_oxide_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}