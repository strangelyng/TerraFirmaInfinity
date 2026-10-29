// priority: 0
"use_strict";

const registerGTCEURecipes = (event) => {
    event.remove({ type: 'gtceu:primitive_blast_furnace' });

    // #region Primitive Recipes
    event.recipes.tfc.heating(
        'gtceu:compressed_coke_clay',
        1399
    ).resultItem('gtceu:coke_oven_brick').id('tfinfinity:heating/coke_oven_brick')

    event.shaped('4x gtceu:coke_oven_bricks', [
        'BMB',
        'MBM',
        'BMB'
    ], {
        B: 'gtceu:coke_oven_brick',
        M: 'tfc:mortar'
    }).id('gtceu:shaped/casing_coke_bricks')

    // #region Remove Wrought Iron Solidifying
    event.remove({ id: 'gtceu:fluid_solidifier/solidify_wrought_iron_to_ingot' });
    event.remove({ id: 'gtceu:fluid_solidifier/solidify_wrought_iron_to_plate' });
    event.remove({ id: 'gtceu:fluid_solidifier/solidify_wrought_iron_to_nugget' });
    event.remove({ id: 'gtceu:fluid_solidifier/solidify_wrought_iron_block' });

    // #region Remove Annealed Copper Solidification and Recycling
    event.remove({ id: 'gtceu:fluid_solidifier/solidify_annealed_copper_to_ingot' });
    event.remove({ id: 'gtceu:fluid_solidifier/solidify_annealed_copper_to_plate' });
    event.remove({ id: 'gtceu:fluid_solidifier/solidify_annealed_copper_to_nugget' });
    event.remove({ id: 'gtceu:fluid_solidifier/solidify_annealed_copper_block' });

    event.remove({ id: 'gtceu:extractor/extract_annealed_copper_single_cable' });
    event.remove({ id: 'gtceu:extractor/extract_annealed_copper_double_cable' });
    event.remove({ id: 'gtceu:extractor/extract_annealed_copper_quadruple_cable' });
    event.remove({ id: 'gtceu:extractor/extract_annealed_copper_octal_cable' });
    event.remove({ id: 'gtceu:extractor/extract_annealed_copper_hex_cable' });

    event.recipes.gtceu.extractor('extract_annealed_copper_single_cable')
        .itemInputs('gtceu:annealed_copper_single_cable')
        .itemOutputs('gtceu:rubber_ingot')
        .outputFluids('72x gtceu:copper')
        .duration(36)
        .EUt(GTValues.VA[GTValues.LV])
        .category(GTRecipeCategories.EXTRACTOR_RECYCLING)

    event.recipes.gtceu.extractor('extract_annealed_copper_double_cable')
        .itemInputs('gtceu:annealed_copper_double_cable')
        .itemOutputs('gtceu:rubber_ingot')
        .outputFluids('144x gtceu:copper')
        .duration(68)
        .EUt(GTValues.VA[GTValues.LV])
        .category(GTRecipeCategories.EXTRACTOR_RECYCLING)

    event.recipes.gtceu.extractor('extract_annealed_copper_quadruple_cable')
        .itemInputs('gtceu:annealed_copper_quadruple_cable')
        .itemOutputs('2x gtceu:rubber_ingot')
        .outputFluids('288x gtceu:copper')
        .duration(136)
        .EUt(GTValues.VA[GTValues.LV])
        .category(GTRecipeCategories.EXTRACTOR_RECYCLING)

    event.recipes.gtceu.extractor('extract_annealed_copper_octal_cable')
        .itemInputs('gtceu:annealed_copper_octal_cable')
        .itemOutputs('3x gtceu:rubber_ingot')
        .outputFluids('576x gtceu:copper')
        .duration(267)
        .EUt(GTValues.VA[GTValues.LV])
        .category(GTRecipeCategories.EXTRACTOR_RECYCLING)

    event.recipes.gtceu.extractor('extract_annealed_copper_hex_cable')
        .itemInputs('gtceu:annealed_copper_hex_cable')
        .itemOutputs('5x gtceu:rubber_ingot')
        .outputFluids('1152x gtceu:copper')
        .duration(529)
        .EUt(GTValues.VA[GTValues.LV])
        .category(GTRecipeCategories.EXTRACTOR_RECYCLING)
}