const createOreSluicingLootTables = (event) => {
    forEachMaterial(material => {
        if (material.hasProperty(PropertyKey.ORE)) {
            createCrushedOreSluicingLootTable(material, event);
            createDustSluicingLootTable(material, event);
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

function createDustSluicingLootTable(material, event) {
    const materialName = material.getName();

    const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1);

    event.create(`gtceu:deposit/dusts/${materialName}`)
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of(dustItem.getId())
            )
        })
}

const registerOreLootTables = (event) => {
    forEachMaterial(material => {
        if (!material.hasProperty(PropertyKey.ORE)) return;

        let richRawOre = ChemicalHelper.get(InfinityTagPrefix.richRawOre, material, 1).getItem().getId();
        let normalRawOre = ChemicalHelper.get(TagPrefix.rawOre, material, 1).getItem().getId();
        let poorRawOre = ChemicalHelper.get(InfinityTagPrefix.poorRawOre, material, 1).getItem().getId();
        let tinyDust = ChemicalHelper.get(TagPrefix.dustTiny, material, 1).getItem().getId();

        let rawOreBlock = ChemicalHelper.get(TagPrefix.rawOreBlock, material, 1).getItem().getId();
        event.addBlockModifier(rawOreBlock)
            .removeLoot(Ingredient.all)
            .pool((p) => {
                p.addEntry(LootEntry.of(richRawOre).withWeight(20))
                p.addEntry(LootEntry.of(normalRawOre).withWeight(60))
                p.addEntry(LootEntry.of(poorRawOre).withWeight(20))
                p.rolls([3, 5])
            })
            .addLoot(LootEntry.of(tinyDust).when(c => c.randomChance(0.2)));

        global.STONE_TYPES.forEach(stoneType => {
            event.addBlockModifier(`gtceu:${stoneType}_${material.getName()}_ore`)
                .removeLoot(Ingredient.all)
                .pool((p) => {
                    p.addEntry(LootEntry.of(richRawOre).withWeight(20))
                    p.addEntry(LootEntry.of(normalRawOre).withWeight(60))
                    p.addEntry(LootEntry.of(poorRawOre).withWeight(20))
                })
                .addLoot(LootEntry.of(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Stone, 1).getItem().getId()).when(c => c.randomChance(0.2)))
                .addLoot(LootEntry.of(tinyDust).when(c => c.randomChance(0.05)));
        })

        global.SAND_COLORS.forEach(sandColor => {
            if (material.hasFlag(InfinityMaterialFlags.GENERATE_SAND_ORES)) {
                event.addBlockModifier(`gtceu:${sandColor}_${material.getName()}_ore`)
                .removeLoot(Ingredient.all)
                .pool((p) => {
                    p.addEntry(LootEntry.of(richRawOre).withWeight(20))
                    p.addEntry(LootEntry.of(normalRawOre).withWeight(60))
                    p.addEntry(LootEntry.of(poorRawOre).withWeight(20))
                })
                .addLoot(LootEntry.of(`tfc:sand/${sandColor}`).when(c => c.randomChance(0.2)))
                .addLoot(LootEntry.of(tinyDust).when(c => c.randomChance(0.05)))
            }
        })
    })
}