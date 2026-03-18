EntityEvents.spawned((event) => {
  const { entity } = event

  if (
    ['born_in_chaos_v1:maggot'].indexOf(entity.type) !== -1) {
    event.cancel()
  }

  if (
    ['fuze_relics:crocodile'].indexOf(entity.type) !== -1 &&
    entity.nbt['forge:spawn_type'] == 'NATURAL'
  ) {
    event.cancel()
  }
  
})
