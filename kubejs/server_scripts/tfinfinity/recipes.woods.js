// priority: 1
"use strict";

const registerTFIWoodRecipes = (event) => {
    global.TFC_WOODS.forEach(woodType => {
        event.recipes.gtceu.lathe(`strip_${woodType}_log`)
            .itemInputs(`tfc:wood/log/${woodType}`)
            .itemOutputs(`tfc:wood/stripped_log/${woodType}`)
            .itemOutputs('gtceu:wood_dust')
            .duration(160)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`${woodType}_lumber_water`)
            .itemInputs(`#tfc:${woodType}_logs`)
            .inputFluids(GTMaterials.Water.getFluid(4))
            .itemOutputs(`8x tfc:wood/lumber/${woodType}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(20*20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`${woodType}_lumber_distilled_water`)
            .itemInputs(`#tfc:${woodType}_logs`)
            .inputFluids(GTMaterials.DistilledWater.getFluid(3))
            .itemOutputs(`8x tfc:wood/lumber/${woodType}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(15*20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`${woodType}_lumber_lubricant`)
            .itemInputs(`#tfc:${woodType}_logs`)
            .inputFluids(GTMaterials.Lubricant.getFluid(1))
            .itemOutputs(`8x tfc:wood/lumber/${woodType}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(10*20)
            .EUt(GTValues.VA[GTValues.ULV])
    })

    global.AFC_WOODS.forEach(woodType => {
        let strippedLogId = global.AFC_LOG_TO_STRIPPED[woodType] != null ? global.AFC_LOG_TO_STRIPPED[woodType] : `afc:wood/stripped_log/${woodType}`;

        event.recipes.gtceu.lathe(`strip_${woodType}_log`)
            .itemInputs(`afc:wood/log/${woodType}`)
            .itemOutputs(strippedLogId)
            .itemOutputs('gtceu:wood_dust')
            .duration(160)
            .EUt(GTValues.VA[GTValues.ULV])

        if (global.AFC_LOG_TO_LUMBER[woodType] != null) return;

        event.recipes.gtceu.cutter(`${woodType}_lumber_water`)
            .itemInputs(`#afc:${woodType}_logs`)
            .inputFluids(GTMaterials.Water.getFluid(4))
            .itemOutputs(`8x afc:wood/lumber/${woodType}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(20*20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`${woodType}_lumber_distilled_water`)
            .itemInputs(`#afc:${woodType}_logs`)
            .inputFluids(GTMaterials.DistilledWater.getFluid(3))
            .itemOutputs(`8x afc:wood/lumber/${woodType}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(15*20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`${woodType}_lumber_lubricant`)
            .itemInputs(`#afc:${woodType}_logs`)
            .inputFluids(GTMaterials.Lubricant.getFluid(1))
            .itemOutputs(`8x afc:wood/lumber/${woodType}`)
            .itemOutputs('2x gtceu:wood_dust')
            .duration(10*20)
            .EUt(GTValues.VA[GTValues.ULV])
    })
}