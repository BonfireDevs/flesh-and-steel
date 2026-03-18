// ============================================================
// FLESH & STEEL - Loot Table Tuning
// ============================================================

LootJS.modifiers((event) => {
    // Add gun components to exploration chests
    event
        .addLootTableModifier(/minecraft:chests\/(simple_dungeon|pillager_outpost|abandoned_mineshaft|stronghold_corridor)/)
        .addLoot('mekanism:ingot_steel')
        .addLoot('mekanism:alloy_infused')
        .addLoot('sophisticatedstorage:basic_to_iron_tier_upgrade')
        .addLoot('sophisticatedbackpacks:stack_upgrade_tier_1')
        .randomChance(0.20);
});