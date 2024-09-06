ServerEvents.recipes(event => {
    // Engine costs flight material
    event.remove({ output: "immersive_aircraft:engine"})
    event.shaped(
        Item.of("immersive_aircraft:engine", 1),
        [
          'EAE',
          'BCB',
          'ADA'
        ],
        {
          A: "minecraft:iron_block",
          B: "minecraft:piston",
          C: "minecraft:blast_furnace",
          D: "immersive_aircraft:boiler",
          E: "kubejs:flight_material_1"
        }
      )
})