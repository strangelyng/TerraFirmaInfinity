// priority: 1
"use strict";

const registerTFIRecipes = (event) => {
    registerTFIMaterialRecipes(event);
    registerTFIMaterialMiscRecipes(event);
    registerTFIAlloyRecipes(event);
}