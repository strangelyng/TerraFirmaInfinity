const registerAluminiumMaterials = (event) => {
    event.create('tfinfinity:sodium_aluminate')
        .liquid()
        .components('1x sodium', '1x aluminium', '2x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0xE0F2FE)
        .secondaryColor(0x0284C7)
    
    event.create('tfinfinity:aluminium_hydroxide')
        .dust()
        .components('1x aluminium', '3x oxygen', '3x hydrogen')
        .formula('Al(OH)3')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x7db9d8)
        .secondaryColor(0x56ac9c)
    
    event.create('tfinfinity:aluminium_fluoride')
        .dust()
        .liquid(new GTFluidBuilder().temperature(1560))
        .components('1x aluminium', '3x fluorine')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0xE0FDF4)
        .secondaryColor(0x0D9488)

    event.create('tfinfinity:bayer_liquor')
        .liquid(new GTFluidBuilder().temperature(473))
        .color(0xD7863B)

    event.create('tfinfinity:bauxite_tailings')
        .liquid()
        .color(0xDE5424)
}