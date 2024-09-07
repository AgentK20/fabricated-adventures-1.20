ServerEvents.recipes(event => {
    event.custom({
        type: "zenith:enchanting",
        input: {
          item: "minecraft:glowstone"
        },
        requirements: {
          eterna: 50,
          quanta: 8.5,
          arcana: 32.5
        },
        max_requirements: {
          eterna: 50,
          quanta: 13.5,
          arcana: 37.5
        },
        result: Item.of('kubejs:flight_material_1')
    });
});