const registerTFIAcidsRecipes = (event) => {
    event.recipes.gtceu.chemical_bath('hydrofluoric_acid_from_fluorite')
        .itemInputs('3x gtceu:fluorite_dust')
        .inputFluids('1000x gtceu:sulfuric_acid')
        .outputFluids('2000x tfinfinity:hydrogen_fluoride')
        .itemOutputs('8x gtceu:gypsum_dust')
        .duration(320)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('hexafluorosilicic_acid')
        .itemInputs('3x gtceu:silicon_dioxide_dust')
        .inputFluids('6000x gtceu:hydrofluoric_acid')
        .outputFluids('1000x tfinfinity:hexafluorosilicic_acid')
        .duration(320)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('sodium_fluorosilicate')
        .itemInputs('4x gtceu:salt_dust')
        .inputFluids('1000x tfinfinity:hexafluorosilicic_acid')
        .itemOutputs('9x tfinfinity:sodium_fluorosilicate_dust')
        .outputFluids('2000x gtceu:hydrochloric_acid')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])
}