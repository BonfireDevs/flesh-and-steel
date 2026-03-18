const $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

EntityEvents.spawned((event) => {
    const { entity, level } = event
    if (!entity || !entity.isLiving() || !entity.isMonster()) {
        return
    }

    if (global.DIM_LUCKY_SHIELD_LEVEL[level.dimension] > 0) {
        entity.addEffect(new $MobEffectInstance('kubejs:lucky_shield', -1, global.DIM_LUCKY_SHIELD_LEVEL[level.dimension] - 1, true, false))
    }
    
    if ('voidscape:void' === level.dimension) {
        entity.mergeNbt({
            Attributes: [
                { Base: 50, Name: 'voidscape:voidic_dmg'}
            ]
        })
    }

    if ('minecraft:ender_dragon' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                // { Base: 10, Name: 'attributeslib:life_steal' },
                { Base: 0.3, Name: 'attributeslib:current_hp_damage' },
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.8, Name: 'attributeslib:armor_shred' },
                { Base: 5, Name: 'attributeslib:prot_pierce' },
                { Base: 0.8, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'minecraft:generic.knockback_resistance' },
                // { Base: 1000, Name: 'minecraft:generic.max_health' } // 500
            ]
        })
    } else if ('yakurum:water_shooter' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 0.5, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 1500, Name: 'minecraft:generic.max_health' } // 150
            ]
        })
    } else if ('yakurum:water_master' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 0.5, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 1500, Name: 'minecraft:generic.max_health' } // 150
                
            ]
        })
    } else if ('minecraft:warden' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 1500, Name: 'minecraft:generic.max_health' } // 500
            ]
        })
    } else if ('minecraft:wither' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 1000, Name: 'minecraft:generic.max_health' } // 300
            ]
        })
    } else if ('yakurum:kraken' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 40, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 5000, Name: 'minecraft:generic.max_health' } // 500
            ]
        })
    } else if ('yakurum:king_triton' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 10, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.4, Name: 'attributeslib:current_hp_damage' },
                { Base: 2500, Name: 'minecraft:generic.max_health' } // 250
            ]
        })
    } else if ('yakurum:poseidon' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 40, Name: 'attributeslib:armor_pierce' },
                { Base: 0.4, Name: 'attributeslib:armor_shred' },
                { Base: 30, Name: 'attributeslib:prot_pierce' },
                { Base: 0.4, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.4, Name: 'attributeslib:current_hp_damage' },
                { Base: 7500, Name: 'minecraft:generic.max_health' } // 750
            ]
        })
    } else if ('shadowlands:wither_skeleton_commander' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 2500, Name: 'minecraft:generic.max_health' } // 500
            ]
        })
    } else if ('shadowlands:doom_star' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 5000, Name: 'minecraft:generic.max_health' } // 1000
            ]
        })
    } else if ('shadowlands:guardian_boar' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 5120, Name: 'minecraft:generic.max_health' } // 1024
            ]
        })
    } else if ('shadowlands:vellium_megabee' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 5120, Name: 'minecraft:generic.max_health' } // 1024
            ]
        })
    } else if ('shadowlands:sporeking' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 5120, Name: 'minecraft:generic.max_health' } // 1024
            ]
        })
    } else if ('shadowlands:plaguemaiden' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 5120, Name: 'minecraft:generic.max_health' } // 1024
            ]
        })
    } else if ('shadowlands:the_red_knight' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 5120, Name: 'minecraft:generic.max_health' } // 1024
            ]
        })
    } else if ('shadowlands:red_nightmare' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 5000, Name: 'minecraft:generic.max_health' } // 1000
            ]
        })
    } else if ('shadowlands:ascendant_star_stage_1' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 150, Name: 'minecraft:generic.max_health' } // 50
            ]
        })
    } else if ('shadowlands:ascendant_star_stage_2' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 1600, Name: 'minecraft:generic.max_health' } // 400
            ]
        })
    } else if ('shadowlands:ascendant_star_stage_3' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 2000, Name: 'minecraft:generic.max_health' } // 400
            ]
        })
    } else if ('shadowlands:ascendant_star_stage_4' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 5000, Name: 'minecraft:generic.max_health' } // 800
            ]
        })
    } else if ('shadowlands:ascendant_star_stage_5' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 10000, Name: 'minecraft:generic.max_health' } // 1000
            ]
        })
    } else if ('shadowlands:emperor_wither' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 20, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 2, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 10000, Name: 'minecraft:generic.max_health' } // 1000
            ]
        })
    } else if ('twilightforest:naga' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 1200, Name: 'minecraft:generic.max_health' } // 120
            ]
        })
    } else if ('twilightforest:lich' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 5000, Name: 'minecraft:generic.max_health' } // 500 
            ]
        })
    } else if ('twilightforest:hydra' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 5000, Name: 'minecraft:generic.max_health' } // 500
            ]
        })
    } else if ('twilightforest:knight_phantom' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 350, Name: 'minecraft:generic.max_health' } // 35
            ]
        })
    } else if ('twilightforest:minoshroom' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 1200, Name: 'minecraft:generic.max_health' } // 120
            ]
        })
    } else if ('twilightforest:ur_ghast' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 2500, Name: 'minecraft:generic.max_health' } // 250
            ]
        })
    } else if ('twilightforest:alpha_yeti' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 2000, Name: 'minecraft:generic.max_health' } // 200
            ]
        })
    } else if ('twilightforest:snow_queen' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:dune_sentinel' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 30, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:posessed_paladin' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 30, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:ancient_guardian' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 30, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:frostbitten_golem' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 30, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:withered_abomination' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 30, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:skeletosaurus' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 30, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:warped_fungussus' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 30, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:endersent' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 30, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:shulker_mimic' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 30, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:overgrown_colossus' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 30, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:lava_eater' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 30, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('legendary_monsters:cloud_golem' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 100, Name: 'attributeslib:armor_pierce' },
                { Base: 0.4, Name: 'attributeslib:armor_shred' },
                { Base: 5, Name: 'attributeslib:prot_pierce' },
                { Base: 0.4, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.3, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('better_minoshroomtaur:better_minoshroomtaur' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 25, Name: 'attributeslib:armor_pierce' },
                { Base: 0.2, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.2, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 2800, Name: 'minecraft:generic.max_health' } // 280
            ]
        })
    } else if ('born_in_chaos_v1:lord_pumpkinhead' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 15, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 3000, Name: 'minecraft:generic.max_health' } // 600
            ]
        })
    } else if ('born_in_chaos_v1:lord_pumpkinhead_withouta_horse' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 15, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 1000, Name: 'minecraft:generic.max_health' } // 200
            ]
        })
    } else if ('born_in_chaos_v1:lord_the_headless' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 15, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 1500, Name: 'minecraft:generic.max_health' } // 300
            ]
        })
    } else if ('born_in_chaos_v1:lord_pumpkinhead_head' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 15, Name: 'attributeslib:armor_pierce' },
                { Base: 0.1, Name: 'attributeslib:armor_shred' },
                { Base: 3, Name: 'attributeslib:prot_pierce' },
                { Base: 0.1, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 800, Name: 'minecraft:generic.max_health' } // 160
            ]
        })
    } else if ('rats:rat_king' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 100, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 2000, Name: 'minecraft:generic.max_health' } // 200
            ]
        })
    } else if ('rats:black_death' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 100, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 3000, Name: 'minecraft:generic.max_health' } // 300
            ]
        })
    } else if ('rats:dutchrat' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 100, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 3000, Name: 'minecraft:generic.max_health' } // 300
            ]
        })
    } else if ('rats:rat_baron' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 100, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 3000, Name: 'minecraft:generic.max_health' } // 300
            ]
        })
    } else if ('rats:neo_ratlantean' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 100, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.1, Name: 'attributeslib:current_hp_damage' },
                { Base: 3000, Name: 'minecraft:generic.max_health' } // 300
            ]
        })
    } else if ('rats:ratlantean_automaton' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 100, Name: 'attributeslib:armor_pierce' },
                { Base: 0.3, Name: 'attributeslib:armor_shred' },
                { Base: 4, Name: 'attributeslib:prot_pierce' },
                { Base: 0.3, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.2, Name: 'attributeslib:current_hp_damage' },
                { Base: 4000, Name: 'minecraft:generic.max_health' } // 400
            ]
        })
    } else if ('torchesbecomesunlight:frost_nova' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 200, Name: 'voidscape:voidic_dmg'},
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.5, Name: 'attributeslib:armor_shred' },
                { Base: 5, Name: 'attributeslib:prot_pierce' },
                { Base: 0.5, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.2, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('torchesbecomesunlight:patriot' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 200, Name: 'voidscape:voidic_dmg'},
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.5, Name: 'attributeslib:armor_shred' },
                { Base: 5, Name: 'attributeslib:prot_pierce' },
                { Base: 0.5, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.2, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('torchesbecomesunlight:gun_knight_patriot' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 200, Name: 'voidscape:voidic_dmg'},
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.5, Name: 'attributeslib:armor_shred' },
                { Base: 5, Name: 'attributeslib:prot_pierce' },
                { Base: 0.5, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.3, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    } else if ('torchesbecomesunlight:pursuer' == entity.type) {
        entity.mergeNbt({
            Attributes: [
                { Base: 200, Name: 'voidscape:voidic_dmg'},
                { Base: 50, Name: 'attributeslib:armor_pierce' },
                { Base: 0.6, Name: 'attributeslib:armor_shred' },
                { Base: 34, Name: 'attributeslib:prot_pierce' },
                { Base: 0.6, Name: 'attributeslib:prot_shred' },
                { Base: 1, Name: 'attributeslib:life_steal' },
                { Base: 0.4, Name: 'attributeslib:current_hp_damage' },
            ]
        })
    }
})
