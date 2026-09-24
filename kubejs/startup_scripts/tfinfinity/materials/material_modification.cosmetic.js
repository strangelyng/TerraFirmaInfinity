// priority: 0
"use strict";

const registerTFIMaterialModificationCosmetic = (event) => {
    // #region Colors

	/* TFC Mats */
	GTMaterials.Bismuth.setMaterialARGB(0x82C2A0)
	GTMaterials.Bismuth.setMaterialSecondaryARGB(0x43677D)

	GTMaterials.BismuthBronze.setMaterialARGB(0x80BD7E)
	GTMaterials.BismuthBronze.setMaterialSecondaryARGB(0x606E4F)

	GTMaterials.BlackBronze.setMaterialARGB(0x8F648C)
	GTMaterials.BlackBronze.setMaterialSecondaryARGB(0x3C3852)

	GTMaterials.Garnierite.setMaterialARGB(0x5e7951)
	GTMaterials.Garnierite.setMaterialSecondaryARGB(0x1c3d32)

	GTMaterials.YellowLimonite.setMaterialARGB(0xc0a05a)
	GTMaterials.YellowLimonite.setMaterialSecondaryARGB(0xa56f32)

	GTMaterials.Sphalerite.setMaterialARGB(0xbcbebb)
	GTMaterials.Sphalerite.setMaterialSecondaryARGB(0xa0a097)

	// Credits to TerraFirmaGreg
	GTMaterials.Steel.setMaterialARGB(0x9AA9AB)
	GTMaterials.SteelMagnetic.setMaterialARGB(0x9AA9AB)
	GTMaterials.RedSteel.setMaterialARGB(0xDE7B80)
	GTMaterials.RedSteel.setMaterialSecondaryARGB(0xE12323)
	GTMaterials.BlueSteel.setMaterialARGB(0xA0B6EC)
	GTMaterials.BlueSteel.setMaterialSecondaryARGB(0x2B5CD8)
	GTMaterials.Iron.setMaterialARGB(0x503d32)
	GTMaterials.Iron.setMaterialSecondaryARGB(0x131212)
	GTMaterials.IronMagnetic.setMaterialARGB(0x503d32)
	GTMaterials.IronMagnetic.setMaterialSecondaryARGB(0x131212)
	GTMaterials.Zinc.setMaterialARGB(0xd6ffdc)
	GTMaterials.Zinc.setMaterialSecondaryARGB(0xA3BE9E)
	GTMaterials.Brass.setMaterialSecondaryARGB(0x791905)
	GTMaterials.RoseGold.setMaterialARGB(0xF7D4BD)
	GTMaterials.RoseGold.setMaterialSecondaryARGB(0xE7945C)
	GTMaterials.Nickel.setMaterialARGB(0xfff4ba)
	GTMaterials.Nickel.setMaterialSecondaryARGB(0x8d8d71)
	GTMaterials.SterlingSilver.setMaterialARGB(0xFFE8E4)
	GTMaterials.SterlingSilver.setMaterialSecondaryARGB(0xFFDECB)

	/* Misc GT Mats */
	GTMaterials.Cobalt.setMaterialARGB(0xA1CDD6)
	GTMaterials.Cobalt.setMaterialSecondaryARGB(0x382757)
	GTMaterials.Cobaltite.setMaterialARGB(0x6a8fb7)
	GTMaterials.Cobaltite.setMaterialSecondaryARGB(0x382757)

	GTMaterials.Lazurite.setMaterialARGB(0x3941B3) // Prevent eyeballs from melting
	GTMaterials.Lazurite.setMaterialSecondaryARGB(0x0F1F4D)

	GTMaterials.Manganese.setMaterialARGB(0xA79A95)
	GTMaterials.Manganese.setMaterialSecondaryARGB(0x33241f)

	GTMaterials.Magnesium.setMaterialARGB(0xC7BEA9)
	GTMaterials.Magnesium.setMaterialSecondaryARGB(0x615743)

	GTMaterials.Molybdenum.setMaterialARGB(0xE9E3CE)
	GTMaterials.Molybdenum.setMaterialSecondaryARGB(0x60C5F0)

	GTMaterials.Osmium.setMaterialARGB(0x8CFFE3)
	GTMaterials.Osmium.setMaterialSecondaryARGB(0x401075)

	GTMaterials.Thorium.setMaterialARGB(0xEE75FF)
	GTMaterials.Thorium.setMaterialSecondaryARGB(0x4249E3)

	GTMaterials.Tungsten.setMaterialARGB(0x5F76B3)
	GTMaterials.Tungsten.setMaterialSecondaryARGB(0x35446E)

	GTMaterials.Zirconium.setMaterialARGB(0xC6ED91)
	GTMaterials.Zirconium.setMaterialSecondaryARGB(0x4A691F)

	// Alloys
	GTMaterials.Electrum.setMaterialARGB(0xFFF9B8)
	GTMaterials.Electrum.setMaterialSecondaryARGB(0xBF581D)

	GTMaterials.HastelloyC276.setMaterialARGB(0xEBF5FF)
	GTMaterials.HastelloyC276.setMaterialSecondaryARGB(0xA1B5D4)

	GTMaterials.HSLASteel.setMaterialARGB(0xCED9F0)
	GTMaterials.HSLASteel.setMaterialSecondaryARGB(0x7297C2)

	GTMaterials.TungstenCarbide.setMaterialARGB(0x494F6E)
	GTMaterials.TungstenCarbide.setMaterialSecondaryARGB(0x101323)

	// Credits to TerraFirmaGreg
	GTMaterials.Aluminium.setMaterialARGB(0xb6e5ff)
	GTMaterials.Aluminium.setMaterialSecondaryARGB(0x7ca29b)
	GTMaterials.Titanium.setMaterialARGB(0xe8b1fa)
	GTMaterials.Titanium.setMaterialSecondaryARGB(0xd8d5d9)
	GTMaterials.TungstenSteel.setMaterialARGB(0xadb8df)
	GTMaterials.TungstenSteel.setMaterialSecondaryARGB(0x03192f)

	GTMaterials.Platinum.setMaterialARGB(0xccdff5)
	GTMaterials.Platinum.setMaterialSecondaryARGB(0x59563a)

    // #region Icon Sets
    GTMaterials.Aluminium.setMaterialIconSet(GTMaterialIconSet.SHINY);
    GTMaterials.Cupronickel.setMaterialIconSet(GTMaterialIconSet.SHINY);

	GTMaterials.Neutronium.setMaterialIconSet(GTMaterialIconSet.RADIOACTIVE);

	// #region Ores

	// TFC Ores
	GTMaterials.Gypsum.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_gypsum'))
	GTMaterials.Cinnabar.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_cinnabar'))
	InfinityMaterials.Cryolite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_cryolite'))
	GTMaterials.Borax.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_borax'))
	GTMaterials.Graphite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_graphite'))
	GTMaterials.Saltpeter.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_saltpeter'))
	GTMaterials.Sulfur.setMaterialIconSet(GTMaterialIconSet.ROUGH)
	GTMaterials.RockSalt.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_sylvite'))
	GTMaterials.Amethyst.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_amethyst'))
	GTMaterials.Diamond.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_diamond'))
	GTMaterials.Emerald.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_emerald'))
	GTMaterials.Lapis.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_lapis'))
	GTMaterials.Opal.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_opal'))
	GTMaterials.Pyrite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_pyrite'))
	GTMaterials.Ruby.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_ruby'))
	GTMaterials.Sapphire.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_sapphire'))
	GTMaterials.Topaz.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_topaz'))

	GTMaterials.Copper.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_native_copper'))
	GTMaterials.Gold.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_native_gold'))
	GTMaterials.Silver.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_native_silver'))
	GTMaterials.Hematite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_hematite'))
	GTMaterials.Cassiterite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_cassiterite'))
	InfinityMaterials.Bismuthinite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_bismuthinite'))
	GTMaterials.Garnierite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_garnierite'))
	GTMaterials.Malachite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_malachite'))
	GTMaterials.Magnetite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_magnetite'))
	GTMaterials.YellowLimonite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_limonite'))
	GTMaterials.Sphalerite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_sphalerite'))
	GTMaterials.Tetrahedrite.setMaterialIconSet(GTRegistries.MATERIAL_ICON_SETS.get('gtceu:tfc_tetrahedrite'))

	// Additional Materials
	InfinityMaterials.Acanthite.setMaterialIconSet(InfinityMaterialIconSet.OCTAHEDRAL_METALLIC);
	GTMaterials.Barite.setMaterialIconSet(InfinityMaterialIconSet.TABULAR);
	GTMaterials.Galena.setMaterialIconSet(InfinityMaterialIconSet.CUBIC_METALLIC);
	GTMaterials.Goethite.setMaterialIconSet(InfinityMaterialIconSet.BOTRYOIDAL_METALLIC);
	GTMaterials.Kyanite.setMaterialIconSet(InfinityMaterialIconSet.TABULAR_FLINT);
	GTMaterials.Lazurite.setMaterialIconSet(InfinityMaterialIconSet.CUBIC_RUBY);
	GTMaterials.Lead.setMaterialIconSet(InfinityMaterialIconSet.CUBIC);
	GTMaterials.Mica.setMaterialIconSet(InfinityMaterialIconSet.TABULAR_FINE);
	GTMaterials.Molybdenite.setMaterialIconSet(InfinityMaterialIconSet.CUBIC_METALLIC);
	GTMaterials.Platinum.setMaterialIconSet(InfinityMaterialIconSet.CUBIC_SHINY);
	GTMaterials.Palladium.setMaterialIconSet(InfinityMaterialIconSet.CUBIC_SHINY);
	GTMaterials.Pitchblende.setMaterialIconSet(InfinityMaterialIconSet.BOTRYOIDAL);
	GTMaterials.Uraninite.setMaterialIconSet(InfinityMaterialIconSet.BOTRYOIDAL_METALLIC);
	GTMaterials.VanadiumMagnetite.setMaterialIconSet(InfinityMaterialIconSet.OCTAHEDRAL_METALLIC);
	GTMaterials.Wulfenite.setMaterialIconSet(InfinityMaterialIconSet.TABULAR);

	GTMaterials.GarnetSand.setMaterialIconSet(GTMaterialIconSet.SAND);
	GTMaterials.GlauconiteSand.setMaterialIconSet(GTMaterialIconSet.SAND);
	GTMaterials.GraniticMineralSand.setMaterialIconSet(GTMaterialIconSet.SAND);
	GTMaterials.Oilsands.setMaterialIconSet(GTMaterialIconSet.SAND);
}