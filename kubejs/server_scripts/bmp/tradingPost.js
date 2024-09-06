ServerEvents.recipes(event => {
    // Traing post recipe
    event.remove({ id: "tradingpost:trading_post"})
    event.shaped(
      Item.of("tradingpost:trading_post", 1),
      [
        'DAD',
        'BBB',
        'C C'
      ],
      {
        A: "minecraft:emerald_block",
        B: "#minecraft:planks",
        C: "#c:wood_sticks",
        D: "minecraft:diamond"
      }
    )
});