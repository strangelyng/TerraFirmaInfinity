// priority: 100
"use strict";

Platform.mods.kubejs.name = "TerraFirmaInfinity-Core";

StartupEvents.registry('item', event => {
    registerTFIItems(event);
})

StartupEvents.registry('gtceu:material', event => {
    registerTFIMaterials(event);
})

GTCEuStartupEvents.materialModification(event => {
    registerTFIMaterialModifications(event);
})