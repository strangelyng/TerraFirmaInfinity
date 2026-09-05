const registerOreProcMaterials = (event) => {
    // #region Lead
    event.create('gtceu:crude_lead') // TODO: Add ingot-like Slag
        .color(0x736f82).secondaryColor(0x290633)
        .liquid(new GTFluidBuilder().temperature(600))

    // #region Copper
    event.create('gtceu:cuprous_oxide')
        .dust()
        .color(0xc4412d).secondaryColor(0x732821).iconSet(GTMaterialIconSet.DULL)
        .components('2x gtceu:copper', '1x gtceu:oxygen')

    event.create('gtceu:crude_copper') // TODO: Add ingot-like Slag
        .color(0xe77c56).secondaryColor(0x824639)
        .liquid(new GTFluidBuilder().temperature(1403))
        
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

    // #region Sphalerite
    event.create('gtceu:crude_zinc')
        .color(0xEBEBFA).secondaryColor(0x232c30)
        .liquid(new GTFluidBuilder().temperature(1273))

    // #region Ferronickel
    event.create('gtceu:ferronickel_oxide')
        .dust()

    event.create('gtceu:crude_ferronickel')
        .liquid(new GTFluidBuilder().temperature(1773))
        
    event.create('gtceu:ferronickel')
        .liquid(new GTFluidBuilder().temperature(1773))

    // #region Cobalt
    event.create('gtceu:crude_cobalt')
        .liquid(new GTFluidBuilder().temperature(1768))
        
    event.create('gtceu:cobalt_matte')
        .ingot()
        .liquid(new GTFluidBuilder().temperature(1768))

    // #region Antimony
    event.create('gtceu:crude_antimony')
        .liquid(new GTFluidBuilder().temperature(903))
}