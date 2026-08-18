// priority: 100
"use strict";

Platform.mods.kubejs.name = "TerraFirmaInfinity-Core";

GTCEuStartupEvents.materialModification(event => {
    registerTFIMaterialModificationCosmetic(event);
    registerTFIMaterialModificationGameplay(event);
})