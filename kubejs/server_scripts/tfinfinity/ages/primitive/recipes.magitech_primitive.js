const registerPrimitiveMagitechRecipes = (event) => {
    event.recipes.gtceu.coke_oven('tfinfinity:arcane_charcoal_from_runewood')
        .itemInputs('#malum:runewood_logs')
        .itemOutputs('malum:arcane_charcoal')
        .outputFluids('250x embers:dwarven_oil')
        .duration(900)

    event.recipes.gtceu.coke_oven('tfinfinity:arcane_charcoal_from_soulwood')
        .itemInputs('#malum:soulwood_logs')
        .itemOutputs('malum:arcane_charcoal')
        .outputFluids('250x embers:dwarven_oil')
        .duration(900)
}