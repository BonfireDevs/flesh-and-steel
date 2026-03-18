const $PSInvasionMob = Java.loadClass('dev.theagameplayer.puresuffering.world.entity.PSInvasionMob')

EntityEvents.death((event) => {
  const { server, source, entity } = event

  if (entity.monster && source.actual && source.actual.isPlayer()) {
    const { player } = source
    let difficulty = global.getPlayerDifficulty(player)

    if (entity.nbt[$PSInvasionMob.HYPER_CHARGE] > 0) {
        entity.block.popItem(Item.of('shadowlands:copper_coin', entity.nbt[$PSInvasionMob.HYPER_CHARGE]));
    }

    if (global.BOSS_AND_ELIT.indexOf(entity.type) != -1) {
        let v = global.getDamageVariance(entity)
        if (v != -1) {
            let c = Math.sqrt(difficulty * 10) / (1 + 0.1 * v)
            if (c > 1) {
                entity.block.popItem(Item.of('shadowlands:silver_coin', c));
            }
        }
    }

    // .some(type => Internal.MobSpawnType.NATURAL.equals(type))
    // console.log(entity.nbt['forge:spawn_type'])
  }

})

ServerEvents.entityLootTables(event => {
  event.addEntity('fuze_relics:burger_boss', loot => {
    
    loot.addPool(pool => {
      pool.rolls = 1
      pool.addItem('farmersdelight:hamburger').count([3, 5])
    })

    loot.addPool(pool => {
      pool.rolls = 1
      pool.killedByPlayer()
      pool.addEmpty(10)
      pool.addItem('diamond').weight(10).count([2, 5])
      pool.addItem('shadowlands:silver_coin').weight(1).count([1, 5])
    })
  })

  // event.addEntity('torchesbecomesunlight:frost_nova', loot => {
  //   loot.addPool(pool => {
  //     pool.rolls = 1
  //     pool.killedByPlayer()
  //     pool.addItem('apotheotic_additions:artifact_material').weight(100)
  //     pool.addItem('apotheotic_additions:heirloom_material').weight(40)
  //     pool.addItem('apotheotic_additions:esoteric_material').weight(1)
  //   })
  // })

  // event.addEntity('torchesbecomesunlight:patriot', loot => {
  //   loot.addPool(pool => {
  //     pool.rolls = 1
  //     pool.killedByPlayer()
  //     pool.addItem('torchesbecomesunlight:halberd').weight(100)
  //   })

  //   loot.addPool(pool => {
  //     pool.rolls = 1
  //     pool.killedByPlayer()
  //     pool.addEmpty(100)
  //     pool.addItem('apotheotic_additions:artifact_material').weight(100).count([1, 2])
  //     pool.addItem('apotheotic_additions:heirloom_material').weight(40).count([1, 2])
  //     pool.addItem('apotheotic_additions:esoteric_material').weight(1)
  //   })
  // })

  // event.addEntity('torchesbecomesunlight:gun_knight_patriot', loot => {
  //   loot.addPool(pool => {
  //     pool.rolls = 1
  //     pool.killedByPlayer()
  //     pool.addEmpty(100)
  //     pool.addItem('apotheotic_additions:artifact_material').weight(100).count([2, 2])
  //     pool.addItem('apotheotic_additions:heirloom_material').weight(40).count([2, 2])
  //     pool.addItem('apotheotic_additions:esoteric_material').weight(1)
  //   })
  // })

  // event.addEntity('torchesbecomesunlight:pursuer', loot => {
  //   loot.addPool(pool => {
  //     pool.rolls = 1
  //     pool.killedByPlayer()
  //     pool.addItem('torchesbecomesunlight:ursus_machete')
  //   })

  //   loot.addPool(pool => {
  //     pool.rolls = 1
  //     pool.killedByPlayer()
  //     pool.addEmpty(100)
  //     pool.addItem('apotheotic_additions:artifact_material').weight(100).count([1, 2])
  //     pool.addItem('apotheotic_additions:heirloom_material').weight(40).count([1, 2])
  //     pool.addItem('apotheotic_additions:esoteric_material').weight(1)
  //   })
  // })

  event.addEntity('legendary_monsters:cloud_golem', loot => {
    loot.addPool(pool => {
      pool.rolls = 1
      pool.addItem('legendary_monsters:air_rune')
    })

    loot.addPool(pool => {
      pool.rolls = 1
      pool.addItem('legendary_monsters:atmospheric_boots')
    })

    loot.addPool(pool => {
      pool.rolls = 1
      pool.killedByPlayer()
      pool.addItem('apotheotic_additions:artifact_material').weight(100).count([2, 5])
      pool.addItem('apotheotic_additions:heirloom_material').weight(40).count([2, 5])
      pool.addItem('apotheotic_additions:esoteric_material').weight(1).count([1, 2])
    })
  })

//   event.modifyEntity('artifacts:mimic', loot => {
//     loot.addPool(pool => {
//       // pool.setUniformRolls(1, 3)
//       // pool.enchantRandomly('minecraft:smite')
//       // pool.lootingEnchant(2, 10)
//       // pool.killedByPlayer()
//       // pool.addEmpty(2)
//       // pool.randomChanceWithLooting(0.1, 0.2)
//       pool.entityProperties('killer', {
//         type: 'minecraft:player',
//         equipment: {
//           mainhand: {
//             items: [
//               'minecraft:diamond_sword'
//             ],
//             predicates: {
//               enchantments: {
//                 enchantments: ['minecraft:silk_touch']
//               }
//             }
//           }
//         }
//       })
//       pool.rolls = 3
//     })
//   })
})

ServerEvents.blockLootTables(event => {

  event.modify('shadowlands:cloud_dungeon_loot', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addEmpty(2)
      pool.addItem('lucky:cloud_lucky_block').count([1, 3]).weight(1)
    })
  })

  event.modify('shadowlands:cloud_tower_loot_block', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addEmpty(2)
      pool.addItem('lucky:cloud_lucky_block').count([1, 3]).weight(1)
    })
  })

  event.modify('shadowlands:underground_dungeon_loot_block', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addEmpty(2)
      pool.addItem('lucky:glow_lucky_block').count([1, 3]).weight(1)
    })
  })

  event.modify('shadowlands:underground_dungeon_loot_block_low_quality', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addEmpty(5)
      pool.addItem('lucky:glow_lucky_block').count([1, 3]).weight(1)
    })
  })

  event.modify('shadowlands:waterdungeon_loot_block', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addEmpty(5)
      pool.addItem('lucky:glow_lucky_block').count([1, 3]).weight(1)
    })
  })

})

ServerEvents.chestLootTables(event => {

  event.modify('legendary_monsters:abandoned_crypt_loot_table', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addEmpty(5)
      pool.addItem('minecraft:heart_of_the_sea').count([1, 3]).weight(1)
    })
  })

  event.modify('cataclysm:acropolis_treasure', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addEmpty(2)
      pool.addItem('lucky:water_lucky_block').count([1, 3]).weight(1)
    })
  })

  event.modify('minecraft:firewell_d', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addEmpty(5)
      pool.addItem('lucky:blood_lucky_block').count([1, 3]).weight(1)
    })
  })

  event.modify('legendary_monsters:cloudy_temple_loot_table', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addEmpty(5)
      pool.addItem('lucky:cloud_lucky_block').count([1, 3]).weight(1)
    })
  })

  event.modify('shadowlands:emperor_wither_loot', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addEmpty(5)
      pool.addItem('lucky:blood_lucky_block').count([3, 8]).weight(1)
    })
  })

  event.modify('legendary_monsters:ancient_stronghold_luxury_loot_table', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addEmpty(5)
      pool.addItem('lucky:shadow_lucky_block').count([1, 3]).weight(1)
    })
  })

  event.modify('legendary_monsters:ancient_stronghold_loot_table', loot => {
    loot.addPool(pool => {
      pool.rolls = 4
      pool.addEmpty(10)
      pool.addItem('lucky:shadow_lucky_block').weight(5)
    })
  })

  event.modify('minecraft:pillager_outpost', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addItem('minecraft:gunpowder').count([3, 6]).weight(20)
      pool.addItem('minecraft:emerald').weight(10)
      pool.addItem('minecraft:diamond').weight(5)
    })
  })

  event.modify('super_block_world:brick_fortress', loot => {
    loot.clearPools()
    loot.addPool(pool => {
      pool.rolls = 8
      pool.addItem('super_block_world:toadstone_bricks').weight(20)
      pool.addItem('super_block_world:yoshi_fruit').weight(16)
      pool.addItem('minecraft:diamond').weight(6)
      pool.addItem('lucky:lucky_block').weight(6)
      pool.addItem('super_block_world:yoshi_cookie').weight(5)
      pool.addItem('super_block_world:hammer').weight(2)
    })
  })
})