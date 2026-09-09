// priority: -1
"use strict";

global.STONE_TYPES = [
    'granite', 'diorite', 'gabbro',
    'rhyolite', 'dacite', 'andesite', 'basalt',
    'shale', 'claystone', 'limestone', 'conglomerate', 'dolomite', 'chert', 'chalk', 'tuff',
    'quartzite', 'slate', 'phyllite', 'schist', 'gneiss', 'marble'
]

global.SAND_COLORS = [
    'brown',
    'white',
    'black',
    'red',
    'yellow',
    'green',
    'pink'
]

global.ROCK_TO_SAND_COLOR = {
    granite: 'yellow',
    diorite: 'red',
    gabbro: 'black',
    rhyolite: 'yellow',
    dacite: 'red',
    andesite: 'red',
    basalt: 'black',
    shale: 'brown',
    claystone: 'brown',
    limestone: 'white',
    conglomerate: 'brown',
    dolomite: 'white',
    chert: 'red',
    chalk: 'white',
    tuff: 'green',
    quartzite: 'white',
    slate: 'yellow',
    phyllite: 'yellow',
    schist: 'yellow',
    gneiss: 'yellow',
    marble: 'white'
}

global.TFC_WOODS = [
    'acacia',
    'ash',
    'aspen',
    'birch',
    'blackwood',
    'chestnut',
    'douglas_fir',
    'hickory',
    'kapok',
    'mangrove',
    'maple',
    'oak',
    'palm',
    'pine',
    'rosewood',
    'sequoia',
    'spruce',
    'sycamore',
    'white_cedar',
    'willow'
]

global.TFC_LUMBER = [
    'acacia',
    'ash',
    'aspen',
    'birch',
    'blackwood',
    'chestnut',
    'douglas_fir',
    'hickory',
    'kapok',
    'mangrove',
    'maple',
    'oak',
    'palm',
    'pine',
    'rosewood',
    'sequoia',
    'spruce',
    'sycamore',
    'white_cedar',
    'willow'
]

global.AFC_WOODS = [
    'baobab',
    'eucalyptus',
    'mahogany',
    'hevea',
    'tualang',
    'teak',
    'cypress',
    'fig',
    'ironwood',
    'ipe',
    'araucaria',
    'beech',
    'ginkgo',
    'mahoe',
    'rainbow_eucalyptus',
    'black_oak',
    'gum_arabic',
    'redcedar',
    'rubber_fig',
    'poplar',
    'kauri'
]

global.AFC_LUMBER = [
    'baobab',
    'eucalyptus',
    'mahogany',
    'hevea',
    'tualang',
    'teak',
    'cypress',
    'fig',
    'ironwood',
    'ipe',
    'araucaria',
    'beech',
    'ginkgo',
    'mahoe'
]

global.AFC_LOG_TO_STRIPPED = {
    rainbow_eucalyptus: 'afc:wood/stripped_log/eucalyptus',
    black_oak: 'tfc:wood/stripped_log/oak',
    gum_arabic: 'tfc:wood/stripped_log/acacia',
    redcedar: 'afc:wood/stripped_log/cypress',
    rubber_fig: 'afc:wood/stripped_log/fig',
    poplar: 'tfc:wood/stripped_log/aspen',
    kauri: 'afc:wood/stripped_log/araucaria'
}

global.AFC_LOG_TO_LUMBER = {
    rainbow_eucalyptus: 'afc:wood/lumber/eucalyptus',
    black_oak: 'tfc:wood/lumber/oak',
    gum_arabic: 'tfc:wood/lumber/acacia',
    redcedar: 'afc:wood/lumber/cypress',
    rubber_fig: 'afc:wood/lumber/fig',
    poplar: 'tfc:wood/lumber/aspen',
    kauri: 'afc:wood/lumber/araucaria'
}