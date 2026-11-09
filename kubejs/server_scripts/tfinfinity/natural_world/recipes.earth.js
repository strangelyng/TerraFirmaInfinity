// priority: 1
"use strict";

const registerTFIEarthRecipes = (event) => {
    // TODO: Soil Type Recipes
    event.recipes.gtceu.macerator('tfinfinity:entisol_dirt_from_biochaff')
        .itemInputs('gtceu:bio_chaff')
        .itemOutputs('tfc:dirt/entisol')
        .duration(15*20)
        .EUt(GTValues.VH[GTValues.ULV])

    event.recipes.gtceu.mixer('tfinfinity:alfisol_dirt')
        .itemInputs('tfc:dirt/entisol', 'minecraft:clay_ball')
        .itemOutputs('tfc:dirt/alfisol')
        .duration(10*20)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.mixer('tfinfinity:andisol_dirt')
        .itemInputs('tfc:dirt/entisol', 'tfc:soot')
        .itemOutputs('tfc:dirt/andisol')
        .duration(10*20)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.mixer('tfinfinity:aridisol')
        .itemInputs('tfc:dirt/entisol', '#c:sands')
        .itemOutputs('tfc:dirt/aridisol')
        .duration(10*20)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.mixer('tfinfinity:mollisol')
        .itemInputs('tfc:dirt/entisol', 'gtceu:fertilizer')
        .itemOutputs('tfc:dirt/mollisol')
        .duration(10*20)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.mixer('tfinfinity:oxisol')
        .itemInputs('tfc:dirt/entisol', '#c:small_dusts/hematite')
        .itemOutputs('tfc:dirt/oxisol')
        .duration(10*20)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.recipes.gtceu.mixer('tfinfinity:fluvisol')
        .itemInputs('tfc:dirt/entisol', '#c:small_dusts/salt')
        .itemOutputs('tfc:dirt/fluvisol')
        .duration(10*20)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.mixer('tfinfinity:podzol')
        .itemInputs('tfc:dirt/entisol', '#minecraft:leaves')
        .itemOutputs('tfc:dirt/oxisol')
        .duration(10*20)
        .EUt(GTValues.VA[GTValues.ULV])


    global.SOIL_TYPES.forEach(soil => {
        event.recipes.gtceu.mixer(`tfinfinity:coarse_${soil}`)
            .itemInputs(`tfc:dirt/${soil}`, '#c:gravels')
            .itemOutputs(`2x tfc:coarse_dirt/${soil}`)
            .duration(4*20)
            .EUt(GTValues.VH[GTValues.ULV])

        event.recipes.gtceu.mixer(`tfinfinity:${soil}_rooted_dirt`)
            .itemInputs(`tfc:dirt/${soil}`, 'tfc:tree_roots')
            .itemOutputs(`tfc:rooted_dirt/${soil}`)
            .duration(4*20)
            .EUt(GTValues.VH[GTValues.ULV])
        
        event.recipes.gtceu.chemical_bath(`tfinfinity:${soil}_mud`)
            .itemInputs(`tfc:dirt/${soil}`)
            .inputFluids('250x minecraft:water')
            .itemOutputs(`tfc:mud/${soil}`)
            .duration(5*20)
            .EUt(GTValues.VH[GTValues.ULV])

        event.recipes.gtceu.mixer(`tfinfinity:${soil}_muddy_roots`)
            .itemInputs(`tfc:mud/${soil}`, 'tfc:tree_roots')
            .itemOutputs(`tfc:muddy_roots/${soil}`)
            .duration(4*20)
            .EUt(GTValues.VH[GTValues.ULV])

        event.recipes.gtceu.forming_press(`tfinfinity:${soil}_mud_brick`)
            .itemInputs(`tfc:mud/${soil}`, 'tfc:straw')
            .notConsumableItem('gtceu:ingot_casting_mold')
            .itemOutputs(`4x tfc:mud_brick/${soil}`)
            .duration(4*20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.compressor(`tfinfinity:compress_${soil}_bricks_to_block`)
            .itemInputs(`4x tfc:mud_brick/${soil}`)
            .itemOutputs(`tfc:mud_bricks/${soil}`)
            .duration(15*20)
            .EUt(2)
    })

    // #region Misc
    event.recipes.gtceu.compressor('tfinfinity:compress_straw_to_thatch')
        .itemInputs('4x tfc:straw')
        .itemOutputs('tfc:thatch')
        .duration(15*20)
        .EUt(2)

    event.recipes.gtceu.compressor('tfinfinity:compress_fire_clay_to_block')
        .itemInputs('4x tfc:fire_clay')
        .itemOutputs('tfc:fire_clay_block')
        .duration(15*20)
        .EUt(2)
}