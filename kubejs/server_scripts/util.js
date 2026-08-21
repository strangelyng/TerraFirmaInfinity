// priority: 0
"use strict";

/**
 * 
 * @param {(material: com.gregtechceu.gtceu.api.data.chemical.Material) => $Material} iterator 
 */
function forEachMaterial(iterator) {
    for (const material of GTRegistries.MATERIALS) {
        iterator(material);
    }
}