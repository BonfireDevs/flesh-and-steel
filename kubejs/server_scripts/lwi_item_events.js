/**
 * bad apple
 */
ItemEvents.foodEaten('kubejs:bad_apple', (event) => {
    const { server, player } = event
    let difficulty = global.getPlayerDifficulty(player)
    let config = Object.keys(global.BAD_APPLE_DIFFICULTY_ADD).sort((a, b) => parseFloat(a) - parseFloat(b))
    for (let key of config) {
        if (difficulty < parseFloat(key)) {
            if (difficulty > (parseFloat(key) - global.BAD_APPLE_DIFFICULTY_ADD[key])) {
                server.runCommandSilent(`improvedmobs difficulty player @p[name='${player.getName().getString()}'] set ${key}`)
                player.tell(Text.red(Text.translate(`message.kubejs.item.bad_apple`, [
                    Text.translate('item.kubejs.bad_apple'),
                    (parseFloat(key) - difficulty).toFixed(1)
                ])))
            } else {
                server.runCommandSilent(`improvedmobs difficulty player @p[name='${player.getName().getString()}'] add ${global.BAD_APPLE_DIFFICULTY_ADD[key]}`)
                player.tell(Text.red(Text.translate(`message.kubejs.item.bad_apple`, [
                    Text.translate('item.kubejs.bad_apple'),
                    global.BAD_APPLE_DIFFICULTY_ADD[key]
                ])))
            }

            break
        }
    }
})

/**
 * @param {Internal.Player} player 
 * @param {Internal.Level} level 
 * @param {Array<String>} entityIDs 
 */
const shotProjectile = (player, level, entityIDs) => {
    if (!player || !level || !entityIDs || entityIDs.length === 0) {
        console.error('Invalid parameters, unable to launch entity');
        return false;
    }

    // Get the player's view vector and normalize it
    let viewVector = player.getViewVector(1.0);
    let length = Math.sqrt(
        viewVector.x() * viewVector.x() + 
        viewVector.y() * viewVector.y() + 
        viewVector.z() * viewVector.z()
    );
    
    // Avoid division by zero error
    if (length === 0) {
        console.error('Unable to get valid view vector');
        return false;
    }

    let normalizedVector = {
        x: viewVector.x() / length,
        y: viewVector.y() / length,
        z: viewVector.z() / length
    };
    
    // Randomly select an entity ID
    let randomIndex = Math.floor(Math.random() * entityIDs.length);
    let randomEntityID = entityIDs[randomIndex];
    
    // Create entity and set properties
    try {
        let projectile = level.createEntity(randomEntityID);
        
        // Set launch position (player's eye height)
        projectile.setPosition(
            player.x + normalizedVector.x * 0.5,
            player.y + player.getEyeHeight(),
            player.z + normalizedVector.z * 0.5
        );
        
        // Set entity velocity
        let velocity = 2;
        projectile.setMotion(
            normalizedVector.x * velocity,
            normalizedVector.y * velocity,
            normalizedVector.z * velocity
        );
        
        // Set entity owner
        projectile.setOwner(player);
        
        // Set pickup mode (2 = not pickable)
        projectile.mergeNbt({ pickup: 2 });
        
        // Launch entity
        projectile.spawn();
        return true;
    } catch (error) {
        console.error(`Failed to create entity: ${error.message}`);
        return false;
    }
}

ItemEvents.rightClicked('lucky:fire_lucky_sword', event => {
    const { player, level, item } = event;
    if (item.maxDamage - item.damageValue > 200) {
        item.setDamageValue(item.damageValue + 200)
        player.addItemCooldown(item.id, 40)
 
        const entityIDs = ['cataclysm:lava_bomb'];
        shotProjectile(player, level, entityIDs)
    }
});

ItemEvents.rightClicked('lucky:elemental_lucky_sword', event => {
    const { player, level, item } = event;
    if (item.maxDamage - item.damageValue > 50) {
        item.setDamageValue(item.damageValue + 50)
        player.addItemCooldown(item.id, 10)

        const entityIDs = [
            'minecraft:snowball',
            'yakurum:zeus_thunder',
            'yakurum:ice_ball',
            'yakurum:astral_star',
            'yakurum:water_ball',
            'yakurum:ink_ball'
        ];
        shotProjectile(player, level, entityIDs)
    }
});

ItemEvents.rightClicked('lucky:elefire_lucky_sword', event => {
    const { player, level, item } = event;
    if (item.maxDamage - item.damageValue > 200) {
        item.setDamageValue(item.damageValue + 200)
        player.addItemCooldown(item.id, 40)
 
        const entityIDs = ['cataclysm:wither_howitzer'];
        shotProjectile(player, level, entityIDs)
    }
});

ItemEvents.rightClicked('lucky:amongus_lucky_sword', event => {
    const { player, level, item } = event;
    if (item.maxDamage - item.damageValue > 50) {
        item.setDamageValue(item.damageValue + 50)
        player.addItemCooldown(item.id, 10)

        const entityIDs = ['legendary_monsters:big_shulker_bullet'];
        shotProjectile(player, level, entityIDs)
    }
});

ItemEvents.rightClicked('lucky:flesh_and_steel_lucky_sword', event => {
    const { player, level, item } = event;
    if (item.maxDamage - item.damageValue > 50) {
        item.setDamageValue(item.damageValue + 50)

        player.addItemCooldown(item.id, 20)
        const entityIDs = [
            // 'cataclysm:void_howitzer',
            'cataclysm:ignis_fireball',
            'cataclysm:ignis_abyss_fireball'
        ];
        shotProjectile(player, level, entityIDs)
    }
});

const BOSS_SUMMON = {
    'minecraft:bedrock': {
        entityId: 'minecraft:ender_dragon',
        difficulty: 250,
        dimension: 'minecraft:the_end'
    },
}

ItemEvents.rightClicked('kubejs:challenge_badge', event => {
    const { player, level, target, item, server } = event;
    let difficulty = global.getPlayerDifficulty(player)

    if (target && target.block) {
        for (const key in BOSS_SUMMON) {
            if (key == target.block.id) {
                if ('minecraft:air' != level.getBlock(target.block.x, target.block.y + 1, target.block.z).id ||
                    'minecraft:air' != level.getBlock(target.block.x, target.block.y + 2, target.block.z).id) {
                    player.setStatusMessage(Text.translate('message.kubejs.summon.error.block').red())
                    break
                }
                if (BOSS_SUMMON[key].dimension && BOSS_SUMMON[key].dimension != level.dimension) {
                    player.setStatusMessage(Text.translate('message.kubejs.summon.error.dimension').red())
                    break
                }
                if (BOSS_SUMMON[key].difficulty && BOSS_SUMMON[key].difficulty > difficulty) {
                    player.setStatusMessage(Text.translate('message.kubejs.summon.error.diffuculty', [BOSS_SUMMON[key].difficulty]).red())
                    break
                }
                if (level.getEntities().filter(e => e.isLiving() && BOSS_SUMMON[key].entityId == e.type).size() > 0) {
                    player.setStatusMessage(Text.translate('message.kubejs.summon.error.exist').red())
                    break
                }
                let entity = target.block.createEntity(BOSS_SUMMON[key].entityId)
                entity.setPosition(target.block.x, target.block.y + 1, target.block.z)
                entity.addTag('final_boss')
                entity.setCustomName(Text.red("Final Boss"))
                entity.setCustomNameVisible(true)
                entity.mergeNbt({
                    Attributes: [
                        { Base: 200, Name: 'voidscape:voidic_dmg'},
                        { Base: 10, Name: 'attributeslib:life_steal' },
                        { Base: 1, Name: 'attributeslib:current_hp_damage' },
                        { Base: 50, Name: 'attributeslib:armor_pierce' },
                        { Base: 0.8, Name: 'attributeslib:armor_shred' },
                        { Base: 5, Name: 'attributeslib:prot_pierce' },
                        { Base: 0.8, Name: 'attributeslib:prot_shred' },
                        { Base: 1, Name: 'minecraft:generic.knockback_resistance' },
                        { Base: 1000, Name: 'minecraft:generic.armor' },
                        { Base: 1000000, Name: 'minecraft:generic.max_health' }
                    ]
                })
                entity.spawn()
                item.count--
                player.addItemCooldown(item.id, 1200)

                break
            }
        }
    }
})

ItemEvents.rightClicked('minecraft:debug_stick', event => {
    const { player, target, item, server } = event;

    if (target && target.entity) {
        player.tell(target.entity.persistentData.getCompound('mob_skill_damage_type'))
        player.tell(global.getDamageVariance(target.entity))
    }
    
    // server.getLevel('minecraft:overworld').findNearestMapStructure(ResourceLocation.parse('minecraft:village'), player.getBlock().getPos(), 10000, true)
})

// MaidEvents.maidTick(event => {
//     event.getMaid().chatBubbleManager.addChatBubble()
// })