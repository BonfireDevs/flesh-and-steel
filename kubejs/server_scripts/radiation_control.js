// Radiation control for Flesh & Steel
// Separates Temperature and Radiation into independent mechanics.
// Radiation is now based on Biome Tags and refined "Toxic" biome IDs.

LevelEvents.tick(event => {
    if (event.isClientSide()) return;

    event.level.players.forEach(player => {
        if (!player) return;

        let pos = player.blockPosition();
        let biome = event.level.getBiome(pos);
        let biomeId = biome.key().location().toString();
        let biomeValue = biome.value();
        let temp = biomeValue.getTemperature();

        // Safe Effect Lookup
        const effectMap = player.activeEffects;
        let radiationInst = null;
        effectMap.forEach((instance, effect) => {
            if (effect.registryName && effect.registryName.toString() === 'radiach:radiation') {
                radiationInst = instance;
            }
        });

        // --- ENHANCED RADIATION LOGIC ---
        // We categorize biomes into Rad Levels: 0 (None), 1 (Low), 2 (Medium), 3 (High)
        let naturalRadLevel = 0;

        // 1. High Radiation Biomes (Nuclear / Corrupted / Deadly Wastelands)
        // Expanded to include specific BoP/BYG IDs
        if (biomeId.contains('corrupted') || biomeId.contains('wasteland') || 
            biomeId.contains('volcanic') || biomeId.contains('volcano') ||
            biomeId.contains('atomic') || biomeId.contains('nuclear') ||
            biomeId.contains('withered') || biomeId.contains('null') ||
            biomeId.contains('quagmire') || biomeId.contains('dead') ||
            biomeId.contains('abandoned')) {
            naturalRadLevel = 3;
        }
        // 2. Medium Radiation (Industrial / Dense Harsh Terrains)
        else if (biomeId.contains('desert') || biomeId.contains('badlands') || 
                 biomeId.contains('savanna') || biomeId.contains('mesa') ||
                 biomeId.contains('dunes') || biomeId.contains('scrubland')) {
            naturalRadLevel = 2;
        }
        // 3. Low Radiation (Toxic marshes and humid rot)
        else if (biomeId.contains('swamp') || biomeId.contains('marsh') || 
                 biomeId.contains('jungle') || biomeId.contains('bog') ||
                 biomeId.contains('fen') || biomeId.contains('mangrove')) {
            naturalRadLevel = 1;
        }
        // 4. Default / Safe (Snowy, Lush, Plains, Meadows)
        else {
            naturalRadLevel = 0;
        }

        // Apply natural radiation if level > 0
        if (naturalRadLevel > 0) {
            // Amplifier: Level 1 -> 0, Level 2 -> 1, Level 3 -> 2
            player.addPotionEffect('radiach:radiation', 60, naturalRadLevel - 1, false, false);
        }

        // --- TEMPERATURE & RADIATION SYNC ---
        // Clear radiation ONLY if the player is in a 'Pristine' environment
        // (Cold, Mild, Moist and not in a rad zone).
        if (temp < 0.6 && naturalRadLevel == 0) {
            player.removePotionEffect('radiach:radiation');
            player.removePotionEffect('minecraft:poison');
        }
    });
});
