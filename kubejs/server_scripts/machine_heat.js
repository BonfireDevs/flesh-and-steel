// Create Steam Engine Heat Integration for Cold Sweat
// This script makes Create Steam Engines emit heat that affects the player's temperature.

LevelEvents.tick(event => {
    // Optimization: Only run every 20 ticks (1 second)
    if (event.level.time % 20 != 0) return;

    event.level.players.forEach(player => {
        let { x, y, z } = player;
        let foundHeat = false;

        // Optimized search: Check a small 5x5x3 area around the player
        // This is much lighter than the previous 21x21x5 search.
        for (let dx = -3; dx <= 3; dx++) {
            for (let dy = -1; dy <= 2; dy++) {
                for (let dz = -3; dz <= 3; dz++) {
                    let block = event.level.getBlock(x + dx, y + dy, z + dz);
                    if (block.id == 'create:steam_engine' || block.id == 'createnuclear:reactor_casing') {
                        foundHeat = true;
                        break;
                    }
                }
                if (foundHeat) break;
            }
            if (foundHeat) break;
        }

        if (foundHeat) {
            // Apply Heat effect from Cold Sweat
            // We use the effect 'cold_sweat:heat' which makes the player feel warmer.
            player.addPotionEffect('cold_sweat:heat', 60, 1, false, false);
        }
    });
});
