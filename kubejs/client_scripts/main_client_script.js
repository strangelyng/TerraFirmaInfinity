ClientEvents.lang('en_us', event => {
    event.add('emi.category.tfc.caminite_knapping', 'Caminite Knapping');

    let TFCGradedOres = [
        'native_copper',
        'native_gold',
        'hematite',
        'native_silver',
        'cassiterite',
        'bismuthinite',
        'garnierite',
        'malachite',
        'magnetite',
        'limonite',
        'sphalerite',
        'tetrahedrite'
    ].forEach(gradedOre => {
        let name = gradedOre.startsWith('native_') ? gradedOre.split('_')[1] : gradedOre;

        let formattedName = name.substring(0, 1).toUpperCase() + name.substring(1);

        event.renameItem(`tfc:ore/poor_${gradedOre}`, `Poor Raw ${formattedName}`);
        event.renameItem(`tfc:ore/normal_${gradedOre}`, `Normal Raw ${formattedName}`);
        event.renameItem(`tfc:ore/rich_${gradedOre}`, `Rich Raw ${formattedName}`);
    })

    let TFCUngradedOres = [
        'gypsum',
        'cinnabar',
        'cryolite',
        'borax',
        'graphite',
        'saltpeter',
        'sulfur',
        'sylvite',
        'amethyst',
        'diamond',
        'emerald',
        'lapis_lazuli',
        'opal',
        'pyrite',
        'ruby',
        'sapphire',
        'topaz',
        'halite'
    ].forEach(ungradedOre => {
        let name = ungradedOre == 'lapis_lazuli' ? 'lapis' : ungradedOre;

        let formattedName = name.substring(0, 1).toUpperCase() + name.substring(1);

        event.renameItem(`tfc:ore/${ungradedOre}`, `Normal Raw ${formattedName}`);
    })

    let FLGradedOres = [
        'chromite'
    ].forEach(gradedOre => {
        let name = gradedOre.startsWith('native_') ? gradedOre.split('_')[1] : gradedOre;

        let formattedName = name.substring(0, 1).toUpperCase() + name.substring(1);

        event.renameItem(`firmalife:ore/poor_${gradedOre}`, `Poor Raw ${formattedName}`);
        event.renameItem(`firmalife:ore/normal_${gradedOre}`, `Normal Raw ${formattedName}`);
        event.renameItem(`firmalife:ore/rich_${gradedOre}`, `Rich Raw ${formattedName}`);
    })
})