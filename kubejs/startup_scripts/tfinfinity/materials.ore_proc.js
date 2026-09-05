const registerOreProcMaterials = (event) => {
    // #region Lead
    event.create('gtceu:crude_lead') // TODO: Add ingot-like Slag
        .liquid(new GTFluidBuilder().temperature(600))

    // #region Copper
    event.create('gtceu:cuprous_oxide')
        .dust()
        .color(0xc4412d).secondaryColor(0x732821).iconSet(GTMaterialIconSet.DULL)
        .components('2x gtceu:copper', '1x gtceu:oxygen')

    event.create('gtceu:crude_copper') // TODO: Add ingot-like Slag
        .liquid(new GTFluidBuilder().temperature(1403))
        
    event.create('gtceu:ferrous_copper_sulfide')
        .dust()
        .liquid(new GTFluidBuilder().temperature(1523))

    event.create('gtceu:copper_matte')
        .liquid(new GTFluidBuilder().temperature(1523))

    // #region Pyrite
    event.create('gtceu:pyrite_cinder')
        .dust()
        .color(0x403930).secondaryColor(0x27211e).iconSet(GTMaterialIconSet.DULL)

    // #region Sphalerite
    event.create('crude_zinc')
        .liquid(new GTFluidBuilder().temperature(1273))
}