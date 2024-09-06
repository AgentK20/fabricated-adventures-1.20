ServerEvents.recipes(event => {
    event.remove({ id: "botania:flighttiara_0"})
    event.shaped(
        Item.of("botania:flight_tiara", 1),
        [
          'ABA',
          'CAC',
          'DED'
        ],
        {
            A: "botania:life_essence",
            B: "kubejs:flight_material_2",
            C: "botania:elementium_ingot",
            D: "minecraft:feather",
            E: "botania:ender_air_bottle"
        }
      )
})