const registerBakeliteRecipes = (event) => {
    // Syngas
    event.recipes.gtceu.chemical_reactor('tfinfinity:syngas_from_charcoal')
        .itemInputs('#c:gems/charcoal')
        .inputFluids('500x gtceu:steam')
        .outputFluids('100x tfinfinity:syngas')
        .duration(15*20)
        .EUt(GTValues.VHA[GTValues.LV])
        
    event.recipes.gtceu.chemical_reactor('tfinfinity:syngas_from_lignite')
        .itemInputs('#c:gems/lignite')
        .inputFluids('500x gtceu:steam')
        .outputFluids('200x tfinfinity:syngas')
        .duration(15*20)
        .EUt(GTValues.VHA[GTValues.LV])
        
    event.recipes.gtceu.chemical_reactor('tfinfinity:syngas_from_coal')
        .itemInputs('#c:gems/coal')
        .inputFluids('500x gtceu:steam')
        .outputFluids('400x tfinfinity:syngas')
        .duration(15*20)
        .EUt(GTValues.VHA[GTValues.LV])
        
    event.recipes.gtceu.chemical_reactor('tfinfinity:syngas_from_coke')
        .itemInputs('#c:gems/coke')
        .inputFluids('500x gtceu:steam')
        .outputFluids('400x tfinfinity:syngas')
        .duration(15*20)
        .EUt(GTValues.VHA[GTValues.LV])
        
    event.recipes.gtceu.chemical_reactor('tfinfinity:syngas_from_anthracite')
        .itemInputs('#c:gems/anthracite')
        .inputFluids('500x gtceu:steam')
        .outputFluids('400x tfinfinity:syngas')
        .duration(15*20)
        .EUt(GTValues.VHA[GTValues.LV])

    // Methane from Syngas
    event.recipes.gtceu.chemical_reactor('tfinfinity:syngas_to_methane')
        .notConsumableItem('#c:dusts/silver')
        .inputFluids('1000x tfinfinity:syngas')
        .outputFluids('100x gtceu:methane')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    // Formaldehyde
    event.recipes.gtceu.chemical_reactor('tfinfinity:formaldehyde_from_methane')
        .inputFluids('1000x gtceu:methane', '1000x gtceu:oxygen')
        .outputFluids('1000x gtceu:formaldehyde', '2000x gtceu:hydrogen')
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        
    // Phenol Production
    event.remove({ id: 'gtceu:distillation_tower/distill_creosote' });

    event.recipes.gtceu.distillation_tower('tfinfinity:distill_creosote') // TODO: Additional Byproducts?
        .inputFluids('24x gtceu:creosote')
        .outputFluids(['12x gtceu:lubricant', '12x gtceu:phenol'])
        .duration(20*8)
        .EUt(96)

    // Phenolic Resin
    event.recipes.gtceu.chemical_reactor('tfinfinity:phenolic_resin')
        .notConsumableItem('#c:dusts/sodium_hydroxide')
        .inputFluids('500x gtceu:phenol', '1000x gtceu:formaldehyde')
        .outputFluids('1440x tfinfinity:phenolic_resin')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.LV])

    // Bakelite Production
    event.recipes.gtceu.mixer('tfinfinity:bakelite_wood_pulp')
        .inputFluids('144x tfinfinity:phenolic_resin')
        .itemInputs('#c:dusts/treated_wood')
        .outputFluids('144x tfinfinity:bakelite')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.mixer('tfinfinity:bakelite_asbestos')
        .inputFluids('144x tfinfinity:phenolic_resin')
        .itemInputs('#c:dusts/asbestos')
        .outputFluids('216x tfinfinity:bakelite')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.LV])

    // Phenolic Circuit Boards
    event.remove({ id: 'gtceu:assembler/phenolic_board' })
    
    event.recipes.gtceu.forming_press('phenolic_circuit_board')
        .itemInputs('2x tfinfinity:bakelite_foil', '2x minecraft:paper', 'gtceu:resin_circuit_board')
        .itemOutputs('gtceu:phenolic_circuit_board')
        .duration(7.5*20)
        .EUt(GTValues.VA[GTValues.LV])

    // ULV Machine Hulls & Buses
    event.recipes.gtceu.assembler('tfinfinity:hull_ulv_bakelite')
        .itemInputs('gtceu:ulv_machine_casing', '2x gtceu:red_alloy_single_cable')
        .inputFluids('432x tfinfinity:bakelite')
        .itemOutputs('gtceu:ulv_machine_hull')
        .duration(25)
        .EUt(GTValues.VHA[GTValues.LV])
    
    event.remove({ id: 'gtceu:assembler/item_import_bus_ulv_glue' })
    event.remove({ id: 'gtceu:assembler/item_export_bus_ulv_glue' })
    event.remove({ id: 'gtceu:assembler/fluid_hatch_ulv_glue' })
    event.remove({ id: 'gtceu:assembler/fluid_export_hatch_ulv_glue' })

    event.recipes.gtceu.assembler('tfinfinity:item_import_bus_ulv_bakelite')
        .itemInputs('gtceu:ulv_machine_hull', '#c:chests/wooden')
        .inputFluids('288x tfinfinity:bakelite')
        .itemOutputs('gtceu:ulv_input_bus')
        .circuit(1)
        .duration(300)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.assembler('tfinfinity:item_export_bus_ulv_bakelite')
        .itemInputs('gtceu:ulv_machine_hull', '#c:chests/wooden')
        .inputFluids('288x tfinfinity:bakelite')
        .itemOutputs('gtceu:ulv_output_bus')
        .circuit(2)
        .duration(300)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.assembler('tfinfinity:fluid_hatch_ulv_bakelite')
        .itemInputs('gtceu:ulv_machine_hull', '#c:glass_blocks')
        .inputFluids('288x tfinfinity:bakelite')
        .itemOutputs('gtceu:ulv_input_hatch')
        .circuit(1)
        .duration(300)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.assembler('tfinfinity:fluid_export_hatch_ulv_bakelite')
        .itemInputs('gtceu:ulv_machine_hull', '#c:glass_blocks')
        .inputFluids('288x tfinfinity:bakelite')
        .itemOutputs('gtceu:ulv_output_hatch')
        .circuit(2)
        .duration(300)
        .EUt(GTValues.VA[GTValues.ULV])

    // LV Machine Hulls & Buses
    event.recipes.gtceu.assembler('tfinfinity:hull_lv_bakelite')
        .itemInputs('gtceu:lv_machine_casing', '2x gtceu:tin_single_cable')
        .inputFluids('432x tfinfinity:bakelite')
        .itemOutputs('gtceu:lv_machine_hull')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.LV])
    
    event.remove({ id: 'gtceu:assembler/item_import_bus_lv_glue' })
    event.remove({ id: 'gtceu:assembler/item_export_bus_lv_glue' })
    event.remove({ id: 'gtceu:assembler/fluid_hatch_lv_glue' })
    event.remove({ id: 'gtceu:assembler/fluid_export_hatch_lv_glue' })

    event.recipes.gtceu.assembler('tfinfinity:item_import_bus_lv_bakelite')
        .itemInputs('gtceu:lv_machine_hull', 'gtceu:wood_crate')
        .inputFluids('432x tfinfinity:bakelite')
        .itemOutputs('gtceu:lv_input_bus')
        .circuit(1)
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('tfinfinity:item_export_bus_lv_bakelite')
        .itemInputs('gtceu:lv_machine_hull', 'gtceu:wood_crate')
        .inputFluids('432x tfinfinity:bakelite')
        .itemOutputs('gtceu:lv_output_bus')
        .circuit(2)
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('tfinfinity:fluid_hatch_lv_bakelite')
        .itemInputs('gtceu:lv_machine_hull', '#c:glass_blocks')
        .inputFluids('432x tfinfinity:bakelite')
        .itemOutputs('gtceu:lv_input_hatch')
        .circuit(1)
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('tfinfinity:fluid_export_hatch_lv_bakelite')
        .itemInputs('gtceu:lv_machine_hull', '#c:glass_blocks')
        .inputFluids('432x tfinfinity:bakelite')
        .itemOutputs('gtceu:lv_output_hatch')
        .circuit(2)
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])

    // MV Machine Hulls and Buses
    event.recipes.gtceu.assembler('tfinfinity:hull_mv_bakelite')
        .itemInputs('gtceu:mv_machine_casing', '2x gtceu:copper_single_cable')
        .inputFluids('576x tfinfinity:bakelite')
        .itemOutputs('gtceu:mv_machine_hull')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.assembler('tfinfinity:hull_mv_annealed_bakelite')
        .itemInputs('gtceu:mv_machine_casing', '2x gtceu:annealed_copper_single_cable')
        .inputFluids('576x tfinfinity:bakelite')
        .itemOutputs('gtceu:mv_machine_hull')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.assembler('tfinfinity:item_import_bus_mv_bakelite')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:bronze_crate')
        .inputFluids('576x tfinfinity:bakelite')
        .itemOutputs('gtceu:mv_input_bus')
        .circuit(1)
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('tfinfinity:item_export_bus_mv_bakelite')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:bronze_crate')
        .inputFluids('576x tfinfinity:bakelite')
        .itemOutputs('gtceu:mv_output_bus')
        .circuit(2)
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('tfinfinity:fluid_hatch_mv_bakelite')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:bronze_drum')
        .inputFluids('576x tfinfinity:bakelite')
        .itemOutputs('gtceu:mv_input_hatch')
        .circuit(1)
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('tfinfinity:fluid_export_hatch_mv_bakelite')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:bronze_drum')
        .inputFluids('576x tfinfinity:bakelite')
        .itemOutputs('gtceu:mv_output_hatch')
        .circuit(2)
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])
        
    // Move Polyethylene to MV
    event.remove({ id: 'gtceu:chemical_reactor/polyethylene_from_air' });
    event.remove({ id: 'gtceu:chemical_reactor/polyethylene_from_oxygen' });
    event.remove({ id: 'gtceu:large_chemical_reactor/polyethylene_from_air' });
    event.remove({ id: 'gtceu:large_chemical_reactor/polyethylene_from_oxygen' });

    event.recipes.gtceu.chemical_reactor('tfinfinity:polyethylene_from_air')
        .inputFluids('1000x gtceu:air', '144x gtceu:ethylene')
        .outputFluids('144x gtceu:polyethylene')
        .circuit(1)
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:polyethylene_from_oxygen')
        .inputFluids('1000x gtceu:oxygen', '144x gtceu:ethylene')
        .outputFluids('216x gtceu:polyethylene')
        .circuit(1)
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.MV])
}