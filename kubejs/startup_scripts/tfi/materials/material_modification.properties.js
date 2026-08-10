// priority: 0
"use strict";

const { $DustProperty, $IngotProperty } = require("@package/com/gregtechceu/gtceu/api/data/chemical/material/properties");

function registerTFIPropertyMaterialModification(event) {
    GTMaterials.Zirconium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty());
}