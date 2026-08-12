// priority: 0
"use strict";

function registerTFIAluminaMaterials(event) {
    event.create('tfi:alumina')
        .dust()
        .color(0xffffff)
        .components('2x gtceu:aluminium', '3x gtceu:oxygen')
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create('tfi:aluminium_hydroxide')
        .dust()
        .gem()
        .liquid()
        .color(0xffffff)
        .components('1x gtceu:aluminium', '3x gtceu:oxygen', '3x gtceu:hydrogen')
        .flags(
            GTMaterialFlags.CRYSTALLIZABLE, GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    
    event.create('tfi:sodium_aluminate')
        .dust()
        .liquid()
        .color(0xffffff)
        .components('1x gtceu:sodium', '1x gtceu:aluminium', '2x gtceu:oxygen')
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create('tfi:cryolite')
        .gem()
        .liquid(new GTFluidBuilder().temperature(1285))
        .color(0xDEDCCD).secondaryColor(0xD3CCD1).iconSet(GTMaterialIconSet.EMERALD)
        .components('3x gtceu:sodium', '1x gtceu:aluminium', '6x gtceu:fluorine')
}