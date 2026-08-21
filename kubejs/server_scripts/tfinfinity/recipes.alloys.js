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
}