const registerAlkaliRecipes = (event) => {
    // Limewater & Lye
    event.recipes.gtceu.distillation_tower('tfinfinity:distill_limewater')
        .inputFluids('2000x tfc:limewater')
        .outputFluids('1000x tfinfinity:calcium_hydroxide_solution', '1000x minecraft:water')
        .duration(30*20)
        .EUt(120)

    event.recipes.tfc.barrel_instant(
        Fluid.of('minecraft:water', 500)
    ).inputItem('tfc:powder/lime').outputFluid(Fluid.of('tfc:limewater', 500)).id('tfc:barrel/limewater')

    event.remove({ id: 'tfc:pot/lye' })
    event.remove({ id: 'firmalife:vat/lye' })

    event.recipes.tfc.pot(
        ['tfc:powder/wood_ash', 'tfc:powder/wood_ash', 'tfc:powder/wood_ash', 'tfc:powder/wood_ash'],
        Fluid.of('minecraft:water', 1000),
        2400,
        600
    ).fluidOutput(Fluid.of('tfc:lye', 1000)).id('tfinfinity:pot/lye')

    event.recipes.firmalife.vat(
        'tfc:powder/wood_ash',
        Fluid.of('minecraft:water', 250),
        600,
        300
    ).outputFluid(Fluid.of('tfc:lye', 250)).id('tfinfinity:vat/lye')

    // Chloralkali Process
    event.remove({ id: 'gtceu:electrolyzer/salt_water_electrolysis'})

    event.recipes.gtceu.electrolyzer('tfinfinity:diaphragm_cell_chloralkali_process')
        .notConsumableItem('gtceu:nickel_rod')
        .chancedInput('gtceu:graphite_rod', 500)
        .notConsumableItem('tfinfinity:asbestos_fiber_diaphragm')
        .inputFluids('2000x gtceu:salt_water')
        .outputFluids('1000x gtceu:hydrogen', '1000x gtceu:chlorine', '1000x tfinfinity:caustic_brine')
        .duration(36*20)
        .EUt(GTValues.VA[GTValues.LV]) // Move to MV? Electrolytic Cell

    event.recipes.gtceu.distillery('tfinfinity:distill_caustic_brine')
        .inputFluids('1000x tfinfinity:caustic_brine')
        .outputFluids('1000x tfinfinity:sodium_hydroxide_solution')
        .itemOutputs('2x gtceu:salt_dust')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV])

    // Soda Ash
    event.remove({ id: 'gtceu:electric_blast_furnace/soda_ash_from_calcite' })

    event.remove({ id: 'gtceu:chemical_reactor/soda_ash_from_carbon_dioxide' })
    event.remove({ id: 'gtceu:large_chemical_reactor/soda_ash_from_carbon_dioxide' })

    event.recipes.gtceu.chemical_reactor('tfinfinity:precipitate_soda_ash_from_hydroxide')
        .inputFluids('1000x tfinfinity:sodium_hydroxide_solution', '1000x gtceu:carbon_dioxide')
        .itemOutputs('6x gtceu:soda_ash_dust')
        .outputFluids('1000x minecraft:water')
        .duration(320)
        .EUt(GTValues.VA[GTValues.LV])

    // Calcium Hydroxide
    event.remove({ id: 'gtceu:chemical_reactor/calcium_hydroxide' })
    event.remove({ id: 'gtceu:large_chemical_reactor/calcium_hydroxide' })

    event.recipes.gtceu.chemical_reactor('tfinfinity:calcium_hydroxide')
        .itemInputs('2x gtceu:quicklime_dust')
        .inputFluids('1000x minecraft:water')
        .itemOutputs('5x gtceu:calcium_hydroxide_dust')
        .duration(20*10)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:calcium_hydroxide_solution')
        .circuit(1)
        .itemInputs('2x gtceu:quicklime_dust')
        .inputFluids('2000x minecraft:water')
        .outputFluids('1000x tfinfinity:calcium_hydroxide_solution')
        .duration(20*10)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:precipitate_calcite_from_hydroxide')
        .inputFluids('1000x tfinfinity:calcium_hydroxide_solution', '1000x gtceu:carbon_dioxide')
        .itemOutputs('5x gtceu:calcite_dust')
        .outputFluids('1000x minecraft:water')
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.tfinfinity.roaster('tfinfinity:quicklime_from_calcite')
        .circuit(1)    
        .itemInputs('5x gtceu:calcium_hydroxide_dust')
        .itemOutputs('2x gtceu:quicklime_dust')
        .outputFluids('1000x gtceu:steam')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV])

    // Lime Process
    event.recipes.gtceu.chemical_reactor('tfinfinity:lime_process')
        .inputFluids('1000x tfinfinity:calcium_hydroxide_solution', '1000x tfinfinity:sodium_carbonate_solution')
        .itemOutputs('5x gtceu:calcite_dust')
        .outputFluids('2000x tfinfinity:sodium_hydroxide_solution')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Mannheim Process
    event.remove({ id: 'gtceu:chemical_reactor/sodium_bisulfate_from_salt' })
    event.remove({ id: 'gtceu:large_chemical_reactor/sodium_bisulfate_from_salt' })
    
    event.recipes.gtceu.chemical_reactor('tfinfinity:sodium_bisulfate_from_salt') // Replace Original with Hydrogen Chloride Output Fluid
        .itemInputs('2x gtceu:salt_dust')
        .itemOutputs('7x gtceu:sodium_bisulfate_dust')
        .outputFluids('1000x tfinfinity:hydrogen_chloride')
        .circuit(1)
        .duration(20*3)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:sodium_sulfate_from_bisulfate')
        .itemInputs('2x gtceu:salt_dust', '7x gtceu:sodium_bisulfate_dust')
        .itemOutputs('7x tfinfinity:sodium_sulfate_dust')
        .outputFluids('1000x tfinfinity:hydrogen_chloride')
        .duration(20*3)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:direct_mannheim_process')
        .itemInputs('4x gtceu:salt_dust')
        .inputFluids('1000x gtceu:sulfuric_acid')
        .itemOutputs('7x tfinfinity:sodium_sulfate_dust')
        .outputFluids('2000x tfinfinity:hydrogen_chloride')
        .duration(20*6)
        .circuit(2)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Hargreaves Process (Sodium Sulfate)
    event.recipes.gtceu.chemical_reactor('tfinfinity:hargreaves_process')
        .circuit(2)
        .itemInputs('8x gtceu:salt_dust')
        .inputFluids('2000x gtceu:sulfur_dioxide', '2000x gtceu:oxygen', '2000x gtceu:steam')
        .itemOutputs('14x tfinfinity:sodium_sulfate_dust')
        .outputFluids('4000x tfinfinity:hydrogen_chloride')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Leblanc Process
    event.recipes.tfinfinity.roaster('tfinfinity:leblanc_process_black_ash')
        .itemInputs('7x tfinfinity:sodium_sulfate_dust', '5x gtceu:calcite_dust', '2x gtceu:coal_dust')
        .itemOutputs('6x tfinfinity:black_ash_dust')
        .outputFluids('2000x gtceu:carbon_dioxide')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:leach_black_ash')
        .itemInputs('6x tfinfinity:black_ash_dust')
        .inputFluids('1000x minecraft:water')
        .itemOutputs('2x tfinfinity:calcium_sulfide_dust') // Skip Precipitation via CO2 Bubbling
        .outputFluids('1000x tfinfinity:sodium_carbonate_solution')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.LV])

    // SideChain: Calcium Sulfide
    event.recipes.gtceu.chemical_reactor('tfinfinity:calcium_sulfide_to_carbonate')
        .itemInputs('2x tfinfinity:calcium_sulfide_dust')
        .inputFluids('1000x gtceu:carbon_dioxide', '1000x minecraft:water')
        .itemOutputs('5x gtceu:calcite_dust')
        .outputFluids('1000x gtceu:hydrogen_sulfide')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV])
    
    // SideChain: Deacon Process (Hydrogen Chloride)
    event.recipes.gtceu.chemical_reactor('tfinfinity:copper_chloride')
        .itemInputs('gtceu:copper_dust')
        .inputFluids('2000x gtceu:chlorine')
        .itemOutputs('3x tfinfinity:copper_chloride_dust')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu.chemical_reactor('tfinfinity:deacon_process')
        .notConsumableItem('tfinfinity:copper_chloride_dust')
        .inputFluids('4000x tfinfinity:hydrogen_chloride', '2000x gtceu:oxygen')
        .outputFluids('4000x gtceu:chlorine', '2000x gtceu:steam')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV])

    // #region Solvay Process
    // Already Implemented in Base GT : Complexify?
    event.remove({ id: 'gtceu:chemical_reactor/quicklime_from_calcite' })
    event.remove({ id: 'gtceu:large_chemical_reactor/quicklime_from_calcite' })

    event.recipes.tfinfinity.roaster('tfinfinity:quicklime_from_calcite')
        .circuit(1)    
        .itemInputs('5x gtceu:calcite_dust')
        .itemOutputs('2x gtceu:quicklime_dust')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV])

    event.remove({ id: 'gtceu:electrolyzer/soda_ash_from_bicarbonate' })

    event.recipes.tfinfinity.roaster('tfinfinity:soda_ash_from_bicarbonate')
        .circuit(1)    
        .itemInputs('12x gtceu:sodium_bicarbonate_dust')
        .itemOutputs('6x gtceu:soda_ash_dust')
        .outputFluids('1000x gtceu:carbon_dioxide', '1000x minecraft:water')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.MV])
}