// priority: 1
"use strict";

ServerEvents.recipes(event => {
    registerTFIRecipes(event);
})

GTCEuServerEvents.oreVeins(event => {
    event.removeAll();
})