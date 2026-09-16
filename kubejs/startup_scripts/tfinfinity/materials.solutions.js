/* Solutions Contain A Complete Collection of their Constituents */
StartupEvents.registry('gtceu:material', event => {
    // Contains 6 Soda Ash Dust
    event.create('tfinfinity:sodium_carbonate_solution')
        .liquid()
        .components('6x soda_ash', '1x water')
        .formula('(Na2CO3)(H2O)')
        .secondaryColor(0xDCDCFF)

    // Contains 3 Calcium Chloride Dust
    event.create('tfinfinity:calcium_chloride_solution')
        .liquid()
        .components('3x calcium_chloride', '1x water')
        .formula('(CaCl2)(H2O)')
        .secondaryColor(0xe7e7d7)

    // Contains 3 Sodium Hydroxide Dust
    event.create('tfinfinity:sodium_hydroxide_solution')
        .liquid()
        .components('3x sodium_hydroxide', '1x water')
        .formula('(NaOH)(H2O)')
        .color(0xf5feff)
        .secondaryColor(0xa4ebf1)

    // Contains 3 Potassium Hydroxide Dust
    event.create('tfinfinity:potassium_hydroxide_solution')
        .liquid()
        .components('3x potassium_hydroxide', '1x water')
        .formula('(KOH)(H2O)')
        .color(0xd1c299)
        .secondaryColor(0x85623a)

    // Contains 5 Calcium Hydroxide Dust
    event.create('tfinfinity:calcium_hydroxide_solution')
        .liquid()
        .components('5x calcium_hydroxide', '1x water')
        .formula('(Ca(OH)2)(H2O)')
        .color(0x72dbd4)
        .secondaryColor(0x138a80)

    // Contains 4 Aluminum Chloride Dust
    event.create('tfinfinity:aluminium_chloride_solution')
        .liquid()
        .components('4x tfinfinity:aluminium_chloride', '1x water')
        .formula('(AlCl3)(H2O)')
        .color(0xF4F7E6)
        .secondaryColor(0xD6DBBE)

    // Contains 7 Potassium Sulfate Dust
    event.create('tfinfinity:potassium_sulfate_solution')
        .liquid()
        .components('7x potassium_sulfate', '1x water')
        .formula('(K2SO4)(H2O)')
        .color(0xebab34)
        .secondaryColor(0xb5570e)

    // Contains 7 Sodium Sulfate Dust
    event.create('tfinfinity:sodium_sulfate_solution')
        .liquid()
        .components('7x tfinfinity:sodium_sulfate', '1x water')
        .formula('(Na2SO4)(H2O)')
        .color(0xEEDC82)
        .secondaryColor(0x4682B4)

    // Contains 3 Lithium Chloride Dust
    event.create('tfinfinity:lithium_chloride_solution')
        .liquid()
        .components('2x lithium_chloride', '1x water')
        .formula('(LiCl)(H2O)')
        .colorAverage()

    // Contains 3 Magnesium Chloride Dust
    event.create('tfinfinity:magnesium_chloride_solution')
        .liquid()
        .components('3x magnesium_chloride', '1x water')
        .formula('(MgCl2)(H2O)')
        .colorAverage()
        
    // Contains 6 Magnesium Sulfate Dust
    event.create('tfinfinity:magnesium_sulfate_solution')
        .liquid()
        .components('6x tfinfinity:magnesium_sulfate', '1x water')
        .formula('(MgSO4)(H2O)')
        .colorAverage()

    // event.create('tfinfinity:rock_salt_solution')
    //     .formattedDisplayName('Potassium Chloride Solution')
    //     .liquid()
    //     .components('2x rock_salt', '1x water')
    //     .formula('(KCl)(H2O)')
    //     .colorAverage()
})