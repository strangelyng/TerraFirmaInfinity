// priority: 1
"use strict";

const registerTFIWoodRecipes = (event) => {
    global.TFC_WOODS.forEach(wood => {
        event.recipes.gtceu.lathe(`tfinfinity:strip_${wood}_log`)
            .itemInputs(`tfc:wood/log/${wood}`)
            .itemOutputs(`tfc:wood/stripped_log/${wood}`)
            .itemOutputs('gtceu:wood_dust')
            .duration(160)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`tfinfinity:${wood}_lumber_water`)
            .itemInputs(`#tfc:${wood}_logs`)
            .inputFluids(GTMaterials.Water.getFluid(4))
            .itemOutputs(`8x tfc:wood/lumber/${wood}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(20*20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`tfinfinity:${wood}_lumber_distilled_water`)
            .itemInputs(`#tfc:${wood}_logs`)
            .inputFluids(GTMaterials.DistilledWater.getFluid(3))
            .itemOutputs(`8x tfc:wood/lumber/${wood}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(15*20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`tfinfinity:${wood}_lumber_lubricant`)
            .itemInputs(`#tfc:${wood}_logs`)
            .inputFluids(GTMaterials.Lubricant.getFluid(1))
            .itemOutputs(`8x tfc:wood/lumber/${wood}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(10*20)
            .EUt(GTValues.VA[GTValues.ULV])
    })

    global.AFC_WOODS.forEach(wood => {
        let strippedLogId = global.AFC_LOG_TO_STRIPPED[wood] != null ? global.AFC_LOG_TO_STRIPPED[wood] : `afc:wood/stripped_log/${wood}`;

        event.recipes.gtceu.lathe(`tfinfinity:strip_${wood}_log`)
            .itemInputs(`afc:wood/log/${wood}`)
            .itemOutputs(strippedLogId)
            .itemOutputs('gtceu:wood_dust')
            .duration(160)
            .EUt(GTValues.VA[GTValues.ULV])

        if (global.AFC_LOG_TO_LUMBER[wood] != null) return;

        event.recipes.gtceu.cutter(`tfinfinity:${wood}_lumber_water`)
            .itemInputs(`#afc:${wood}_logs`)
            .inputFluids(GTMaterials.Water.getFluid(4))
            .itemOutputs(`8x afc:wood/lumber/${wood}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(20*20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`tfinfinity:${wood}_lumber_distilled_water`)
            .itemInputs(`#afc:${wood}_logs`)
            .inputFluids(GTMaterials.DistilledWater.getFluid(3))
            .itemOutputs(`8x afc:wood/lumber/${wood}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(15*20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`tfinfinity:${wood}_lumber_lubricant`)
            .itemInputs(`#afc:${wood}_logs`)
            .inputFluids(GTMaterials.Lubricant.getFluid(1))
            .itemOutputs(`8x afc:wood/lumber/${wood}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(10*20)
            .EUt(GTValues.VA[GTValues.ULV])
    })

    global.TFC_LUMBER.forEach(lumber => {
        // Crafting
        event.shaped(`tfc:wood/planks/${lumber}_slab`, [
            'XX'
        ], {
            X: `tfc:wood/lumber/${lumber}`
        }).id(`tfinfinity:crafting/wood/planks/${lumber}_slab`)

        event.shaped(`tfc:wood/planks/${lumber}_stairs`, [
            'X ',
            'XX'
        ], {
            X: `tfc:wood/lumber/${lumber}`
        }).id(`tfinfinity:crafting/wood/planks/${lumber}_stairs`)

        // GT Machines
        event.recipes.gtceu.compressor(`tfinfinity:compress_${lumber}_lumber_to_block`)
            .itemInputs(`4x tfc:wood/lumber/${lumber}`)
            .itemOutputs(`tfc:wood/planks/${lumber}`)
            .duration(15*20)
            .EUt(2)
    })

    global.AFC_LUMBER.forEach(lumber => {
        // Crafting
        event.shaped(`afc:wood/planks/${lumber}_slab`, [
            'XX'
        ], {
            X: `afc:wood/lumber/${lumber}`
        }).id(`tfinfinity:crafting/wood/planks/${lumber}_slab`)

        event.shaped(`afc:wood/planks/${lumber}_stairs`, [
            'X ',
            'XX'
        ], {
            X: `afc:wood/lumber/${lumber}`
        }).id(`tfinfinity:crafting/wood/planks/${lumber}_stairs`)

        // GT Machines
        event.recipes.gtceu.compressor(`tfinfinity:compress_${lumber}_lumber_to_block`)
            .itemInputs(`4x afc:wood/lumber/${lumber}`)
            .itemOutputs(`afc:wood/planks/${lumber}`)
            .duration(15*20)
            .EUt(2)
    })
}