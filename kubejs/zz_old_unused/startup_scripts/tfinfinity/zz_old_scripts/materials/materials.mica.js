const registerTFIMicaMaterials = (event) => {
    event.create('tfinfinity:glauconite_sand_leach_liquor')
        .liquid()
        .components('1x potassium_sulfate', '4x tfinfinity:magnesium_sulfate', '2x tfinfinity:aluminium_sulfate')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x6E853E)
        .secondaryColor(0x37451D)

    event.create('tfinfinity:dealuminated_glauconite_sand_leach_liquor')
        .liquid()
        .components('1x potassium_sulfate', '4x tfinfinity:magnesium_sulfate', '6x tfinfinity:sodium_sulfate')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x2A7D4C)
        .secondaryColor(0x124225)

    event.create('tfinfinity:dense_potassium_sodium_sulfate_solution')
        .formattedDisplayName('Dense Potassium-Sodium Sulfate Solution')
        .liquid()
        .components('1x potassium_sulfate', '10x tfinfinity:sodium_sulfate')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .colorAverage()

    event.create('tfinfinity:mica_leach_liquor')
        .liquid()
        .components('3x tfinfinity:aluminium_chloride', '1x rock_salt')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .colorAverage()
}