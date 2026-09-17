// priority: 1
"use strict";

const registerTFIStoneRecipes = (event) => {
    global.STONE_TYPES.forEach(stoneType => {
        event.recipes.gtceu.forge_hammer(`raw_${stoneType}_to_cobble`)
            .itemInputs(`tfc:rock/raw/${stoneType}`)
            .itemOutputs(`tfc:rock/cobble/${stoneType}`)
            .duration(12)
            .EUt(GTValues.VH[GTValues.ULV])

        event.recipes.gtceu.forge_hammer(`${stoneType}_cobble_to_gravel`)
            .itemInputs(`tfc:rock/cobble/${stoneType}`)
            .itemOutputs(`tfc:rock/gravel/${stoneType}`)
            .duration(10)
            .EUt(GTValues.VH[GTValues.LV])

        let sandColor = global.ROCK_TO_SAND_COLOR[stoneType];

        event.recipes.gtceu.forge_hammer(`${stoneType}_gravel_to_sand`)
            .itemInputs(`tfc:rock/gravel/${stoneType}`)
            .itemOutputs(`tfc:sand/${sandColor}`)
            .duration(10)
            .EUt(GTValues.VH[GTValues.LV])
    })
}