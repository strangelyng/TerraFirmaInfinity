// priority: 0
"use_strict";

const registerAFCRecipes = (event) => {
    let recipesToRemove = [
        'afc:anvil/tree_tap',

        'afc:crafting/sealed_bricks_rubber',
    ]

    recipesToRemove.forEach(recipeId => {
        event.remove({ id: recipeId });
    })

    TFCAnvilRecipe(event, 'afc:tree_tap', '#c:plates/wrought_iron', ['hit_last', 'upset_second_last', 'upset_third_last'], false, GTMaterials.WroughtIron, 'tree_tap');


    // Saps
    event.recipes.afc.tree_tapping(
        Fluid.of('afc:maple_sap', 5),
        'afc:wood/log/ancient_maple'
    ).tempRange(-4, 6).springOnly(true).id('tfinfinity:tree_tapping/ancient_maple_sap')

    event.recipes.afc.tree_tapping(
        Fluid.of('afc:birch_sap', 5),
        'afc:wood/log/ancient_birch'
    ).tempRange(-4, 6).springOnly(true).id('tfinfinity:tree_tapping/ancient_birch_sap')
}