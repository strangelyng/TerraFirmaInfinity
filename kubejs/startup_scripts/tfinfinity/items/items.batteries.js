const registerBatteryItems = (event) => {
    event.create('tfinfinity:nickel_hydroxide_electrode')
        .displayName('Nickel Hydroxide Electrode')
        .texture('tfinfinity:item/nickel_hydroxide_electrode');

    event.create('tfinfinity:iron_oxide_electrode')
        .displayName('Iron Oxide Electrode')
        .texture('tfinfinity:item/iron_oxide_electrode');

    event.create('tfinfinity:cadmium_oxide_electrode')
        .displayName('Cadmium Oxide Electrode')
        .texture('tfinfinity:item/cadmium_oxide_electrode');
}