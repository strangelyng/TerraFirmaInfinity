// priority: 0
"use strict";

function registerTFIToolMaterialModification(event) {
    const ULVTools = [
        GTToolType.AXE,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
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
        GTToolType.WIRE_CUTTER,
        GTToolType.WRENCH
    ]

    const LVTools = [
        GTToolType.AXE,
        GTToolType.CHAINSAW_LV,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
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
        GTToolType.WIRE_CUTTER,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.WRENCH,
        GTToolType.WRENCH_LV
    ]

    const MVTools = [
        GTToolType.CHAINSAW_LV,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
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
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.WRENCH_LV
    ]

    const HVTools = [
        GTToolType.CHAINSAW_HV,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
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
        GTToolType.WIRE_CUTTER_HV,
        GTToolType.WRENCH_HV
    ]

    const EVTools = [
        GTToolType.CHAINSAW_HV,
        GTToolType.BUTCHERY_KNIFE,
        GTToolType.CROWBAR,
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
        GTToolType.WIRE_CUTTER_HV,
        GTToolType.WRENCH_HV
    ]

    // Cast Iron Tools are Trash
    GTMaterials.Iron.removeProperty(PropertyKey.TOOL);
    GTMaterials.Iron.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 1.0, 20, 2, [GTToolType.PICKAXE]).build());

    const toRemove = [
        /* Tool Materials to be Removed (No Replace) */
        GTMaterials.Aluminium,
        GTMaterials.Diamond,
        GTMaterials.CobaltBrass,
        GTMaterials.Invar,
        GTMaterials.RoseGold,
        GTMaterials.StainlessSteel,
        GTMaterials.SterlingSilver,
        GTMaterials.Titanium,
        GTMaterials.TungstenSteel,
        /* Tool Materials to be Rebalanced */
        GTMaterials.Bronze,
        GTMaterials.WroughtIron,
        GTMaterials.Steel
    ].forEach((mat) => {
        if (mat.hasProperty(PropertyKey.TOOL)) {
            mat.removeProperty(PropertyKey.TOOL);
        }
    })
    
    // ULV Tools
    GTMaterials.Bronze.addFlags(InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE);
    GTMaterials.CobaltBrass.addFlags(InfinityMaterialFlags.GENERATE_BUZZSAW_BLADE);

    GTMaterials.Copper.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD)
    
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
    
    GTMaterials.BlackSteel.addFlags(InfinityMaterialFlags.GENERATE_SCREWDRIVER_HEAD, InfinityMaterialFlags.GENERATE_WRENCH_HEAD, InfinityMaterialFlags.GENERATE_WIRE_CUTTER_HEAD)
    GTMaterials.BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6, 5.5, 612, 3, ULVTools).build())
}