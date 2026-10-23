/**
 * @param {$RecipesKubeEvent} event
 * @param {String} solution Should be the id of the solution material
 * @param {Material} material Should be the material contained in the solution
 */
function makeSolutionRecipes(event, solution, material) {
    let solutionMat = GTRegistries.MATERIALS.get(solution);
    let solutionName = solutionMat.getName();
    let materialName = material.getName();

    let componentAmountTotal = 0;
    for (const component of material.getMaterialComponents()) {
        componentAmountTotal += component.amount();
    }

    let dustStack = ChemicalHelper.get(TagPrefix.dust, material, componentAmountTotal);

    event.recipes.gtceu.mixer(solutionName)
        .inputFluids('1000x minecraft:water')
        .itemInputs(dustStack)
        .outputFluids(solutionMat.getFluid(1000))
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu.distillery(`${materialName}_from_solution`)
        .inputFluids(solutionMat.getFluid(1000))
        .itemOutputs(dustStack)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
}

const registerTFISolutionsRecipes = (event) => {
    makeSolutionRecipes(event, 'tfinfinity:sodium_carbonate_solution', GTMaterials.SodaAsh)
    makeSolutionRecipes(event, 'tfinfinity:calcium_chloride_solution', GTMaterials.CalciumChloride)
    makeSolutionRecipes(event, 'tfinfinity:sodium_hydroxide_solution', GTMaterials.SodiumHydroxide)
    makeSolutionRecipes(event, 'tfinfinity:potassium_hydroxide_solution', GTMaterials.PotassiumHydroxide)
    makeSolutionRecipes(event, 'tfinfinity:calcium_hydroxide_solution', GTMaterials.CalciumHydroxide)
    makeSolutionRecipes(event, 'tfinfinity:potassium_sulfate_solution', GTMaterials.PotassiumSulfate)
    makeSolutionRecipes(event, 'tfinfinity:sodium_sulfate_solution', GTRegistries.MATERIALS.get('tfinfinity:sodium_sulfate'))
    makeSolutionRecipes(event, 'tfinfinity:magnesium_chloride_solution', GTMaterials.MagnesiumChloride)
    makeSolutionRecipes(event, 'tfinfinity:magnesium_sulfate_solution', GTRegistries.MATERIALS.get('tfinfinity:magnesium_sulfate'))
}