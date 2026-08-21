// priority: 0
"use strict";

const registerAE2BlockTags = (event) => {
    let wrenchables = [
        'ae2:inscriber',
        'ae2:wireless_access_point',
        'ae2:charger',
        'ae2:quantum_ring',
        'ae2:quantum_link',
        'ae2:spatial_pylon',
        'ae2:spatial_io_port',
        'ae2:controller',
        'ae2:drive',
        'ae2:chest',
        'ae2:interface',
        'ae2:cell_workbench',
        'ae2:io_port',
        'ae2:condenser',
        'ae2:energy_acceptor',
        'ae2:crystal_resonance_generator',
        'ae2:vibration_chamber',
        'ae2:growth_accelerator',
        'ae2:energy_cell',
        'ae2:dense_energy_cell',
        'ae2:creative_energy_cell',
        'ae2:crafting_unit',
        'ae2:crafting_accelerator',
        'ae2:1k_crafting_storage',
        'ae2:4k_crafting_storage',
        'ae2:16k_crafting_storage',
        'ae2:64k_crafting_storage',
        'ae2:256k_crafting_storage',
        'ae2:crafting_monitor',
        'ae2:pattern_provider',
        'ae2:molecular_assembler',
        'ae2:spatial_anchor',

        'ae2:cable_bus', // Every item below uses this block

        // 'ae2:toggle_bus',
        // 'ae2:inverted_toggle_bus',

        // 'ae2:fluix_smart_cable',
        // 'ae2:fluix_covered_cable',
        // 'ae2:fluix_glass_cable',
        // 'ae2:fluix_covered_dense_cable',
        // 'ae2:fluix_smart_dense_cable',
        // 'ae2:quartz_fiber'

        // 'ae2:cable_anchor',
        // 'ae2:monitor',
        // 'ae2:semi_dark_monitor',
        // 'ae2:dark_monitor',
        // 'ae2:storage_bus',
        // 'ae2:import_bus',
        // 'ae2:export_bus',
        // 'ae2:level_emitter',
        // 'ae2:energy_level_emitter',
        // 'ae2:annihilation_plane',
        // 'ae2:formation_plane',
        // 'ae2:pattern_encoding_terminal',
        // 'ae2:crafting_terminal',
        // 'ae2:terminal',
        // 'ae2:storage_monitor',
        // 'ae2:conversion_monitor',
        // 'ae2:cable_pattern_provider',
        // 'ae2:cable_interface',
        // 'ae2:pattern_access_terminal',
        // 'ae2:cable_energy_acceptor',
        // 'ae2:me_p2p_tunnel',
        // 'ae2:redstone_p2p_tunnel',
        // 'ae2:item_p2p_tunnel',
        // 'ae2:fluid_p2p_tunnel',
        // 'ae2:fe_p2p_tunnel',
        // 'ae2:light_p2p_tunnel'
    ]

    wrenchables.forEach((block) => {
        event.remove('minecraft:mineable/pickaxe', block);
        event.add('gtceu:mineable/pickaxe_or_wrench', block);
    })
}