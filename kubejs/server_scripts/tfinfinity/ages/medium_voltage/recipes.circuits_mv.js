const registerMVCircuitRecipes = (event) => {
    // Phenolic Circuit Boards
    event.remove({ id: 'gtceu:assembler/phenolic_board' })
    
    event.recipes.gtceu.forming_press('phenolic_circuit_board')
        .itemInputs('2x tfinfinity:bakelite_foil', '2x minecraft:paper', 'gtceu:resin_circuit_board')
        .itemOutputs('gtceu:phenolic_circuit_board')
        .duration(7.5*20)
        .EUt(GTValues.VA[GTValues.LV])
}