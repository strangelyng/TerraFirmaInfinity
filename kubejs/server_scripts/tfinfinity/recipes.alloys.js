// priority: 1
"use strict";

const registerTFIAlloyRecipes = (event) => {
    event.remove({ type: 'tfc:alloy' })

    // #region Steels

    // Weak Blue Steel
    event.recipes.tfc.alloy(
        InfinityMaterials.WeakBlueSteel.getFluid(),
        [
            {
                fluid: GTMaterials.BlackSteel.getFluid(),
                min: 0.5,
                max: 0.55
            },
            {
                fluid: GTMaterials.Steel.getFluid(),
                min: 0.2,
                max: 0.25
            },
            {
                fluid: GTMaterials.BismuthBronze.getFluid(),
                min: 0.1,
                max: 0.15
            },
            {
                fluid: GTMaterials.SterlingSilver.getFluid(),
                min: 0.1,
                max: 0.15
            }
        ]
    ).id('tfinfinity:alloy/weak_blue_steel');

    // Weak Red Steel
    event.recipes.tfc.alloy(
        InfinityMaterials.WeakRedSteel.getFluid(),
        [
            {
                fluid: GTMaterials.BlackSteel.getFluid(),
                min: 0.5,
                max: 0.55
            },
            {
                fluid: GTMaterials.Steel.getFluid(),
                min: 0.2,
                max: 0.25
            },
            {
                fluid: GTMaterials.Brass.getFluid(),
                min: 0.1,
                max: 0.15
            },
            {
                fluid: GTMaterials.RoseGold.getFluid(),
                min: 0.1,
                max: 0.15
            }
        ]
    ).id('tfinfinity:alloy/weak_red_steel');

    // Weak Steel
    event.recipes.tfc.alloy(
        InfinityMaterials.WeakSteel.getFluid(),
        [
            {
                fluid: GTMaterials.Steel.getFluid(),
                min: 0.5,
                max: 0.7
            },
            {
                fluid: GTMaterials.Nickel.getFluid(),
                min: 0.15,
                max: 0.25
            },
            {
                fluid: GTMaterials.BlackBronze.getFluid(),
                min: 0.15,
                max: 0.25
            }
        ]
    ).id('tfinfinity:alloy/weak_steel');

    // #region Bronzes
    
    // Bismuth Bronze
    event.recipes.tfc.alloy(
        GTMaterials.BismuthBronze.getFluid(),
        [
            {
                fluid: GTMaterials.Zinc.getFluid(),
                min: 0.2,
                max: 0.3
            },
            {
                fluid: GTMaterials.Copper.getFluid(),
                min: 0.5,
                max: 0.65
            },
            {
                fluid: GTMaterials.Bismuth.getFluid(),
                min: 0.1,
                max: 0.2
            }
        ]
    ).id('tfinfinity:alloy/bismuth_bronze');
    
    // Bronze
    event.recipes.tfc.alloy(
        GTMaterials.Bronze.getFluid(),
        [
            {
                fluid: GTMaterials.Copper.getFluid(),
                min: 0.88,
                max: 0.92
            },
            {
                fluid: GTMaterials.Tin.getFluid(),
                min: 0.08,
                max: 0.12
            }
        ]
    ).id('tfinfinity:alloy/bronze');
    
    // Black Bronze
    event.recipes.tfc.alloy(
        GTMaterials.BlackBronze.getFluid(),
        [
            {
                fluid: GTMaterials.Copper.getFluid(),
                min: 0.5,
                max: 0.7
            },
            {
                fluid: GTMaterials.Silver.getFluid(),
                min: 0.1,
                max: 0.25
            },
            {
                fluid: GTMaterials.Gold.getFluid(),
                min: 0.1,
                max: 0.15
            }
        ]
    ).id('tfinfinity:alloy/black_bronze');

    // #region Misc
    
    // Brass
    event.recipes.tfc.alloy(
        GTMaterials.Brass.getFluid(),
        [
            {
                fluid: GTMaterials.Copper.getFluid(),
                min: 0.88,
                max: 0.92
            },
            {
                fluid: GTMaterials.Zinc.getFluid(),
                min: 0.08,
                max: 0.12
            }
        ]
    ).id('tfinfinity:alloy/brass');
    
    // Sterling Silver
    event.recipes.tfc.alloy(
        GTMaterials.SterlingSilver.getFluid(),
        [
            {
                fluid: GTMaterials.Copper.getFluid(),
                min: 0.2,
                max: 0.4
            },
            {
                fluid: GTMaterials.Silver.getFluid(),
                min: 0.6,
                max: 0.8
            }
        ]
    ).id('tfinfinity:alloy/sterling_silver');
    
    // Rose Gold
    event.recipes.tfc.alloy(
        GTMaterials.RoseGold.getFluid(),
        [
            {
                fluid: GTMaterials.Copper.getFluid(),
                min: 0.15,
                max: 0.3
            },
            {
                fluid: GTMaterials.Gold.getFluid(),
                min: 0.7,
                max: 0.85
            }
        ]
    ).id('tfinfinity:alloy/rose_gold');

    // #region Integration Materials
    event.recipes.tfc.alloy(
        InfinityMaterials.Pewter.getFluid(),
        [
            {
                fluid: GTMaterials.Tin.getFluid(),
                min: 0.5,
                max: 0.7
            },
            {
                fluid: GTMaterials.Lead.getFluid(),
                min: 0.3,
                max: 0.5
            }
        ]
    ).id('tfinfinity:alloy/pewter')

    event.recipes.tfc.alloy(
        InfinityMaterials.Dawnstone.getFluid(),
        [
            {
                fluid: GTMaterials.Gold.getFluid(),
                min: 0.15,
                max: 0.3
            },
            {
                fluid: GTMaterials.Copper.getFluid(),
                min: 0.7,
                max: 0.85
            }
        ]
    ).id('tfinfinity:alloy/dawnstone')

    // #region GTMaterials
    event.recipes.tfc.alloy(
        GTMaterials.TinAlloy.getFluid(),
        [
            {
                fluid: GTMaterials.Tin.getFluid(),
                min: 0.4,
                max: 0.6
            },
            {
                fluid: GTMaterials.Iron.getFluid(),
                min: 0.4,
                max: 0.6
            }
        ]
    ).id('tfinfinity:alloy/tin_alloy')
    
    event.recipes.tfc.alloy(
        GTMaterials.Electrum.getFluid(),
        [
            {
                fluid: GTMaterials.Gold.getFluid(),
                min: 0.4,
                max: 0.6
            },
            {
                fluid: GTMaterials.Silver.getFluid(),
                min: 0.4,
                max: 0.6
            }
        ]
    ).id('tfinfinity:alloy/electrum')
    
    event.recipes.tfc.alloy(
        GTMaterials.Invar.getFluid(),
        [
            {
                fluid: GTMaterials.Iron.getFluid(),
                min: 0.6,
                max: 0.75
            },
            {
                fluid: GTMaterials.Nickel.getFluid(),
                min: 0.25,
                max: 0.4
            }
        ]
    ).id('tfinfinity:alloy/invar')
    
    event.recipes.tfc.alloy(
        GTMaterials.Potin.getFluid(),
        [
            {
                fluid: GTMaterials.Copper.getFluid(),
                min: 0.6,
                max: 0.7
            },
            {
                fluid: GTMaterials.Tin.getFluid(),
                min: 0.15,
                max: 0.25
            },
            {
                fluid: GTMaterials.Lead.getFluid(),
                min: 0.05,
                max: 0.15
            }
        ]
    ).id('tfinfinity:alloy/potin')

    // #region Embers Mixing
    event.remove({ id: /embers:mixing\/molten_.*/ })

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 1,
                fluid: GTMaterials.Copper.getFluid().id
            },
            {
                amount: 4,
                fluid: GTMaterials.Gold.getFluid().id
            }
        ],
        output: {
            amount: 5,
            fluid: GTMaterials.RoseGold.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/rose_gold')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 2,
                fluid: GTMaterials.Lead.getFluid().id
            },
            {
                amount: 3,
                fluid: GTMaterials.Tin.getFluid().id
            }
        ],
        output: {
            amount: 5,
            fluid: InfinityMaterials.Pewter.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/pewter')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 1,
                fluid: GTMaterials.Tin.getFluid().id
            },
            {
                amount: 3,
                fluid: GTMaterials.Copper.getFluid().id
            }
        ],
        output: {
            amount: 4,
            fluid: GTMaterials.Bronze.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/bronze')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 1,
                fluid: GTMaterials.Copper.getFluid().id
            },
            {
                amount: 4,
                fluid: GTMaterials.Silver.getFluid().id
            }
        ],
        output: {
            amount: 5,
            fluid: GTMaterials.SterlingSilver.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/sterling_silver')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 1,
                fluid: GTMaterials.Zinc.getFluid().id
            },
            {
                amount: 3,
                fluid: GTMaterials.Copper.getFluid().id
            }
        ],
        output: {
            amount: 4,
            fluid: GTMaterials.Brass.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/brass')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 1,
                fluid: GTMaterials.Gold.getFluid().id
            },
            {
                amount: 4,
                fluid: GTMaterials.Copper.getFluid().id
            }
        ],
        output: {
            amount: 5,
            fluid: InfinityMaterials.Dawnstone.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/dawnstone')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 1,
                fluid: GTMaterials.Tin.getFluid().id
            },
            {
                amount: 1,
                fluid: GTMaterials.Iron.getFluid().id
            }
        ],
        output: {
            amount: 2,
            fluid: GTMaterials.TinAlloy.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/tin_alloy')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 1,
                fluid: GTMaterials.Gold.getFluid().id
            },
            {
                amount: 1,
                fluid: GTMaterials.Silver.getFluid().id
            }
        ],
        output: {
            amount: 2,
            fluid: GTMaterials.Electrum.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/electrum')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 2,
                fluid: GTMaterials.Iron.getFluid().id
            },
            {
                amount: 1,
                fluid: GTMaterials.Nickel.getFluid().id
            }
        ],
        output: {
            amount: 3,
            fluid: GTMaterials.Invar.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/invar')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 6,
                fluid: GTMaterials.Bronze.getFluid().id
            },
            {
                amount: 1,
                fluid: GTMaterials.Lead.getFluid().id
            }
        ],
        output: {
            amount: 7,
            fluid: GTMaterials.Potin.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/potin')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 3,
                fluid: GTMaterials.Copper.getFluid().id
            },
            {
                amount: 2,
                fluid: GTMaterials.Electrum.getFluid().id
            }
        ],
        output: {
            amount: 5,
            fluid: GTMaterials.BlackBronze.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/black_bronze')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 4,
                fluid: GTMaterials.Brass.getFluid().id
            },
            {
                amount: 1,
                fluid: GTMaterials.Bismuth.getFluid().id
            }
        ],
        output: {
            amount: 5,
            fluid: GTMaterials.BismuthBronze.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/bismuth_bronze')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 1,
                fluid: GTMaterials.BlackBronze.getFluid().id
            },
            {
                amount: 1,
                fluid: GTMaterials.Nickel.getFluid().id
            },
            {
                amount: 3,
                fluid: GTMaterials.Steel.getFluid().id
            }
        ],
        output: {
            amount: 5,
            fluid: InfinityMaterials.WeakSteel.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/weak_steel')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 1,
                fluid: GTMaterials.SterlingSilver.getFluid().id
            },
            {
                amount: 1,
                fluid: GTMaterials.BismuthBronze.getFluid().id
            },
            {
                amount: 4,
                fluid: GTMaterials.BlackSteel.getFluid().id
            },
            {
                amount: 2,
                fluid: GTMaterials.Steel.getFluid().id
            }
        ],
        output: {
            amount: 8,
            fluid: InfinityMaterials.WeakBlueSteel.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/weak_blue_steel')

    event.custom({
        type: 'embers:mixing',
        inputs: [
            {
                amount: 1,
                fluid: GTMaterials.RoseGold.getFluid().id
            },
            {
                amount: 1,
                fluid: GTMaterials.Brass.getFluid().id
            },
            {
                amount: 4,
                fluid: GTMaterials.BlackSteel.getFluid().id
            },
            {
                amount: 2,
                fluid: GTMaterials.Steel.getFluid().id
            }
        ],
        output: {
            amount: 8,
            fluid: InfinityMaterials.WeakRedSteel.getFluid().id
        }
    }).id('tfinfinity:embers/mixing/weak_red_steel')
}