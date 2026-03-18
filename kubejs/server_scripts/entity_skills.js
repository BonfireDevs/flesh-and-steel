ServerEvents.tick(event => {
    const { server } = event
    
    if (server.tickCount % 2 === 0) {
        for (let entity of server.getEntities()) {
            if (entity.persistentData.getInt('mob_skill_break') > 0) {
                entity.persistentData.putInt('mob_skill_break', entity.persistentData.getInt('mob_skill_break') - 1)

                // const dx = player.x - entity.x
                // const dy = (player.y + player.eyeHeight) - entity.y
                // const dz = player.z - entity.z
                // const distance = Math.sqrt(dx*dx + dy*dy + dz*dz)

                // if (distance > 20) {
                //     entity.teleportTo(player.level.dimension, player.x, player.y, player.z, 1, 1)
                // } else {
                //     const speed = 0.5 + distance * 0.05
                //     entity.setMotion(
                //         dx/distance * speed,
                //         dy/distance * speed * 0.2,
                //         dz/distance * speed
                //     )
                // }
                
                server.runCommandSilent(`execute in ${entity.level.dimension} run fill ${Math.round(entity.x - 1)} ${Math.round(entity.y)} ${Math.round(entity.z - 1)} ${Math.round(entity.x + 1)} ${Math.round(entity.y + 1)} ${Math.round(entity.z + 1)} air destroy`)
            }
        }
    }
    
})