// priority: 0
"use strict";

const registerAFCData = (event) => {
    forEachMaterial(material => {
        let tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

        if (tfcProperty !== null) {  
            let hangingSignItems = [];

            for (const wood of global.AFC_LUMBER) {
                let signItem = tryGetItem(`afc:wood/hanging_sign/${material.getName()}/${wood}`);

                if (signItem.isEmpty()) {
                    break;
                } else {
                    hangingSignItems.push(signItem);
                }
            }

            if (hangingSignItems.length > 0) {
                event.heat({
                    ingredient: hangingSignItems,
                    heatCapacity: 0.114285715,
                    forgingTemperature: tfcProperty.getForgingTemp(),
                    weldingTemperature: tfcProperty.getWeldingTemp()
                }, `tfinfinity:${material.getName()}/hanging_signs_afc`)
            }
        }
    })
}