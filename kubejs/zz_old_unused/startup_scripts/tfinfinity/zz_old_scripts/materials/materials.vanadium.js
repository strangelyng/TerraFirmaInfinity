const registerTFIVanadiumMaterials = (event) => {
    event.create('tfinfinity:vanadium_pentoxide')
        .dust()
        .components('2x vanadium', '5x oxygen')
        .color(0xffe43f)
        .secondaryColor(0xffad30)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('tfinfinity:sodium_metavanadate')
        .dust()
        .components('1x sodium', '1x vanadium', '3x oxygen')
        .color(0xfff36e)
        .secondaryColor(0xffd765)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('tfinfinity:ammonium_metavanadate')
        .dust()
        .components('1x ammonia', '1x hydrogen', '1x vanadium', '3x oxygen')
        .formula('NH4VO3')
        .color(0xfffabf)
        .secondaryColor(0xffd765)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('tfinfinity:soda_ash_roasted_vanadinite')
        .dust()
        .components('5x massicot', '3x tfinfinity:sodium_metavanadate', '1x salt')
        .color(0xffb79f).secondaryColor(0xff2d1a)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
}