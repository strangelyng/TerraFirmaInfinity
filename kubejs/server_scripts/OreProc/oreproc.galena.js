// #region TFC Data
const registerGalenaHeatData = (event) => {
    event.heat({
        ingredient: 'gtceu:galena_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:galena_dust')
    
    event.heat({
        ingredient: 'gtceu:small_galena_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:small_galena_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_galena_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:tiny_galena_dust')
    
    event.heat({
        ingredient: 'gtceu:massicot_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:massicot_dust')
    
    event.heat({
        ingredient: 'gtceu:small_massicot_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:small_massicot_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_massicot_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:tiny_massicot_dust')

    event.fluidHeat({
        fluid: 'gtceu:crude_lead',
        meltTemperature: 888,
        specificHeatCapacity: 0.021428572
    }, 'tfinfinity:crude_lead')
}

const registerGalenaRecipes = (event) => {
    event.remove({ id: 'gtceu:electric_blast_furnace/galena_metallurgy' });

    // #region Primitive Processing
    event.recipes.tfc.heating('gtceu:galena_dust', 700)
        .resultItem(TFC.isp.of('gtceu:massicot_dust').copyHeat())
        .id('tfinfinity:heating/roasting_galena_dust')
        
    event.recipes.tfc.heating('gtceu:small_galena_dust', 700)
        .resultItem(TFC.isp.of('gtceu:small_massicot_dust').copyHeat())
        .id('tfinfinity:heating/roasting_small_galena_dust')
        
    event.recipes.tfc.heating('gtceu:tiny_galena_dust', 700)
        .resultItem(TFC.isp.of('gtceu:tiny_massicot_dust').copyHeat())
        .id('tfinfinity:heating/roasting_tiny_galena_dust')

    event.recipes.tfc.heating('gtceu:massicot_dust', 888)
        .resultFluid(Fluid.of('gtceu:crude_lead', 128))
        .id('tfinfinity:heating/massicot_dust')

    event.recipes.tfc.heating('gtceu:small_massicot_dust', 888)
        .resultFluid(Fluid.of('gtceu:crude_lead', 32))
        .id('tfinfinity:heating/small_massicot_dust')

    event.recipes.tfc.heating('gtceu:tiny_massicot_dust', 888)
        .resultFluid(Fluid.of('gtceu:crude_lead', 14))
        .id('tfinfinity:heating/tiny_massicot_dust')
    
    event.recipes.tfc.blast_furnace(
        Fluid.of('gtceu:lead', 1),
        'tfc:powder/flux',
        Fluid.of('gtceu:crude_lead', 1)
    ).id('tfinfinity:blast_furnace/lead')

    // #region LV Processing
    // Galena Oxidative Roasting (PbS + 3O -> PbO + SO2)
    event.recipes.tfinfinity.roaster('oxidative_roasting_galena')
        .itemInputs('gtceu:galena_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:massicot_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}