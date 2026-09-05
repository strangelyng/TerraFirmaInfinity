// priority: 0
"use_strict";

const registerSulfideMineralData = (event) => {
    registerChalcociteHeatData(event);
    registerChalcopyriteHeatData(event);
    registerGalenaHeatData(event);
    registerPyriteHeatData(event);
    registerSphaleriteHeatData(event);
}

const registerSulfideMineralRecipes = (event) => {
    registerChalcociteRecipes(event);
    registerChalcopyriteRecipes(event);
    registerGalenaRecipes(event);
    registerPyriteRecipes(event);
    registerSphaleriteRecipes(event);

    // #region Cobaltite
    /*
    event.remove({ id: 'gtceu:electric_blast_furnace/cobaltite_metallurgy' });

    event.recipes.tfinfinity.roaster('oxidative_roasting_cobaltite')
        .itemInputs('gtceu:cobaltite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:cobalt_oxide_dust', 'gtceu:arsenic_trioxide_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Tetrahedrite
    event.remove({ id: 'gtceu:electric_blast_furnace/tetrahedrite_metallurgy' });
    
    event.recipes.tfinfinity.roaster('oxidative_roasting_tetrahedrite')
        .itemInputs('gtceu:tetrahedrite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:cupric_oxide_dust', '3x gtceu:tiny_antimony_trioxide_dust')
        .outputFluids('2000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Pentlandite
    event.remove({ id: 'gtceu:electric_blast_furnace/pentlandite_metallurgy' });

    event.recipes.tfinfinity.roaster('oxidative_roasting_pentlandite')
        .itemInputs('gtceu:pentlandite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:garnierite_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Stibnite
    event.remove({ id: 'gtceu:electric_blast_furnace/stibnite_metallurgy' });

    event.recipes.tfinfinity.roaster('oxidative_roasting_stibnite')
        .itemInputs('gtceu:stibnite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:antimony_trioxide_dust')
        .outputFluids('1500x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
    */
}