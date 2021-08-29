events.listen('ui.main_menu', event => {
    event.replace(ui => {
      ui.background('kubejsui:textures/example_background.png')
      ui.minecraftLogo(30)
      
      ui.button(b => {
        b.name = 'Singleplayer'
        b.width = 152
        b.height = 10
        b.x = (ui.width / 2) - (b.width / 2)
        b.y = ((ui.height / 2)-25)
        b.action = 'minecraft:singleplayer'
      })
      
      ui.button(b => {
        b.name = 'Multiplayer'
        b.width = 152
        b.height = 10
        b.x = (ui.width / 2) - (b.width / 2)
        b.y = ((ui.height / 2)-25) + 11
        b.action = 'minecraft:multiplayer'
      })
      
      ui.button(b => {
        b.name = 'Options'
        b.width = 75
        b.height = 10
        b.x = (ui.width / 2) - (b.width)
        b.y = ((ui.height / 2)-25) + 22
        b.action = 'minecraft:options'
      })
      
      ui.button(b => {
        b.name = 'Quit Game'
        b.width = 75
        b.height = 10
        b.x = (ui.width / 2) + 2
        b.y = ((ui.height / 2)-25) + 22
        b.action = 'minecraft:quit'
      })

      ui.label(l => {
        l.name = text.yellow('Automate')
        l.x = 2
        l.y = ui.height - 12
        l.action = 'https://www.curseforge.com/minecraft/modpacks/automate/'
      })
    })
  })