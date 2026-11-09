const registerDyeRecipes = (event) => {
    const discMap = {
        yellow: '13',
        orange: 'blocks',
        lime: 'cat',
        red: 'chirp',
        green: 'far',
        purple: 'mall',
        magenta: 'mellohi',
        cyan: 'otherside',
        black: 'stal',
        white: 'strad',
        light_blue: 'wait',
        blue: 'ward',
    }

    const alabasterTypes = ['bricks', 'polished', 'raw']

    global.DYE_COLORS.forEach(color => {
        // #region Dye Production
        event.remove({ id: `tfc:pot/${color}_dye` })
        event.remove({ id: `firmalife:vat/${color}_dye` })

        let potInputs = [];

        for (let i = 1; i < 6; i++) {
            potInputs.push(`#c:dyes/${color}`);

            event.recipes.tfc.pot(
                potInputs,
                Fluid.of('minecraft:water', 100*i),
                600*i,
                600
            ).fluidOutput(Fluid.of(`tfc:${color}_dye`, 144*i)).id(`tfinfinity:pot/${color}_dye_${i}`)
        }

        event.recipes.firmalife.vat(
            `#c:dyes/${color}`,
            Fluid.of('minecraft:water', 100),
            600,
            600
        ).outputFluid(Fluid.of(`tfc:${color}_dye`, 144)).id(`tfinfinity:vat/${color}_dye`)

        // #region Dyeing Recipes
        alabasterTypes.forEach(type => {
            event.recipes.tfc.sealed_barrel(
                Fluid.of(`tfc:${color}_dye`, 144/8),
                1200
            ).inputItem(`tfc:alabaster/${type}`).outputItem(`tfc:alabaster/${type}/${color}`).id(`tfc:barrel/alabaster/${type}/${color}`)

            event.recipes.gtceu.chemical_bath(`tfinfinity:dye_alabaster_${type}_to_${color}`)
                .itemInputs(`tfc:alabaster/${type}`)
                .inputFluids(`18x tfc:${color}_dye`)
                .itemOutputs(`tfc:alabaster/${type}/${color}`)
                .duration(20)
                .EUt(GTValues.VA[GTValues.ULV])
                .category(GTRecipeCategories.CHEM_DYES)
        })

        event.recipes.tfc.sealed_barrel(
            Fluid.of(`tfc:${color}_dye`, 144/4),
            1200
        ).inputItem('tfc:candle').outputItem(`tfc:candle/${color}`).id(`tfc:barrel/candle/${color}`)

        event.recipes.gtceu.chemical_bath(`tfinfinity:dye_candle_to_${color}`)
            .itemInputs(`tfc:candle`)
            .inputFluids(`36x tfc:${color}_dye`)
            .itemOutputs(`tfc:candle/${color}`)
            .duration(20)
            .EUt(GTValues.VA[GTValues.ULV])
            .category(GTRecipeCategories.CHEM_DYES)

        event.recipes.tfc.sealed_barrel(
            Fluid.of(`tfc:${color}_dye`, 144/2),
            1200
        ).inputItem('tfc:ceramic/unfired_large_vessel').outputItem(`tfc:ceramic/unfired_large_vessel/${color}`).id(`tfc:barrel/ceramic/unfired_large_vessel/${color}`)

        event.recipes.gtceu.chemical_bath(`tfinfinity:dye_unfired_large_vessel_to_${color}`)
            .itemInputs(`tfc:ceramic/unfired_large_vessel`)
            .inputFluids(`72x tfc:${color}_dye`)
            .itemOutputs(`tfc:ceramic/unfired_large_vessel/${color}`)
            .duration(20)
            .EUt(GTValues.VA[GTValues.ULV])
            .category(GTRecipeCategories.CHEM_DYES)

        event.recipes.tfc.sealed_barrel(
            Fluid.of(`tfc:${color}_dye`, 144/4),
            1200
        ).inputItem('tfc:ceramic/unfired_vessel').outputItem(`tfc:ceramic/${color}_unfired_vessel`).id(`tfc:barrel/ceramic/${color}_unfired_vessel`)

        event.recipes.gtceu.chemical_bath(`tfinfinity:dye_unfired_vessel_to_${color}`)
            .itemInputs(`tfc:ceramic/unfired_vessel`)
            .inputFluids(`36x tfc:${color}_dye`)
            .itemOutputs(`tfc:ceramic/${color}_unfired_vessel`)
            .duration(20)
            .EUt(GTValues.VA[GTValues.ULV])
            .category(GTRecipeCategories.CHEM_DYES)

        event.recipes.tfc.sealed_barrel(
            Fluid.of(`tfc:${color}_dye`, 144/8),
            1200
        ).inputItem('tfc:aggregate').outputItem(`minecraft:${color}_concrete_powder`).id(`tfc:barrel/${color}_concrete_powder`)

        event.recipes.tfc.sealed_barrel(
            Fluid.of(`tfc:${color}_dye`, 144/2),
            1200
        ).inputItem('minecraft:shulker_box').outputItem(`minecraft:${color}_shulker_box`).id(`tfc:barrel/${color}_shulker_box`)

        event.recipes.tfc.sealed_barrel(
            Fluid.of(`tfc:${color}_dye`, 144/8),
            1200
        ).inputItem('minecraft:terracotta').outputItem(`minecraft:${color}_terracotta`).id(`tfc:barrel/${color}_terracotta`)

        event.recipes.tfc.sealed_barrel(
            Fluid.of(`tfc:${color}_dye`, 144),
            1200
        ).inputItem('#minecraft:dyeable').outputItem(TFC.isp.copyInputStack().dyeLeather(color)).id(`tfc:barrel/${color}_dyeable`)

        
        let discId = `music_disc_${discMap[color]}`

        if (Item.exists(`minecraft:${discId}`)) {
            event.recipes.tfc.sealed_barrel(
                Fluid.of(`tfc:${color}_dye`, 144),
                1200
            ).inputItem('tfc:blank_disc').outputItem(`minecraft:${discId}`).id(`tfc:barrel/${discId}`)

            event.recipes.gtceu.chemical_bath(`tfinfinity:${discId}`)
                .itemInputs(`tfc:blank_disc`)
                .inputFluids(`144x tfc:${color}_dye`)
                .itemOutputs(`minecraft:${discId}`)
                .duration(20*10)
                .EUt(GTValues.VA[GTValues.ULV])
                .category(GTRecipeCategories.CHEM_DYES)
        }

        if (color != 'white') {
            event.recipes.tfc.sealed_barrel(
                Fluid.of(`tfc:${color}_dye`, 144),
                1200
            ).inputItem('minecraft:white_banner').outputItem(`minecraft:${color}_banner`).id(`tfc:barrel/${color}_banner`)

            event.recipes.tfc.sealed_barrel(
                Fluid.of(`tfc:${color}_dye`, 144),
                1200
            ).inputItem('minecraft:white_bed').outputItem(`minecraft:${color}_bed`).id(`tfc:barrel/${color}_bed`)

            event.recipes.tfc.sealed_barrel(
                Fluid.of(`tfc:${color}_dye`, 288/3),
                1200
            ).inputItem('minecraft:white_carpet').outputItem(`minecraft:${color}_carpet`).id(`tfc:barrel/${color}_carpet`)

            event.recipes.tfc.sealed_barrel(
                Fluid.of(`tfc:${color}_dye`, 144/8),
                1200
            ).inputItem('minecraft:white_glazed_terracotta').outputItem(`minecraft:${color}_glazed_terracotta`).id(`tfc:barrel/${color}_glazed_terracotta`)

            event.recipes.tfc.sealed_barrel(
                Fluid.of(`tfc:${color}_dye`, 144),
                1200
            ).inputItem('minecraft:white_wool').outputItem(`minecraft:${color}_wool`).id(`tfc:barrel/${color}_wool`)
        }
    })

    // #region Color Mixing
    const colorMixingDict = {
        light_gray: ['gray', 'white'],
        gray: ['black', 'white'],
        orange: ['red', 'yellow'],
        lime: ['green', 'white'],
        cyan: ['blue', 'green'],
        light_blue: ['blue', 'white'],
        purple: ['red', 'blue'],
        magenta: ['purple', 'pink'],
        pink: ['red', 'white']
    }

    for (const [output, inputs] of Object.entries(colorMixingDict)) {
        event.recipes.tfc.instant_fluid_barrel(
            Fluid.of(`tfc:${inputs[0]}_dye`, 1),
            Fluid.of(`tfc:${inputs[1]}_dye`, 1)
        ).outputFluid(Fluid.of(`tfc:${output}_dye`, 2)).id(`tfinfinity:barrel/mix_${output}_dye`)

        event.recipes.tfc.instant_fluid_barrel(
            Fluid.of(`tfc:${inputs[1]}_dye`, 1),
            Fluid.of(`tfc:${inputs[0]}_dye`, 1)
        ).outputFluid(Fluid.of(`tfc:${output}_dye`, 2)).id(`tfinfinity:barrel/mix_${output}_dye_reverse`)

        event.recipes.gtceu.mixer(`tfinfinity:mix_${output}_dye`)
            .inputFluids(`144x tfc:${inputs[0]}_dye`, `144x tfc:${inputs[1]}_dye`)
            .outputFluids(`288x tfc:${output}_dye`)
            .duration(10*20)
            .EUt(GTValues.VA[GTValues.ULV])
    }
}