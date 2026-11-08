// priority: 0
"use strict";

const registerTFCItemTags = (event) => {
    event.remove('tfc:blast_furnace_fuel', 'minecraft:charcoal')

    event.add('tfc:blast_furnace_fuel', '#c:gems/coke')
    event.add('tfc:forge_fuel', '#c:gems/coke')
    event.add('tfc:welding_flux', '#c:small_dusts/borax')

    let storageBlocksToRemove = [
        'bismuth', 'bismuth_bronze', 'black_bronze', 'bronze', 'brass', 'copper', 'gold', 'nickel', 'rose_gold',
        'silver', 'tin', 'zinc', 'sterling_silver', 'wrought_iron', 'cast_iron', 'steel', 'black_steel', 'blue_steel',
        'red_steel'
    ]

    storageBlocksToRemove.forEach(material => {
        event.remove(`c:storage_blocks/${material}`, `tfc:metal/block/${material}`)
    })
}

const registerTFCFluidTags = (event) => {
    let ingredientFluids = [
        'gtceu:ice',
        'gtceu:creosote',
        'gtceu:concrete',
        'tfinfinity:latex',
        'tfinfinity:vulcanized_latex',
        'tfinfinity:conifer_pitch',
        'tfinfinity:runic_sap',
        'tfinfinity:cursed_sap'
    ]

    event.add('tfc:ingredients', ingredientFluids) // Allows use in barrels, pots, wooden buckets, etc.
}