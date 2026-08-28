// priority: 1
"use strict";

const registerTFIRecipes = (event) => {
    registerTFIMaterialRecipes(event);
    registerTFIComponentRecipes(event);
    registerTFIMaterialMiscRecipes(event);
    registerTFIAlloyRecipes(event);

    event.replaceInput({ input: 'minecraft:chest' }, 'minecraft:chest', '#c:chests/wooden' )
    event.replaceInput({ input: 'minecraft:barrel' }, 'minecraft:barrel', 'gtceu:wood_crate' )
    
    event.replaceInput({ input: 'minecraft:crafting_table' }, 'minecraft:crafting_table', '#tfc:workbenches' )
    event.replaceInput({ input: 'minecraft:blast_furnace' }, 'minecraft:blast_furnace', 'tfc:blast_furnace' )

    event.replaceInput({ input: 'minecraft:iron_ingot' }, 'minecraft:iron_ingot', '#c:ingots/wrought_iron' )
    event.replaceInput({ input: 'minecraft:iron_ingot' }, 'minecraft:iron_ingot', '#c:ingots/wrought_iron' )

    event.replaceInput({ input: 'minecraft:iron_block' }, 'minecraft:iron_block', '#c:storage_blocks/wrought_iron' )
    event.replaceInput({ input: 'minecraft:chain' }, 'minecraft:chain', '#c:chains' )
    event.replaceInput({ input: 'minecraft:iron_bars' }, 'minecraft:iron_bars', '#tfinfinity:metal_bars' )
    event.replaceInput({ input: 'minecraft:anvil' }, 'minecraft:anvil', 'tfc:metal/anvil/wrought_iron' )
    
    event.replaceInput({ input: 'minecraft:iron_trapdoor' }, 'minecraft:iron_trapdoor', 'tfc:metal/trapdoor/wrought_iron' )
}