// #region TFC Data
const registerCobaltiteHeatData = (event) => {
    event.heat({
        ingredient: 'gtceu:cobaltite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:cobaltite_dust')
    
    event.heat({
        ingredient: 'gtceu:small_cobaltite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:small_cobaltite_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_cobaltite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:tiny_cobaltite_dust')
    
    event.heat({
        ingredient: 'gtceu:cobalt_oxide_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:cobalt_oxide_dust')
    
    event.heat({
        ingredient: 'gtceu:small_cobalt_oxide_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:small_cobalt_oxide_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_cobalt_oxide_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:tiny_cobalt_oxide_dust')
    
    event.fluidHeat({
        fluid: 'gtceu:crude_cobalt',
        meltTemperature: 1495,
        specificHeatCapacity: 0.00625
    }, 'tfinfinity:crude_cobalt')
    
    event.fluidHeat({
        fluid: 'gtceu:cobalt_matte',
        meltTemperature: 1495,
        specificHeatCapacity: 0.00625
    }, 'tfinfinity:cobalt_matte')
}

const registerCobaltiteRecipes = (event) => {
    event.remove({ id: 'gtceu:electric_blast_furnace/cobaltite_metallurgy' });

    // #region Primitive Processing
    event.recipes.tfc.heating('gtceu:cobaltite_dust', 700)
        .resultItem(TFC.isp.of('gtceu:cobalt_oxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_cobaltite_dust')
        
    event.recipes.tfc.heating('gtceu:small_cobaltite_dust', 700)
        .resultItem(TFC.isp.of('gtceu:small_cobalt_oxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_small_cobaltite_dust')
        
    event.recipes.tfc.heating('gtceu:tiny_cobaltite_dust', 700)
        .resultItem(TFC.isp.of('gtceu:tiny_cobalt_oxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_tiny_cobaltite_dust')
        
    event.recipes.tfc.heating('gtceu:cobalt_oxide_dust', 1495)
        .resultFluid(Fluid.of('gtceu:crude_cobalt', 108))
        .id('tfinfinity:heating/cobalt_oxide_dust')
        
    event.recipes.tfc.heating('gtceu:small_cobalt_oxide_dust', 1495)
        .resultFluid(Fluid.of('gtceu:crude_cobalt', 27))
        .id('tfinfinity:heating/small_cobalt_oxide_dust')
        
    event.recipes.tfc.heating('gtceu:tiny_cobalt_oxide_dust', 1495)
        .resultFluid(Fluid.of('gtceu:crude_cobalt', 12))
        .id('tfinfinity:heating/tiny_cobalt_oxide_dust')

    event.recipes.tfc.blast_furnace(
        Fluid.of('gtceu:cobalt_matte', 1),
        'tfc:powder/flux',
        Fluid.of('gtceu:crude_cobalt', 1)
    ).id('tfinfinity:blast_furnace/cobalt_matte')
        
    // #region LV Processing
    // Cobaltite Oxidative Roasting (CoAsS + 3O -> CoO + As2O3 + SO2)
    event.recipes.tfinfinity.roaster('oxidative_roasting_cobaltite')
        .itemInputs('gtceu:cobaltite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:cobalt_oxide_dust', 'gtceu:arsenic_trioxide_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}