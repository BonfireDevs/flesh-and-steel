// const $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

const SKILL_BREAK_MOBS = [
    'shadowlands:vellium_megabee',
    'yakurum:water_shooter',
    'yakurum:water_master',
    'yakurum:biped_guardian',
    'yakurum:kraken',
    'yakurum:king_triton',
    'yakurum:poseidon',
    'shadowlands:wither_skeleton_commander',
    'shadowlands:doom_star',
    'shadowlands:guardian_boar',
    'shadowlands:vellium_megabee',
    'shadowlands:sporeking',
    'shadowlands:plaguemaiden',
    'shadowlands:the_red_knight',
    'shadowlands:red_nightmare',
    'shadowlands:ascendant_star_stage_1',
    'shadowlands:ascendant_star_stage_2',
    'shadowlands:ascendant_star_stage_3',
    'shadowlands:ascendant_star_stage_4',
    'shadowlands:ascendant_star_stage_5',
    'shadowlands:emperor_wither',
]

/**
 * LivingHurtEvent
 * 
 * @param {Internal.LivingHurtEvent} event 
 */
global.LivingHurtEvent = event => {
    const { source, entity, amount } = event
    const { player } = source

    const damageType = typeof source.type === 'function' ? source.type() : source.type
    const msgId = typeof damageType.msgId === 'function' ? damageType.msgId() : damageType.msgId

    let fixAmount = amount

    // // lightningBolt
    if (fixAmount > 0 && entity.isMonster()) {
        if (source.actual && source.actual.isPlayer()) {
            let difficulty = global.getPlayerDifficulty(player)
    //         // let k = -Math.log(0.001) / 250;

            if (player.handSlots[0].getId().startsWith('lucky:')) {
                if ('lucky:flesh_and_steel_lucky_sword' == player.handSlots[0].getId()) {
                    // console.log(player.block.light);
                    fixAmount = fixAmount * Math.max(Math.sqrt(player.block.light) * 2, 1)
                }

                if (entity.hasEffect('kubejs:lucky_shield')) {
                    entity.removeEffect('kubejs:lucky_shield')
                    entity.setAbsorptionAmount(0)
                }
            }

            if (SKILL_BREAK_MOBS.indexOf(entity.type) != -1) {
                if (entity.persistentData.getInt('mob_skill_break') <= 0) {
                    entity.persistentData.putInt('mob_skill_break', Math.max(10, parseInt(difficulty)))
                }

                
                if (entity.getTags().contains('final_boss')) {
                    fixAmount = fixAmount / Math.max(1, difficulty)
                }
            }

            if ('minecraft:ender_dragon' == entity.type) {
                fixAmount = Math.min(
                    fixAmount * Math.max(entity.health / entity.maxHealth, 0.01),
                    entity.maxHealth * global.GLOBAL_DAMAGE_LIMIT.percentage / 100
                )

                if ('attributeslib:current_hp_damage' === msgId) {
                    event.setCanceled(true)
                }
            }
    //         // console.log(msgId);
    //         // console.log(fixAmount);
        } else if (source.actual && 'touhou_little_maid:maid' == source.actual.getType()) {
            let MaidFavorability = parseInt(source.actual.getNbt().MaidFavorability || 0)
            let HandItem = source.actual.getNbt().HandItems[0]
    //         // console.log(msgId)
    //         // console.log(HandItem)
    //         // console.log(MaidFavorability);
    //         // console.log(source.actual.getNbt().ArmorItems)
    //         // console.log(fixAmount)
    //         let k = -Math.log(0.001) / 384;

            if (HandItem && HandItem.id.startsWith('lucky:')) {
                if ('lucky:flesh_and_steel_lucky_sword' == HandItem.id) {
                    fixAmount = fixAmount * Math.max(Math.sqrt(source.actual.block.light) * 2, 1)
                }

                if (entity.hasEffect('kubejs:lucky_shield')) {
                    entity.removeEffect('kubejs:lucky_shield')
                    entity.setAbsorptionAmount(0)
                }
            }

            if (SKILL_BREAK_MOBS.indexOf(entity.type) != -1) {
                if (entity.persistentData.getInt('mob_skill_break') <= 0) {
                    entity.persistentData.putInt('mob_skill_break', Math.max(10, parseInt(MaidFavorability)))
                }

                
                if (entity.getTags().contains('final_boss')) {
                    fixAmount = fixAmount / Math.max(1, MaidFavorability)
                }
            }

            if ('minecraft:ender_dragon' == entity.type) {
                fixAmount = Math.min(
                    fixAmount * Math.max(entity.health / entity.maxHealth, 0.1),
                    entity.maxHealth * global.GLOBAL_DAMAGE_LIMIT.percentage / 100
                )

                if ('attributeslib:current_hp_damage' === msgId) {
                    event.setCanceled(true)
                }
            }

    //         // console.log(fixAmount)
        }
    }

    // console.log(msgId);
    // console.log(fixAmount);

    if (typeof fixAmount == 'number' && !isNaN(fixAmount)) {
        if (global.BOSS_AND_ELIT.indexOf(entity.type) != -1) {
            fixAmount = Math.min(
                fixAmount,
                Math.min(entity.maxHealth * global.GLOBAL_DAMAGE_LIMIT.percentage / 100, global.GLOBAL_DAMAGE_LIMIT.limit)
            )

            let damageTypeList = entity.persistentData.getCompound('mob_skill_damage_type')
            damageTypeList.putInt(msgId, fixAmount)
            entity.persistentData.put('mob_skill_damage_type', damageTypeList)
        }

        event.setAmount(fixAmount)
    } else {
        event.setCanceled(true)
    }
}

/**
 * LivingDamageEvent
 * 
 * @param {Internal.LivingDamageEvent} event 
 */
// global.LivingDamageEvent = event => {
    // const { source, entity, amount } = event

    // if (entity.isPlayer()) {
    //     console.log(`damage`, amount);
    // }
// }

EntityEvents.hurt(event => {
    const { entity, source } = event

    if (entity.isMonster()) {
        const damageType = typeof source.type === 'function' ? source.type() : source.type
        const msgId = typeof damageType.msgId === 'function' ? damageType.msgId() : damageType.msgId

        if ('cactus' === msgId) {
            event.cancel()
        }
    }

})

