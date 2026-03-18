const $MobEffectEvent = Java.loadClass('net.minecraftforge.event.entity.living.MobEffectEvent')
const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
const $Result = Java.loadClass('net.minecraftforge.eventbus.api.Event$Result')

ForgeEvents.onEvent($MobEffectEvent, event => {
    const { entity, effectInstance } = event
    if (effectInstance) {
        const effectId = $ForgeRegistries.MOB_EFFECTS.getKey(effectInstance.getEffect())
        if ('kubejs:lucky_shield' == effectId && (entity.isPlayer() || 'touhou_little_maid:maid' == entity.type)) {
            event.setResult($Result.DENY)
        } else if ('yakurum:death' == effectId && global.BOSS_AND_ELIT.indexOf(entity.type)) {
            event.setResult($Result.DENY)
        }
    }
})