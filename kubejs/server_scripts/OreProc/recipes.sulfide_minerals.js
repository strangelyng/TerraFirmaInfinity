// priority: 0
"use_strict";

const registerSulfideMineralData = (event) => {
    registerChalcociteHeatData(event);
    registerGalenaHeatData(event);
}

const registerSulfideMineralRecipes = (event) => {
    registerChalcociteRecipes(event);
    registerGalenaRecipes(event);

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

    // #region Pyrite
    event.remove({ id: 'gtceu:electric_blast_furnace/pyrite_metallurgy' });

    event.recipes.tfinfinity.roaster('oxidative_roasting_pyrite')
        .itemInputs('gtceu:pyrite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:hematite_dust')
        .outputFluids('2000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Sphalerite
    event.remove({ id: 'gtceu:electric_blast_furnace/sphalerite_metallurgy' });

    // Sphalerite Oxidative Roasting (ZnS + 3O -> ZnO + SO2)
    event.recipes.tfinfinity.roaster('oxidative_roasting_sphalerite')
        .itemInputs('gtceu:sphalerite_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:zincite_dust')
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

    // #region Chalcopyrite
    event.remove({ id: 'gtceu:electric_blast_furnace/chalcopyrite_metallurgy' });

    event.recipes.tfinfinity.roaster('oxidative_roasting_chalcopyrite')
        .itemInputs('gtceu:chalcopyrite_dust', 'gtceu:silicon_dioxide_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('gtceu:cupric_oxide_dust', 'gtceu:ferrosilite_dust')
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