// priority: 1
"use strict";

ServerEvents.recipes(event => {
    registerTFIRecipes(event);
})

ServerEvents.tags('block', event => {
    registerAE2BlockTags(event);
})

ServerEvents.tags('fluid', event => {
    registerTFIMaterialFluidTags(event);
})

TFCEvents.data(event => {
    registerGTMaterialHeats(event);
})

GTCEuServerEvents.oreVeins(event => {
    event.removeAll();
})