// priority: 1
"use strict";

ServerEvents.recipes(event => {
    registerTFIRecipes(event);
})

ServerEvents.tags('block', event => {
    registerAE2BlockTags(event);
})

TFCEvents.data(event => {
    registerGTMaterialHeats(event);
})

GTCEuServerEvents.oreVeins(event => {
    event.removeAll();
})