const registerSolutionMaterials = (event) => {
    event.create('tfinfinity:sodium_hydroxide_solution')
        .liquid()
        .components('3x sodium_hydroxide', '1x water')
        .color(0xF5FEFF)
        .secondaryColor(0xA4EBF1)
        .formula('(NaOH)(H2O)')

    event.create('tfinfinity:sodium_carbonate_solution')
        .liquid()
        .components('6x soda_ash', '1x water')
        .color(0xFFFFFF)
        .secondaryColor(0xDECDFF)
        .formula('(Na2CO3)(H2O)')

    event.create('tfinfinity:potassium_hydroxide_solution')
        .liquid()
        .components('3x potassium_hydroxide', '1x water')
        .color(0xD1C299)
        .secondaryColor(0x85623A)
        .formula('(KOH)(H2O)')

    event.create('tfinfinity:potassium_sulfate_solution')
        .liquid()
        .components('7x potassium_sulfate', '1x water')
        .color(0xEEDC82)
        .secondaryColor(0x4682B4)

    event.create('tfinfinity:sodium_sulfate_solution')
        .liquid()
        .components('7x tfinfinity:sodium_sulfate', '1x water')
        .color(0xEEDC82)
        .secondaryColor(0x4682B4)
}