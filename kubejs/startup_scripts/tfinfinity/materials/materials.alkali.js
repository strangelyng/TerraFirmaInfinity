const registerAlkaliMaterials = (event) => {
    event.create('tfinfinity:calcium_sulfide')
        .dust()
        .components('1x calcium', '1x sulfur')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .colorAverage()

    event.create('tfinfinity:black_ash')
        .langValue('Black Ash Mixture')
        .dust()
        .components('2x soda_ash', '1x tfinfinity:calcium_sulfide')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x2e2e2e)

    event.create('tfinfinity:copper_chloride')
        .dust()
        .components('1x copper', '2x chlorine')
        .color(0x51cfbf)
}