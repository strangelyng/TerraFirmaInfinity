# Changelog

## [Unreleased]
This version is a massive restructuring, that began with a complete wipe of the project shortly after the release of v0.0.2.

### Additions
- Added Models and Textures for Powder TagPrefix
- Added Tool Head textures to material sets
- Added Models and Textures for additional electrical tools defined in Core Mod
- Added Maces to GT Materials with Tools
- Added TFCProperty and relevant MaterialFlags to GT materials that interact with TFC systems
- Added comprehensive recipe generation for material items that are used in the early-game
  - TFC Anvil, Casting, Heating, Melting, Welding Recipes
  - Basic Ore Processing for Small, Poor, and Rich ores (TFC, GT, Embers)
- Added recipes for TFInfinity Steam Components and Casings
- Added TFC molds for rods and small gears that require fire clay, as well as a plain clay nugget mold
- Added Embers stamps for large gears, rings, and rods
- Added TFC Sluicing as an early-game option for washing Crushed Ore, Impure Dust, and Pure Dust
- Added custom ore processing steps to various ores (WIP)
  - Aluminum Sources:
    - Garnet Group (Almandine, Andradite, Grossular, Pyrope, Spessartine, Uvarovite)
    - Sodalite Group (Lazurite, Sodalite)
    - Corundum Group (Ruby, Sapphire, Green Sapphire)
    - Emerald
    - Alunite
    - Topaz, Blue Topaz
    - Zeolite
    - Kyanite
    - Micas (Glauconite Sand, Mica)
  - Beryllium Sources:
    - Emerald
  - Lithium Sources:
    - Lepidolite
    - Spodumene
  - Cesium Sources:
    - Pollucite
  - Magnesium Sources:
    - Fullers Earth
- Aluminum production now requires the Hall-Héroult Process
- Added *Solutions*:
  - These materials are mixtures of water and another material
- Added recipes for Hydrogen Chloride and Hydrogen Fluoride
- Added biome modifiers to certain biomes for custom ore vein generation
  - Swamps, Volcanic Biomes, Beaches, and Atolls (in addition to built-in Mountain, River, and Collisional Mountains)
- Added custom ore veins that generate beneath Hot Springs and Volcanoes
  - These follow the shape of the fissures that generate beneath them and have natural variation in both depth and density.
  - Active hot springs typically have greater density
  - Veins associated with volcanoes are larger than Hot Spring veins

### Changes
- Disabled many unused and redundant items using Reliable Remover

#### AE2
- Made AE2 machinery mineable with pickaxe OR wrench
- Removed Inscriber and added relevant recipes to GT Forming Press (will be overhauled later)
- Added Charged Certus recipes to Polarizer

#### Eidolon: Repraised
- Adjusted Bonelord armor recipes to use the silver ingot tag

#### Embers
Config changes made in 0.0.2 were preserved
- Caminite blend is now a knappable material
  - Raw stamps are knapped rather than crafted in a grid
  - Raw can be heated using TFC methods into usable stamps
- Added the Unfired Caminite Brick which is heated using TFC methods into usable Caminite Brick which is crafted into blocks with Mortar
- Integrated Embers Machines (Melter, Mixer Centrifuge, Geologic Separator, Stamper) as an early-game ore processing option

#### GregTech
Config changes made in 0.0.2 were preserved
- Renamed Materials: 
  - Cooperite -> Cooperite
  - Iron -> Cast Iron
  - Quartzite -> Quartz
  - Nether Quartz -> Smoky Quartz (tbd)
  - Rock Salt -> Sylvite
  - Salt -> Halite
  - Yellow Limonite -> Limonite
- Disabled all GT Ore Veins by overwriting them with no_op generators
- Modified colors and icon sets for various GT Materials
- Modified Material Sets' Ore Block Textures to be based on TFC
  - Ores included in TFC use their TFC textures (generally)
  - Other ores use textures based TFC ore textures or a couple of custom made textures (Cubic and Tabular IconSets)
- Replaced Material Sets' Ore Item Textures with custom textures based on Vexxed Visuals and GregTechRefreshed ore items
- Made electrial tools tier-locked based on the material used to make them
- Compressed Coke Clay is now heated into Coke Oven Brick using TFC methods, then crafted into blocks with Mortar
- Made Borax Powder a distinct item that can be used as welding flux
- Made GT ore blocks have a chance at droppping either Poor, Normal, or Rich Raw Ore
- Disable built-in Decomposition recipes for materials with more advanced processing:
  - Garnets, Corundums, Sodalites, Topaz, Beryl, Clays, Micas, Zeolites
- Added Hydrochloric Acid and Hydrofluoric Acid recipes from Hydrogen Chloride and Hydrogen Fluoride respectively
- Adjusted ordering for primitive ore processing
  - Before: Raw -> Quern => Crushed -> Crafting with Hammer => Dust
  - After: Raw -> Crafting with Hammer => Crushed -> Quern => Dust
  - Converted Crushed Ore to Dust in a Crafting Grid now requires a Mortar, rather than a Hammer

#### Malum
- Added TFC-climate based spawn conditions to Runewood trees

#### TFC
Config changes made in 0.0.2 were preserved
- Additional Config changes:
  - keepNutritionAfterDeath: => false
- Made most metallurgy recipes use GT Material Items and Fluids
- Replaced sheets in all recipes with plates
- Disabled all kinetic components
- Added many Vexxed Visuals models and textures as default overrides in the kubejs/assets folder
  - Vexxed Visuals is also included as an optional resource pack

#### Firmalife
- Disabled Firmalife's Chromium and Stainless Steel processing
- Adjusted all recipes to use tagged metal items
- Added many Vexxed Visuals models and textures as default overrides in the kubejs/assets folder (from v1.2.7.1 for the 1.20.1 version of the Resource Pack)


## [0.0.2]
### Changes

#### GregTech
- Modified some default GregTech material colors (credit for some of these choices goes to the TerraFirmaGreg team)
- Removed some default GregTech tool materials and added tools to some TFC-equivalent materials (Bismuth Bronze, Black Bronze, Black Steel)
- Config changes:
  - harderRods => false
  - rubberTreeSpawnChance: => 0.0
  - sandOresFall: => true
  - shouldWeatherOrTerrainExplosion: => true
  - nativeEUToFE: => false
  - enableFEConverters: => true

#### Embers
- Config Changes:
  - Made Embers never spawn its ores
  - Changed tag preference ordering

#### TFC
- Made Crucible, Molds, and Small Vessel fluid capacities match GT's assumption (1 Ingot:144mB as opposed to TFC's default 1 Ingot:100mB)

## [0.0.1]
### Changes
- Initial release