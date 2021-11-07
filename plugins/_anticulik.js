let handler = m => m

handler.all = async function (m) {
    if (m.mtype === 'groupInviteMessage') {
        m.reply(`Cieee Mau Nyulik Gw -_-\nOuh Tidak Semudah Itu Awokawok\nIjin Dulu Ama Owner Ku!!!`)
        this.sendContact(m.chat, '6285854721440', 'PutraGanzz', m)
    }
}

module.exports = handler
