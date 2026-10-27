const registerTFIMaterialModificationFlags = (event) => {
    // #region TFC Materials
    GTMaterials.Copper.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.BismuthBronze.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Bronze.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.BlackBronze.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Bismuth.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Brass.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Gold.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Nickel.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.RoseGold.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Silver.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.SterlingSilver.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Tin.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Zinc.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE);
    GTMaterials.Iron.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE); // Cast Iron

    GTMaterials.Brass.get().addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.Bronze.get().addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.Copper.get().addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.Silver.get().addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.Steel.get().addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.SterlingSilver.get().addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);
    GTMaterials.WroughtIron.get().addFlags(InfinityMaterialFlags.HAS_TFC_OXIDATION);

    GTMaterials.Copper.get().addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.BismuthBronze.get().addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.Bronze.get().addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.BlackBronze.get().addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.WroughtIron.get().addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.Steel.get().addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.BlackSteel.get().addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.BlueSteel.get().addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);
    GTMaterials.RedSteel.get().addFlags(InfinityMaterialFlags.HAS_TFC_ARMOR);

    // #region GTMaterials
    // GTMaterials.CobaltBrass.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    GTMaterials.Electrum.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    GTMaterials.Lead.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    GTMaterials.Potin.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    GTMaterials.Invar.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    GTMaterials.TinAlloy.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);

    // #region Integration Materials
    InfinityMaterials.Pewter.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
    InfinityMaterials.Dawnstone.get().addFlags(InfinityMaterialFlags.TFC_CASTABLE, InfinityMaterialFlags.GENERATE_DOUBLE_INGOT);
}
