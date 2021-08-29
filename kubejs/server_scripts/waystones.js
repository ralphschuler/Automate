// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

  //event.remove({output: 'waystones:waystone'})
  //event.remove({output: 'waystones:mossy_waystone'})
  //event.remove({output: 'waystones:sandy_waystone'})
  //event.remove({output: 'waystones:sharestone'})

  event.remove({output: 'waystones:warp_plate'})
  event.shaped('1x waystones:warp_plate', [
    'SDS',
    'DND',
    'SDS'
  ], {S: 'minecraft:stone_bricks', D: 'waystones:warp_dust', N: 'minecraft:nether_star'})

  event.remove({output: 'waystones:warp_stone'})
  event.shaped('1x waystones:warp_stone', [
    'SDS',
    'DND',
    'SDS'
  ], {S: 'waystones:attuned_shard', D: 'minecraft:ender_pearl', N: 'minecraft:nether_star'})

  event.remove({output: 'waystones:warp_scroll'})
  event.shaped('3x waystones:warp_scroll', [
    'GDG',
    'GAG',
    'PPP'
  ], {D: 'minecraft:purple_dye', A: 'waystones:attuned_shard', G: 'minecraft:gold_ingot', P: 'minecraft:paper'})

  event.remove({output: 'waystones:return_scroll'})
  event.shaped('3x waystones:return_scroll', [
    ' D ',
    'GAG',
    'PPP'
  ], {D: 'minecraft:purple_dye', A: 'waystones:attuned_shard', G: 'minecraft:gold_ingot', P: 'minecraft:paper'})

  event.remove({output: 'waystones:bound_scroll'})
  event.shaped('3x waystones:bound_scroll', [
    'DAD',
    'GAG',
    'PPP'
  ], {D: 'minecraft:purple_dye', A: 'waystones:attuned_shard', G: 'minecraft:gold_ingot', P: 'minecraft:paper'})

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
