// priority: 0
"use_strict";

const registerAE2Recipes = (event) => {
    event.remove({ type: 'ae2:inscriber' })
    // #region Presses
    event.recipes.gtceu.forming_press('logic_processor_press')
        .itemInputs(
            '#c:double_plates/steel'
        )
        .notConsumableItem('ae2:logic_processor_press')
        .itemOutputs('ae2:logic_processor_press')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.forming_press('calculation_processor_press')
        .itemInputs(
            '#c:double_plates/steel'
        )
        .notConsumableItem('ae2:calculation_processor_press')
        .itemOutputs('ae2:calculation_processor_press')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])
        
    event.recipes.gtceu.forming_press('engineering_processor_press')
        .itemInputs(
            '#c:double_plates/steel'
        )
        .notConsumableItem('ae2:engineering_processor_press')
        .itemOutputs('ae2:engineering_processor_press')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

    // #region Printed Circuits
    event.recipes.gtceu.forming_press('printed_logic_processor')
        .itemInputs(
            '#c:plates/gold'
        )
        .notConsumableItem('ae2:logic_processor_press')
        .itemOutputs('ae2:printed_logic_processor')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.forming_press('printed_calculation_processor')
        .itemInputs(
            '#c:plates/certus_quartz'
        )
        .notConsumableItem('ae2:calculation_processor_press')
        .itemOutputs('ae2:printed_calculation_processor')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.forming_press('printed_engineering_processor')
        .itemInputs(
            '#c:plates/diamond'
        )
        .notConsumableItem('ae2:engineering_processor_press')
        .itemOutputs('ae2:printed_engineering_processor')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    
    // #region Processors
    event.recipes.gtceu.forming_press('logic_processor')
        .itemInputs(
            'ae2:printed_logic_processor',
            '#c:dusts/redstone',
            '#c:plates/silicon'
        )
        .itemOutputs('ae2:logic_processor')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.forming_press('calculation_processor')
        .itemInputs(
            'ae2:printed_calculation_processor',
            '#c:dusts/redstone',
            '#c:plates/silicon'
        )
        .itemOutputs('ae2:calculation_processor')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.forming_press('engineering_processor')
        .itemInputs(
            'ae2:printed_engineering_processor',
            '#c:dusts/redstone',
            '#c:plates/silicon'
        )
        .itemOutputs('ae2:engineering_processor')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    // #region Charger Recipes
    event.shapeless('ae2:guide', [
        'minecraft:book',
        '#c:gems/certus_quartz'
    ]).id('tfinfinity:shapeless/ae2_guide')

    event.recipes.gtceu.polarizer('charged_certus_quartz_crystal')
        .itemInputs('#c:gems/certus_quartz')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.polarizer('charged_certus_quartz_crystal_chipped')
        .itemInputs('4x #c:chipped_gems/certus_quartz')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.polarizer('charged_certus_quartz_crystal_flawed')
        .itemInputs('2x #c:flawed_gems/certus_quartz')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.polarizer('charged_certus_quartz_crystal_flawless')
        .itemInputs('#c:flawless_gems/certus_quartz')
        .itemOutputs('2x ae2:charged_certus_quartz_crystal')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.polarizer('charged_certus_quartz_crystal_exquisite')
        .itemInputs('#c:exquisite_gems/certus_quartz')
        .itemOutputs('4x ae2:charged_certus_quartz_crystal')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])
}