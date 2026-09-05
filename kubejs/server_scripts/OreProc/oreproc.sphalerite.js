// #region TFC Data
const registerSphaleriteHeatData = (event) => {
    event.heat({
        ingredient: 'gtceu:sphalerite_dust',
        heatCapacity: 0.21
    }, 'tfinfinity:sphalerite_dust')
    
    event.heat({
        ingredient: 'gtceu:small_sphalerite_dust',
        heatCapacity: 0.21
    }, 'tfinfinity:small_sphalerite_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_sphalerite_dust',
        heatCapacity: 0.21
    }, 'tfinfinity:tiny_sphalerite_dust')
    
    event.heat({
        ingredient: 'gtceu:zincite_dust',
        heatCapacity: 0.21
    }, 'tfinfinity:zincite_dust')
    
    event.heat({
        ingredient: 'gtceu:small_zincite_dust',
        heatCapacity: 0.21
    }, 'tfinfinity:small_zincite_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_zincite_dust',
        heatCapacity: 0.21
    }, 'tfinfinity:tiny_zincite_dust')
}

const registerSphaleriteRecipes = (event) => {
    event.remove({ id: 'gtceu:electric_blast_furnace/sphalerite_metallurgy' });

    // #region Primitive Processing
    event.recipes.tfc.heating('gtceu:sphalerite_dust', 800)
        .resultItem(TFC.isp.of('gtceu:zincite_dust').copyHeat())
        .id('tfinfinity:heating/roasting/sphalerite_dust')
        
    event.recipes.tfc.heating('gtceu:small_sphalerite_dust', 800)
        .resultItem(TFC.isp.of('gtceu:small_zincite_dust').copyHeat())
        .id('tfinfinity:heating/roasting/small_sphalerite_dust')
        
    event.recipes.tfc.heating('gtceu:tiny_sphalerite_dust', 800)
        .resultItem(TFC.isp.of('gtceu:tiny_zincite_dust').copyHeat())
        .id('tfinfinity:heating/roasting/tiny_sphalerite_dust')
        
    event.recipes.tfc.heating('gtceu:zincite_dust', 1000)
        .resultFluid(Fluid.of('gtceu:zinc', 128))
        .id('tfinfinity:heating/zincite_dust')
        
    event.recipes.tfc.heating('gtceu:small_zincite_dust', 1000)
        .resultFluid(Fluid.of('gtceu:zinc', 32))
        .id('tfinfinity:heating/small_zincite_dust')
        
    event.recipes.tfc.heating('gtceu:tiny_zincite_dust', 1000)
        .resultFluid(Fluid.of('gtceu:zinc', 14))
        .id('tfinfinity:heating/tiny_zincite_dust')

    // #region LV Processing
    // Sphalerite Oxidative Roasting (ZnS + 3O -> ZnO + SO2)
    event.recipes.tfinfinity.roaster('oxidative_roasting_sphalerite')
        .itemInputs('gtceu:sphalerite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:zincite_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}