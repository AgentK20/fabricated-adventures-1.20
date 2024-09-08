ServerEvents.recipes(event => {
    // Make Scanner more difficult to craft
    event.remove({ output: "scannable:scanner"})
    event.shaped(
        Item.of("scannable:scanner", 1),
        [
          'ABA',
          'CDC',
          'AEA'
        ],
        {
          A: "ae2:cell_component_16k",
          B: "endrem:nether_eye",
          C: "#minecraft:diamond_ores",
          D: "ae2:calculation_processor",
          E: "indrev:battery"
        }
      )
    // Scanner base module
    event.remove({ output: "scannable:blank_module"})
    event.shaped(
      Item.of("scannable:blank_module", 1),
      [
        'AAA',
        'CBC',
        'CDC'
      ],
      {
        A: "minecraft:green_dye",
        B: "minecraft:glowstone",
        C: "ae2:charged_certus_quartz_crystal",
        D: "mythicmetals:stormyx_ingot"
      }
    )
});