// priority: 9

/**
 * bosses
 * @link server_scripts/entity_events.js
 */
global.BOSS_AND_ELIT = [
    'minecraft:ender_dragon',
    'minecraft:warden',
    'minecraft:wither',
    'yakurum:water_shooter',
    'yakurum:water_master',
    'yakurum:biped_guardian',
    'yakurum:kraken',
    'yakurum:king_triton',
    'yakurum:poseidon',
    'fuze_relics:burger_boss',
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
    'twilightforest:naga',
    'twilightforest:lich',
    'twilightforest:minoshroom',
    'twilightforest:hydra',
    'twilightforest:knight_phantom',
    'twilightforest:ur_ghast',
    'twilightforest:alpha_yeti',
    'twilightforest:snow_queen',
    'better_minoshroomtaur:better_minoshroomtaur',
    'legendary_monsters:dune_sentinel',
    'legendary_monsters:posessed_paladin',
    'legendary_monsters:ancient_guardian',
    'legendary_monsters:frostbitten_golem',
    'legendary_monsters:withered_abomination',
    'legendary_monsters:skeletosaurus',
    'legendary_monsters:warped_fungussus',
    'legendary_monsters:endersent',
    'legendary_monsters:shulker_mimic',
    'legendary_monsters:overgrown_colossus',
    'legendary_monsters:lava_eater',
    'legendary_monsters:cloud_golem',
    'torchesbecomesunlight:patriot',
    'torchesbecomesunlight:gun_knight_patriot',
    'torchesbecomesunlight:frost_nova',
    'torchesbecomesunlight:pursuer',
    'born_in_chaos_v1:lord_pumpkinhead',
    'born_in_chaos_v1:lord_pumpkinhead_withouta_horse',
    'born_in_chaos_v1:lord_the_headless',
    'born_in_chaos_v1:lord_pumpkinhead_head',
    'rats:rat_king',
    'rats:black_death',
    'rats:dutchrat',
    'rats:rat_baron',
    'rats:neo_ratlantean',
    'rats:ratlantean_automaton',
    'cataclysm:netherite_monstrosity',
    'cataclysm:ender_guardian',
    'cataclysm:ignis',
    'cataclysm:the_harbinger',
    'cataclysm:the_leviathan',
    'cataclysm:ancient_remnan',
    'cataclysm:maledictus',
    'cataclysm:scylla',
    'cataclysm:ender_golem',
    'cataclysm:ignited_revenant',
    'cataclysm:coral_golem',
    'cataclysm:amethyst_crab',
    'cataclysm:the_prowler',
    'cataclysm:coralssus',
    'cataclysm:kobolediator',
    'cataclysm:wadjet',
    'cataclysm:aptrgangr',
    'cataclysm:hippocamtus',
    'cataclysm:cindaria',
    'cataclysm:clawdian'
]

/**
 * Dimension difficulty add delay
 * Lower values result in faster increases
 * 
 * @link server_scripts/difficulty_control.js
 */
global.DIM_DIFFICULTY_ADD_DELAY = {
    'minecraft:overworld': 2880,
    'super_block_world:mushroom_kingdom': 2880,
    'minecraft:the_nether': 2880,
    'minecraft:the_end': 2880,
    'shadowlands:shadow_forest': 2880,
    'shadowlands:glowshroom_forest': 2880,
    'shadowlands:vellium': 2880,
    'shadowlands:blood_forest': 2880,
    'rats:ratlantis': 2880,
    'twilightforest:twilight_forest': 2880,
    'voidscape:void': 2880
}

/**
 * Dimension lucky shield level
 * @script server_scripts/entity_attributes.js
 */
global.DIM_LUCKY_SHIELD_LEVEL = {
    'minecraft:the_nether': 1,
    'minecraft:the_end': 2,
    'shadowlands:shadow_forest': 4,
    'shadowlands:glowshroom_forest': 8,
    'shadowlands:vellium': 16,
    'shadowlands:blood_forest': 32,
    'rats:ratlantis': 64,
    'twilightforest:twilight_forest': 64,
    'voidscape:void': 100
}

/**
 * Dimension difficulty limit
 * Need to be greater than the corresponding value to enter.
 * @script startup_scripts/dimensions.js
 */
global.DIM_DIFFICULTY_LIMIT = {
    'super_block_world:mushroom_kingdom': 10,
    'minecraft:the_nether': 20,
    'minecraft:the_end': 30,
    'shadowlands:shadow_forest': 50,
    'shadowlands:glowshroom_forest': 60,
    'shadowlands:vellium': 70,
    'shadowlands:blood_forest': 80,
    'rats:ratlantis': 100,
    'twilightforest:twilight_forest': 120,
    'voidscape:void': 150
}

/**
 * Dimension difficulty add limit
 * @link server_scripts/difficulty_control.js
 */
global.DIM_DIFFICULTY_ADD_LIMIT = {
    'minecraft:overworld': 20,
    'super_block_world:mushroom_kingdom': 20,
    'minecraft:the_nether': 30,
    'minecraft:the_end': 50,
    'shadowlands:shadow_forest': 70,
    'shadowlands:glowshroom_forest': 80,
    'shadowlands:vellium': 80,
    'shadowlands:blood_forest': 100,
    'rats:ratlantis': 120,
    'twilightforest:twilight_forest': 150,
    'voidscape:void': 250
}

/**
 * Natural difficulty add limit
 * @link server_scripts/difficulty_control.js
 */
global.NATURAL_DIFFICULTY_ADD_LIMIT = 250

/**
 * global damage limit
 * @script server_scripts/entity_events.js
 */
global.GLOBAL_DAMAGE_LIMIT = {
    percentage: 1,
    limit: 1000,
    luckyShieldTime: 30
}

/**
 * If the difficulty value more then the key, the difficulty value will decrease by value
 * @script server_scripts/difficulty_control.js
 */
global.AUTO_DIFFICULTY_REDUCE = {
    '5000': 64,
    '1000': 32,
    '500': 16,
    '250': 8,
    '100': 4,
    '50': 2,
    '10': 1,
    '0.5': 0.5
}

/**
 * If the difficulty value is less than the key, the difficulty value will increase by value
 * @script server_scripts/item_events.js
 */
global.BAD_APPLE_DIFFICULTY_ADD = {
    '9999': 128,
    '5000': 64,
    '1000': 32,
    '500': 16,
    '250': 8,
    '100': 4,
    '50': 2,
    '10': 1
}

/**
* @param {Internal.Player} player 
*/
global.getPlayerDifficulty = player => {
    return (
        player.nbt.ForgeCaps["improvedmobs:player_cap"]?.IMDifficulty ||
        player.nbt.ForgeCaps["improvedmobs:player_cap"]?.Difficulty ||
        0
    )
}

/**
* @param {Internal.Player} player 
*/
global.getPlayerCurios = player => {
    // JsonIO.toObject(NBT.toJson(player.nbt)).ForgeCaps
    const curios = player.nbt.ForgeCaps['curios:inventory']?.Curios || []
    return curios
}

/**
* @param {Internal.MinecraftServer} server 
*/
global.getCompass = (server, playerName, displayName, dimension, x, y, z) => {
    server.runCommandSilent(
        `give ${playerName} minecraft:compass{display:{Name:'"${displayName}"'}, LodestonePos:{X:${x},Y:${y},Z:${z}}, LodestoneDimension:"${dimension}", LodestoneTracked:0b}`
    )
}

/**
* @param {Internal.MinecraftServer} server 
*/
global.getPathfinders = (server, playerName, biome, underground) => {
    server.runCommandSilent(
        `give ${playerName} quark:pathfinders_quill{targetBiome:"${biome}",targetBiomeColor:8381695,targetBiomeUnderground:${underground ? 1 : 0}b}`
    )
}

/**
* @param {Internal.Entity} entity 
*/
global.getDamageVariance = (entity) => {
    let damageTypeList = entity.persistentData.getCompound('mob_skill_damage_type')
    if (damageTypeList && damageTypeList.size() > 4) {
        let totalTypeDamage = 0
        damageTypeList.getAllKeys().forEach(type => {
            totalTypeDamage += damageTypeList.getInt(type)
        })
        let damageAdv = totalTypeDamage / damageTypeList.size()
        let m = 0
        damageTypeList.getAllKeys().forEach(type => {
            m += Math.pow(damageTypeList.getInt(type) - damageAdv, 2)
        })
        let k = Math.sqrt(m / damageTypeList.size())

        return k
    }

    return -1
}
