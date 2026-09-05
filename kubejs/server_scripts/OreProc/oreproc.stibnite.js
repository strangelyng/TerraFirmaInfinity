// #region TFC Data
const registerStibniteHeatData = (event) => {
    event.heat({
        ingredient: 'gtceu:stibnite_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:stibnite_dust')
    
    event.heat({
        ingredient: 'gtceu:small_stibnite_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:small_stibnite_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_stibnite_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:tiny_stibnite_dust')
    
    event.heat({
        ingredient: 'gtceu:antimony_trioxide_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:antimony_trioxide_dust')
    
    event.heat({
        ingredient: 'gtceu:small_antimony_trioxide_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:small_antimony_trioxide_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_antimony_trioxide_dust',
        heatCapacity: 0.14
    }, 'tfinfinity:tiny_antimony_trioxide_dust')

    event.fluidHeat({
        fluid: 'gtceu:antimony',
        meltTemperature: 630,
        specificHeatCapacity: 0.021428572
    }, 'tfinfinity:antimony')
}

const registerStibniteRecipes = (event) => {
    event.remove({ id: 'gtceu:electric_blast_furnace/stibnite_metallurgy' });

    // #region Primitive Processing
    event.recipes.tfc.heating('gtceu:stibnite_dust', 350)
        .resultItem(TFC.isp.of('gtceu:antimony_trioxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_stibnite_dust')
        
    event.recipes.tfc.heating('gtceu:small_stibnite_dust', 350)
        .resultItem(TFC.isp.of('gtceu:small_antimony_trioxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_small_stibnite_dust')
        
    event.recipes.tfc.heating('gtceu:tiny_stibnite_dust', 350)
        .resultItem(TFC.isp.of('gtceu:tiny_antimony_trioxide_dust').copyHeat())
        .id('tfinfinity:heating/roasting_tiny_stibnite_dust')

    event.recipes.tfc.heating('gtceu:antimony_trioxide_dust', 800)
        .resultFluid(Fluid.of('gtceu:antimony', 128))
        .id('tfinfinity:heating/antimony_trioxide_dust')

    event.recipes.tfc.heating('gtceu:small_antimony_trioxide_dust', 800)
        .resultFluid(Fluid.of('gtceu:antimony', 32))
        .id('tfinfinity:heating/small_antimony_trioxide_dust')

    event.recipes.tfc.heating('gtceu:tiny_antimony_trioxide_dust', 800)
        .resultFluid(Fluid.of('gtceu:antimony', 14))
        .id('tfinfinity:heating/tiny_antimony_trioxide_dust')

    // #region LV Processing
    // Stibnite Oxidative Roasting (Sb2S3 + 3O -> Sb2O3 + 1.5SO2)
    event.recipes.tfinfinity.roaster('oxidative_roasting_stibnite')
        .itemInputs('gtceu:stibnite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:antimony_trioxide_dust')
        .outputFluids('1500x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}