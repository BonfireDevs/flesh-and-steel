const $LivingHurtEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingHurtEvent')
// const $LivingDamageEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingDamageEvent')

ForgeEvents.onEvent($LivingHurtEvent, event => {
    global.LivingHurtEvent(event)
})

// ForgeEvents.onEvent($LivingDamageEvent, event => {
//     global.LivingDamageEvent(event)
// })
