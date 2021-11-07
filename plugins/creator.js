let handler = function (m) {
  // this.sendContact(m.chat, '6285854721440', 'PutraGanzz', m)
  this.sendContact(m.chat, '6285854721440', 'PutraGanzz', m)
  m.reply('Waitt...')
}
handler.help = ['owner', 'creator', 'pemilikbot']
handler.tags = ['info']

handler.command = /^(owner|creator|pemilikbot)$/i

module.exports = handler
