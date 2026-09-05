// priority: 0
"use strict";

const $TFC_PROPERTY = Java.loadClass('net.terrafirmainfinity.core.common.data.material.property.TFCProperty')

// TFC_PROPERTY     (meltTemp, baseHeatCapacity, outputMaterial, anvilTier, percentOfMaterial)
// OR               (meltTemp, baseHeatCapacity, outputMaterial, anvilTier)
// OR               (meltTemp, baseHeatCapacity, anvilTier)

const registerTFIMaterialModificationProperties = (event) => {
    // #region TFC Materials
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

    GTMaterials.Brass.addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.Bronze.addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.Copper.addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.Silver.addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.Steel.addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.SterlingSilver.addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.WroughtIron.addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);

    GTMaterials.Copper.addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.BismuthBronze.addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.Bronze.addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.BlackBronze.addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.WroughtIron.addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.Steel.addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.BlackSteel.addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.BlueSteel.addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.RedSteel.addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    

    GTMaterials.Copper.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1080, 0.35, 1));
    GTMaterials.BismuthBronze.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(985, 0.35, 2));
    GTMaterials.Bronze.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(950, 0.35, 2));
    GTMaterials.BlackBronze.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1070, 0.35, 2));
    GTMaterials.WroughtIron.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3));
    GTMaterials.Iron.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3)); // Represents Cast Iron
    InfinityMaterials.PigIron.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, 1));
    GTMaterials.Steel.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 0.35, 4));
    GTMaterials.BlackSteel.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1485, 0.35, 5));
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

    // #region GTMaterials
    // GTMaterials.CobaltBrass.addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    GTMaterials.Electrum.addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    GTMaterials.Lead.addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    GTMaterials.Potin.addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    GTMaterials.Invar.addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    GTMaterials.TinAlloy.addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);

    GTMaterials.Cobalt.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1495, 0.35, 1));
    // GTMaterials.CobaltBrass.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(928, 0.35, 1));
    GTMaterials.Electrum.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1000, 0.35, 1));
    GTMaterials.Lead.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(327, 0.14, 1));
    GTMaterials.Potin.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(800, 0.35, 1));
    GTMaterials.Invar.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1427, 0.35, 3))
    GTMaterials.TinAlloy.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(984, 0.35, 3))

    // #region IntegrationMaterials
    InfinityMaterials.Pewter.addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    InfinityMaterials.Dawnstone.addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    
    InfinityMaterials.Pewter.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(230, 0.14, 1));
    InfinityMaterials.Dawnstone.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(826, 0.35, 1));

    // #endregion

    // Base TFC Ores
    GTMaterials.Cassiterite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(230, 0.14, GTMaterials.Tin, 1, 90));

    GTMaterials.Garnierite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1453, 0.48, GTMaterials.Nickel, 1, 90));

    GTMaterials.Hematite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3, 90));
    GTMaterials.YellowLimonite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3, 90));
    GTMaterials.Magnetite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3, 90));

    GTMaterials.Malachite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1080, 0.35, GTMaterials.Copper, 1, 90));

    // Sulfides
    // InfinityMaterials.Bismuthinite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(270, 0.14, GTMaterials.Bismuth, 1, 90));
    // GTMaterials.Tetrahedrite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1080, 0.35, GTMaterials.Copper, 1, 90));

    // GT Ores
    GTMaterials.CassiteriteSand.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(230, 0.14, GTMaterials.Tin, 1, 80));

    GTMaterials.Goethite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3, 90));
    GTMaterials.VanadiumMagnetite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3, 90));
    GTMaterials.GraniticMineralSand.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3, 80));
    GTMaterials.BasalticMineralSand.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3, 80));

    // Sulfides
    // GTMaterials.Bornite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1080, 0.35, GTMaterials.Copper, 1, 90));
    // GTMaterials.Chalcopyrite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1080, 0.35, GTMaterials.Copper, 1, 90));
    // GTMaterials.Chalcocite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1080, 0.35, GTMaterials.Copper, 1, 90));

    // GTMaterials.Cobaltite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1495, 0.35, GTMaterials.Cobalt, 1, 90));

    // GTMaterials.Galena.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(327, 0.14, GTMaterials.Lead, 1, 90));

    // GTMaterials.Pyrite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1535, 0.35, GTMaterials.Iron, 3, 90));

    // GTMaterials.Sphalerite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(420, 0.21, GTMaterials.Zinc, 1, 90));

    // GTMaterials.Pentlandite.setProperty(InfinityPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1453, 0.48, GTMaterials.Nickel, 1, 90));

}