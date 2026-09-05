// #region TFC Data
const registerPyriteHeatData = (event) => {
    event.heat({
        ingredient: 'gtceu:pyrite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:pyrite_dust')
    
    event.heat({
        ingredient: 'gtceu:small_pyrite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:small_pyrite_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_pyrite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:tiny_pyrite_dust')

    event.heat({
        ingredient: 'gtceu:pyrite_cinder_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:pyrite_cinder_dust')

    event.heat({
        ingredient: 'gtceu:small_pyrite_cinder_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:small_pyrite_cinder_dust')

    event.heat({
        ingredient: 'gtceu:tiny_pyrite_cinder_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:tiny_pyrite_cinder_dust')
}

const registerPyriteRecipes = (event) => {
    event.remove({ id: 'gtceu:electric_blast_furnace/pyrite_metallurgy' })

    // #region Primitive Processing
    event.recipes.tfc.heating('gtceu:pyrite_dust', 750)
        .resultItem(TFC.isp.of('gtceu:pyrite_cinder_dust').copyHeat())
        .id('tfinfinity:heating/roasting_pyrite_dust')
        
    event.recipes.tfc.heating('gtceu:small_pyrite_dust', 750)
        .resultItem(TFC.isp.of('gtceu:small_pyrite_cinder_dust').copyHeat())
        .id('tfinfinity:heating/roasting_small_pyrite_dust')

    event.recipes.tfc.heating('gtceu:tiny_pyrite_dust', 750)
        .resultItem(TFC.isp.of('gtceu:tiny_pyrite_cinder_dust').copyHeat())
        .id('tfinfinity:heating/roasting_tiny_pyrite_dust')

    event.recipes.tfc.heating('gtceu:pyrite_cinder_dust', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 108))
        .id('tfinfinity:heating/pyrite_cinder_dust')

    event.recipes.tfc.heating('gtceu:small_pyrite_cinder_dust', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 27))
        .id('tfinfinity:heating/small_pyrite_cinder_dust')

    event.recipes.tfc.heating('gtceu:tiny_pyrite_cinder_dust', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 12))
        .id('tfinfinity:heating/tiny_pyrite_cinder_dust')

    // #region LV Processing
    // Pyrite Oxidative Roasting (FeS2 + 3O -> Fe2O3 + 2SO2)
    event.recipes.tfinfinity.roaster('oxidative_roasting_pyrite')
        .itemInputs('gtceu:pyrite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:hematite_dust')
        .outputFluids('2000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}