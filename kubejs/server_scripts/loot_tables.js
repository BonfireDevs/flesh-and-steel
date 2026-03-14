// ============================================================
// FLESH & STEEL - Loot Table Tuning
// ============================================================

LootJS.modifiers((event) => {
    // Add gun components to exploration chests
    event
        .addLootTableModifier(/minecraft:chests\/(simple_dungeon|pillager_outpost|abandoned_mineshaft)/)
        .addLoot('immersive-guns:component_pistol')
        .randomChance(0.25);
});