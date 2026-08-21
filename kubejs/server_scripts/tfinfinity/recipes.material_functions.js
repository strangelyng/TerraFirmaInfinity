// priority: 0
"use strict";

// #region Helper Functions

function getMaterialAmount(tagPrefix, material) {
    return tagPrefix.getMaterialAmount(material) / GTValues.M;
}

// #region Recipe Functions
function TFCMeltingRecipe(event, inputItem, material, mbAmount, recipeIdSuffix) {
    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);
    const outputMaterial = (tfcProperty.getOutputMaterial() === null) ? material : tfcProperty.getOutputMaterial();

    if (!outputMaterial.hasProperty(PropertyKey.FLUID))
        return;

    event.recipes.tfc.heating(inputItem, tfcProperty.getMeltTemp())
        .resultFluid(Fluid.of(outputMaterial.getFluid(), mbAmount))
        .useDurability(true)
        .id(`tfinfinity:heating/metal/${material.getName()}_${recipeIdSuffix}`);
}

function TFCAnvilRecipe(event, outputItem, inputItem, steps, bonus, material, recipeIdSuffix) {
    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);
    
    event.recipes.tfc.anvil(outputItem, inputItem, steps)
        .tier(tfcProperty.getAnvilTier())
        .applyBonus(bonus)
        .id(`tfinfinity:anvil/${material.getName()}_${recipeIdSuffix}`);
}

function TFCCastingRecipe(event, outputItem, ceramicMold, isFireMold, gtMold, material, tagPrefixName, mbAmount) {
    const materialName = material.getName();

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

    const canBeCasted = material.hasFlag(InfinityMaterialFlags.TFC_CASTABLE) || tagPrefixName === 'ingot';

    if (canBeCasted
        && tfcProperty !== null
        && ceramicMold !== null
        && material !== GTMaterials.WroughtIron) {
            const outputMaterial = (tfcProperty.getOutputMaterial() === null) ? material : tfcProperty.getOutputMaterial();
            const recipeId = `${materialName}_${tagPrefixName}_${isFireMold ? 'fire' : 'ceramic'}`;

            event.recipes.tfc.casting(outputItem, ceramicMold, Fluid.of(outputMaterial.getFluid(), mbAmount), isFireMold ? 0.01 : 0.1)
                .id(`tfinfinity:casting/${recipeId}`)
    }

    // TODO: GT Casting
}

function TFCWeldingRecipe(event, outputItem, inputItem1, inputItem2, material, bonusBehavior, anvilTier, nonTFCTier, circuit, recipeIdSuffix) {
    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);
    const recipeId = (`${material.getName()}_${recipeIdSuffix}`);
    
    if (tfcProperty !== null) {
        event.recipes.tfc.welding(TFC.isp.of(outputItem).copyHeat(), inputItem1, inputItem2)
            .tier(anvilTier)
            .bonusBehavior(bonusBehavior)
            .id(`tfinfinity:welding/${recipeId}`)
    }

    // TODO: GT Forming Press / Basin Welding
}