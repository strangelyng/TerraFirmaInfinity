const registerBatteryMaterials = (event) => {
    event.create('tfinfinity:lead_acid_paste')
        .liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
        .components('2x massicot', '1x sulfuric_acid', '3x distilled_water')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .colorAverage()

    event.create('tfinfinity:nickel_sulfate')
        .liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
        .components('1x nickel', '1x sulfur', '4x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x15a9ab)

    event.create('tfinfinity:nickel_hydroxide')
        .dust()
        .components('1x nickel', '2x oxygen', '2x hydrogen')
        .formula('Ni(OH)2')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x7c976d)

    event.create('tfinfinity:sodium_sulfate')
        .dust()
        .components('2x sodium', '1x sulfur', '4x oxygen')
        .color(0xEEDC82)
        .secondaryColor(0x4682B4)
}