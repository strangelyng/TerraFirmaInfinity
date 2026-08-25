// priority: 1
"use strict";

ServerEvents.recipes(event => {
    registerEidolonRepraisedRecipes(event);
    registerTFIRecipes(event);
})

ServerEvents.tags('block', event => {
    registerAE2BlockTags(event);
})

ServerEvents.tags('item', event => {
    registerTFCItemTags(event);
})

ServerEvents.tags('fluid', event => {
    registerTFIMaterialFluidTags(event);
})

TFCEvents.data(event => {
    registerTFCData(event);
    registerGTMaterialHeats(event);
})

GTCEuServerEvents.oreVeins(event => {
    event.removeAll();
})