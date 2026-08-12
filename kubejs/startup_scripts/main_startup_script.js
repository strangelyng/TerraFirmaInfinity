// priority: 100
"use strict";

Platform.mods.kubejs.name = "TerraFirmaInfinity-Core";

StartupEvents.registry('gtceu:material', event => {
    // registerTFIAluminaMaterials(event);
})

GTCEuStartupEvents.materialModification(event => {
    registerTFIMaterialModification(event);
})