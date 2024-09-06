const end_paths = [
    'betterend:end_mycelium_path',
    'betterend:end_moss_path',
    'betterend:chorus_nylium_path',
    'betterend:cave_moss_path',
    'betterend:crystal_moss_path',
    'betterend:shadow_grass_path',
    'betterend:pink_moss_path',
    'betterend:amber_moss_path',
    'betterend:jungle_moss_path',
    'betterend:sangnum_path',
    'betterend:rutiscus_path'
]
const rechiseled_paths = [
    'rechiseled:stone_path',
    'rechiseled:stone_path_connecting'
]
const village_paths = [
    "minecraft:cobblestone",
    "minecraft:mossy_cobblestone"
]

ServerEvents.tags('block', event => {
    end_paths.forEach(element => {
        event.add('bmp:endpaths', element)
        event.add("blockrunner:slightly_quick_blocks", element)
    })
    rechiseled_paths.forEach(element => {
        event.add('bmp:goodpaths', element)
        event.add("blockrunner:quick_blocks", element)
    })
    village_paths.forEach(element => {
        event.add('bmp:goodpaths', element)
        event.add("blockrunner:quick_blocks", element)
    })
  })