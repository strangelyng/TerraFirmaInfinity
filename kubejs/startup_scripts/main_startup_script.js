// priority: 100
"use strict";

Platform.mods.kubejs.name = "TerraFirmaInfinity-Core";

StartupEvents.registry('item', event => {
    registerTFIItems(event);
})

GTCEuStartupEvents.materialModification(event => {
    registerTFIMaterialModificationCosmetic(event);
    registerTFIMaterialModificationProperties(event);
    registerTFIMaterialModificationTools(event);
})