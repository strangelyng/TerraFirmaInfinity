StartupEvents.registry('gtceu:material', event => {
    // Wollastonite and Larnite
    event.create('tfinfinity:wollastonite')
        .dust()
        .components('1x calcium', '1x silicon', '3x oxygen')
        .color(0xE6D5C3)
        .secondaryColor(0xA3C1AD)

    event.create('tfinfinity:larnite')
        .dust()
        .components('2x calcium', '1x silicon', '4x oxygen')
        .color(0xD4D8DB)
        .secondaryColor(0x9FA5AA)

    // Garnet Group
    event.create('tfinfinity:almandine_sludge_residue')
        .dust()
        .components('3x tfinfinity:wollastonite', '1x magnetite')
        // .color(0xE6D5C3)
        // .secondaryColor(0x4A3B32)
        .colorAverage()

    event.create('tfinfinity:andradite_sludge_residue')
        .dust()
        .components('3x tfinfinity:wollastonite', '1x hematite')
        // .color(0xE6D5C3)
        // .secondaryColor(0x8B261A)
        .colorAverage()

    event.create('tfinfinity:pyrope_sludge_residue')
        .dust()
        .components('1x tfinfinity:wollastonite', '1x magnesia')
        // .color(0xE6D5C3)
        // .secondaryColor(0xA3C1AD)
        .colorAverage()

    event.create('tfinfinity:spessartine_sludge_residue')
        .dust()
        .components('1x tfinfinity:wollastonite', '1x pyrolusite')
        .color(0xE6D5C3)
        .secondaryColor(0xC99E93)

    // Sodalite Group
    event.create('tfinfinity:sodalite_leach_liquor')
        .liquid()
        .components('3x tfinfinity:sodium_aluminate', '1x salt')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0xEAF0F6)
        .secondaryColor(0xAEC0D0)

    // Topaz Group
    event.create('tfinfinity:blue_topaz_sludge_residue')
        .dust()
        .components('1x tfinfinity:larnite', '1x gtceu:fluorite')
        .color(0x9EBAB9)
        .secondaryColor(0x7B7584)

    event.create('tfinfinity:topaz_sludge_residue')
        .dust()
        .components('2x tfinfinity:larnite', '1x gtceu:fluorite')
        .color(0xBAB699)
        .secondaryColor(0x7B7584)

    // Corundum Group
    event.create('tfinfinity:ruby_leach_liquor')
        .liquid()
        .components('1x tfinfinity:sodium_aluminate', '1x tfinfinity:sodium_chromate')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0xFC7815)
        .secondaryColor(0xC62F00)
        
    // Beryl Group
    event.create('tfinfinity:emerald_sludge_residue')
        .dust()
        .components('1x tfinfinity:alumina', '6x silicon_dioxide')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .colorAverage()

    event.create('tfinfinity:sodium_fluorosilicate')
        .dust()
        .components('2x sodium', '1x silicon', '6x fluorine')
        .colorAverage()

    event.create('tfinfinity:hexafluorosilicic_acid')
        .liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
        .components('2x hydrogen', '1x silicon', '6x fluorine')
        .color(0xEFEAA9)
        .secondaryColor(0xABA04D)
    
    event.create('tfinfinity:sodium_tetrafluoroberyllate')
        .liquid()
        .components('2x sodium', '1x beryllium', '4x fluorine')
        .colorAverage()

    event.create('tfinfinity:beryllium_hydroxide')
        .dust()
        .components('1x beryllium', '2x oxygen', '2x hydrogen')
        .formula('Be(OH)2')
        .colorAverage()

    event.create('tfinfinity:beryllium_oxide')
        .dust()
        .components('1x beryllium', '1x oxygen')
        .colorAverage()

    event.create('tfinfinity:beryllium_chloride')
        .dust()
        .liquid(new GTFluidBuilder().temperature(672))
        .components('1x beryllium', '2x chlorine')
        .colorAverage()

    event.create('tfinfinity:ammonium_bifluoride')
        .liquid()
        .components('1x nitrogen', '5x hydrogen', '2x fluorine')
        .formula('(NH4)(HF2)')
        .colorAverage()

    event.create('tfinfinity:ammonium_tetrafluoroberyllate')
        .dust()
        .components('2x nitrogen', '8x hydrogen', '1x beryllium', '4x fluorine')
        .formula('(NH4)2BeF4')
        .colorAverage()

    event.create('tfinfinity:sodium_fluoride')
        .liquid()
        .components('1x sodium', '1x fluorine')
        .colorAverage()

    event.create('tfinfinity:beryllium_fluoride')
        .dust()
        .components('1x beryllium', '2x fluorine')
        .colorAverage()

    event.create('tfinfinity:magnesium_fluoride')
        .dust()
        .components('1x magnesium', '2x fluorine')
        .colorAverage()
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
    
    // Topaz Group
    event.create('tfinfinity:blue_topaz_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/blue_topaz')
        
    event.create('tfinfinity:topaz_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/topaz')

    // Beryl Group
    event.create('tfinfinity:emerald_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/emerald')

    // Misc
    event.create('tfinfinity:roasted_alunite_calcine')
        .texture('tfinfinity:item/sinter_cake/alunite') // Not really a sinter cake
})