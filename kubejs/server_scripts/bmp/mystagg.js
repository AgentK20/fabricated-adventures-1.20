ServerEvents.recipes(event => {
  const id_prefix = 'kubejs:uncraft/growth_accelerator/'

  // Define a list of all known growth accelerator variants
  const growthAccelerators = [
    'mysticalagriculture:basic_growth_accelerator',
    'mysticalagriculture:inferium_growth_accelerator',
    'mysticalagriculture:prudentium_growth_accelerator',
    'mysticalagriculture:tertium_growth_accelerator',
    'mysticalagriculture:imperium_growth_accelerator',
    'mysticalagriculture:supremium_growth_accelerator'
  ]

  // Create one shapeless recipe per combination of 3 of any variant
  for (const block of growthAccelerators) {
    event.shapeless(
      Item.of('mysticalagriculture:prosperity_gemstone'),
      [block, block, block]
    ).id(`${id_prefix}${block.split(':')[1]}`)
  }
})
