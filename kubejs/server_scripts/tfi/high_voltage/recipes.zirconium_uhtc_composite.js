function registerTFIZirconiumUHTCCompositeRecipes(event) {
    // Zirconium 
    event.recipes.gtceu.electric_blast_furnace('tfi:zirconia_dust')
        .itemInputs('gtceu:coke_dust', 'tfi:zircon_dust')
        .itemOutputs('tfi:zirconia_dust', 'gtceu:silicon_dioxide_dust')
        .blastFurnaceTemp(3073)
        .duration(200).EUt(GTValues.V[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('tfi:zirconium_tetrachloride')
        .itemInputs('2x gtceu:carbon_dust', 'tfi:zirconia_dust')
        .inputFluids('4000x gtceu:chlorine')
        .outputFluids('2000x gtceu:carbon_monoxide', '1000x tfi:zirconium_tetrachloride')
        .duration(400).EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.electric_blast_furnace('tfi:zirconium_from_zirconium_tetrachloride')
        .itemInputs('2x gtceu:magnesium_dust')
        .inputFluids('1000x tfi:zirconium_tetrachloride')
        .itemOutputs('gtceu:hot_zirconium_ingot', '6x gtceu:magnesium_chloride_dust')
        .blastFurnaceTemp(GTMaterials.Zirconium.getBlastTemperature() + 200)
        .duration(800).EUt(GTValues.VA[GTValues.HV])

    // Boron Carbide
    event.recipes.gtceu.chemical_reactor('tfi:boric_acid')
        .itemInputs('gtceu:borax_dust')
        .inputFluids('2000x gtceu:hydrochloric_acid')
        .outputFluids('4000x tfi:boric_acid', '5000x minecraft:water')
        .itemOutputs('2x gtceu:salt_dust')
        .duration(200).EUt(GTValues.V[GTValues.LV])

    event.recipes.gtceu.distillery('tfi:boron_trioxide')
        .inputFluids('2000x tfi:boric_acid')
        .itemOutputs('tfi:boron_trioxide_dust')
        .outputFluids('3000x minecraft:water')
        .duration(200).EUt(GTValues.V[GTValues.LV])

    event.recipes.gtceu.electric_blast_furnace('tfi:boron_carbide_dust')
        .itemInputs('2x tfi:boron_trioxide_dust', '7x gtceu:carbon_dust')
        .itemOutputs('tfi:boron_carbide_dust')
        .outputFluids('6000x gtceu:carbon_monoxide')
        .blastFurnaceTemp(2620 + 200)
        .duration(200).EUt(GTValues.V[GTValues.MV])

    // Zirconium Carbide
    event.recipes.gtceu.electric_blast_furnace('tfi:zirconium_carbide_dust')
        .itemInputs('tfi:zirconia_dust', '3x gtceu:carbon_dust')
        .itemOutputs('tfi:zirconium_carbide_dust')
        .outputFluids('2000x gtceu:carbon_monoxide')
        .blastFurnaceTemp(2073)
        .duration(200).EUt(GTValues.V[GTValues.HV])

    // Zirconium Diboride
    event.recipes.gtceu.large_chemical_reactor('tfi:zirconium_diboride_dust_from_boron_trioxide')
        .itemInputs('tfi:zirconia_dust', 'tfi:boron_trioxide_dust', '5x gtceu:magnesium_dust')
        .itemOutputs('tfi:zirconium_diboride_dust', '5x gtceu:magnesia_dust')
        .duration(200).EUt(GTValues.V[GTValues.HV])

    event.recipes.gtceu.large_chemical_reactor('tfi:zirconium_diboride_dust_from_boron_carbide')
        .itemInputs('2x tfi:zirconia_dust', 'tfi:boron_carbide_dust', '3x gtceu:carbon_dust')
        .itemOutputs('2x tfi:zirconium_diboride_dust')
        .outputFluids('4000x gtceu:carbon_monoxide')
        .duration(200).EUt(GTValues.V[GTValues.HV])

    // Zirconium UHTC Composite
    event.recipes.gtceu.mixer('tfi:zirconium_uhtc_composite_dust')
        .itemInputs('tfi:zirconium_carbide_dust', 'tfi:zirconium_diboride_dust')
        .itemOutputs('2x tfi:zirconium_uhtc_composite_dust')
        .duration(200).EUt(GTValues.V[GTValues.EV])
}