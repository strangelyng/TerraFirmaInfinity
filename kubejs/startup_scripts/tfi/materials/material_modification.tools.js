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

    const toRemove = [
        // Tool Materials to be Removed (No Replace)
        GTMaterials.Aluminium,
        GTMaterials.Diamond,
        // GTMaterials.CobaltBrass, // Disabling this makes GT angry
        GTMaterials.Invar,
        GTMaterials.RoseGold,
        GTMaterials.StainlessSteel,
        GTMaterials.SterlingSilver,
        GTMaterials.Titanium,
        GTMaterials.TungstenSteel
    ].forEach((mat) => {
        if (mat.hasProperty(PropertyKey.TOOL)) {
            mat.removeProperty(PropertyKey.TOOL);
        }
    })
    
    // ULV Tools
    GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.7, 4.0, 195, 2, ULVTools).build())
    
    GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3.1, 5.0, 188, 2, ULVTools).build())
    
    GTMaterials.BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6, 5.5, 612, 3, ULVTools).build())
}