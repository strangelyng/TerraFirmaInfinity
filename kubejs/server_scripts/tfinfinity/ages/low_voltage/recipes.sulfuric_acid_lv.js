const registerLVSulfuricAcidRecipes = (event) => {
    event.remove({ id: 'gtceu:chemical_reactor/sulfur_trioxide' });
    event.remove({ id: 'gtceu:large_chemical_reactor/sulfur_trioxide' });

    // Sulfur Dioxide (from Ore Roasting)
    event.recipes.tfinfinity.roaster('tfinfinity:roast_pyrite')
        .itemInputs('6x gtceu:pyrite_dust')
        .inputFluids('5500x gtceu:oxygen')
        .itemOutputs('5x gtceu:hematite_dust')
        .outputFluids('4000x gtceu:sulfur_dioxide')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.tfinfinity.roaster('tfinfinity:roast_sphalerite')
        .itemInputs('2x gtceu:sphalerite_dust')
        .inputFluids('1000x gtceu:oxygen')
        .itemOutputs('2x gtceu:zincite_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.tfinfinity.roaster('tfinfinity:roast_cinnabar')
        .itemInputs('2x gtceu:cinnabar_dust')
        .inputFluids('1000x gtceu:oxygen')
        .outputFluids('1000x gtceu:mercury', '1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.tfinfinity.roaster('tfinfinity:roast_acanthite')
        .itemInputs('3x tfinfinity:acanthite_dust')
        .inputFluids('1000x gtceu:oxygen')
        .itemOutputs('2x gtceu:silver_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.tfinfinity.roaster('tfinfinity:roast_bismuthinite')
        .itemInputs('5x tfinfinity:bismuthinite_dust')
        .inputFluids('4500x gtceu:oxygen')
        .itemOutputs('5x tfinfinity:bismuth_trioxide_dust')
        .outputFluids('3000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.tfinfinity.roaster('tfinfinity:roast_chalcocite')
        .itemInputs('3x gtceu:chalcocite_dust')
        .inputFluids('1000x gtceu:oxygen')
        .itemOutputs('2x gtceu:copper_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.tfinfinity.roaster('tfinfinity:roast_cobaltite')
        .itemInputs('6x gtceu:cobaltite_dust')
        .inputFluids('4500x gtceu:oxygen')
        .itemOutputs('4x gtceu:cobalt_oxide_dust', '5x gtceu:arsenic_trioxide_dust')
        .outputFluids('2000x gtceu:sulfur_dioxide')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.tfinfinity.roaster('tfinfinity:roast_galena')
        .itemInputs('2x gtceu:galena_dust')
        .inputFluids('1500x gtceu:oxygen')
        .itemOutputs('2x gtceu:massicot_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.tfinfinity.roaster('tfinfinity:roast_pentlandite')
        .itemInputs('17x gtceu:pentlandite_dust')
        .inputFluids('12500x gtceu:oxygen')
        .itemOutputs('18x gtceu:garnierite_dust')
        .outputFluids('8000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.tfinfinity.roaster('tfinfinity:roast_stibnite')
        .itemInputs('5x gtceu:stibnite_dust')
        .inputFluids('4500x gtceu:oxygen')
        .itemOutputs('5x gtceu:antimony_trioxide_dust')
        .outputFluids('3000x gtceu:sulfur_dioxide')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])

    /* Sulfuric Acid Direct from Saltpeter and Sulfur
     *
     * Total IO (for Sulfuric Acid Production)
     * IN: 30x Saltpeter Dust + 5x Sulfur Dust + 2B Steam
     * OUT: 3B Nitrogen Dioxide + 2B Sulfuric Acid + 21x Potassium Sulfate Dust
     */
    event.recipes.gtceu.chemical_reactor('tfinfinity:glauber_mixture')
        .itemInputs('30x gtceu:saltpeter_dust', '5x gtceu:sulfur_dust')
        .inputFluids('2000x gtceu:steam')
        .outputFluids('5000x tfinfinity:glauber_mixture', '3000x gtceu:nitrogen_dioxide')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.distillery('tfinfinity:distill_glauber_mixture')
        .inputFluids('5000x tfinfinity:glauber_mixture')
        .outputFluids('2000x gtceu:sulfuric_acid')
        .itemOutputs('21x gtceu:potassium_sulfate_dust')
        .duration(12*20)
        .EUt(GTValues.VA[GTValues.LV])

    /* Nitric Oxide (and Sulfur Trioxide) from Saltpeter
     * 
     * Total IO (for Sulfur Trioxide Production)
     * IN: 10x Saltpeter Dust + 3x Sulfur Dust + 3B Oxygen
     * OUT: 3B Nitric Oxide + 2B Sulfur Trioxide + 7x Potassium Sulfate Dust
     */
    event.recipes.gtceu.chemical_reactor('tfinfinity:sulfur_trioxide_from_saltpeter_air')
        .itemInputs('10x gtceu:saltpeter_dust', '3x gtceu:sulfur_dust') // 2x Excess Sulfur
        .inputFluids('6000x gtceu:air') // Reacts with Atmospheric Oxygen to Produce Sulfur Dioxide
        .itemOutputs('7x gtceu:potassium_sulfate_dust')
        .outputFluids('1500x gtceu:sulfur_trioxide', '2000x gtceu:nitric_oxide') // Nitric Oxide Acts as Catalyst for further Oxidation of Sulfur Dioxide to Trioxide
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:sulfur_trioxide_from_saltpeter_oxygen')
        .itemInputs('10x gtceu:saltpeter_dust', '3x gtceu:sulfur_dust')
        .inputFluids('3000x gtceu:oxygen')
        .itemOutputs('7x gtceu:potassium_sulfate_dust')
        .outputFluids('2000x gtceu:sulfur_trioxide', '2000x gtceu:nitric_oxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    /* Sulfur Trioxide from Pyrite
     * 
     * Total IO (for Sulfur Trioxide Production)
     * IN: 6x Pyrite Dust + 2x Iron Dust + 7B Oxygen + 2B Water
     * OUT: 5x Hematite Dust + 2B Hydrogen + 1B Sulfur Dioxide + 1B Sulfur Trioxide
     */
    event.recipes.gtceu.chemical_reactor('tfinfinity:acidic_green_vitriol')
        .itemInputs('6x gtceu:pyrite_dust')
        .inputFluids('7000x gtceu:oxygen', '2000x minecraft:water')
        .outputFluids('2000x tfinfinity:acidic_green_vitriol')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:ferrous_sulfate_from_acidic_vitriol')
        .itemInputs('#c:dusts/iron')
        .inputFluids('1000x tfinfinity:acidic_green_vitriol')
        .itemOutputs('6x tfinfinity:ferrous_sulfate_dust') // Simplification: Iron (II) Sulfate Heptahydrate Crystals are automatically dehydrated
        .outputFluids('1000x gtceu:hydrogen')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.tfinfinity.roaster('tfinfinity:ferrous_sulfate')
        .itemInputs('12x tfinfinity:ferrous_sulfate_dust')
        .itemOutputs('5x gtceu:hematite_dust')
        .outputFluids('1000x gtceu:sulfur_dioxide', '1000x gtceu:sulfur_trioxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    /* Lead Chamber Process
     * 
     * Total IO (for Sulfuric Acid Production)
     * IN: 2B Sulfur Dioxide [2x Sulfur Dust + 4B Oxygen] + 2B Water + 2B Oxygen
     * OUT: 2B Sulfuric Acid
     */
    event.recipes.gtceu.chemical_reactor('tfinfinity:lead_chamber_process_reaction')
        .notConsumableItem('6x #c:foils/lead')
        .inputFluids('1000x gtceu:sulfur_dioxide', '1000x gtceu:nitrogen_dioxide', '1000x gtceu:steam')
        .outputFluids('1000x gtceu:sulfuric_acid', '1000x gtceu:nitric_oxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:lead_chamber_process_gay_lussac')
        .inputFluids('1000x gtceu:nitric_oxide', '1000x gtceu:nitrogen_dioxide', '2000x gtceu:sulfuric_acid')
        .outputFluids('2000x tfinfinity:nitrosylsulfuric_acid', '1000x gtceu:steam')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:lead_chamber_process_glover_tower')
        .inputFluids('2000x tfinfinity:nitrosylsulfuric_acid', '1000x gtceu:sulfur_dioxide', '2000x minecraft:water')
        .outputFluids('3000x gtceu:sulfuric_acid', '2000x gtceu:nitric_oxide')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    // TODO: Consider Moving Ammonia to LV

    // Nitric Acid Requires HV (Due to Ammonia Bypass)
    event.remove({ id: 'gtceu:chemical_reactor/nitric_acid_from_dioxide_1' })
    event.remove({ id: 'gtceu:large_chemical_reactor/nitric_acid_from_dioxide_1' })
    event.remove({ id: 'gtceu:chemical_reactor/nitric_acid_from_dioxide_2' })
    event.remove({ id: 'gtceu:large_chemical_reactor/nitric_acid_from_dioxide_2' })

    event.recipes.gtceu.chemical_reactor('tfinfinity:nitric_acid_from_dioxide_1')
        .inputFluids('3000x gtceu:nitrogen_dioxide', '1000x minecraft:water')
        .outputFluids('2000x gtceu:nitric_acid', '1000x gtceu:nitric_oxide')
        .circuit(1)
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('tfinfinity:nitric_acid_from_dioxide_2')
        .inputFluids('1000x minecraft:water', '1000x gtceu:oxygen', '2000x gtceu:nitrogen_dioxide')
        .outputFluids('2000x gtceu:nitric_acid')
        .circuit(3)
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV])
}