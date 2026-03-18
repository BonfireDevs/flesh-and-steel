// ItemEvents.toolTierRegistry(event => {
//     event.add('lucky_gem', tier => {
//         tier.uses = 250
//         tier.speed = 6.0
//         tier.attackDamageBonus = 2.0
//         tier.level = 2
//         tier.enchantmentValue = 14
//         tier.repairIngredient = 'shadowlands:ghostmetal_ingot'
//     })
// })


// StartupEvents.registry('champions:affix', event => {
//     event.create('').settings(s => {
//         s.setEnable(true)
//         s.setPrefix('')
//         s.setCategory('defense')
//     }).behavior(b => {
//         b.onHurt(e => {
//             e.livingEntity.
//         })
//     })
// })

// BlockEvents.modification(event => {
//     event.modify('waystones:sandy_waystone', block => {
//     })
// })

ItemEvents.modification(event => {
    event.modify('minecraft:potion', item => {
        item.maxStackSize = 16
    })
    event.modify('minecraft:mushroom_stew', item => {
        item.maxStackSize = 16
    })
    event.modify('born_in_chaos_v1:supreme_measure', item => {
        item.setAttackDamage(8)
    })
    // event.modify('rats:ratlantis_chestplate', item => {
    //     item.setArmorProtection(50)
    // })
})

StartupEvents.registry('item', (event) => {
    event.create('lucky_gem_pickaxe', 'pickaxe')
        .tier('netherite')
        .rarity('epic')
        .maxDamage(100)
        .tooltip(Text.translate('tooltip.kubejs.lucky_gem_pickaxe').gray())
        .glow(true)
        .fireResistant()
        .texture('kubejs:item/lucky_gem_pickaxe')

    event.create('lucky_gem_pickaxe_imitation', 'pickaxe')
        .tier('diamond')
        .rarity('uncommon')
        .maxDamage(100)
        .tooltip(Text.translate('tooltip.kubejs.lucky_gem_pickaxe_imitation').gray())
        .texture('kubejs:item/lucky_gem_pickaxe')

    event.create('bad_apple').food(food => {
        food.alwaysEdible()
        food.hunger(0)
        food.saturation(0)
    })
        .rarity('uncommon')
        .tooltip(Text.translate('tooltip.kubejs.bad_apple').gray())
        .maxStackSize(16)
        .glow(true)

    event.create('challenge_badge')
        .rarity('rare')
        .tooltip(Text.translate('tooltip.kubejs.challenge_badge').gray())
        .glow(true)
        .fireResistant()
        .texture('kubejs:item/badge')

})
