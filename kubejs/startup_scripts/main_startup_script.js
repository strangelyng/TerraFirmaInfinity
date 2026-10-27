// priority: 100
"use strict";

Platform.mods.kubejs.name = "TerraFirmaInfinity";

StartupEvents.registry('item', event => {
    registerTFIItems(event);
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    registerTFIMaterialIconSets(event);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    registerTFIMaterials(event);
})

GTCEuStartupEvents.materialModification(event => {
    registerTFIMaterialModifications(event);
})
