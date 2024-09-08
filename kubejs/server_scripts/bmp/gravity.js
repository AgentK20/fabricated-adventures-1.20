ServerEvents.recipes(event => {
    // Gravity requires diamond blocks
    event.remove({ output: "amethystgravity:plating" })
    event.remove({ output: "amethystgravity:field_generator" })
    event.remove({ output: "amethystgravity:planet_field_generator" })
    event.remove({ output: "amethystgravity:cylinder_field_generator" })
    event.shaped(
        Item.of("amethystgravity:plating", 1),
        [
          'BCB',
          'CAC',
          'BCB'
        ],
        {
          A: "minecraft:gold_ingot",
          B: "minecraft:amethyst_shard",
          C: "minecraft:ender_pearl",
        }
      )
    event.shaped(
        Item.of("amethystgravity:field_generator", 1),
        [
          ' A ',
          'DBD',
          'DCD'
        ],
        {
          A: "amethystgravity:plating",
          B: "minecraft:dispenser",
          C: "minecraft:diamond_block",
          D: "minecraft:ender_pearl"
        }
      )
    event.shaped(
        Item.of("amethystgravity:planet_field_generator", 1),
        [
          'CAC',
          'ABA',
          'CAC'
        ],
        {
          A: "amethystgravity:plating",
          B: "minecraft:dispenser",
          C: "minecraft:diamond_block"
        }
      )
    event.shaped(
        Item.of("amethystgravity:cylinder_field_generator", 1),
        [
          'CAC',
          ' B ',
          'CAC'
        ],
        {
          A: "amethystgravity:plating",
          B: "minecraft:dispenser",
          C: "minecraft:diamond_block"
        }
      )
});