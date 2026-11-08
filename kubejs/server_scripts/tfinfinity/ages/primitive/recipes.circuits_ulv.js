const registerULVCircuitRecipes = (event) => {
    event.remove({ id: 'gtceu:shaped/vacuum_tube' })

    event.shaped('gtceu:vacuum_tube', [
        ' A ',
        'BCB',
        'DDD'
    ], {
        A: 'gtceu:glass_tube',
        B: 'gtceu:steel_bolt',
        C: 'gtceu:resin_circuit_board',
        D: 'gtceu:copper_single_wire'
    }).id('tfinfinity:shaped/vacuum_tube')

    event.remove({ id: 'gtceu:assembler/vacuum_tube_plain' })
    event.remove({ id: 'gtceu:assembler/vacuum_tube_red_alloy' })
    event.remove({ id: 'gtceu:assembler/vacuum_tube_red_alloy_annealed' })

    event.recipes.gtceu.assembler('tfinfinity:vacuum_tube_plain')
        .itemInputs('gtceu:glass_tube', 'gtceu:resin_circuit_board', 'gtceu:steel_bolt', '2x gtceu:copper_single_wire')
        .circuit(1)
        .itemOutputs('2x gtceu:vacuum_tube')
        .duration(6*20)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.assembler('tfinfinity:vacuum_tube_red_alloy')
        .itemInputs('gtceu:glass_tube', 'gtceu:resin_circuit_board', 'gtceu:steel_bolt', '2x gtceu:copper_single_wire')
        .inputFluids('18x gtceu:red_alloy')
        .itemOutputs('3x gtceu:vacuum_tube')
        .duration(2*20)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.assembler('tfinfinity:vacuum_tube_red_alloy_annealed')
        .itemInputs('gtceu:glass_tube', 'gtceu:resin_circuit_board', 'gtceu:steel_bolt', '2x gtceu:annealed_copper_single_wire')
        .inputFluids('18x gtceu:red_alloy')
        .itemOutputs('4x gtceu:vacuum_tube')
        .duration(2*20)
        .EUt(GTValues.VA[GTValues.ULV])
}