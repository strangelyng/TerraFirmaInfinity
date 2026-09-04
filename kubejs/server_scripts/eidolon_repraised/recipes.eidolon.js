// priority: 0
"use_strict";

const registerEidolonRepraisedRecipes = (event) => {
    // #region Armor
    // Bonelord Helm
    event.custom({
        type: 'eidolon_repraised:worktable',
        pattern: [
            'bsb',
            's s'
        ],
        reagents: [
            'ht t'
        ],
        key: {
            b: {
                item: 'eidolon_repraised:imbued_bones'
            },
            s: {
                tag: 'c:ingots/silver'
            },
            t: {
                item: 'eidolon_repraised:tattered_cloth'
            },
            h: {
                item: 'eidolon_repraised:holy_symbol',
            }
        },
        result: {
            id: 'eidolon_repraised:bonelord_helm'
        }
    }).id('eidolon_repraised:bonelord_helm')
    
    // Bonelord Chestplate
    event.custom({
        type: 'eidolon_repraised:worktable',
        pattern: [
            's s',
            'bwb',
            'sbs'
        ],
        reagents: [
            'htlt'
        ],
        key: {
            b: {
                item: 'eidolon_repraised:imbued_bones'
            },
            w: {
                item: 'eidolon_repraised:wraith_heart'
            },
            s: {
                tag: 'c:ingots/silver'
            },
            t: {
                item: 'eidolon_repraised:tattered_cloth'
            },
            h: {
                item: 'eidolon_repraised:holy_symbol',
            },
            l: {
                item: 'eidolon_repraised:lesser_soul_gem'
            }
        },
        result: {
            id: 'eidolon_repraised:bonelord_chestplate'
        }
    }).id('eidolon_repraised:bonelord_chestplate')
    
    // Bonelord Greaves
    event.custom({
        type: 'eidolon_repraised:worktable',
        pattern: [
            'bsb',
            's s',
            's s'
        ],
        reagents: [
            'hlal'
        ],
        key: {
            b: {
                item: 'eidolon_repraised:imbued_bones'
            },
            s: {
                tag: 'c:ingots/silver'
            },
            a: {
                item: 'eidolon_repraised:enchanted_ash'
            },
            h: {
                item: 'eidolon_repraised:holy_symbol',
            },
            l: {
                item: 'eidolon_repraised:lesser_soul_gem'
            }
        },
        result: {
            id: 'eidolon_repraised:bonelord_greaves'
        }
    }).id('eidolon_repraised:bonelord_greaves')

    // #region Devices
    event.recipes.gtceu.shaped('eidolon_repraised:crucible', [
        'A A',
        'AhA',
        'AAA'
    ], {
        A: '#c:plates/pewter'
    }).id('eidolon_repraised:crucible')
}