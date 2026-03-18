// ============================================================
// FLESH & STEEL - Gameplay Tuning (1.20.1 KJS)
// Tweaks to recipe, progression, and player experience
// ============================================================

ServerEvents.recipes((event) => {
    // Waystone - cheaper recipe using materials players find exploring
    event.shaped('waystones:waystone', [
        ' S ',
        'SWS',
        'SSS'
    ], {
        S: 'minecraft:stone',
        W: 'waystones:warp_stone'
    }).id('flesh_and_steel:cheap_waystone');

    // Remove original compass recipes to avoid duplicates
    event.remove({ id: 'explorerscompass:explorerscompass' })
    event.remove({ id: 'naturescompass:naturescompass' })

    // Allow crafting simple compasses (for navigation mods)
    event.shaped('explorerscompass:explorerscompass', [
        ' I ',
        'ICI',
        ' I ',
    ], {
        I: 'minecraft:iron_ingot',
        C: 'minecraft:compass',
    }).id('flesh_and_steel:explorers_compass_fixed');

    event.shaped('naturescompass:naturescompass', [
        ' I ',
        'ILI',
        ' I ',
    ], {
        I: 'minecraft:iron_ingot',
        L: 'minecraft:oak_leaves',
    }).id('flesh_and_steel:natures_compass_fixed');
});

// ============================================================
// FLESH & STEEL - Starting Items for New Players
// Give players a better start so they can explore immediately
// ============================================================
// Safe Give function moved to a standard function declaration to prevent redeclaration errors
function giveSafe(player, item, count) {
    try {
        let stack = Item.of(item, count || 1);
        player.give(stack);
    } catch (e) {
        console.log(`Failed to give starter item ${item}: ${e}`);
    }
}

PlayerEvents.loggedIn(event => {
    const { player } = event;

    if (!player.persistentData.contains('flesh_steel_starter_given')) {
        player.persistentData.putBoolean('flesh_steel_starter_given', true);

        // Essentials
        giveSafe(player, 'minecraft:cooked_beef', 16);
        giveSafe(player, 'minecraft:torch', 32);
        giveSafe(player, 'minecraft:iron_sword', 1);
        
        // Potions
        try {
            player.give(Item.of('minecraft:potion', {Potion: "minecraft:water"}).withCount(12));
        } catch (e) {
            console.log("Failed to give water potions: " + e);
        }

        // Backpack
        giveSafe(player, 'sophisticatedbackpacks:backpack', 1);
        
        // TACZ Starting Rifle (replaces Point Blank - TACZ is the v4 weapon system)
        try {
            player.give(Item.of('tacz:m16a4'));
            player.give(Item.of('tacz:5_56x45mm_mag', 4));
        } catch (e) {
            // TACZ might identify guns differently, fall back gracefully
            console.log("Failed to give TACZ starting weapon: " + e);
        }

        // Welcome message - combined pack greeting
        player.tell('§6§l⚙ Flesh & Steel §8v4 §6§l⚙');
        player.tell('§7Biomechanical meets Flesh & Steel. Good luck, soldier.');
        player.tell('§aYour starter kit has been provided.');
    }
});

// Admin command to reset starter kit for testing
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal('resetstarter')
        .requires(s => s.hasPermission(2))
        .executes(c => {
            c.source.player.persistentData.remove('flesh_steel_starter_given');
            c.source.player.tell('§eStarter kit reset. Relog to receive it again.');
            return 1;
        })
    );
});
