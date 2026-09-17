const registerSinterCakes = (event) => {
    event.create('tfinfinity:kyanite_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/kyanite')
        
    // Garnet Group
    event.create('tfinfinity:almandine_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/almandine')

    event.create('tfinfinity:andradite_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/andradite')

    event.create('tfinfinity:grossular_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/grossular')

    event.create('tfinfinity:pyrope_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/pyrope')

    event.create('tfinfinity:spessartine_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/spessartine')

    event.create('tfinfinity:uvarovite_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/uvarovite')

    // Sodalite Group
    event.create('tfinfinity:lazurite_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/lazurite')
        
    event.create('tfinfinity:sodalite_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/sodalite')
    
    // Topaz Group
    event.create('tfinfinity:blue_topaz_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/blue_topaz')
        
    event.create('tfinfinity:topaz_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/topaz')

    // Beryl Group
    event.create('tfinfinity:emerald_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/emerald')

    // Misc
    event.create('tfinfinity:roasted_alunite_calcine')
        .texture('tfinfinity:item/sinter_cake/alunite') // Not really a sinter cake

    // Lithium
    // event.create('tfinfinity:spodumene_sulfate_cake') // Equals 27x Dust
    //     .texture('tfinfinity:item/sinter_cake/spodumene')

    // event.create('tfinfinity:lepidolite_sulfate_cake') // Equals 23x Dust
    //     .texture('tfinfinity:item/sinter_cake/lepidolite')

    event.create('tfinfinity:spodumene_residue_clinker')
        .texture('tfinfinity:item/clinker/spodumene_residue')

    // Zeolites
    event.create('tfinfinity:zeolite_sinter_cake')
        .texture('tfinfinity:item/sinter_cake/zeolite')
}