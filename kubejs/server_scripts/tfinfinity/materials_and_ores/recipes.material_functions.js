// priority: 0
"use strict";

// #region Helper Functions

function getMaterialAmount(tagPrefix, material) {
    return tagPrefix.getMaterialAmount(material) / GTValues.M;
}

function calcAmountOfMetal(baseTotal, percent) {
    const value = Math.floor(baseTotal * (percent / 100));
    return value % 2 === 0 ? value : value - 1;
}

// Recycling Functions
function getMacerateOutput(material, count) {
    let outputMaterial = material.getProperty(PropertyKey.INGOT).getMacerateInto();

    return ChemicalHelper.get(TagPrefix.dust, outputMaterial != null ? outputMaterial : material, count);
}

function getArcOutput(material, count) {
    let outputMaterial = material.getProperty(PropertyKey.INGOT).getArcSmeltingInto();

    return ChemicalHelper.get(TagPrefix.ingot, outputMaterial != null ? outputMaterial : material, count);
}

function getExtractOutput(material, count) {
    let outputMaterial = material.getProperty(PropertyKey.INGOT).getMacerateInto();

    return outputMaterial != null ? outputMaterial.getFluid(144*count) : material.getFluid(144*count);
}

function calcRecycleDuration(material, count) {
    let duration = GTValues.M * material.getMass() * count; 
    return Math.max(1, duration / GTValues.M)
}

/**
 * 
 * @param {String} string ItemId to get 
 * @returns If it exists, returns ItemStack of the Item, otherwise returns Item.empty;
 */
function tryGetItem(string) {
    return Item.exists(string) ? Item.of(string) : Item.empty;
}

// #region Recipe Functions

/**
 * 
 * @param {$RecipesKubeEvent} event
 * @param {Item} inputItem The item to be melted
 * @param {Material} material The material of the item to be melted
 * @param {Number} mbAmount The amount of fluid that the item will melt into
 * @param {String} recipeIdSuffix The suffix for the recipe idea
 * @param {Boolean} isOreMelting Whether to add potential byproducts with the Embers Geologic Separator. Defaults to false. 
 * @param {Number} byproductNum The ore byproduct number to use for the Geologic Separator. Defaults to 0
 */
function TFCMeltingRecipe(event, inputItem, material, mbAmount, recipeIdSuffix, isOreMelting, byproductNum) {
    if (isOreMelting === null || isOreMelting === undefined) {
        isOreMelting = false;
    }

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);
    const outputMaterial = (tfcProperty.getOutputMaterial() === null) ? material : tfcProperty.getOutputMaterial();

    if (!outputMaterial.hasProperty(PropertyKey.FLUID))
        return;

    event.recipes.tfc.heating(inputItem, tfcProperty.getMeltTemp())
        .resultFluid(Fluid.of(outputMaterial.getFluid(), mbAmount))
        .useDurability(true)
        .id(`tfinfinity:heating/metal/${material.getName()}_${recipeIdSuffix}`);

    // TODO: Maybe this bit could be handled better
    if (inputItem instanceof Array || inputItem.hasTag('c:tools') || inputItem.hasTag('c:armors')) {
        return;
    }

    if (isOreMelting) {
        EmbersOreMeltingRecipe(event, inputItem, material, mbAmount, recipeIdSuffix, byproductNum);
    } else {
        event.custom({
            type: 'embers:melting',
            input: {
                item: inputItem.getId()
            },
            output: {
                amount: mbAmount,
                fluid: outputMaterial.getFluid().id
            }
        }).id(`tfinfinity:embers/melting/${material.getName()}_${recipeIdSuffix}`)
    }

}

function EmbersOreMeltingRecipe(event, inputItem, material, mbAmount, recipeIdSuffix, byproductNum) {
    if (byproductNum === null || byproductNum === undefined) {
        byproductNum = 0;
    }

    const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);
    const outputMaterial = (tfcProperty.getOutputMaterial() === null) ? material : tfcProperty.getOutputMaterial();

    if (!outputMaterial.hasProperty(PropertyKey.FLUID))
        return;

    let recipeJson = {
        type: 'embers:melting',
        input: {
            item: inputItem.getId()
        },
        output: {
            amount: mbAmount,
            fluid: outputMaterial.getFluid().id
        }
    }

    let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(byproductNum, material);

    if (byproductMaterial.hasProperty(InfinityPropertyKey.TFC_PROPERTY)) {
        let tfcPropertySecondary = byproductMaterial.getProperty(InfinityPropertyKey.TFC_PROPERTY);
        let outputMaterialSecondary = (tfcPropertySecondary.getOutputMaterial() === null) ? byproductMaterial : tfcPropertySecondary.getOutputMaterial();

        let byproductBase = Math.floor(mbAmount / 9);
        let byproductAmount = byproductBase % 2 === 0 ? byproductBase : byproductBase - 1;

        if (byproductAmount > 0 && outputMaterialSecondary.hasProperty(PropertyKey.FLUID) && outputMaterialSecondary.getFluid() !== outputMaterial.getFluid()) {
            let bonusJson = {
                amount: byproductAmount,
                fluid: outputMaterialSecondary.getFluid().id
            }

            recipeJson.bonus = bonusJson;
        }
    }

    event.custom(
        recipeJson
    ).id(`tfinfinity:embers/melting/${material.getName()}_${recipeIdSuffix}`)
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

function EmbersStampingRecipe(event, outputItem, stampItem, material, tagPrefixName, mbAmount, inputItem) {
    const materialName = material.getName();

    const canBeCasted = material.hasFlag(InfinityMaterialFlags.TFC_CASTABLE) || tagPrefixName == 'ingot';

    if (canBeCasted
        && material !== GTMaterials.WroughtIron) {
        const outputId = outputItem.getId();
        const fluidId = material.getFluid().id;
        const recipeId = `${materialName}_${tagPrefixName}`;

        let recipeJson = {
            type: 'embers:stamping',
            fluid: {
                amount: mbAmount,
                fluid: fluidId
            },
            output: {
                item: outputId
            },
            stamp: {
                item: stampItem
            }
        }

        if (inputItem !== null && inputItem !== undefined) {
            let inputJson = {
                item: inputItem
            }

            recipeJson.input = inputJson;
        }

        event.custom(
            recipeJson
        ).id(`tfinfinity:stamping/${recipeId}`)
    }
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

/**
 * Only built to handle a single material that recycles into whole dust amounts
 */
function simpleRecyclingRecipes(event, tagPrefix, material) {
    const materialName = material.getName();
    const inputItem = ChemicalHelper.get(tagPrefix, material, 1);
    const materialAmount = tagPrefix.getMaterialAmount(material) / GTValues.M;
    const recipeDuration = calcRecycleDuration(material, materialAmount);

    event.recipes.gtceu.arc_furnace(`arc_${materialName}_${tagPrefix.name}`)
        .category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
        .itemInputs(inputItem)
        .itemOutputs(getArcOutput(material, materialAmount))
        .duration(recipeDuration)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.macerator(`macerate_${materialName}_${tagPrefix.name}`)
        .category(GTRecipeCategories.MACERATOR_RECYCLING)
        .itemInputs(inputItem)
        .itemOutputs(getMacerateOutput(material, materialAmount))
        .duration(recipeDuration)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.extractor(`extract_${materialName}_${tagPrefix.name}`)
        .category(GTRecipeCategories.EXTRACTOR_RECYCLING)
        .itemInputs(inputItem)
        .outputFluids(getExtractOutput(material, materialAmount))
        .duration(recipeDuration)
        .EUt(GTValues.VA[GTValues.MV])
}