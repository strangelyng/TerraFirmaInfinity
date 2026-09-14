StartupEvents.registry('gtceu:material', event => {
    event.create('tfinfinity:wollastonite')
        .dust()
        .components('1x calcium', '1x silicon', '3x oxygen')
        .color(0xE6D5C3)
        .secondaryColor(0xA3C1AD)

    // Garnet Group
    event.create('tfinfinity:almandine_sludge_residue')
        .dust()
        .components('3x tfinfinity:wollastonite', '1x magnetite')
        .color(0xE6D5C3)
        .secondaryColor(0x4A3B32)

    event.create('tfinfinity:andradite_sludge_residue')
        .dust()
        .components('3x tfinfinity:wollastonite', '1x hematite')
        .color(0xE6D5C3)
        .secondaryColor(0x8B261A)

    event.create('tfinfinity:pyrope_sludge_residue')
        .dust()
        .components('tfinfinity:wollastonite', 'magnesia')
        .color(0xE6D5C3)
        .secondaryColor(0xA3C1AD)

    event.create('tfinfinity:spessartine_sludge_residue')
        .dust()
        .components('tfinfinity:wollastonite', 'pyrolusite')
        .color(0xE6D5C3)
        .secondaryColor(0xC99E93)
    
    event.create('tfinfinity:sodalite_leach_liquor')
        .liquid()
        .components('3x tfinfinity:sodium_aluminate', '1x salt')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0xEAF0F6)
        .secondaryColor(0xAEC0D0)
    
    event.create('tfinfinity:sodium_metasilicate')
        .dust()
        .components('2x sodium', '1x silicon', '3x oxygen')
        .color(0xCBEAE6)
        .secondaryColor(0x88B7B1)
})

StartupEvents.registry('item', event => {
    // Garnet Group
    event.create('tfinfinity:almandine_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/almandine')

    event.create('tfinfinity:andradite_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/andradite')

    event.create('tfinfinity:grossular_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/grossular')

    event.create('tfinfinity:pyrope_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/pyrope')

    event.create('tfinfinity:spessartine_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/spessartine')

    event.create('tfinfinity:uvarovite_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/uvarovite')

    // Sodalite Group
    event.create('tfinfinity:lazurite_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/lazurite')
        
    event.create('tfinfinity:sodalite_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/sodalite')
})