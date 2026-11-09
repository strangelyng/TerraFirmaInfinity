// priority: 1
"use strict";

const registerTFIStoneRecipes = (event) => {
    global.STONE_TYPES.forEach(stone => {
        // #region Crafting
        event.shaped(`tfc:rock/cobble/${stone}_slab`, [
            'XX'
        ], {
            X: `tfc:rock/loose/${stone}`
        }).id(`tfinfinity:crafting/rock/cobble/${stone}_slab`)

        event.shaped(`tfc:rock/cobble/${stone}_stairs`, [
            'X ',
            'XX'
        ], {
            X: `tfc:rock/loose/${stone}`
        }).id(`tfinfinity:crafting/rock/cobble/${stone}_stairs`)

        // #region Hammering
        event.recipes.gtceu.forge_hammer(`tfinfinity:raw_${stone}_to_cobble`)
            .itemInputs(`tfc:rock/raw/${stone}`)
            .itemOutputs(`tfc:rock/cobble/${stone}`)
            .duration(12)
            .EUt(GTValues.VH[GTValues.ULV])

        event.recipes.gtceu.forge_hammer(`tfinfinity:${stone}_cobble_to_gravel`)
            .itemInputs(`tfc:rock/cobble/${stone}`)
            .itemOutputs(`tfc:rock/gravel/${stone}`)
            .duration(10)
            .EUt(GTValues.VH[GTValues.LV])

        let sandColor = global.ROCK_TO_SAND_COLOR[stone];

        event.recipes.gtceu.forge_hammer(`tfinfinity:${stone}_gravel_to_sand`)
            .itemInputs(`tfc:rock/gravel/${stone}`)
            .itemOutputs(`tfc:sand/${sandColor}`)
            .duration(10)
            .EUt(GTValues.VH[GTValues.LV])

        // #region Bricks
        event.recipes.gtceu.cutter(`tfinfinity:${stone}_brick_water`)
            .itemInputs(Ingredient.of([`tfc:rock/loose/${stone}`, `tfc:rock/mossy_loose/${stone}`]))
            .inputFluids(GTMaterials.Water.getFluid(4))
            .itemOutputs(`tfc:brick/${stone}`)
            .duration(2*20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`tfinfinity:${stone}_brick_distilled_water`)
            .itemInputs(Ingredient.of([`tfc:rock/loose/${stone}`, `tfc:rock/mossy_loose/${stone}`]))
            .inputFluids(GTMaterials.DistilledWater.getFluid(3))
            .itemOutputs(`tfc:brick/${stone}`)
            .duration(1.5*20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`tfinfinity:${stone}_brick_lubricant`)
            .itemInputs(Ingredient.of([`tfc:rock/loose/${stone}`, `tfc:rock/mossy_loose/${stone}`]))
            .inputFluids(GTMaterials.Lubricant.getFluid(1))
            .itemOutputs(`tfc:brick/${stone}`)
            .duration(20)
            .EUt(GTValues.VA[GTValues.ULV])
        
        // #region Rock Blocks
        event.recipes.gtceu.compressor(`tfinfinity:compress_loose_${stone}_to_cobble`)
            .itemInputs(`4x tfc:rock/loose/${stone}`)
            .itemOutputs(`tfc:rock/cobble/${stone}`)
            .duration(15*20)
            .EUt(2)

        event.recipes.gtceu.compressor(`tfinfinity:compress_mossy_loose_${stone}_to_cobble`)
            .itemInputs(`4x tfc:rock/mossy_loose/${stone}`)
            .itemOutputs(`tfc:rock/mossy_cobble/${stone}`)
            .duration(15*20)
            .EUt(2)

        event.recipes.gtceu.mixer(`tfinfinity:mossy_${stone}_cobblestone_from_moss`)
            .itemInputs(`tfc:rock/cobble/${stone}`)
            .itemInputs('tfc:plant/moss')
            .inputFluids('250x minecraft:water')
            .itemOutputs(`tfc:rock/mossy_cobble/${stone}`)
            .duration(2*20)
            .EUt(1)

        event.recipes.gtceu.mixer(`tfinfinity:mossy_${stone}_cobblestone_from_vines`)
            .itemInputs(`tfc:rock/cobble/${stone}`)
            .itemInputs('tfc:plant/jungle_vines')
            .inputFluids('250x minecraft:water')
            .itemOutputs(`tfc:rock/mossy_cobble/${stone}`)
            .duration(2*20)
            .EUt(1)

        event.recipes.gtceu.extruder(`tfinfinity:extrude_smooth_${stone}`)
            .itemInputs(`tfc:rock/raw/${stone}`)
            .notConsumableItem('gtceu:block_extruder_mold')
            .itemOutputs(`tfc:rock/smooth/${stone}`)
            .duration(1.2*20)
            .EUt(GTValues.V[GTValues.ULV])

        event.recipes.gtceu.assembler(`tfinfinity:${stone}_bricks`)
            .itemInputs(`5x tfc:brick/${stone}`)
            .inputFluids('72x gtceu:concrete')
            .itemOutputs(`4x tfc:rock/bricks/${stone}`)
            .duration(20)
            .EUt(4)

        event.recipes.gtceu.forge_hammer(`tfinfinity:cracked_${stone}_bricks`)
            .itemInputs(`tfc:rock/bricks/${stone}`)
            .itemOutputs(`tfc:rock/cracked_bricks/${stone}`)
            .duration(GTValues.VHA[GTValues.ULV])
            .EUt(4)

        event.recipes.gtceu.mixer(`tfinfinity:mossy_${stone}_bricks_from_moss`)
            .itemInputs(`tfc:rock/bricks/${stone}`)
            .itemInputs('tfc:plant/moss')
            .inputFluids('250x minecraft:water')
            .itemOutputs(`tfc:rock/mossy_bricks/${stone}`)
            .duration(2*20)
            .EUt(1)

        event.recipes.gtceu.mixer(`tfinfinity:mossy_${stone}_bricks_from_vines`)
            .itemInputs(`tfc:rock/bricks/${stone}`)
            .itemInputs('tfc:plant/jungle_vines')
            .inputFluids('250x minecraft:water')
            .itemOutputs(`tfc:rock/mossy_bricks/${stone}`)
            .duration(2*20)
            .EUt(1)

        event.recipes.gtceu.laser_engraver(`tfinfinity:chiseled_${stone}_bricks`)
            .itemInputs(`tfc:rock/smooth/${stone}`)
            .notConsumableItem(`#c:lenses/white`)
            .itemOutputs(`tfc:rock/chiseled/${stone}`)
            .duration(2.5*20)
            .EUt(GTValues.VHA[GTValues.LV])

        event.recipes.gtceu.assembler(`tfinfinity:hardened_${stone}`)
            .itemInputs(`5x tfc:rock/raw/${stone}`)
            .inputFluids('72x gtceu:concrete')
            .itemOutputs(`2x tfc:rock/hardened/${stone}`)
            .duration(20)
            .EUt(4)

        event.recipes.gtceu.assembler(`tfinfinity:${stone}_aqueduct`)
            .circuit(3)
            .itemInputs(`3x tfc:brick/${stone}`)
            .inputFluids('36x gtceu:concrete')
            .itemOutputs(`2x tfc:rock/aqueduct/${stone}`)
            .duration(20)
            .EUt(4)
    })

    // #region Alabaster
    event.recipes.tfc.sealed_barrel(
        Fluid.of('tfc:limewater', 100),
        1200
    ).inputItem('2x #c:poor_raw_materials/gypsum').outputItem('tfc:alabaster/raw').id(`tfinfinity:barrel/alabaster_raw_poor`)

    event.recipes.tfc.sealed_barrel(
        Fluid.of('tfc:limewater', 200),
        1200
    ).inputItem('#c:rich_raw_materials/gypsum').outputItem('2x tfc:alabaster/raw').id(`tfinfinity:barrel/alabaster_raw_rich`)

    event.recipes.tfc.shapeless(
        '2x tfc:alabaster_brick',
        [
            '#c:tools/chisel',
            '#c:poor_raw_materials/gypsum'
        ],
        '#c:tools/chisel',
        TFC.isp.copyInputStack().damageInput()
    ).id('tfinfinity:crafting/alabaster_brick_poor')

    event.recipes.tfc.shapeless(
        '8x tfc:alabaster_brick',
        [
            '#c:tools/chisel',
            '#c:rich_raw_materials/gypsum'
        ],
        '#c:tools/chisel',
        TFC.isp.copyInputStack().damageInput()
    ).id('tfinfinity:crafting/alabaster_brick_rich')

    event.recipes.gtceu.assembler('tfinfinity:alabaster_bricks')
        .itemInputs('5x tfc:alabaster_brick')
        .inputFluids('72x gtceu:concrete')
        .itemOutputs('4x tfc:alabaster/bricks')
        .duration(20)
        .EUt(4)

    // #region TODO: Rock Generation
    /*
     * Built-in TFC Generators
     * Lava -> Flowing Water = Rhyolite (Felsic Igneous Extrusive)
     * Lava -> Water Source = Gabbro (Mafic Igneous Intrusive)
     * Water -> Lava Source = Obsidian
     */
    
    global.STONE_TYPES.forEach(stone => {
        event.recipes.gtceu.rock_breaker(`tfinfinity:raw_${stone}`)
            .notConsumableItem(`tfc:rock/raw/${stone}`)
            .itemOutputs(`tfc:rock/raw/${stone}`)
            .adjacentFluids(['minecraft:lava', 'minecraft:water'])
            .duration(20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.rock_breaker(`tfinfinity:${stone}_cobble`)
            .notConsumableItem(`tfc:rock/cobble/${stone}`)
            .itemOutputs(`tfc:rock/cobble/${stone}`)
            .adjacentFluids(['minecraft:lava', 'minecraft:water'])
            .duration(20)
            .EUt(GTValues.VA[GTValues.ULV])
    })

    event.remove({ id:'gtceu:rock_breaker/obsidian' })

    event.recipes.gtceu.rock_breaker(`tfinfinity:clay`)
        .notConsumableItem(`minecraft:clay`)
        .itemOutputs('minecraft:clay')
        .adjacentFluids(['tfc:spring_water', 'minecraft:water'])
        .duration(20*2)
        .EUt(GTValues.VA[GTValues.LV])
}