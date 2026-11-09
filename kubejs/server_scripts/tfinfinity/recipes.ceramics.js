const registerCeramicsRecipes = (event) => {
    // #region TFC
    event.shapeless('tfc:fire_clay', [
        '#c:dusts/kaolinite', '#c:dusts/graphite', 'minecraft:clay_ball'
    ]).id('tfinfinity:shapeless/fire_clay_from_dusts')

    event.shapeless('tfc:fire_clay', [
        '4x #c:small_dusts/kaolinite', '#c:dusts/graphite', 'minecraft:clay_ball'
    ]).id('tfinfinity:shapeless/fire_clay_from_graphite_dust')

    event.shapeless('tfc:fire_clay', [
        '#c:dusts/kaolinite', '4x #c:small_dusts/graphite', 'minecraft:clay_ball'
    ]).id('tfinfinity:shapeless/fire_clay_from_kaolinite_dust')

    event.recipes.gtceu.alloy_smelter(`tfinfinity:fire_clay`)
        .itemInputs('4x tfc:kaolin_clay', '#c:dusts/graphite')
        .itemOutputs('2x tfc:fire_clay')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped('tfc:white_kaolin_clay', [
        'XX',
        'XX'
    ], {
        X: 'tfc:kaolin_clay'
    }).id('tfinfinity:shaped/white_kaolin_clay')

    event.shaped('3x tfc:ceramic/unfired_brick', [
        'XXX',
        'XfX'
    ], {
        X: 'minecraft:clay_ball',
        f: 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form').id('tfinfinity:shaped/unfired_brick')

    event.shaped('3x tfc:ceramic/unfired_fire_brick', [
        'XXX',
        'XfX'
    ], {
        X: 'tfc:fire_clay',
        f: 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form').id('tfinfinity:shaped/unfired_fire_brick')

    // Smelting Ceramics
    event.remove('minecraft:brick')

    event.smelting('minecraft:brick', 'tfc:ceramic/unfired_brick')
        .id('tfinfinity:brick')

    let tfcCeramics = [
        'fire_brick', 'bowl', 'spindle_head', 'pot', 'vessel', 'large_vessel', 'jug'
    ]

    tfcCeramics.forEach(item => {
        event.smelting(`tfc:ceramic/${item}`, `tfc:ceramic/unfired_${item}`).id(`tfinfinity:smelting/${item}`)
    });

    let tfcMolds = [
        'ingot', 'fire_ingot', 'pickaxe_head', 'propick_head', 'axe_head', 'shovel_head', 'hoe_head',
        'chisel_head', 'hammer_head', 'saw_blade', 'javelin_head', 'sword_blade', 'mace_head',
        'knife_blade', 'scythe_blade', 'bell'
    ]

    tfcMolds.forEach(item => {
        event.smelting(`tfc:ceramic/${item}_mold`, `tfc:ceramic/unfired_${item}_mold`)
    })

    let tfinfinityMolds = [
        'fire_small_gear', 'fire_rod', 'nugget'
    ]

    tfinfinityMolds.forEach(item => {
        event.smelting(`tfinfinity:ceramic/${item}_mold`, `tfinfinity:ceramic/unfired_${item}_mold`)
    })

    event.smelting('minecraft:flower_pot', 'tfc:ceramic/unfired_flower_pot')
        .id('tfinfinity:flower_pot')

    event.smelting('tfc:crucible', 'tfc:ceramic/unfired_crucible')
        .id('tfinfinity:crucible')

    event.smelting('tfc:pan/empty', 'tfc:ceramic/unfired_pan')
        .id('tfinfinity:pan')

    event.smelting('tfc:channel', 'tfc:ceramic/unfired_channel')
        .id('tfinfinity:channel')

    event.smelting('tfc:mold_table', 'tfc:ceramic/unfired_mold_table')
        .id('tfinfinity:mold_table')

    event.smelting('tfc:ceramic_blowpipe', 'tfc:ceramic/unfired_blowpipe')
        .id('tfinfinity:ceramic_blowpipe')

    global.DYE_COLORS.forEach(color => {
        event.smelting(`tfc:ceramic/${color}_glazed_vessel`, `tfc:ceramic/${color}_unfired_vessel`)
        
        event.smelting(`tfc:ceramic/large_vessel/${color}`, `tfc:ceramic/unfired_large_vessel/${color}`)
    })

    // #region Knapping
    // Fire Clay
    event.remove({ id: 'tfc:crafting/ceramic/unfired_fire_brick_to_fire_clay' })
    event.remove({ id: 'tfc:crafting/ceramic/unfired_crucible_to_fire_clay' })
    event.remove({ id: 'tfc:crafting/ceramic/unfired_channel_to_fire_clay' })
    event.remove({ id: 'tfc:crafting/ceramic/unfired_mold_table_to_fire_clay' })

    event.shapeless('5x tfc:fire_clay',
        '#tfinfinity:recycle_fire_clay_5x'
    ).id('tfinfinity:shapeless/recycle_fire_clay_5x')

    // 2x only Fire Ingot Mold

    event.shapeless('tfc:fire_clay',
        '#tfinfinity:recycle_fire_clay_1x'
    ).id('tfinfinity:shapeless/recycle_fire_clay_1x')

    event.recipes.tfc.knapping(
        'tfinfinity:ceramic/unfired_fire_small_gear_mold',
        'tfc:fire_clay',
        [
            ' X X ',
            'X   X',
            '  X  ',
            'X   X',
            ' X X '
        ]
    ).id('tfinfinity:knapping/unfired_fire_small_gear_mold')

    event.recipes.tfc.heating(
        'tfinfinity:ceramic/unfired_fire_small_gear_mold',
        1399
    ).resultItem('tfinfinity:ceramic/fire_small_gear_mold').id('tfinfinity:heating/fire_small_gear_mold')
    
    event.recipes.tfc.knapping(
        'tfinfinity:ceramic/unfired_fire_rod_mold',
        'tfc:fire_clay',
        [
            'XXXX ',
            'XXX X',
            'XX XX',
            'X XXX',
            ' XXXX'
        ]
    ).id('tfinfinity:knapping/unfired_fire_rod_mold')

    event.recipes.tfc.heating(
        'tfinfinity:ceramic/unfired_fire_rod_mold',
        1399
    ).resultItem('tfinfinity:ceramic/fire_rod_mold').id('tfinfinity:heating/fire_rod_mold')
    
    // Clay
    let clayRecycleRecipes = [
        'tfc:crafting/ceramic/unfired_brick_to_clay',
        'tfc:crafting/ceramic/unfired_flower_pot_to_clay',
        'tfc:crafting/ceramic/unfired_bowl_to_clay',
        'tfc:crafting/ceramic/unfired_pan_to_clay',
        'tfc:crafting/ceramic/unfired_spindle_head_to_clay',
        'tfc:crafting/ceramic/unfired_pot_to_clay',
        'tfc:crafting/ceramic/unfired_vessel_to_clay',
        'tfc:crafting/ceramic/unfired_large_vessel_to_clay',
        'tfc:crafting/ceramic/unfired_jug_to_clay',
        'tfc:crafting/ceramic/unfired_ingot_mold_to_clay',
        'tfc:crafting/ceramic/unfired_pickaxe_head_mold_to_clay',
        'tfc:crafting/ceramic/unfired_propick_head_mold_to_clay',
        'tfc:crafting/ceramic/unfired_axe_head_mold_to_clay',
        'tfc:crafting/ceramic/unfired_shovel_head_mold_to_clay',
        'tfc:crafting/ceramic/unfired_hoe_head_mold_to_clay',
        'tfc:crafting/ceramic/unfired_chisel_head_mold_to_clay',
        'tfc:crafting/ceramic/unfired_hammer_head_mold_to_clay',
        'tfc:crafting/ceramic/unfired_saw_blade_mold_to_clay',
        'tfc:crafting/ceramic/unfired_javelin_head_mold_to_clay',
        'tfc:crafting/ceramic/unfired_sword_blade_mold_to_clay',
        'tfc:crafting/ceramic/unfired_mace_head_mold_to_clay',
        'tfc:crafting/ceramic/unfired_knife_blade_mold_to_clay',
        'tfc:crafting/ceramic/unfired_scythe_blade_mold_to_clay',
        'tfc:crafting/ceramic/unfired_bell_mold_to_clay',
        'tfc:crafting/ceramic/unfired_blowpipe_to_clay',
        'firmalife:crafting/clay_oven_bottom_to_clay',
        'firmalife:crafting/clay_oven_top_to_clay',
        'firmalife:crafting/clay_oven_chimney_to_clay',
    ]

    clayRecycleRecipes.forEach(recipeId => {
        event.remove({ id: recipeId })
    })

    event.shapeless('5x minecraft:clay_ball',
        '#tfinfinity:recycle_clay_5x'
    ).id('tfinfinity:shapeless/recycle_clay_5x')

    event.shapeless('2x minecraft:clay_ball',
        '#tfinfinity:recycle_clay_2x'
    ).id('tfinfinity:shapeless/recycle_clay_2x')

    event.shapeless('minecraft:clay_ball',
        '#tfinfinity:recycle_clay_1x'
    ).id('tfinfinity:shapeless/recycle_clay_1x')

    event.recipes.tfc.knapping(
        '2x tfinfinity:ceramic/unfired_nugget_mold',
        'tfc:clay',
        [
            'XXXXX',
            'XXXXX',
            'XX XX',
            'XXXXX',
            'XXXXX'
        ]
    ).id('tfinfinity:knapping/unfired_nugget_mold')

    event.recipes.tfc.heating(
        'tfinfinity:ceramic/unfired_nugget_mold',
        1399
    ).resultItem('tfinfinity:ceramic/nugget_mold').id('tfinfinity:heating/nugget_mold')

    // #region Bricks
    event.remove('gtceu:compressor/bricks')
    event.remove('gtceu:extractor/bricks_extraction')
    event.remove('gtceu:assembler/flower_pot')

    event.recipes.gtceu.assembler('tfinfinity:bricks')
        .itemInputs('5x minecraft:brick')
        .inputFluids('72x gtceu:concrete')
        .itemOutputs('4x minecraft:bricks')
        .duration(20)
        .EUt(4)

    event.recipes.gtceu.alloy_smelter('tfinfinity:fire_brick')
        .itemInputs('tfc:fire_clay')
        .notConsumableItem('gtceu:ingot_casting_mold')
        .itemOutputs('tfc:ceramic/fire_brick')
        .duration(10*20)
        .EUt(2)

    event.recipes.gtceu.assembler('tfinfinity:fire_bricks')
        .itemInputs('5x tfc:ceramic/fire_brick')
        .inputFluids('72x gtceu:concrete')
        .itemOutputs('4x tfc:fire_bricks')
        .duration(20)
        .EUt(4)
    
    // #region Coke Bricks
    event.recipes.tfc.heating(
        'gtceu:compressed_coke_clay',
        1399
    ).resultItem('gtceu:coke_oven_brick').id('tfinfinity:heating/coke_oven_brick')

    event.shaped('4x gtceu:coke_oven_bricks', [
        'BMB',
        'MBM',
        'BMB'
    ], {
        B: 'gtceu:coke_oven_brick',
        M: 'tfc:mortar'
    }).id('gtceu:shaped/casing_coke_bricks')

    event.remove({ id: 'gtceu:compressor/coke_bricks' })
    event.remove({ id: 'gtceu:extractor/extract_coke_oven_bricks' })

    event.recipes.gtceu.assembler('tfinfinity:coke_oven_bricks')
        .itemInputs('5x gtceu:coke_oven_brick')
        .inputFluids('72x gtceu:concrete')
        .itemOutputs('4x gtceu:coke_oven_bricks')
        .duration(20)
        .EUt(4)
}