const registerBatteryItems = (event) => {
    event.create('tfinfinity:nickel_cadmium_battery_roll')
        .displayName('Nickel-Cadmium Battery Roll')
        .texture('tfinfinity:item/nickel_cadmium_battery_roll');

    event.create('tfinfinity:nickel_iron_battery_roll')
        .displayName('Nickel-Iron Battery Roll')
        .texture('tfinfinity:item/nickel_iron_battery_roll');
}