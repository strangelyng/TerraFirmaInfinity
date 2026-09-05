// #region TFC Data
const registerChalcopyriteHeatData = (event) => {
    event.heat({
        ingredient: 'gtceu:chalcopyrite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:chalcopyrite_dust')
    
    event.heat({
        ingredient: 'gtceu:small_chalcopyrite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:small_chalcopyrite_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_chalcopyrite_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:tiny_chalcopyrite_dust')

    event.heat({
        ingredient: 'gtceu:ferrous_copper_sulfide_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:ferrous_copper_sulfide_dust')

    event.heat({
        ingredient: 'gtceu:small_ferrous_copper_sulfide_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:small_ferrous_copper_sulfide_dust')

    event.heat({
        ingredient: 'gtceu:tiny_ferrous_copper_sulfide_dust',
        heatCapacity: 0.35
    }, 'tfinfinity:tiny_ferrous_copper_sulfide_dust')

    event.fluidHeat({
        fluid: 'gtceu:ferrous_copper_sulfide',
        meltTemperature: 1250,
        specificHeatCapacity: 0.008571429
    }, 'tfinfinity:ferrous_copper_sulfide')

    event.fluidHeat({
        fluid: 'gtceu:copper_matte',
        meltTemperature: 1250,
        specificHeatCapacity: 0.008571429
    }, 'tfinfinity:copper_matte')
}

const registerChalcopyriteRecipes = (event) => {
    event.remove({ id: 'gtceu:electric_blast_furnace/chalcopyrite_metallurgy' });

    // #region Primitive Processing
    event.recipes.tfc.heating('gtceu:chalcopyrite_dust', 700)
        .resultItem(TFC.isp.of('gtceu:ferrous_copper_sulfide_dust').copyHeat())
        .id('tfinfinity:heating/chalcopyrite_dust')
        
    event.recipes.tfc.heating('gtceu:small_chalcopyrite_dust', 700)
        .resultItem(TFC.isp.of('gtceu:small_ferrous_copper_sulfide_dust').copyHeat())
        .id('tfinfinity:heating/small_chalcopyrite_dust')
        
    event.recipes.tfc.heating('gtceu:tiny_chalcopyrite_dust', 700)
        .resultItem(TFC.isp.of('gtceu:tiny_ferrous_copper_sulfide_dust').copyHeat())
        .id('tfinfinity:heating/tiny_chalcopyrite_dust')

    event.recipes.tfc.heating('gtceu:ferrous_copper_sulfide_dust', 1250)
        .resultFluid(Fluid.of('gtceu:ferrous_copper_sulfide', 108))
        .id('tfinfinity:heating/ferrous_copper_sulfide_dust')

    event.recipes.tfc.heating('gtceu:small_ferrous_copper_sulfide_dust', 1250)
        .resultFluid(Fluid.of('gtceu:ferrous_copper_sulfide', 27))
        .id('tfinfinity:heating/small_ferrous_copper_sulfide_dust')

    event.recipes.tfc.heating('gtceu:tiny_ferrous_copper_sulfide_dust', 1250)
        .resultFluid(Fluid.of('gtceu:ferrous_copper_sulfide', 12))
        .id('tfinfinity:heating/tiny_ferrous_copper_sulfide_dust')

    event.recipes.tfc.blast_furnace(
        Fluid.of('gtceu:copper_matte', 1),
        'gtceu:silicon_dioxide_dust',
        Fluid.of('gtceu:ferrous_copper_sulfide', 1)
    ).id('tfinfinity:blast_furnace/copper_matte')

    // #region LV Processing
    // CuFeS2 + SiO2 + 3O -> CuO + FeS + 2SO2
    event.recipes.tfinfinity.roaster('oxidative_roasting_chalcopyrite')
        .itemInputs('gtceu:chalcopyrite_dust', 'gtceu:silicon_dioxide_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:cupric_oxide_dust', 'gtceu:ferrosilite_dust')
        .outputFluids('2000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}