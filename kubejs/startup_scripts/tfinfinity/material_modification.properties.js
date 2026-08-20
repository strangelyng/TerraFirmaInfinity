// priority: 0
"use strict";

const $TFC_PROPERTY = Java.loadClass('net.terrafirmainfinity.core.common.data.material.property.TFCProperty')

// TFC_PROPERTY =   (forgingTemp, weldingTemp, meltTemp, baseHeatCapacity, anvilTier)
// OR               (meltTemp, baseHeatCapacity, outputMaterial, anvilTier)
// OR               (meltTemp, baseHeatCapacity, anvilTier)

const registerTFIMaterialModificationProperties = (event) => {
    GTMaterials.Copper.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.BismuthBronze.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Bronze.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.BlackBronze.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Bismuth.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Brass.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Gold.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Nickel.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.RoseGold.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Silver.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.SterlingSilver.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Tin.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Zinc.addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Iron.addFlags(InfinityMaterialFlags.TFC_CASTABLE); // Cast Iron

    GTMaterials.Copper.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1080, 0.35, 1));
    GTMaterials.BismuthBronze.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(985, 0.35, 2));
    GTMaterials.Bronze.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(950, 0.35, 2));
    GTMaterials.BlackBronze.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1070, 0.35, 2));
    GTMaterials.WroughtIron.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3));
    GTMaterials.Iron.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3)); // Represents Cast Iron
    // Pig Iron
    GTMaterials.Steel.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 0.35, 4));
    GTMaterials.BlackSteel.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 0.35, 5));
    GTMaterials.BlueSteel.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 0.35, 6));
    GTMaterials.RedSteel.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 0.35, 6));
    InfinityMaterials.WeakSteel.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 0.35, 5));
    InfinityMaterials.WeakBlueSteel.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 0.35, 6));
    InfinityMaterials.WeakRedSteel.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 0.35, 6));
    // High Carbon Steel
    // High Carbon Black Steel
    // High Carbon Blue Steel
    // High Carbon Red Steel
    // Unknown
    
    GTMaterials.Bismuth.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(270, 0.14, 1))
    GTMaterials.Brass.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(930, 0.35, 1));
    GTMaterials.Gold.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1060, 0.6, 1));
    GTMaterials.Nickel.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1453, 0.48, 1));
    GTMaterials.RoseGold.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(960, 0.35, 1));
    GTMaterials.Silver.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(961, 0.48, 1));
    GTMaterials.SterlingSilver.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(950, 0.35, 1));
    GTMaterials.Tin.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(230, 0.14, 1));
    GTMaterials.Zinc.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(420, 0.21, 1));

    // TODO: Ores
}