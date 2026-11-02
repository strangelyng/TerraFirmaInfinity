const registerAsbestosRecipes = (event) => {
    event.recipes.gtceu.sifter('tfinfinity:sift_asbestos_purified_ore_to_fibers')
        .itemInputs('gtceu:purified_asbestos_ore')
        .chancedOutput('tfinfinity:asbestos_fibers', 1500)
        .chancedOutput('gtceu:asbestos_dust', 8500)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(20*20)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.compressor('tfinfnity:asbestos_fiber_mesh') // Loom?
        .itemInputs('6x tfinfinity:asbestos_fibers')
        .itemOutputs('tfinfinity:asbestos_fiber_mesh')
        .duration(100)
        .EUt(2)

    event.recipes.gtceu.compressor('tfinfnity:asbestos_fiber_plate')
        .itemInputs('tfinfinity:asbestos_fiber_mesh')
        .itemOutputs('tfinfinity:asbestos_fiber_plate')
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.welder('tfinfinity:steel_mesh') // Loom?
        .itemInputs('8x gtceu:fine_steel_wire')
        .itemOutputs('tfinfinity:steel_mesh')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('tfinfinity:asbestos_fiber_diaphragm') // Vacuum Smth...
        .itemInputs('tfinfinity:steel_mesh', '4x tfinfinity:asbestos_fiber_mesh')
        .itemOutputs('tfinfinity:asbestos_fiber_diaphragm')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])
}