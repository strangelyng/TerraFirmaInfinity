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

    // TODO: Convert Trees to Use TFC Wood Blocks (for Natural Log Condition)
    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:runic_sap', 3),
        'malum:runewood_log'
    ).tempRange(-15, 60).requiresNaturalLog(false).id('tfinfinity:tree_tapping/runewood_sap')

    event.recipes.afc.tree_tapping(
        Fluid.of('tfinfinity:cursed_sap', 3),
        'malum:soulwood_log'
    ).tempRange(-15, 60).requiresNaturalLog(false).id('tfinfinity:tree_tapping/soulwood_sap')
}