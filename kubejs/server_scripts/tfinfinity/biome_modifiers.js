let swamp_biomes = [
    "tfc:low_canyons",
    "tfc:lowlands",
    "tfc:salt_marsh"
]

let volcanic_biomes = [
    "tfc:active_shield_volcano",
    "tfc:ancient_shield_volcano",
    "tfc:dormant_shield_volcano",
    "tfc:extinct_shield_volcano",
    "tfc:glacially_carved_volcanic_mountains",
    "tfc:glacially_carved_volcanic_oceanic_mountains",
    "tfc:glaciated_shield_volcano",
    "tfc:glaciated_volcanic_mountains",
    "tfc:glaciated_volcanic_oceanic_mountains",
    "tfc:ice_sheet_shield_volcano",
    "tfc:ice_sheet_volcanic_mountains",
    "tfc:ice_sheet_volcanic_oceanic_mountains",
    "tfc:oceanic_volcanic_arc",
    "tfc:old_shield_volcano_shore",
    "tfc:shield_volcano_shore",
    "tfc:sunken_shield_volcano",
    "tfc:volcanic_island",
    "tfc:volcanic_mountain_islands",
    "tfc:volcanic_mountain_lake",
    "tfc:volcanic_mountains",
    "tfc:volcanic_oceanic_mountain_lake",
    "tfc:volcanic_oceanic_mountains"
]

let beach_biomes = [
    "tfc:guano_island",
    "tfc:shore",
    "tfc:tidal_flats",
    "tfc:sea_stacks",
    "tfc:terrace_upper",
    "tfc:terrace_lower",
    "tfc:setback_cliffs",
    "tfc:coastal_dunes",
    "tfc:rocky_shores",
    "tfc:embayments",
    "tfc:tower_karst_bay",
    "tfc:shield_volcano_shore",
    "tfc:old_shield_volcano_shore",
    "tfc:ice_sheet_oceanic",
    "tfc:ice_sheet_shore"
]

let atoll_biomes = [
    "tfc:ocean_atolls",
    "tfc:deep_ocean_atolls",
    "tfc:guano_island"
]

const registerTFIBiomeModifiers = (event) => {
    event.create('swamp_veins', 'add_features')
        .biomes(swamp_biomes)
        .step('underground_ores')
        .features('#tfc:in_biome/veins/swamp')
        
    event.create('volcanic_veins', 'add_features')
        .biomes(volcanic_biomes)
        .step('underground_ores')
        .features('#tfc:in_biome/veins/volcanic')
        
    event.create('beach_veins', 'add_features')
        .biomes(beach_biomes)
        .step('underground_ores')
        .features('#tfc:in_biome/veins/beach')

    event.create('atoll_veins', 'add_features')
        .biomes(atoll_biomes)
        .step('underground_ores')
        .features('#tfc:in_biome/veins/atoll')
}