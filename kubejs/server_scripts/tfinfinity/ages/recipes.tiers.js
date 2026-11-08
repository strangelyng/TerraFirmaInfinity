const registerPrimitiveRecipes = (event) => {
    registerPrimitiveMagitechRecipes(event);
    registerPrimitiveGlassRecipes(event);
    registerPrimitivePaperRecipes(event);
    registerPrimitiveStickyStuffRecipes(event);
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