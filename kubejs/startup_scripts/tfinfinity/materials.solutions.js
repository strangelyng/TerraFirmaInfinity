/* Solutions Contain A Complete Collection of their Constituents */
StartupEvents.registry('gtceu:material', event => {
    // Contains 6 Soda Ash Dust
    event.create('tfinfinity:sodium_carbonate_solution')
        .liquid()
        .components('1x soda_ash', '1x water')
        .secondaryColor(0xDCDCFF)

    // Contains 3 Calcium Chloride Dust
    event.create('tfinfinity:calcium_chloride_solution')
        .liquid()
        .components('1x calcium_chloride', '1x water')
        .secondaryColor(0xe7e7d7)

    // Contains 2 Sodium Hydroxide Dust
    event.create('tfinfinity:sodium_hydroxide_solution')
        .liquid()
        .components('1x sodium_hydroxide', '1x water')
        .color(0xf5feff)
        .secondaryColor(0xa4ebf1)

    // Contains 3 Potassium Hydroxide Dust
    event.create('tfinfinity:potassium_hydroxide_solution')
        .liquid()
        .components('1x potassium_hydroxide', '1x water')
        .color(0xd1c299)
        .secondaryColor(0x85623a)

    // Contains 5 Calcium Hydroxide Dust
    event.create('tfinfinity:calcium_hydroxide_solution')
        .liquid()
        .components('1x calcium_hydroxide', '1x water')
        .color(0x72dbd4)
        .secondaryColor(0x138a80)

    // Contains 4 Aluminum Chloride Dust
    event.create('tfinfinity:aluminium_chloride_solution')
        .liquid()
        .components('1x tfinfinity:aluminium_chloride', '1x water')
        .color(0xF4F7E6)
        .secondaryColor(0xD6DBBE)
})