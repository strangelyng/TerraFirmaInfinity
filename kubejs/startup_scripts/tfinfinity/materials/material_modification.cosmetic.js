// priority: 0
"use strict";

const registerTFIMaterialModificationCosmetic = (event) => {
    // #region Colors

	/* TFC Mats */
	GTMaterials.Bismuth.get().setMaterialARGB(0x94b38d)
	GTMaterials.Bismuth.get().setMaterialSecondaryARGB(0x3e679c)

	GTMaterials.Copper.get().setMaterialARGB(0xf39170)
	GTMaterials.Copper.get().setMaterialSecondaryARGB(0xb83c3c)

	GTMaterials.BismuthBronze.get().setMaterialARGB(0x80BD7E)
	GTMaterials.BismuthBronze.get().setMaterialSecondaryARGB(0x606E4F)

	GTMaterials.BlackBronze.get().setMaterialARGB(0x8F648C)
	GTMaterials.BlackBronze.get().setMaterialSecondaryARGB(0x3C3852)

	GTMaterials.BlueSteel.get().setMaterialARGB(0xacd1e6)
	GTMaterials.BlueSteel.get().setMaterialSecondaryARGB(0x446ed8)

	GTMaterials.RedSteel.get().setMaterialARGB(0xff936f)
	GTMaterials.RedSteel.get().setMaterialSecondaryARGB(0xe60032)

	GTMaterials.Garnierite.get().setMaterialARGB(0x5e7951)
	GTMaterials.Garnierite.get().setMaterialSecondaryARGB(0x1c3d32)

	GTMaterials.YellowLimonite.get().setMaterialARGB(0xc0a05a)
	GTMaterials.YellowLimonite.get().setMaterialSecondaryARGB(0xa56f32)

	GTMaterials.Sphalerite.get().setMaterialARGB(0xbcbebb)
	GTMaterials.Sphalerite.get().setMaterialSecondaryARGB(0xa0a097)

	GTMaterials.Amethyst.get().setMaterialARGB(0xcd9ef0)
	GTMaterials.Amethyst.get().setMaterialSecondaryARGB(0x8b69ca)

	GTMaterials.Diamond.get().setMaterialARGB(0x9ff8e5)
	GTMaterials.Diamond.get().setMaterialSecondaryARGB(0x20c3b3)

	GTMaterials.Sapphire.get().setMaterialARGB(0x65c7ff)
	GTMaterials.Sapphire.get().setMaterialSecondaryARGB(0x0d38c8)

	GTMaterials.Topaz.get().setMaterialARGB(0xffbe5a)
	GTMaterials.Topaz.get().setMaterialSecondaryARGB(0xa96028)

	// Credits to TerraFirmaGreg
	GTMaterials.Steel.get().setMaterialARGB(0x9AA9AB)
	GTMaterials.SteelMagnetic.get().setMaterialARGB(0x9AA9AB)
	GTMaterials.Iron.get().setMaterialARGB(0x503d32)
	GTMaterials.Iron.get().setMaterialSecondaryARGB(0x131212)
	GTMaterials.IronMagnetic.get().setMaterialARGB(0x503d32)
	GTMaterials.IronMagnetic.get().setMaterialSecondaryARGB(0x131212)
	GTMaterials.Zinc.get().setMaterialARGB(0xd6ffdc)
	GTMaterials.Zinc.get().setMaterialSecondaryARGB(0xA3BE9E)
	GTMaterials.Brass.get().setMaterialSecondaryARGB(0x791905)
	GTMaterials.RoseGold.get().setMaterialARGB(0xF7D4BD)
	GTMaterials.RoseGold.get().setMaterialSecondaryARGB(0xE7945C)
	GTMaterials.Nickel.get().setMaterialARGB(0xfff4ba)
	GTMaterials.Nickel.get().setMaterialSecondaryARGB(0x8d8d71)
	GTMaterials.SterlingSilver.get().setMaterialARGB(0xFFE8E4)
	GTMaterials.SterlingSilver.get().setMaterialSecondaryARGB(0xFFDECB)

	/* Misc GT Mats */
	GTMaterials.Cobalt.get().setMaterialARGB(0xA1CDD6)
	GTMaterials.Cobalt.get().setMaterialSecondaryARGB(0x382757)
	GTMaterials.Cobaltite.get().setMaterialARGB(0x6a8fb7)
	GTMaterials.Cobaltite.get().setMaterialSecondaryARGB(0x382757)

	GTMaterials.Lazurite.get().setMaterialARGB(0x3941B3) // Prevent eyeballs from melting
	GTMaterials.Lazurite.get().setMaterialSecondaryARGB(0x0F1F4D)

	GTMaterials.Manganese.get().setMaterialARGB(0xA79A95)
	GTMaterials.Manganese.get().setMaterialSecondaryARGB(0x33241f)

	GTMaterials.Magnesium.get().setMaterialARGB(0xC7BEA9)
	GTMaterials.Magnesium.get().setMaterialSecondaryARGB(0x615743)

	GTMaterials.Molybdenum.get().setMaterialARGB(0xE9E3CE)
	GTMaterials.Molybdenum.get().setMaterialSecondaryARGB(0x60C5F0)

	GTMaterials.Osmium.get().setMaterialARGB(0x8CFFE3)
	GTMaterials.Osmium.get().setMaterialSecondaryARGB(0x401075)

	GTMaterials.Thorium.get().setMaterialARGB(0xEE75FF)
	GTMaterials.Thorium.get().setMaterialSecondaryARGB(0x4249E3)

	GTMaterials.Tungsten.get().setMaterialARGB(0x5F76B3)
	GTMaterials.Tungsten.get().setMaterialSecondaryARGB(0x35446E)

	GTMaterials.Zirconium.get().setMaterialARGB(0xC6ED91)
	GTMaterials.Zirconium.get().setMaterialSecondaryARGB(0x4A691F)

	// Alloys
	GTMaterials.Electrum.get().setMaterialARGB(0xFFF9B8)
	GTMaterials.Electrum.get().setMaterialSecondaryARGB(0xBF581D)

	// GTMaterials.HastelloyC276.get().setMaterialARGB(0xEBF5FF)
	// GTMaterials.HastelloyC276.get().setMaterialSecondaryARGB(0xA1B5D4)

	// GTMaterials.HSLASteel.get().setMaterialARGB(0xCED9F0)
	// GTMaterials.HSLASteel.get().setMaterialSecondaryARGB(0x7297C2)

	GTMaterials.TungstenCarbide.get().setMaterialARGB(0x494F6E)
	GTMaterials.TungstenCarbide.get().setMaterialSecondaryARGB(0x101323)

	// Credits to TerraFirmaGreg
	GTMaterials.Aluminium.get().setMaterialARGB(0xb6e5ff)
	GTMaterials.Aluminium.get().setMaterialSecondaryARGB(0x7ca29b)
	GTMaterials.Titanium.get().setMaterialARGB(0xe8b1fa)
	GTMaterials.Titanium.get().setMaterialSecondaryARGB(0xd8d5d9)
	GTMaterials.TungstenSteel.get().setMaterialARGB(0xadb8df)
	GTMaterials.TungstenSteel.get().setMaterialSecondaryARGB(0x03192f)

	GTMaterials.Platinum.get().setMaterialARGB(0xccdff5)
	GTMaterials.Platinum.get().setMaterialSecondaryARGB(0x59563a)

    // #region Icon Sets
    GTMaterials.Aluminium.getMaterialInfo().setIconSet(GTMaterialIconSet.SHINY);
    GTMaterials.Cupronickel.getMaterialInfo().setIconSet(GTMaterialIconSet.SHINY);

	GTMaterials.Neutronium.getMaterialInfo().setIconSet(GTMaterialIconSet.RADIOACTIVE);

	// #region Ores

	// TFC Ores
	GTMaterials.Gypsum.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_gypsum'))
	GTMaterials.Cinnabar.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_cinnabar'))
	InfinityMaterials.Cryolite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_cryolite'))
	GTMaterials.Borax.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_borax'))
	GTMaterials.Graphite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_graphite'))
	GTMaterials.Saltpeter.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_saltpeter'))
	GTMaterials.Sulfur.getMaterialInfo().setIconSet(GTMaterialIconSet.ROUGH)
	GTMaterials.RockSalt.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_sylvite'))
	GTMaterials.Amethyst.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_amethyst'))
	GTMaterials.Diamond.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_diamond'))
	GTMaterials.Emerald.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_emerald'))
	GTMaterials.Lapis.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_lapis'))
	GTMaterials.Opal.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_opal'))
	GTMaterials.Pyrite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_pyrite'))
	GTMaterials.Ruby.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_ruby'))
	GTMaterials.Sapphire.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_sapphire'))
	GTMaterials.Topaz.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_topaz'))

	GTMaterials.Copper.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_copper'))
	GTMaterials.Gold.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_gold'))
	GTMaterials.Silver.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_silver'))
	GTMaterials.Hematite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_hematite'))
	GTMaterials.Cassiterite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_cassiterite'))
	InfinityMaterials.Bismuthinite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_bismuthinite'))
	GTMaterials.Garnierite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_garnierite'))
	GTMaterials.Malachite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_malachite'))
	GTMaterials.Magnetite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_magnetite'))
	GTMaterials.YellowLimonite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_limonite'))
	GTMaterials.Sphalerite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_sphalerite'))
	GTMaterials.Tetrahedrite.getMaterialInfo().setIconSet(GTRegistries.MATERIAL_ICON_SETS.get('tfinfinity:tfc_tetrahedrite'))

	// Additional Materials
	GTMaterials.Barite.getMaterialInfo().setIconSet(InfinityMaterialIconSet.TABULAR);
	GTMaterials.Chalcocite.getMaterialInfo().setIconSet(InfinityMaterialIconSet.OCTAHEDRAL_SHINY);
	GTMaterials.Galena.getMaterialInfo().setIconSet(InfinityMaterialIconSet.CUBIC_METALLIC);
	GTMaterials.Goethite.getMaterialInfo().setIconSet(InfinityMaterialIconSet.BOTRYOIDAL_METALLIC);
	GTMaterials.Kyanite.getMaterialInfo().setIconSet(InfinityMaterialIconSet.TABULAR_FLINT);
	GTMaterials.Lazurite.getMaterialInfo().setIconSet(InfinityMaterialIconSet.CUBIC_RUBY);
	GTMaterials.Lead.getMaterialInfo().setIconSet(InfinityMaterialIconSet.CUBIC);
	GTMaterials.Mica.getMaterialInfo().setIconSet(InfinityMaterialIconSet.TABULAR_FINE);
	GTMaterials.Molybdenite.getMaterialInfo().setIconSet(InfinityMaterialIconSet.CUBIC_METALLIC);
	GTMaterials.Platinum.getMaterialInfo().setIconSet(InfinityMaterialIconSet.CUBIC_SHINY);
	GTMaterials.Palladium.getMaterialInfo().setIconSet(InfinityMaterialIconSet.CUBIC_SHINY);
	GTMaterials.Pitchblende.getMaterialInfo().setIconSet(InfinityMaterialIconSet.BOTRYOIDAL);
	GTMaterials.Uraninite.getMaterialInfo().setIconSet(InfinityMaterialIconSet.BOTRYOIDAL_METALLIC);
	GTMaterials.VanadiumMagnetite.getMaterialInfo().setIconSet(InfinityMaterialIconSet.OCTAHEDRAL_METALLIC);
	GTMaterials.Wulfenite.getMaterialInfo().setIconSet(InfinityMaterialIconSet.TABULAR);

	GTMaterials.GarnetSand.getMaterialInfo().setIconSet(GTMaterialIconSet.SAND);
	GTMaterials.GlauconiteSand.getMaterialInfo().setIconSet(GTMaterialIconSet.SAND);
	GTMaterials.GraniticMineralSand.getMaterialInfo().setIconSet(GTMaterialIconSet.SAND);
	GTMaterials.Oilsands.getMaterialInfo().setIconSet(GTMaterialIconSet.SAND);
}
