const registerLoomRecipes = (event) => {
    event.remove({ id: 'gtceu:assembler/wool_from_string' })

    event.recipes.tfinfinity.loom('tfinfinity:burlap_cloth')
        .itemInputs('12x tfc:jute_fiber')
        .itemOutputs('tfc:burlap_cloth')
        .duration(25*12)
        .EUt(GTValues.VA[GTValues.ULV])

    // event.recipes.tfinfinity.loom('tfinfinity:rope')
    //     .itemInputs('2x tfc:jute_fiber')
    //     .itemOutputs('2x tfc:rope')
    //     .circuit(1)
    //     .duration(25*2)
    //     .EUt(GTValues.VA[GTValues.ULV])

    // event.recipes.tfinfinity.loom('tfinfinity:jute_net')
    //     .itemInputs('5x tfc:jute_fiber')
    //     .itemOutputs('tfc:jute_net')
    //     .circuit(2)
    //     .duration(25*5)
    //     .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.tfinfinity.loom('tfinfinity:pineapple_leather')
        .itemInputs('16x firmalife:pineapple_yarn')
        .itemOutputs('firmalife:pineapple_leather')
        .duration(25*16)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.tfinfinity.loom('tfinfinity:silk_cloth')
        .itemInputs('24x minecraft:string')
        .itemOutputs('tfc:silk_cloth')
        .duration(25*24)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.tfinfinity.loom('tfinfinity:unrefined_paper')
        .itemInputs('4x tfc:soaked_papyrus_strip')
        .itemOutputs('tfc:unrefined_paper')
        .duration(25*4)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.tfinfinity.loom('tfinfinity:wool_cloth')
        .itemInputs('16x tfc:wool_yarn')
        .itemOutputs('tfc:wool_cloth')
        .duration(25*16)
        .EUt(GTValues.VA[GTValues.ULV])

    // event.recipes.tfinfinity.loom('tfinfinity:cheesecloth')
    //     .itemInputs('2x #tfc:high_quality_cloth')
    //     .itemOutputs('8x firmalife:cheesecloth')
    //     .circuit(2)
    //     .duration(25*2)
    //     .EUt(GTValues.VA[GTValues.ULV])
    
    event.remove({ id: 'gtceu:compressor/carbon_mesh' })
    
    event.recipes.tfinfinity.loom('tfinfinity:carbon_mesh')
        .itemInputs('2x gtceu:carbon_fibers')
        .itemOutputs('gtceu:carbon_fiber_mesh')
        .duration(100)
        .EUt(2)
}