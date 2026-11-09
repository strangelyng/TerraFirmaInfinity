const registerPrimitiveRecipes = (event) => {
    registerPrimitiveMagitechRecipes(event);
    registerPrimitivePaperRecipes(event);
    registerPrimitiveResinRecipes(event);
    registerPrimitiveRubberRecipes(event);
    registerULVCircuitRecipes(event);
}

const registerLowVoltageRecipes = (event) => {
    registerLVAluminiumRecipes(event);
    registerLVAsbestosRecipes(event);
    registerLVBakeliteRecipes(event);
    registerLVBatteryRecipes(event);
    registerLVCircuitRecipes(event);
    registerLVSulfuricAcidRecipes(event);
}

const registerMediumVoltageRecipes = (event) => {
    registerMVCircuitRecipes(event);
}