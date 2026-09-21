// priority: 0
"use_strict";

const registerMinecraftRecipes = (event) => {
    event.smelting('minecraft:brick', 'tfc:ceramic/unfired_brick')
        .cookingTime(200)
        .id('minecraft:brick')

    event.shaped('minecraft:spyglass', [
        'A',
        'B',
        'C'
    ], {
        A: 'tfc:lens',
        B: '#c:plates/copper',
        C: 'tfc:brass_mechanisms'
    }).id('minecraft:spyglass')

    event.shaped('minecraft:clock', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#c:plates/gold',
        B: '#c:dusts/redstone',
        C: 'tfc:brass_mechanisms'
    }).id('minecraft:clock')

    event.shaped('minecraft:smithing_table', [
        'AA',
        'BC'
    ], {
        A: '#c:dyes/black',
        B: '#tfc:workbenches',
        C: '#c:plates/wrought_iron'
    }).id('minecraft:smithing_table')
}