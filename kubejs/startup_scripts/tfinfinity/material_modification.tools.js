// priority: 0
"use strict";

const registerTFIMaterialModificationTools = (event) => {
    const ULVTools = [
        GTToolType.AXE,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
        InfinityToolType.CHISEL,
        GTToolType.FILE,
        GTToolType.HARD_HAMMER,
        GTToolType.HOE,
        GTToolType.KNIFE,
        GTToolType.MINING_HAMMER,
        GTToolType.MORTAR,
        GTToolType.PICKAXE,
        GTToolType.SAW,
        GTToolType.SCREWDRIVER,
        GTToolType.SCYTHE,
        GTToolType.SHEARS,
        GTToolType.SHOVEL,
        GTToolType.SPADE,
        GTToolType.SWORD,
        InfinityToolType.MACE,
        GTToolType.WIRE_CUTTER,
        GTToolType.WRENCH
    ]

    const LVTools = [
        GTToolType.AXE,
        GTToolType.CHAINSAW_LV,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
        InfinityToolType.CHISEL,
        GTToolType.FILE,
        GTToolType.HARD_HAMMER,
        GTToolType.HOE,
        GTToolType.KNIFE,
        GTToolType.MINING_HAMMER,
        GTToolType.MORTAR,
        GTToolType.PICKAXE,
        GTToolType.DRILL_LV,
        GTToolType.SAW,
        GTToolType.BUZZSAW_LV,
        GTToolType.SCREWDRIVER,
        GTToolType.SCREWDRIVER_LV,
        GTToolType.SCYTHE,
        GTToolType.SHEARS,
        GTToolType.SHOVEL,
        GTToolType.SPADE,
        GTToolType.SWORD,
        InfinityToolType.MACE,
        GTToolType.WIRE_CUTTER,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.WRENCH,
        GTToolType.WRENCH_LV
    ]

    const MVTools = [
        GTToolType.CHAINSAW_LV,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
        InfinityToolType.CHISEL,
        GTToolType.FILE,
        GTToolType.HARD_HAMMER,
        GTToolType.KNIFE,
        GTToolType.MORTAR,
        GTToolType.DRILL_MV,
        GTToolType.BUZZSAW_LV,
        GTToolType.SCREWDRIVER_LV,
        GTToolType.SCYTHE,
        GTToolType.SHEARS,
        GTToolType.SPADE,
        GTToolType.SWORD,
        InfinityToolType.MACE,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.WRENCH_LV
    ]

    const HVTools = [
        GTToolType.CHAINSAW_HV,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
        InfinityToolType.CHISEL,
        GTToolType.FILE,
        GTToolType.HARD_HAMMER,
        GTToolType.KNIFE,
        GTToolType.MORTAR,
        GTToolType.DRILL_HV,
        GTToolType.BUZZSAW_LV,
        GTToolType.SCREWDRIVER_HV,
        GTToolType.SCYTHE,
        GTToolType.SHEARS,
        GTToolType.SPADE,
        GTToolType.SWORD,
        InfinityToolType.MACE,
        GTToolType.WIRE_CUTTER_HV,
        GTToolType.WRENCH_HV
    ]

    const EVTools = [
        GTToolType.CHAINSAW_HV,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
        InfinityToolType.CHISEL,
        GTToolType.FILE,
        GTToolType.HARD_HAMMER,
        GTToolType.KNIFE,
        GTToolType.MORTAR,
        GTToolType.DRILL_EV,
        GTToolType.BUZZSAW_LV,
        GTToolType.SCREWDRIVER_HV,
        GTToolType.SCYTHE,
        GTToolType.SHEARS,
        GTToolType.SPADE,
        GTToolType.SWORD,
        InfinityToolType.MACE,
        GTToolType.WIRE_CUTTER_HV,
        GTToolType.WRENCH_HV
    ]

    const IVTools = [
        GTToolType.CHAINSAW_IV,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
        InfinityToolType.CHISEL,
        GTToolType.FILE,
        GTToolType.HARD_HAMMER,
        GTToolType.KNIFE,
        GTToolType.MORTAR,
        GTToolType.DRILL_IV,
        GTToolType.BUZZSAW_LV,
        GTToolType.SCREWDRIVER_IV,
        GTToolType.SCYTHE,
        GTToolType.SHEARS,
        GTToolType.SPADE,
        GTToolType.SWORD,
        InfinityToolType.MACE,
        GTToolType.WIRE_CUTTER_IV,
        GTToolType.WRENCH_IV
    ]

    // Cast Iron Tools are Trash
    GTMaterials.Iron.removeProperty(PropertyKey.TOOL);
    GTMaterials.Iron.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 1.0, 20, 2, [GTToolType.PICKAXE]).build());

    const toRemove = [
        /* Tool Materials to be Removed (No Replace) */
        GTMaterials.Flint,
        GTMaterials.Aluminium,
        GTMaterials.Diamond,
        GTMaterials.CobaltBrass,
        GTMaterials.Invar,
        GTMaterials.RoseGold,
        GTMaterials.Netherite,
        GTMaterials.StainlessSteel,
        GTMaterials.SterlingSilver,
        GTMaterials.Titanium,
        GTMaterials.TungstenSteel,
        /* Tool Materials to be Rebalanced */
        // GTMaterials.Copper, // not in base GT
        GTMaterials.Bronze,
        GTMaterials.WroughtIron,
        GTMaterials.Steel,
        GTMaterials.DamascusSteel,
        GTMaterials.BlueSteel,
        GTMaterials.RedSteel,
        GTMaterials.VanadiumSteel,
        GTMaterials.Ultimet,
        GTMaterials.TungstenCarbide,
        GTMaterials.HSSE,
        GTMaterials.Duranium,
        GTMaterials.NaquadahAlloy,
        // GTMaterials.Neutronium
    ].forEach((mat) => {
        if (mat.hasProperty(PropertyKey.TOOL)) {
            mat.removeProperty(PropertyKey.TOOL);
        }
    })

    // TODO: Add TFC Tool Types

    // #region Tool Properties
    // TODO: Rework these, especially past LV (Currently based too heavily off of TFG progression)

    // ULV Tools
    GTMaterials.Bronze.addFlags(InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE);
    GTMaterials.CobaltBrass.addFlags(InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE);

    GTMaterials.Copper.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD)
    GTMaterials.Copper.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 4.0, 180, 1, ULVTools).build())
    
    GTMaterials.Bronze.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD)
    GTMaterials.Bronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3.0, 4.0, 212, 2, ULVTools).build())

    GTMaterials.BismuthBronze.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD)
    GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.7, 4.0, 195, 2, ULVTools).build())
    
    GTMaterials.BlackBronze.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD)
    GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3.1, 5.0, 188, 2, ULVTools).build())
    
    GTMaterials.WroughtIron.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD)
    GTMaterials.WroughtIron.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(4, 4, 384, 2, ULVTools).build())
    
    GTMaterials.Steel.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD)
    GTMaterials.Steel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(5, 5, 512, 3, ULVTools).build())
    
    GTMaterials.DamascusSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6, 6, 1024, 3, ULVTools).build())

    GTMaterials.BlackSteel.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD)
    GTMaterials.BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6, 5.5, 612, 3, ULVTools).build())

    // LV Tools
    GTMaterials.BlueSteel.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD, InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE, InfinityMaterialFlags.GENERATE_DRILL_HEAD, InfinityMaterialFlags.GENERATE_CHAINSAW_HEAD)
	GTMaterials.BlueSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(9, 5, 804, 3, LVTools).build());

    GTMaterials.RedSteel.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD, InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE, InfinityMaterialFlags.GENERATE_DRILL_HEAD, InfinityMaterialFlags.GENERATE_CHAINSAW_HEAD)
	GTMaterials.RedSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6, 7.5, 1560, 3, LVTools).build());

    // MV Tools
    GTMaterials.VanadiumSteel.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD, InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE, InfinityMaterialFlags.GENERATE_DRILL_HEAD, InfinityMaterialFlags.GENERATE_CHAINSAW_HEAD)
	GTMaterials.VanadiumSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(5, 8, 2048, 3, MVTools).build());

    // HV Tools
	GTMaterials.Ultimet.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD, InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE, InfinityMaterialFlags.GENERATE_DRILL_HEAD, InfinityMaterialFlags.GENERATE_CHAINSAW_HEAD)
	GTMaterials.Ultimet.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(16, 9, 1678, 4, HVTools).build());

    // EV Tools
	GTMaterials.TungstenCarbide.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD, InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE, InfinityMaterialFlags.GENERATE_DRILL_HEAD, InfinityMaterialFlags.GENERATE_CHAINSAW_HEAD)
	GTMaterials.TungstenCarbide.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(34, 12, 1024, 4, EVTools).build());

    // IV Tools
	GTMaterials.HSSE.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD, InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE, InfinityMaterialFlags.GENERATE_DRILL_HEAD, InfinityMaterialFlags.GENERATE_CHAINSAW_HEAD)
	GTMaterials.HSSE.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(44, 13, 4012, 3, IVTools).build());

    // LuV Tools
	GTMaterials.Duranium.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD, InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE, InfinityMaterialFlags.GENERATE_DRILL_HEAD, InfinityMaterialFlags.GENERATE_CHAINSAW_HEAD)
	GTMaterials.Duranium.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(54, 14, 8192, 5, IVTools).build());
	
    GTMaterials.NaquadahAlloy.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD, InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE, InfinityMaterialFlags.GENERATE_DRILL_HEAD, InfinityMaterialFlags.GENERATE_CHAINSAW_HEAD)
	GTMaterials.NaquadahAlloy.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(64, 15, 8192, 5, IVTools).build());

    // UV Tools
	// GTMaterials.Neutronium.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD, InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE, InfinityMaterialFlags.GENERATE_DRILL_HEAD, InfinityMaterialFlags.GENERATE_CHAINSAW_HEAD)
	// GTMaterials.Neutronium.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(180.0, 100.0, 65535, 6, IVTools).unbreakable().build());
}