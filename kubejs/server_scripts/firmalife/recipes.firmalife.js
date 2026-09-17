// priority: 0
"use_strict";

const registerFirmalifeRecipes = (event) => {
    event.remove({ id: 'firmalife:alloy/stainless_steel' });
    
    event.remove({ id: /firmalife:anvil\/metal\/.*/ });
    event.remove({ id: 'firmalife:anvil/stainless_steel_jar_lid' });
    
    event.remove({ id: /firmalife:casting\/.*/ });

    event.remove({ id: /firmalife:heating\/metal\/.*/ });
    event.remove({ id: /firmalife:heating\/ore\/.*/ });

    event.remove({ id: /firmalife:welding\/.*/ });

    let recipesToRemove = [
        'firmalife:heating/oxidized_copper_pipe',
        'firmalife:heating/copper_pipe'
    ]

    recipesToRemove.forEach(recipeId => {
        event.remove({ id: recipeId });
    })

    TFCMeltingRecipe(event, Item.of('firmalife:oxidized_copper_pipe'), GTMaterials.Copper, 144/4, 'oxidized_irrigation_pipe');
    TFCMeltingRecipe(event, Item.of('firmalife:copper_pipe'), GTMaterials.Copper, 144/4, 'irrigation_pipe')
}