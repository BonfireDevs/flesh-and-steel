/**
 * Recipes config
 */
ServerEvents.recipes((event) => {
    const removeRecipes = [
        // 'lucky:lucky_block',
        // 'lucky:elewind_lucky_block',
        // 'lucky:elergy_lucky_block',
        // 'lucky:eleice_lucky_block',
        // 'lucky:elefire_lucky_block',
        // 'lucky:desert_lucky_block',
        // 'lucky:amongus_lucky_block',
        // 'lucky:summer_lucky_block',
        // 'lucky:fire_lucky_block',
        // 'lucky:morbius_lucky_block',
        // 'lucky:pink_lucky_block',
        'lucky:tacz_lucky_block',
        // 'lucky:soul_lucky_block',
        // 'lucky:magical_lucky_block',
        // 'lucky:shadow_lucky_block',
        // 'lucky:blood_lucky_block',
        // 'lucky:cloud_lucky_block',
        // 'lucky:glow_lucky_block',
        // 'lucky:twilight_lucky_block',
        // 'lucky:void_lucky_block',
        'fuze_relics:pulsion_chestplate',
        'fuze_relics:nether_portal_gun',
        'yakurum:angel_wings',
        'apotheosis:library',
        'lucky:strange_carrot_sword'
    ]

    removeRecipes.forEach(r => event.remove({output: r}))

    event.shaped('shadowlands:copper_coin', [
        'SBS',
        'BCB',
        'SBS'
    ], {
        C: 'minecraft:emerald',
        B: 'super_block_world:bronze_ingot',
        S: '#super_block_world:star_bits'
    })

    // event.remove({ id: 'cataclysm:smithing/ignitium_helmet' });

    // event.smithing(
    //     'cataclysm:ignitium_helmet',
    //     'cataclysm:ignitium_upgrade_smithing_template',
    //     'born_in_chaos_v1:dark_metal_armor_helmet',
    //     'cataclysm:ignitium_ingot'
    // );

    event.shaped('kubejs:lucky_gem_pickaxe_imitation', [
        'IGI',
        ' M ',
        ' G '
    ], {
        M: 'shadowlands:enhanced_shadowmetal',
        G: 'shadowlands:neon_gem',
        I: 'shadowlands:ghostmetal_ingot'
    })

    event.shaped('shadowlands:cloud_helmet', [
        'MMM',
        'M M'
    ], {
        M: 'shadowlands:solid_cloud'
    })

    event.shaped('shadowlands:cloud_chestplate', [
        'M M',
        'MMM',
        'MMM'
    ], {
        M: 'shadowlands:solid_cloud'
    })

    event.shaped('shadowlands:cloud_leggings', [
        'MMM',
        'M M',
        'M M'
    ], {
        M: 'shadowlands:solid_cloud'
    })

    event.shaped('shadowlands:cloud_boots', [
        'M M',
        'M M'
    ], {
        M: 'shadowlands:solid_cloud'
    })

    event.shaped('shadowlands:enhanced_shadowmetal_helmet', [
        'MMM',
        'M M'
    ], {
        M: 'shadowlands:enhanced_shadowmetal'
    })

    event.shaped('shadowlands:enhanced_shadowmetal_chestplate', [
        'M M',
        'MMM',
        'MMM'
    ], {
        M: 'shadowlands:enhanced_shadowmetal'
    })

    event.shaped('shadowlands:enhanced_shadowmetal_leggings', [
        'MMM',
        'M M',
        'M M'
    ], {
        M: 'shadowlands:enhanced_shadowmetal'
    })

    event.shaped('shadowlands:enhanced_shadowmetal_boots', [
        'M M',
        'M M'
    ], {
        M: 'shadowlands:enhanced_shadowmetal'
    })

    event.shaped('esotericreforging:esoteric_reforging_table', [
        ' S ',
        'ATA',
        'BBB'
    ], {
        S: 'apotheotic_additions:esoteric_material',
        A: 'apotheotic_additions:heirloom_material',
        B: 'shadowlands:deep_greenstone',
        T: 'ancientreforging:ancient_reforging_table'
    })

})
