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

  event.remove({output: 'immersiveengineering:cloche'})
  event.shaped('1x immersiveengineering:cloche', [
    'GVG',
    'GAG',
    'TST'
  ], {S: 'immersiveengineering:component_steel', T: '#forge:treated_wood', G: 'engineersdecor:panzerglass_block', A: 'mysticalagriculture:inferium_growth_accelerator', V: 'immersiveengineering:electron_tube'})

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
