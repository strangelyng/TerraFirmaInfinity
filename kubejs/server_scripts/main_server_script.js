// priority: 1
"use strict";

ServerEvents.tags('block', event => {
    registerAE2BlockTags(event);
})

ServerEvents.tags('item', event => {
    registerGTCEUItemTags(event);
    registerTFCItemTags(event);
    registerTFIMaterialItemTags(event);
})

ServerEvents.tags('fluid', event => {
    registerTFIMaterialFluidTags(event);
})

TFCEvents.data(event => {
    registerAFCData(event);
    registerEmbersData(event);
    registerGTCEuData(event);
    registerMinecraftData(event);
    registerTFCData(event);
})

ServerEvents.recipes(event => {
    event.remove({ type: 'minecraft:blasting' })
    event.remove({ type: 'minecraft:smoking' })
    event.remove({ type: 'minecraft:campfire_cooking' })

    registerAE2Recipes(event);
    registerEidolonRepraisedRecipes(event);
    registerEmbersRecipes(event);
    registerGTCEURecipes(event);
    registerMinecraftRecipes(event);
    registerTFCRecipes(event);
    registerTFIRecipes(event);
})

GTCEuServerEvents.oreVeins(event => {
    event.removeAll();
})