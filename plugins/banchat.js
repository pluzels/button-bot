let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    conn.reply(m.chat, 'Baiklah', m)
  // } else m.reply('There is a host number here...')
}
handler.customPrefix = /^(banchat|.banchat|Zura Turu|.zuraturu)$/i
handler.command = new RegExp
handler.mods = true

module.exports = handler