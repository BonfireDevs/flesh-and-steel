const $EntityTravelToDimensionEvent = Java.loadClass('net.minecraftforge.event.entity.EntityTravelToDimensionEvent');

ForgeEvents.onEvent($EntityTravelToDimensionEvent, event => {
    const resourceKey = event.dimension
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.entity
    if (player.isPlayer()) {
        let difficulty = global.getPlayerDifficulty(player)
        let difficultyLimit = global.DIM_DIFFICULTY_LIMIT[`${resourceKey.getNamespace()}:${resourceKey.getPath()}`] || 0

        if (difficulty < difficultyLimit) {
            player.setStatusMessage(Text.translate('message.kubejs.dimensions.limit.text', [`${difficultyLimit}`]).red())
            event.setCanceled(true)
        }
    }
});