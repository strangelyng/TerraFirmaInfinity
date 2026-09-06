const createOreSluicingLootTables = (event) => {
    forEachMaterial(material => {
        if (material.hasProperty(PropertyKey.ORE)) {
            createCrushedOreSluicingLootTable(material, event);
        }
    })
}

function createCrushedOreSluicingLootTable(material, event) {
    const materialName = material.getName();

    const oreProperty = material.getProperty(PropertyKey.ORE);

    const purifiedOreItem = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1);

    const byproductMaterial = oreProperty.getOreByProduct(0, material);
    let byproductItem = ChemicalHelper.get(TagPrefix.gemFlawed, byproductMaterial, 1);

    if (byproductItem.isEmpty()) {
        byproductItem = ChemicalHelper.get(TagPrefix.dustSmall, byproductMaterial, 1);
    }

    event.create(`gtceu:deposit/crushed_ore/${materialName}`)
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of(purifiedOreItem.getId())
            )
        })
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of(byproductItem.getId()).randomChance(0.33)
            )
        })
}