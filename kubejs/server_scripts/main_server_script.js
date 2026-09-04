// priority: 1
"use strict";

ServerEvents.recipes(event => {
    event.remove({ type: 'minecraft:blasting' })
    event.remove({ type: 'minecraft:smoking' })
    event.remove({ type: 'minecraft:campfire_cooking' })

    registerAE2Recipes(event);
    registerEidolonRepraisedRecipes(event);
    registerEmbersRecipes(event);
    registerGTCEURecipes(event);
    registerMinecraftRecipes(event);
    registerTFIRecipes(event);
})

ServerEvents.tags('block', event => {
    registerAE2BlockTags(event);
})

ServerEvents.tags('item', event => {
    registerTFCItemTags(event);
    registerTFIMaterialItemTags(event);
})

ServerEvents.tags('fluid', event => {
    registerTFIMaterialFluidTags(event);
})

TFCEvents.data(event => {
    registerGTCEuData(event);
    registerAFCData(event);
    registerTFCData(event);
    registerEmbersData(event);
})

GTCEuServerEvents.oreVeins(event => {
    event.removeAll();
})