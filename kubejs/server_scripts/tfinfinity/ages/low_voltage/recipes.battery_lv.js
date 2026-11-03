const registerLVBatteryRecipes = (event) => {
    // Remove LV Batteries
    event.remove({ id: 'gtceu:canner/sodium_battery_lv' })
    event.remove({ id: 'gtceu:canner/lithium_battery_lv' })
    event.remove({ id: 'gtceu:canner/cadmium_battery_lv' })

    // Battery Hull to Steel Plates
    event.remove({ id: 'gtceu:shaped/battery_hull_lv' })
    event.remove({ id: 'gtceu:assembler/battery_hull_lv' })

    event.shaped('gtceu:lv_battery_hull', [
        'A',
        'B',
        'B'
    ], {
        A: 'gtceu:tin_single_cable',
        B: '#c:plates/steel'
    }).id('tfinfinity:shaped/lv_battery_hull')

    event.recipes.gtceu.assembler('tfinfinity:lv_battery_hull')
        .itemInputs('gtceu:tin_single_cable', '#c:plates/steel')
        .itemOutputs('gtceu:lv_battery_hull')
        .inputFluids('144x gtceu:polyethylene')
        .duration(20*20)
        .EUt(1)

    // Lead-Acid Battery
    event.recipes.gtceu.mixer('tfinfinity:lead_acid_paste')
        .itemInputs('4x gtceu:massicot_dust')
        .inputFluids('1000x gtceu:sulfuric_acid', '3000x gtceu:distilled_water')
        .outputFluids('4000x tfinfinity:lead_acid_paste')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.canner('tfinfinity:lead_acid_battery_lv')
        .itemInputs('gtceu:lv_battery_hull', '2x gtceu:battery_alloy_plate')
        .inputFluids('2000x tfinfinity:lead_acid_paste')
        .itemOutputs('tfinfinity:lv_lead_acid_battery')
        .duration(100)
        .EUt(2)
    
    event.recipes.gtceu.extractor('tfinfinity:unpackage_lv_lead_acid_battery')
        .itemInputs('tfinfinity:lv_lead_acid_battery')
        .itemOutputs('gtceu:lv_battery_hull')
        .duration(400)
        .EUt(2)

    // Nickel Sulfate & Hydroxide
    event.recipes.gtceu.chemical_reactor('tfinfinity:nickel_sulfate')
        .itemInputs('1x #c:dusts/nickel')
        .inputFluids('1000x gtceu:sulfuric_acid')
        .outputFluids('1000x tfinfinity:nickel_sulfate', '2000x gtceu:hydrogen')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:nickel_hydroxide_from_sulfate_potassium_hydroxide')
        .inputFluids('1000x tfinfinity:nickel_sulfate', '2000x tfinfinity:potassium_hydroxide_solution')
        .itemOutputs('5x tfinfinity:nickel_hydroxide_dust')
        .outputFluids('1000x tfinfinity:potassium_sulfate_solution')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:nickel_hydroxide_from_sulfate_sodium_hydroxide')
        .inputFluids('1000x tfinfinity:nickel_sulfate', '2000x tfinfinity:sodium_hydroxide_solution')
        .itemOutputs('5x tfinfinity:nickel_hydroxide_dust')
        .outputFluids('1000x tfinfinity:sodium_sulfate_solution')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    // Electrodes
    event.recipes.gtceu.canner('tfinfinity:nickel_hydroxide_electrode')
        .itemInputs('1x gtceu:steel_tiny_fluid_pipe', '5x tfinfinity:nickel_hydroxide_dust')
        .itemOutputs('tfinfinity:nickel_hydroxide_electrode')
        .duration(100)
        .EUt(2)

    event.recipes.gtceu.canner('tfinfinity:iron_oxide_electrode')
        .itemInputs('1x gtceu:steel_tiny_fluid_pipe', '5x gtceu:hematite_dust')
        .itemOutputs('tfinfinity:iron_oxide_electrode')
        .duration(100)
        .EUt(2)

    event.recipes.gtceu.canner('tfinfinity:cadmium_oxide_electrode')
        .itemInputs('1x gtceu:steel_tiny_fluid_pipe', '2x tfinfinity:cadmium_oxide_dust')
        .itemOutputs('tfinfinity:cadmium_oxide_electrode')
        .duration(100)
        .EUt(2)

    // Nickel-Iron Battery
    event.recipes.gtceu.canner('tfinfinity:nickel_iron_battery_lv')
        .itemInputs('gtceu:lv_battery_hull', 'tfinfinity:nickel_hydroxide_electrode', 'tfinfinity:iron_oxide_electrode') // Iron Oxide Hydrates to Iron Hydroxide with the Addition of Potassium Hydroxide
        .inputFluids('1000x tfinfinity:potassium_hydroxide_solution')
        .itemOutputs('tfinfinity:lv_nickel_iron_battery')
        .duration(100)
        .EUt(2)
    
    event.recipes.gtceu.extractor('tfinfinity:unpackage_lv_nickel_iron_battery')
        .itemInputs('tfinfinity:lv_nickel_iron_battery')
        .itemOutputs('gtceu:lv_battery_hull')
        .duration(400)
        .EUt(2)

    // Nickel-Cadmium Battery
    event.recipes.tfinfinity.roaster('tfinfinity:cadmium_oxide')
        .itemInputs('gtceu:cadmium_dust')
        .inputFluids('1000x gtceu:oxygen')
        .itemOutputs('2x tfinfinity:cadmium_oxide_dust')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.canner('tfinfinity:nickel_cadmium_battery_lv')
        .itemInputs('gtceu:lv_battery_hull', 'tfinfinity:nickel_hydroxide_electrode', 'tfinfinity:cadmium_oxide_electrode') // Cadmium Oxide Hydrates to Cadmium Hydroxide with the Addition of Potassium Hydroxide
        .inputFluids('1000x tfinfinity:potassium_hydroxide_solution')
        .itemOutputs('tfinfinity:lv_nickel_cadmium_battery')
        .duration(100)
        .EUt(2)
    
    event.recipes.gtceu.extractor('tfinfinity:unpackage_lv_nickel_cadmium_battery')
        .itemInputs('tfinfinity:lv_nickel_cadmium_battery')
        .itemOutputs('gtceu:lv_battery_hull')
        .duration(400)
        .EUt(2)
}