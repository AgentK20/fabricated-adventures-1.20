ServerEvents.recipes(event => {
    event.shaped(
        Item.of("kubejs:token_exploration_1", 1),
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: "cratedelight:golden_apple_crate",
          B: "minecraft:glowstone",
        }
      )
})