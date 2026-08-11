// priority: 0
"use strict";

const { GtceuMaterial } = require("@side-only/startup/events/registry");

    // public static Material RedMud;
    // public static Material MoltenCryoliteAluminaSolution;

/**
 * 
 * @param {GtceuMaterial} event 
 */
function registerTFIAluminaMaterials(event) {
    event.create('tfi:bauxite_slurry')
        .liquid()
        .components('1x bauxite', '1x sodium_hydroxide')

    event.create('tfi:alumina')
        .dust()
        .components('2x aluminium', '3x oxygen')
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create('tfi:aluminium_hydroxide')
        .dust()
        .liquid()
        .components('1x aluminium', '3x oxygen', '3x hydrogen')
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    
    event.create('tfi:sodium_aluminate')
        .dust()
        .components('1x sodium', '1x aluminium', '2x oxygen')
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create('tfi:cryolite')
        .gem()
        .liquid(new GTFluidBuilder().temperature(1285))
        .color(0xDEDCCD).secondaryColor(0xD3CCD1).iconSet(GTMaterialIconSet.EMERALD)
        .components('3x sodium', '1x aluminium', '6x fluorine')

    event.create('tfi:cryolite_alumina_solution')
        .liquid(new GTFluidBuilder().temperature(1273))
}