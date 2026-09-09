// priority: 0
"use strict";

const registerGTCEUItemTags = (event) => {
    event.add('c:tools', '#c:tools/spade')
    event.add('c:tools', '#c:tools/screwdriver')
    event.add('c:tools', '#c:tools/plunger')
    event.add('c:tools', '#c:tools/mortar')
    event.add('c:tools', '#c:tools/mallet')
    event.add('c:tools', '#c:tools/file')
    event.add('c:tools', '#c:tools/wire_cutter')
    event.add('c:tools', '#c:tools/butchery_knife')
    event.add('c:tools', '#c:tools/mining_hammer')
    event.add('c:tools', '#c:tools/crowbar')

    /**
     * Hide all the ores in EMI
     * Prevents clutter and misleading blocks (ore blocks that generate but are never used)
     */
    // event.add('c:hidden_from_recipe_viewers', '#c:ores')
}