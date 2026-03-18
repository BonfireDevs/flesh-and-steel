EntityEvents.death((event) => {
    const { entity, server, player } = event

    if (entity.isPlayer()) {
        let difficulty = global.getPlayerDifficulty(entity)

        let config = Object.keys(global.AUTO_DIFFICULTY_REDUCE).sort((a, b) => parseFloat(b) - parseFloat(a))
        for (let key of config) {
            if (difficulty > parseFloat(key)) {
                server.runCommandSilent(
                    `improvedmobs difficulty player @p[name='${player.getName().getString()}'] add -${global.AUTO_DIFFICULTY_REDUCE[key]}`
                )
                player.tell(Text.translate('message.kubejs.difficulty.reduce', [global.AUTO_DIFFICULTY_REDUCE[key]]).red())
                break
            }
        }
    }
})

PlayerEvents.tick(event => {
    const { server, player, level } = event
    let difficulty = global.getPlayerDifficulty(player)
    let dimLimit = global.DIM_DIFFICULTY_ADD_LIMIT[level.dimension] || Infinity

    if (difficulty < global.NATURAL_DIFFICULTY_ADD_LIMIT && difficulty < dimLimit) {
        if (player.age % global.DIM_DIFFICULTY_ADD_DELAY[level.dimension] === 0) {
            server.runCommandSilent(`improvedmobs difficulty player @p[name='${player.getName().getString()}'] add 0.1`)
        }
    }
    
})

// PlayerEvents.advancement(event => {
//     const { server, player, advancement } = event
    
//     console.log(advancement.displayText);
    
// })