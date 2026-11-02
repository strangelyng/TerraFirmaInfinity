const registerMaterialItems = (event) => {
    event.create('tfinfinity:unfired_caminite_brick')
        .texture('tfinfinity:item/unfired_caminite_brick');
    
    event.create('tfinfinity:asbestos_fibers')
        .displayName('Raw Asbestos Fibers')
        .texture('tfinfinity:item/asbestos_fibers');
    
    event.create('tfinfinity:asbestos_fiber_mesh')
        .displayName('Asbestos Fiber Mesh')
        .texture('tfinfinity:item/asbestos_fiber_mesh')
    
    event.create('tfinfinity:asbestos_fiber_plate')
        .displayName('Asbestos Fiber Plate')
        .texture('tfinfinity:item/asbestos_fiber_plate')

    event.create('tfinfinity:asbestos_fiber_diaphragm')
        .displayName('Asbestos Fiber Diaphragm')
        .texture('tfinfinity:item/asbestos_fiber_diaphragm')

    event.create('tfinfinity:steel_mesh')
        .displayName('Steel Mesh')
        .texture('tfinfinity:item/steel_mesh')
}