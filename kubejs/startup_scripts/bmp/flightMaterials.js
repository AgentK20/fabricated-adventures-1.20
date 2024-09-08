StartupEvents.registry('item', event => {
    event.create('flight_material_1')
        .maxStackSize(1)
        .glow(true)
        .displayName('Gravity Nullifier')
        .rarity("rare")
    event.create('flight_material_2').maxStackSize(1).glow(true).displayName('Personal Gravity Nullifier').rarity("rare")
  })