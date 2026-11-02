const registerLVAsbestosRecipes = (event) => {
    event.recipes.gtceu.sifter('tfinfinity:sift_asbestos_purified_ore_to_fibers')
        .itemInputs('gtceu:purified_asbestos_ore')
        .chancedOutput('tfinfinity:asbestos_fibers', 2000)
        .chancedOutput('gtceu:asbestos_dust', 8000)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(20*20)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.tfinfinity.loom('tfinfnity:asbestos_fiber_mesh')
        .itemInputs('6x tfinfinity:asbestos_fibers')
        .itemOutputs('tfinfinity:asbestos_fiber_mesh')
        .duration(25*6)
        .EUt(2)

    event.recipes.gtceu.compressor('tfinfnity:asbestos_fiber_plate')
        .itemInputs('tfinfinity:asbestos_fiber_mesh')
        .itemOutputs('tfinfinity:asbestos_fiber_plate')
        .duration(200)
        .EUt(2)

    event.recipes.tfinfinity.loom('tfinfinity:steel_mesh') // TODO: Move this elsewhere
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