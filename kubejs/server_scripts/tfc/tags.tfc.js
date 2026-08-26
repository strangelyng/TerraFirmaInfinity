// priority: 0
"use strict";

const registerTFCItemTags = (event) => {
    event.remove('tfc:blast_furnace_fuel', 'minecraft:charcoal')

    event.add('tfc:blast_furnace_fuel', '#c:gems/coke')
    event.add('tfc:forge_fuel', '#c:gems/coke')

    let storageBlocksToRemove = [
        'bismuth', 'bismuth_bronze', 'black_bronze', 'bronze', 'brass', 'copper', 'gold', 'nickel', 'rose_gold',
        'silver', 'tin', 'zinc', 'sterling_silver', 'wrought_iron', 'cast_iron', 'steel', 'black_steel', 'blue_steel',
        'red_steel'
    ]

    storageBlocksToRemove.forEach(material => {
        event.remove(`c:storage_blocks/${material}`, `tfc:metal/block/${material}`)
    })
}