// priority: 0
"use strict";

const registerAFCData = (event) => {    
    const AFC_WOODS = [
        'baobab', 'eucalyptus', 'mahogany', 'hevea', 'tualang', 'teak', 'cypress',
        'fig', 'ironwood', 'ipe', 'araucaria', 'beech', 'ginkgo', 'mahoe'
    ]

    forEachMaterial(material => {
        let tfcProperty = material.getProperty(InfinityPropertyKey.TFC_PROPERTY);

        if (tfcProperty !== null) {  
            let hangingSignItems = [];

            for (const wood of AFC_WOODS) {
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