const registerSulfuricAcidMaterials = (event) => {
    event.create('tfinfinity:potassium_bisulfate')
        .dust()
        .components('1x potassium', '1x hydrogen', '1x sulfur', '4x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .colorAverage()

    event.create('tfinfinity:potassium_pyrosulfate')
        .dust()
        .components('2x potassium', '2x sulfur', '7x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0xDB941A)

    event.create('tfinfinity:ferrous_sulfate')
        .dust()
        .components('1x iron', '1x sulfur', '4x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x86d7c3)

    event.create('tfinfinity:acidic_green_vitriol')
        .liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
        .components('1x tfinfinity:ferrous_sulfate', '1x sulfuric_acid')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0xA3A872)

    event.create('tfinfinity:glauber_mixture')
        .liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
        .components('2x sulfuric_acid', '3x potassium_sulfate')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .colorAverage()

    event.create('tfinfinity:nitrosylsulfuric_acid')
        .liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
        .components('1x nitrogen', '5x oxygen', '1x hydrogen', '1x sulfur')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .colorAverage()
}