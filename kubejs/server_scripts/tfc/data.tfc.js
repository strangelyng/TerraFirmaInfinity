// priority: 0
"use strict";

const registerTFCData = (event) => {
    event.fuel({
        ingredient: '#c:gems/coke',
        duration: 2100,
        temperature: 1540
    })

    event.itemSize({
        ingredient: 'tfc:kaolin_clay',
        weight: 'very_light',
        size: 'very_small'
    }, 'tfinfinity:kaolin_clay')
}