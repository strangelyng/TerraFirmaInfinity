// priority: 0
"use_strict";

const registerSulfideMineralData = (event) => {
    registerChalcociteHeatData(event);
    registerChalcopyriteHeatData(event);
    registerCobaltiteHeatData(event);
    registerGalenaHeatData(event);
    registerPentlanditeHeatData(event);
    registerPyriteHeatData(event);
    registerSphaleriteHeatData(event);
    registerStibniteHeatData(event);
}

const registerSulfideMineralRecipes = (event) => {
    registerChalcociteRecipes(event);
    registerChalcopyriteRecipes(event);
    registerCobaltiteRecipes(event);
    registerGalenaRecipes(event);
    registerPentlanditeRecipes(event);
    registerPyriteRecipes(event);
    registerSphaleriteRecipes(event);
    registerStibniteRecipes(event);

    /*
    // #region Tetrahedrite
    event.remove({ id: 'gtceu:electric_blast_furnace/tetrahedrite_metallurgy' });
    
    event.recipes.tfinfinity.roaster('oxidative_roasting_tetrahedrite')
        .itemInputs('gtceu:tetrahedrite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:cupric_oxide_dust', '3x gtceu:tiny_antimony_trioxide_dust')
        .outputFluids('2000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
    */
}