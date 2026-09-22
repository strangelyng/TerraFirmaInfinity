// priority: 100
"use strict";

Platform.mods.kubejs.name = "TerraFirmaInfinity-Core";

StartupEvents.registry('item', event => {
    registerTFIItems(event);
})

GTCEuStartupEvents.materialIconInfo(event => {
    registerTFIMaterialIconSets(event);
})

StartupEvents.registry('gtceu:material', event => {
    registerTFIMaterials(event);
})

GTCEuStartupEvents.materialModification(event => {
    registerTFIMaterialModifications(event);
})