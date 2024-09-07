ServerEvents.recipes(event => {
    const removals = [
        { output: "blahaj:blue_shark" },
        { output: "blahaj:gray_shark" },
        { output: "blahaj:bread" },
        { output: "#a_man_with_plushies:plushie"},
        { output: "things:displacement_tome"},
        { output: "things:displacement_page"},
        // No, you cannot just magically create enchanted apples???
        { id: "zenith:enchanted_golden_apple"},
        // Also, you can't even craft golden apples! Muahahaha
        { id: "minecraft:golden_apple"},
        { id: "tconstruct:smeltery/casting/metal/gold/apple"},
        // Remove charm of flying
        { id: "zenith:potion_charm_flying"},
        { id: "zenith:potion_charm_long_flying"},
        { id: "zenith:potion_charm_extra_long_flying"},
        // Remove ae2 quantum bridge card
        { output: "ae2wtlib:quantum_bridge_card"},
        // Eureka items are spawned only
        { output: /vs_eureka\:*/},
    ];
    removals.forEach(element => {
        event.remove(element)
    });
});