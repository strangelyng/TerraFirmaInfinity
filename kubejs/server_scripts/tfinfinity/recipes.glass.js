const registerGlassRecipes = (event) => {
    event.remove({ id: 'gtceu:shapeless/glass_dust_flint' })
    event.remove({ id: 'gtceu:shapeless/glass_full_dust_flint' })
    event.remove({ id: 'gtceu:mixer/glass_from_quartz_sand' })
    event.remove({ id: 'gtceu:mixer/full_dust_glass_from_sand' })

    event.remove({ id: 'gtceu:implosion_compressor/implode_dust_glass_itnt' })
    event.remove({ id: 'gtceu:implosion_compressor/implode_dust_glass_dynamite' })
    event.remove({ id: 'gtceu:implosion_compressor/implode_dust_glass_tnt' })
    event.remove({ id: 'gtceu:implosion_compressor/implode_dust_glass_powderbarrel' })

    event.recipes.tfc.glassworking(
        'gtceu:glass_tube',
        'tfc:silica_glass_batch',
        [
            'tfc:blow',
            'tfc:blow',
            'tfc:pinch'
        ]
    ).id('tfinfinity:glassworking/glass_tube')

    event.recipes.tfc.glassworking(
        'gtceu:glass_vial',
        'tfc:silica_glass_batch',
        [
            'tfc:blow',
            'tfc:stretch',
            'tfc:stretch'
        ]
    ).id('tfinfinity:glassworking/glass_vial')

    event.remove({ id: 'gtceu:alloy_smelter/glass_bottle' })
    event.remove({ id: 'gtceu:extruder/glass_bottle' })
    event.remove({ id: 'gtceu:fluid_solidifier/glass_bottle' })
    event.remove({ id: 'gtceu:extruder/glass_vial' })

    // #region SIlica Glass
    event.recipes.gtceu.alloy_smelter('tfinfinity:silica_glass_bottle_from_dust')
        .itemInputs('gtceu:glass_dust')
        .notConsumableItem('gtceu:bottle_casting_mold')
        .itemOutputs('tfc:silica_glass_bottle')
        .duration(64)
        .EUt(4)

    event.recipes.gtceu.fluid_solidifier('tfinfinity:solidify_silica_glass_bottle')
        .inputFluids('144x gtceu:glass')
        .notConsumableItem('gtceu:bottle_casting_mold')
        .itemOutputs('tfc:silica_glass_bottle')
        .duration(12)
        .EUt(4)

    event.recipes.gtceu.extractor('tfinfinity:extract_silica_glass_batch')
        .itemInputs('tfc:silica_glass_batch')
        .outputFluids('144x gtceu:glass')
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('tfinfinity:glass_silica_batch')
        .itemInputs('tfc:silica_glass_batch')
        .notConsumableItem('gtceu:block_casting_mold')
        .itemOutputs('minecraft:glass')
        .duration(20*6)
        .EUt(GTValues.VH[GTValues.LV])
        .category(GTRecipeCategories.INGOT_MOLDING)

    event.recipes.gtceu.alloy_smelter('tfinfinity:glass_tube_batch')
        .itemInputs('tfc:silica_glass_batch')
        .notConsumableItem('gtceu:ball_casting_mold')
        .itemOutputs('gtceu:glass_tube')
        .duration(20*8)
        .EUt(GTValues.VH[GTValues.LV])
        .category(GTRecipeCategories.INGOT_MOLDING)

    event.recipes.gtceu.alloy_smelter('tfinfinity:glass_plate_batch')
        .itemInputs('2x tfc:silica_glass_batch')
        .notConsumableItem('gtceu:plate_casting_mold')
        .itemOutputs('gtceu:glass_plate')
        .duration(20*2)
        .EUt(6)
        .category(GTRecipeCategories.INGOT_MOLDING)

    event.recipes.gtceu.alloy_smelter('tfinfinity:glass_jar')
        .itemInputs('gtceu:glass_dust')
        .notConsumableItem('tfinfinity:lamp_casting_mold')
        .itemOutputs('tfc:empty_jar')
        .duration(64)
        .EUt(4)

    event.recipes.gtceu.alloy_smelter('tfinfinity:glass_jar_batch')
        .itemInputs('tfc:silica_glass_batch')
        .notConsumableItem('tfinfinity:lamp_casting_mold')
        .itemOutputs('tfc:empty_jar')
        .duration(64)
        .EUt(4)

    event.recipes.gtceu.extruder('tfinfinity:glass_vial')
        .itemInputs('gtceu:glass_dust')
        .notConsumableItem('gtceu:cell_extruder_mold')
        .itemOutputs('gtceu:glass_vial')
        .duration(128)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.extruder('tfinfinity:glass_vial_batch')
        .itemInputs('tfc:silica_glass_batch')
        .notConsumableItem('gtceu:cell_extruder_mold')
        .itemOutputs('gtceu:glass_vial')
        .duration(128)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Additional Glass Types
    let glassTypes = [
        'silica', 'hematitic', 'olivine', 'volcanic'
    ]

    glassTypes.forEach(type => {
        event.recipes.gtceu.alloy_smelter(`tfinfinity:${type}_glass_bottle`)
            .itemInputs(`tfc:${type}_glass_batch`)
            .notConsumableItem('gtceu:bottle_casting_mold')
            .itemOutputs(`tfc:${type}_glass_bottle`)
            .duration(64)
            .EUt(4)

        if (type === 'silica') return;

        event.recipes.gtceu.alloy_smelter(`tfinfinity:${type}_wine_bottle`)
            .itemInputs(`tfc:${type}_glass_batch`)
            .notConsumableItem('gtceu:cylinder_casting_mold')
            .itemOutputs(`firmalife:empty_${type}_wine_bottle`)
            .duration(64)
            .EUt(4)
    })

    event.recipes.gtceu.alloy_smelter('tfinfinity:oranged_stained_glass_hematitic_batch')
        .itemInputs('tfc:hematitic_glass_batch')
        .notConsumableItem('gtceu:block_casting_mold')
        .itemOutputs('minecraft:orange_stained_glass')
        .duration(20*6)
        .EUt(GTValues.VH[GTValues.LV])
        .category(GTRecipeCategories.INGOT_MOLDING)

    event.recipes.gtceu.alloy_smelter('tfinfinity:green_stained_glass_olivine_batch')
        .itemInputs('tfc:olivine_glass_batch')
        .notConsumableItem('gtceu:block_casting_mold')
        .itemOutputs('minecraft:green_stained_glass')
        .duration(20*6)
        .EUt(GTValues.VH[GTValues.LV])
        .category(GTRecipeCategories.INGOT_MOLDING)

    event.recipes.gtceu.alloy_smelter('tfinfinity:blue_stained_glass_volcanic_batch')
        .itemInputs('tfc:volcanic_glass_batch')
        .notConsumableItem('gtceu:block_casting_mold')
        .itemOutputs('minecraft:blue_stained_glass')
        .duration(20*6)
        .EUt(GTValues.VH[GTValues.LV])
        .category(GTRecipeCategories.INGOT_MOLDING)

    // #region Arc Furnace
    event.remove({ id: 'gtceu:arc_furnace/glass_from_sand' })

    event.recipes.gtceu.arc_furnace('tfinfinity:glass_from_silica_sand')
        .itemInputs('tfc:sand/white')
        .inputFluids('20x gtceu:oxygen')
        .itemOutputs('2x minecraft:glass')
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.arc_furnace('tfinfinity:hematitic_glass_from_sand')
        .itemInputs('#c:sands/hematitic')
        .inputFluids('20x gtceu:oxygen')
        .itemOutputs('2x minecraft:orange_stained_glass')
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.arc_furnace('tfinfinity:olivine_glass_from_sand')
        .itemInputs('#c:sands/olivine')
        .inputFluids('20x gtceu:oxygen')
        .itemOutputs('2x minecraft:green_stained_glass')
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.arc_furnace('tfinfinity:volcanic_glass_from_sand')
        .itemInputs('tfc:sand/black')
        .inputFluids('20x gtceu:oxygen')
        .itemOutputs('2x minecraft:blue_stained_glass')
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV])
}