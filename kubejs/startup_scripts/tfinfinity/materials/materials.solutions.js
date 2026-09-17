/**
 * 
 * @param {GtceuMaterial} event 
 * @param {String} name 
 * @param {material} material 
 * @returns {$MaterialBuilderWrapper}
 * Doesn't work with materials created using KubeJS
 */
function makeSolutionMaterial(event, name, material) {
    let builder = event.create(`tfinfinity:${name}_solution`).liquid();

    let materialName = material.getName();

    let primaryComponentAmount = 0;
    for (const component of material.getMaterialComponents()) {
        primaryComponentAmount += component.amount();
    }

    let primaryComponent = `${primaryComponentAmount}x ${materialName}`
    builder.components(`${primaryComponent}`, '1x water');
    
    let chemicalFormula = material.getChemicalFormula();
    builder.formula(`(${chemicalFormula})(H2O)`);

    return builder;
}

const registerTFISolutionMaterials = (event) => {
    makeSolutionMaterial(event, 'sodium_carbonate', GTMaterials.SodaAsh)
        .color(0xFFFFFF).secondaryColor(0xDECDFF);
    makeSolutionMaterial(event, 'calcium_chloride', GTMaterials.CalciumChloride)
        .color(0xFFFFFF).secondaryColor(0xE7E7D7);
    makeSolutionMaterial(event, 'sodium_hydroxide', GTMaterials.SodiumHydroxide)
        .color(0xF5FEFF).secondaryColor(0xA4EBF1);
    makeSolutionMaterial(event, 'potassium_hydroxide', GTMaterials.PotassiumHydroxide)
        .color(0xD1C299).secondaryColor(0x85623A);
    makeSolutionMaterial(event, 'calcium_hydroxide', GTMaterials.CalciumHydroxide)
        .color(0x72DBD4).secondaryColor(0x138A80);
    // makeSolutionMaterial(event, 'aluminium_chloride', GTRegistries.MATERIALS.get('tfinfinity:aluminium_chloride'))
        // .color(0xF4F7E6).secondaryColor(0xD6DBBE);
    makeSolutionMaterial(event, 'potassium_sulfate', GTMaterials.PotassiumSulfate)
        .color(0xEBAB34).secondaryColor(0xB5570E);
    // makeSolutionMaterial(event, 'sodium_sulfate', GTRegistries.MATERIALS.get('tfinfinity:sodium_sulfate'))
        // .color(0xEEDC82).secondaryColor(0x4682B4);
    makeSolutionMaterial(event, 'lithium_chloride', GTMaterials.LithiumChloride)
        .color(0xDEDEFA);
    makeSolutionMaterial(event, 'magnesium_chloride', GTMaterials.MagnesiumChloride)
        .color(0xEEE4E9).secondaryColor(0xD40D5C);
    // makeSolutionMaterial(event, 'magnesium_sulfate', GTRegistries.MATERIALS.get('tfinfinity:magnesium_sulfate'))
        // .colorAverage();
    makeSolutionMaterial(event, 'rock_salt', GTMaterials.RockSalt)
        .formattedDisplayName('Potassium Chloride Solution')
        .color(0xFFEAE1).secondaryColor(0xF0C8C8);

    event.create('tfinfinity:aluminium_chloride_solution')
        .liquid()
        .components('4x tfinfinity:aluminium_chloride', '1x water')
        .color(0xF4F7E6)
        .secondaryColor(0xD6DBBE)

    event.create('tfinfinity:sodium_sulfate_solution')
        .liquid()
        .components('7x tfinfinity:sodium_sulfate', '1x water')
        .color(0xEEDC82)
        .secondaryColor(0x4682B4)

    event.create('tfinfinity:magnesium_sulfate_solution')
        .liquid()
        .components('6x tfinfinity:magnesium_sulfate', '1x water')
        .colorAverage()
}