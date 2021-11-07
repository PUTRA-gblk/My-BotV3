let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • INDOSAT [085854721440]
│ • DANA [085854721440]
│ • TELKOMSEL [082334109988]
│ • Saweria https://saweria.co/PutraGanzz
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
