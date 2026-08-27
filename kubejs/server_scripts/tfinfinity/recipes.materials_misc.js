// priority: 1
"use strict";

const registerTFIMaterialMiscRecipes = (event) => {
    let recipesToRemove = [
        'tfc:anvil/refined_iron_bloom',
        'tfc:blast_furnace/pig_iron',
        'tfc:bloomery/raw_iron_bloom'
    ]

    recipesToRemove.forEach(recipeId => {
        event.remove({ id: recipeId });
    })
    
    // #region Buckets
    TFCAnvilRecipe(event, 
        Item.of('tfc:metal/bucket/blue_steel'), 
        ChemicalHelper.get(TagPrefix.plate, GTMaterials.BlueSteel, 1),
        ['hit_last', 'bend_second_last', 'bend_third_last'],
        false,
        GTMaterials.BlueSteel,
        'bucket'
    );

    TFCAnvilRecipe(event,
        Item.of('tfc:metal/bucket/red_steel'),
        ChemicalHelper.get(TagPrefix.plate, GTMaterials.RedSteel, 1),
        ['hit_last', 'bend_second_last', 'bend_third_last'],
        false,
        GTMaterials.RedSteel,
        'bucket'
    )

    event.recipes.tfc.welding(TFC.isp.of('minecraft:bucket').copyHeat(), Item.of('tfc:metal/bucket/blue_steel'), Item.of('tfc:metal/bucket/red_steel'))
        .tier(6)
        .bonusBehavior('ignore')
        .id('tfinfinity:welding/bucket');

    // #region Misc Materials
    event.recipes.tfc.bloomery('tfc:raw_iron_bloom',
        Item.of('minecraft:charcoal', 2),
        Fluid.of(GTMaterials.Iron.getFluid(), 144),
        14400
    ).id('tfinfinity:bloomery/raw_iron_bloom');

    TFCMeltingRecipe(event, Item.of('tfc:raw_iron_bloom'), GTMaterials.Iron, 144, 'raw_iron_bloom');
    TFCMeltingRecipe(event, Item.of('tfc:refined_iron_bloom'), GTMaterials.Iron, 144, 'refined_iron_bloom');

    event.recipes.tfc.anvil(Item.of('tfc:refined_iron_bloom'), Item.of('tfc:raw_iron_bloom'), ['hit_last', 'hit_second_last', 'hit_third_last'])
        .tier(2)
        .id('tfinfinity:anvil/refined_iron_bloom');

    event.recipes.tfc.anvil(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.WroughtIron, 1), Item.of('tfc:refined_iron_bloom'), ['hit_last', 'hit_second_last', 'hit_third_last'])
        .tier(2)
        .id('tfinfinity:anvil/wrought_iron_ingot');

    event.recipes.tfc.blast_furnace(
        Fluid.of(InfinityMaterials.PigIron.getFluid(), 1),
        Item.of('tfc:powder/flux'),
        Fluid.of(GTMaterials.Iron.getFluid(), 1)
    ).id('tfinfinity:blast_furnace/pig_iron')

    let hcSteelsToFluids = {
        'high_carbon_steel': InfinityMaterials.PigIron,
        'high_carbon_black_steel': InfinityMaterials.WeakSteel,
        'high_carbon_blue_steel': InfinityMaterials.WeakBlueSteel,
        'high_carbon_red_steel': InfinityMaterials.WeakRedSteel
    }

    Object.entries(hcSteelsToFluids).forEach(([ingot, material]) => {
        const hcIngotItem = tryGetItem(`tfc:metal/ingot/${ingot}`);

        if (!hcIngotItem.isEmpty()) {
            TFCMeltingRecipe(event, hcIngotItem, material, 144, 'from_high_carbon_ingot')

            let quernDust = ChemicalHelper.get(TagPrefix.dust, material, 1);

            event.recipes.tfc.quern(quernDust, hcIngotItem)
                .id(`tfinfinity:quern/${ingot}_ingot_to_dust`);
                    
            event.recipes.gtceu.shaped(quernDust, [
                " X ",
                " m "
            ], {
                X: hcIngotItem.getItem()
            }).id(`gtceu:shaped/mortar_grind_${ingot}`)
        }
    })

    event.recipes.tfc.anvil(Item.of('tfc:metal/ingot/high_carbon_steel'),
        ChemicalHelper.get(TagPrefix.ingot, InfinityMaterials.PigIron, 1),
        ['hit_third_last', 'hit_second_last', 'hit_last'])
        .tier(0)
        .id('tfinfinity:anvil/high_carbon_steel_ingot')

    let hcSteelsToIngots = {
        'high_carbon_steel': GTMaterials.Steel,
        'high_carbon_black_steel': GTMaterials.BlackSteel,
        'high_carbon_blue_steel': GTMaterials.BlueSteel,
        'high_carbon_red_steel': GTMaterials.RedSteel,
    }

    Object.entries(hcSteelsToIngots).forEach(([inputMaterial, outputMaterial]) => {
        const outputIngot = ChemicalHelper.get(TagPrefix.ingot, outputMaterial, 1);
        const inputIngot = tryGetItem(`tfc:metal/ingot/${inputMaterial}`);

        if (!inputIngot.isEmpty()) {
            event.recipes.tfc.anvil(outputIngot, inputIngot, ['hit_third_last', 'hit_second_last', 'hit_last'])
                .tier(0)
                .id(`tfinfinity:anvil/${outputMaterial.getName()}/ingot`)
        }
    })
    
    let hcWeldingIngots = [
        'black_steel', 'blue_steel', 'red_steel'
    ]

    hcWeldingIngots.forEach(material => {
        const hcIngotItem = tryGetItem(`tfc:metal/ingot/high_carbon_${material}`);

        let input1;
        let input2;

        switch (material) {
            case 'black_steel': {
                input1 = ChemicalHelper.get(TagPrefix.ingot, InfinityMaterials.WeakSteel, 1);
                input2 = ChemicalHelper.get(TagPrefix.ingot, InfinityMaterials.PigIron, 1);
                break;
            }
            case 'blue_steel': {
                input1 = ChemicalHelper.get(TagPrefix.ingot, InfinityMaterials.WeakBlueSteel, 1);
                input2 = ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BlackSteel, 1);
                break;
            }
            case 'red_steel': {
                input1 = ChemicalHelper.get(TagPrefix.ingot, InfinityMaterials.WeakRedSteel, 1);
                input2 = ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BlackSteel, 1);
                break;
            }
        }

        if (!hcIngotItem.isEmpty()) {
            event.recipes.tfc.welding(TFC.isp.of(hcIngotItem).copyHeat(), input1, input2)
                .tier(0)
                .bonusBehavior('ignore')
                .id(`tfinfinity:welding/high_carbon_${material}_ingot`)
        }
    })
}