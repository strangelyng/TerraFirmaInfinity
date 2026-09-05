// #region TFC Data
const registerPentlanditeHeatData = (event) => {
    event.heat({
        ingredient: 'gtceu:pentlandite_dust',
        heatCapacity: 0.48
    }, 'tfinfinity:pentlandite_dust')
    
    event.heat({
        ingredient: 'gtceu:small_pentlandite_dust',
        heatCapacity: 0.48
    }, 'tfinfinity:small_pentlandite_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_pentlandite_dust',
        heatCapacity: 0.48
    }, 'tfinfinity:tiny_pentlandite_dust')
    
    event.heat({
        ingredient: 'gtceu:ferronickel_oxide_dust',
        heatCapacity: 0.48
    }, 'tfinfinity:ferronickel_oxide_dust')
    
    event.heat({
        ingredient: 'gtceu:small_ferronickel_oxide_dust',
        heatCapacity: 0.48
    }, 'tfinfinity:small_ferronickel_oxide_dust')
    
    event.heat({
        ingredient: 'gtceu:tiny_ferronickel_oxide_dust',
        heatCapacity: 0.48
    }, 'tfinfinity:tiny_ferronickel_oxide_dust')

    event.fluidHeat({
        fluid: 'gtceu:crude_ferronickel',
        meltTemperature: 1500,
        specificHeatCapacity: 0.00625
    }, 'tfinfinity:crude_ferronickel')
    
    event.fluidHeat({
        fluid: 'gtceu:ferronickel',
        meltTemperature: 1500,
        specificHeatCapacity: 0.00625
    }, 'tfinfinity:ferronickel')
}

const registerPentlanditeRecipes = (event) => {
    event.remove({ id: 'gtceu:electric_blast_furnace/pentlandite_metallurgy' })

    // #region Primitive Processing
    event.recipes.tfc.heating('gtceu:pentlandite_dust', 600)
        .resultItem(TFC.isp.of('gtceu:ferronickel_oxide_dust'))
        .id('tfinfinity:heating/roasting_pentlandite_dust')
        
    event.recipes.tfc.heating('gtceu:small_pentlandite_dust', 600)
        .resultItem(TFC.isp.of('gtceu:small_ferronickel_oxide_dust'))
        .id('tfinfinity:heating/roasting_small_pentlandite_dust')
        
    event.recipes.tfc.heating('gtceu:tiny_pentlandite_dust', 600)
        .resultItem(TFC.isp.of('gtceu:tiny_ferronickel_oxide_dust'))
        .id('tfinfinity:heating/roasting_tiny_pentlandite_dust')

    event.recipes.tfc.heating('gtceu:ferronickel_oxide_dust', 1455)
        .resultFluid(Fluid.of('gtceu:crude_ferronickel', 108))
        .id('tfinfinity:heating/ferronickel_oxide_dust')

    event.recipes.tfc.heating('gtceu:small_ferronickel_oxide_dust', 1455)
        .resultFluid(Fluid.of('gtceu:crude_ferronickel', 27))
        .id('tfinfinity:heating/small_ferronickel_oxide_dust')

    event.recipes.tfc.heating('gtceu:tiny_ferronickel_oxide_dust', 1455)
        .resultFluid(Fluid.of('gtceu:crude_ferronickel', 12))
        .id('tfinfinity:heating/tiny_ferronickel_oxide_dust')

    event.recipes.tfc.blast_furnace(
        Fluid.of('gtceu:nickel_matte', 1),
        'gtceu:silicon_dioxide_dust',
        Fluid.of('gtceu:crude_ferronickel')
    ).id('tfinfinity:blast_furnace/nickel_matte')

    // #region LV Process

    // Pentlandite Oxidative Roasting (Ni9S8 + 3O -> NiO + SO2)
    event.recipes.tfinfinity.roaster('oxidative_roasting_pentlandite')
        .itemInputs('gtceu:pentlandite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:garnierite_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
}