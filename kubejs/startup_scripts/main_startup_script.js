// priority: 100
"use strict";

Platform.mods.kubejs.name = "TerraFirmaInfinity-Core";

StartupEvents.registry('gtceu:material', event => {
    registerOreProcMaterials(event);
})

StartupEvents.registry('item', event => {
    registerTFIItems(event);
})

GTCEuStartupEvents.materialModification(event => {
    registerTFIMaterialModificationCosmetic(event);
    registerTFIMaterialModificationProperties(event);
    registerTFIMaterialModificationTools(event);
})