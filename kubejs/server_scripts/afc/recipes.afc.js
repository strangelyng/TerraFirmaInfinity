// priority: 0
"use_strict";

const registerAFCRecipes = (event) => {
    let recipesToRemove = [
        'afc:anvil/tree_tap'
    ]

    recipesToRemove.forEach(recipeId => {
        event.remove({ id: recipeId });
    })

    TFCAnvilRecipe(event, 'afc:tree_tap', '#c:plates/wrought_iron', ['hit_last', 'upset_second_last', 'upset_third_last'], false, GTMaterials.WroughtIron, 'tree_tap');
}