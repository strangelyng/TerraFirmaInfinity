const registerTFIMolds = (event) => {
    // #region Embers Stamps
    event.create('tfinfinity:raw_large_gear_stamp')
        .texture('tfinfinity:item/large_gear_stamp_raw')
        .tooltip("§7An unfired stamp blank for gears.§r")

    event.create('tfinfinity:large_gear_stamp')
        .texture('tfinfinity:item/large_gear_stamp')
        .tag('embers:stamps')
        .tooltip("§7Presses molten metal into gears.§r")

    event.create('tfinfinity:rod_stamp')
        .texture('tfinfinity:item/rod_stamp')
        .tag('embers:stamps')
        .tooltip("§7Presses molten metal into rods.§r")

    event.create('tfinfinity:raw_rod_stamp')
        .texture('tfinfinity:item/rod_stamp_raw')
        .tooltip("§7An unfired stamp blank for rods.§r")

    // event.create('tfinfinity:bolt_stamp')
    //     .texture('tfinfinity:item/bolt_stamp')
    //     .tag('embers:stamps')
    //     .tooltip("§7Presses molten metal into bolts.§r")

    // event.create('tfinfinity:raw_bolt_stamp')
    //     .texture('tfinfinity:item/bolt_stamp_raw')
    //     .tooltip("§7An unfired stamp blank for bolts.§r")

    event.create('tfinfinity:ring_stamp')
        .texture('tfinfinity:item/ring_stamp')
        .tag('embers:stamps')
        .tooltip("§7Presses molten metal into rings.§r")

    event.create('tfinfinity:raw_ring_stamp')
        .texture('tfinfinity:item/ring_stamp_raw')
        .tooltip("§7An unfired stamp blank for rings.§r")

    // #region TFC Molds
    event.create('tfinfinity:ceramic/unfired_fire_small_gear_mold')
        .displayName('Unfired Fire Small Gear Mold')
        .tag('tfc:unfired_pottery')
        .tag('tfc:unfired_molds')
        .tag('tfc:molds')

    event.create('tfinfinity:ceramic/fire_small_gear_mold', 'tfc:mold')
        .displayName('Fire Small Gear Mold')
        .textures('tfinfinity:item/ceramic/fired_mold/fire_small_gear_mold', 'tfinfinity:item/ceramic/fired_mold/fire_small_gear_mold_overlay')
        .capacity(144)
        .allowedFluids('tfc:usable_in_ingot_mold')
        .moldTable([
            "XXXXXXXXXXXXXX",
            "XXXXXX  XXXXXX",
            "XX  X    X  XX",
            "XX          XX",
            "XXX        XXX",
            "XX          XX",
            "X            X",
            "X            X",
            "XX          XX",
            "XXX        XXX",
            "XX          XX",
            "XX  X    X  XX",
            "XXXXXX  XXXXXX",
            "XXXXXXXXXXXXXX"
        ])
        .tag('tfc:molds')
        .tag('tfc:fired_molds')

    event.create('tfinfinity:ceramic/unfired_fire_rod_mold')
        .displayName('Unfired Fire Rod Mold')
        .tag('tfc:unfired_pottery')
        .tag('tfc:unfired_molds')
        .tag('tfc:molds')

    event.create('tfinfinity:ceramic/fire_rod_mold', 'tfc:mold')
        .displayName('Fire Rod Mold')
        .textures('tfinfinity:item/ceramic/fired_mold/fire_rod_mold', 'tfinfinity:item/ceramic/fired_mold/fire_rod_mold_overlay')
        .capacity(72)
        .allowedFluids('tfc:usable_in_ingot_mold')
        .moldTable([
            "XXXXXXXXXXXXXX",
            "XXXXXXXXXXXXXX",
            "XXXXXXXXXX XXX",
            "XXXXXXXXX   XX",
            "XXXXXXXX   XXX",
            "XXXXXXX   XXXX",
            "XXXXXX   XXXXX",
            "XXXXX   XXXXXX",
            "XXXX   XXXXXXX",
            "XXX   XXXXXXXX",
            "XX   XXXXXXXXX",
            "XXX XXXXXXXXXX",
            "XXXXXXXXXXXXXX",
            "XXXXXXXXXXXXXX",
        ])
        .tag('tfc:molds')
        .tag('tfc:fired_molds')

    event.create('tfinfinity:ceramic/unfired_nugget_mold')
        .displayName('Unfired Nugget Mold')
        .tag('tfc:unfired_pottery')
        .tag('tfc:unfired_molds')
        .tag('tfc:molds')

    event.create('tfinfinity:ceramic/nugget_mold', 'tfc:mold')
        .displayName('Nugget Mold')
        .textures('tfinfinity:item/ceramic/fired_mold/nugget_mold', 'tfinfinity:item/ceramic/fired_mold/nugget_mold_overlay')
        .capacity(72)
        .allowedFluids('tfc:usable_in_ingot_mold')
        .moldTable([
            "XXXXXXXXXXXXXX",
            "XXXXXXXXXXXXXX",
            "XXXXXXXXXXXXXX",
            "XXXXXXXXXXXXXX",
            "XXXXXXXXXXXXXX",
            "XXXXXX  XXXXXX",
            "XXXXX    XXXXX",
            "XXXXX    XXXXX",
            "XXXXXX  XXXXXX",
            "XXXXXXXXXXXXXX",
            "XXXXXXXXXXXXXX",
            "XXXXXXXXXXXXXX",
            "XXXXXXXXXXXXXX",
            "XXXXXXXXXXXXXX",
        ])
        .tag('tfc:molds')
        .tag('tfc:fired_molds')
}