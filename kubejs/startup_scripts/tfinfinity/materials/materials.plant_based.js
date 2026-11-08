const registerPlantBasedMaterials = (event) => {
    event.create('tfinfinity:latex')
        .liquid()
        .color(0xf3d49f)

    event.create('tfinfinity:vulcanized_latex')
        .liquid()
        .color(0xf4d49f)

    event.create('tfinfinity:conifer_pitch')
        .liquid()
        .color(0xdfb254)

    // event.create('tfinfinity:mucilage')
    //     .liquid()

    event.create('tfinfinity:runic_sap')
        .liquid()
        .color(0xE5B66A)
        .secondaryColor(0x9A5647)

    event.create('tfinfinity:cursed_sap')
        .liquid()
        .color(0xB62B50)
        .secondaryColor(0x611943)
}