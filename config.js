const os = process
global.DeveloperMode = 'false' //true Or false
global.owner = ['6285854721440', '6285854721440'] || os.env["6285854721440"]// Put your number here
global.linkGC = ['https://chat.whatsapp.com/LL69TwtWnDGIsQhpfPEpfC:']
global.mods = ['6285854721440', '6285854721440'] // Want some help?
global.prems = ['6285854721440', '6287778954853'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  vhtear: 'https://vhtear.com',
  zeks: 'https://api.zeks.xyz',
  clph: 'https://recoders-area.caliph.repl.co'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'kurrxd09',
  'https://recoders-area.caliph.repl.co': 'FreeApi',
  'https://vhtear.com': 'AdiOfficial404',
  'https://api.zeks.xyz': 'PutraGanzz'
}

// Sticker WM
global.packname = 'Putra'
global.author = 'Nyolong "Yatim"'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
