const registerPrimitiveRecipes = (event) => {
    registerPrimitiveMagitechRecipes(event);
}

const registerLowVoltageRecipes = (event) => {
    registerLVAluminiumRecipes(event);
    registerLVAsbestosRecipes(event);
    registerLVBakeliteRecipes(event);
    registerLVBatteryRecipes(event);
    registerLVSulfuricAcidRecipes(event);
}