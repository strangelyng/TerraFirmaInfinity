const registerTFIZeoliteMaterials = (event) => {
    event.create('tfinfinity:antimony_trichloride')
        .dust()
        .components('1x antimony', '3x chlorine')
        .color(0xEBD783)
        .secondaryColor(0x8C7729)

    // Just Use Stibnite
    // event.create('tfinfinity:antimony_trisulfide')
    //     .dust()
    //     .components('2x antimony', '3x sulfur')
    //     .color(0x2E3540)
    //     .secondaryColor(0x13171F)

    event.create('tfinfinity:caesium_chloride')
        .dust()
        .components('1x caesium', '1x chlorine')
        .colorAverage()

    event.create('tfinfinity:pollucite_leach_liquor')
        .liquid()
        .components('1x tfinfinity:caesium_chloride', '1x tfinfinity:aluminium_chloride', '1x water')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x4FA3A5)
        .secondaryColor(0x1D4C4E)

    event.create('tfinfinity:dealuminated_pollucite_leach_liquor')
        .liquid()
        .components('1x tfinfinity:caesium_chloride', '1x salt_water')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x936EBA)
        .secondaryColor(0x4B2C6E)
    
    event.create('tfinfinity:caesium_antimony_chloride_cake')
        .formattedDisplayName('Caesium-Antimony Chloride Cake')
        .dust()
        .components('3x caesium', '2x antimony', '9x chlorine')
        .color(0xE58742)
        .secondaryColor(0x6E3716)

    event.create('tfinfinity:acidic_caesium_chloride_solution')
        .liquid()
        .components('6x tfinfinity:caesium_chloride', '3x hydrochloric_acid')
        .color(0xF0A43A)
        .secondaryColor(0x8A4B0E)

    event.create('tfinfinity:ammonium_carbonate')
        .dust()
        .components('2x nitrogen', '8x hydrogen', '1x carbon', '3x oxygen')
        .formula('(NH4)2CO3')
        .color(0xA3D1B9)
        .secondaryColor(0x466E58)

    event.create('tfinfinity:caesium_carbonate')
        .dust()
        .components('2x caesium', '1x carbon', '3x oxygen')
        .color(0xE58742)
        .secondaryColor(0x6E3716)
}