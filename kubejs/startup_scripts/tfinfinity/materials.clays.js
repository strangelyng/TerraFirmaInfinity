StartupEvents.registry('gtceu:material', event => {
    event.create('tfinfinity:magnesium_sulfate')
        .dust()
        .components('1x magnesium', '1x sulfur', '4x oxygen')
        .colorAverage()
    
    event.create('tfinfinity:magnesium_hydroxide')
        .dust()
        .components('1x magnesium', '2x oxygen', '2x hydrogen')
        .formula('Mg(OH)2')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0xE0EAE1)
        .secondaryColor(0x9BA89D)
})