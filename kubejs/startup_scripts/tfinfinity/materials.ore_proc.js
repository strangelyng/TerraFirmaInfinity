const registerOreProcMaterials = (event) => {
    // #region Lead
    event.create('gtceu:crude_lead') // TODO: Add ingot-like Slag
        .color(0x736f82).secondaryColor(0x290633)
        .liquid(new GTFluidBuilder().temperature(1161))

    // #region Copper
    event.create('gtceu:cuprous_oxide')
        .dust()
        .color(0xc4412d).secondaryColor(0x732821).iconSet(GTMaterialIconSet.DULL)
        .components('2x gtceu:copper', '1x gtceu:oxygen')
        
    event.create('gtceu:ferrous_copper_sulfide')
        .dust()
        .color(0xe77c56).secondaryColor(0x824639)
        .liquid(new GTFluidBuilder().temperature(1523))

    event.create('gtceu:copper_matte')
        .color(0xe7a48d).secondaryColor(0xe4673e)
        .liquid(new GTFluidBuilder().temperature(1523))

    // #region Pyrite
    event.create('gtceu:pyrite_cinder')
        .dust()
        .color(0x403930).secondaryColor(0x27211e).iconSet(GTMaterialIconSet.DULL)

    // #region Ferronickel
    event.create('gtceu:ferronickel_oxide')
        .color(0x403930)
        .dust()

    event.create('gtceu:crude_ferronickel')
        .color(0x3b3627)
        .liquid(new GTFluidBuilder().temperature(1773))
        
    event.create('gtceu:nickel_matte')
        .color(0x8d8d71)
        .liquid(new GTFluidBuilder().temperature(1773))

    // #region Cobalt
    event.create('gtceu:crude_cobalt')
        .color(0x3cb099)
        .liquid(new GTFluidBuilder().temperature(1768))
        
    event.create('gtceu:cobalt_matte')
        .ingot()
        .color(0x6a8fb7)
        .liquid(new GTFluidBuilder().temperature(1768))
}