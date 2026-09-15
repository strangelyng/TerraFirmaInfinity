StartupEvents.registry('gtceu:material', event => {
    event.create('tfinfinity:antimony_trichloride')
        .dust()
        .components('1x antimony', '3x chlorine')
        .colorAverage()

    event.create('tfinfinity:antimony_trisulfide')
        .dust()
        .components('2x antimony', '3x sulfur')
        .colorAverage()

    event.create('tfinfinity:caesium_chloride')
        .dust()
        .components('1x caesium', '1x chlorine')
        .colorAverage()

    event.create('tfinfinity:pollucite_leach_liquor')
        .liquid()
        .components('1x tfinfinity:caesium_chloride', '1x tfinfinity:aluminium_chloride', '1x water')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .colorAverage()

    event.create('tfinfinity:dealuminated_pollucite_leach_liquor')
        .liquid()
        .components('1x tfinfinity:caesium_chloride', '1x salt_water')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .colorAverage()
    
    event.create('tfinfinity:caesium_antimony_chloride_cake')
        .formattedDisplayName('Caesium-Antimony Chloride Cake')
        .dust()
        .components('3x caesium', '2x antimony', '9x chlorine')
        .colorAverage()

    event.create('tfinfinity:acidic_caesium_chloride_solution')
        .liquid()
        .components('1x tfinfinity:caesium_chloride', '2x hydrochloric_acid')
        .colorAverage()

    event.create('tfinfinity:ammonium_carbonate')
        .dust()
        .components('2x nitrogen', '8x hydrogen', '1x carbon', '3x oxygen')
        .formula('(NH4)2CO3')
        .colorAverage()

    event.create('tfinfinity:caesium_carbonate')
        .dust()
        .components('2x caesium', '1x carbon', '3x oxygen')
        .colorAverage()
})

StartupEvents.registry('item', event => {
    event.create('tfinfinity:zeolite_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/zeolite')
})