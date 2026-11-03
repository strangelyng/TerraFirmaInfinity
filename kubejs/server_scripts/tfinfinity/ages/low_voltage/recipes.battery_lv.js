const registerLVBatteryRecipes = (event) => {
    // Remove LV Batteries
    event.remove({ id: 'gtceu:canner/sodium_battery_lv' })
    event.remove({ id: 'gtceu:canner/lithium_battery_lv' })
    event.remove({ id: 'gtceu:canner/cadmium_battery_lv' })

    // Lead-Acid Battery
    event.recipes.gtceu.mixer('tfinfinity:lead_acid_paste')
        .itemInputs('4x gtceu:massicot_dust')
        .inputFluids('1000x gtceu:sulfuric_acid', '3000x gtceu:distilled_water')
        .outputFluids('4000x tfinfinity:lead_acid_paste')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.canner('tfinfinity:lead_acid_battery_lv')
        .itemInputs('gtceu:lv_battery_hull')
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

    // Nickel-Iron Battery
    event.recipes.gtceu.spooling('tfinfinity:nickel_iron_battery_roll_asbestos')
        .itemInputs('1x gtceu:nickel_plate', '1x gtceu:wrought_iron_plate', '2x tfinfinity:asbestos_fiber_plate')
        .itemOutputs('tfinfinity:nickel_iron_battery_roll')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.spooling('tfinfinity:nickel_iron_battery_roll_polyethylene')
        .itemInputs('1x gtceu:nickel_plate', '1x gtceu:wrought_iron_plate', '1x gtceu:polyethylene_foil')
        .itemOutputs('tfinfinity:nickel_iron_battery_roll')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.canner('tfinfinity:nickel_iron_battery_lv')
        .itemInputs('gtceu:lv_battery_hull', 'tfinfinity:nickel_iron_battery_roll', '10x tfinfinity:nickel_hydroxide_dust')
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
    event.recipes.gtceu.spooling('tfinfinity:nickel_cadmium_battery_roll_asbestos')
        .itemInputs('1x gtceu:nickel_plate', '1x gtceu:cadmium_plate', '2x tfinfinity:asbestos_fiber_plate')
        .itemOutputs('tfinfinity:nickel_cadmium_battery_roll')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.spooling('tfinfinity:nickel_cadmium_battery_roll_polyethylene')
        .itemInputs('1x gtceu:nickel_plate', '1x gtceu:cadmium_plate', '1x gtceu:polyethylene_foil')
        .itemOutputs('tfinfinity:nickel_cadmium_battery_roll')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.canner('tfinfinity:nickel_cadmium_battery_lv')
        .itemInputs('gtceu:lv_battery_hull', 'tfinfinity:nickel_cadmium_battery_roll', '10x tfinfinity:nickel_hydroxide_dust')
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