const registerTFIChromiumMaterials = (event) => {
    event.create('tfinfinity:sodium_chromate')
        .liquid()
        .components('2x sodium', '1x chromium', '4x oxygen')
        .color(0xC2410C)
        .secondaryColor(0x7C2D12)
        .colorAverage()

    event.create('tfinfinity:sodium_dichromate')
        .dust()
        .components('2x sodium', '2x chromium', '7x oxygen')
        .color(0xFF9900)
        .secondaryColor(0xFF6600)
        .colorAverage()
        
    event.create('tfinfinity:sodium_sulfate')
        .dust()
        .components('2x sodium', '1x sulfur', '4x oxygen')
        .color(0xEEDC82)
        .secondaryColor(0x4682B4)
}