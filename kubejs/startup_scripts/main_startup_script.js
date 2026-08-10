// priority: 100
"use strict";

Platform.mods.kubejs.name = "TerraFirmaInfinity-Core";

GTCEuStartupEvents.materialModification(event => {
    registerTFIMaterialModification(event);
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    registerTFIMaterialRegistryModification(event);
})