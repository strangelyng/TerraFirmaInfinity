// priority: 0
"use_strict";

const registerMinecraftRecipes = (event) => {
    event.smelting('minecraft:brick', 'tfc:ceramic/unfired_brick')
        .cookingTime(200)
        .id('minecraft:brick')
}