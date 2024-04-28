let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} anime`, m)
    await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    let api = await alya.bingimage(text)
    if (api.status) {
    await conn.sendFile(m.chat, api.data[0].url, '', '*Powered by :* _https://api.alyachan.dev_', m)
    for (let i of api.data) {
    conn.sendFile(m.chat, i.url, '', '', m)
    }
    } else {
    conn.reply(m.chat, `Error: ${api.msg}`, m)
    }
};
handler.help = ["create *<text>*"]
handler.tags = ["diffusion","ai"]
handler.command = ["create"]
handler.premium = false

module.exports = handler