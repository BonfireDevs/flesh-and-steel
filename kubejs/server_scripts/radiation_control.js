// Radiation control for Flesh & Steel
// Makes radiation biome- and temperature-dependent instead of feeling global.

LevelEvents.tick(event => {
    // Run only on server logic
    if (event.isClientSide()) return;

    event.level.players.forEach(player => {
        if (!player) return;

        // 1. Safe Effect Lookup: Avoid registry lookup crashes
        const effectMap = player.activeEffects;
        let radiationInst = null;
        effectMap.forEach((instance, effect) => {
            if (effect.registryName && effect.registryName.toString() === 'radiach:radiation') {
                radiationInst = instance;
            }
        });

        // 2. Temperature Sampling: Most robust way to handle 100+ modded biomes automatically
        let pos = player.blockPosition();
        let biome = event.level.getBiome(pos).value();
        let temp = biome.getTemperature();

        // DESIGN:
        // - Safe/Normal Zones (temp < 0.85): Aggressively clear radiation.
        // - Harsh Zones (temp >= 0.85): Allow radiation (Deserts, Savannas, Atomic biomes).

        if (temp < 0.85) {
            // Aggressively clear if the mod tries to re-apply it
            player.removePotionEffect('radiach:radiation');
            player.removePotionEffect('minecraft:poison');
            player.removePotionEffect('minecraft:slowness');
            return;
        }

        // 3. Radiation Management in Harsh Zones
        if (!radiationInst) return;

        // If in a mild-harsh zone (but not burning 1.0+), clamp radiation to level 1 (amplifier 0)
        // This gives a warning without killing the player instantly.
        if (temp < 1.0 && radiationInst.amplifier > 0) {
            player.potionEffects.add('radiach:radiation', radiationInst.duration, 0, radiationInst.ambient, radiationInst.visible);
        }
    });
});
