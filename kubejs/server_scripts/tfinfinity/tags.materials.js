// priority: 0
"use strict";

const registerTFIMaterialFluidTags = (event) => {
    forEachMaterial(material => {
        const tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

        if (tfcProperty === null) return;

        let fluid = tfcProperty.getOutputFluid() !== null ? tfcProperty.getOutputFluid() : material.getFluid();

        event.add('tfc:usable_in_ingot_mold', fluid);

        if (material.hasFlag(InfinityMaterialFlags.TFC_CASTABLE) && material.hasProperty(PropertyKey.TOOL)) {
            event.add('tfc:usable_in_tool_head_mold', fluid)
        }
    })
}