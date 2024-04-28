const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} 1girl, solo, ponytail, blush.`, m)
  await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  let kemii = await m.reply(`_Process generate image : *${text}*_`)
  let hasil = await text2img(text)
  let salsa = await conn.sendMessage(m.chat, { text: `_Success generate image : *${text}*_`, edit: kemii })
  await conn.sendFile(m.chat, hasil, 'freefire.jpg', '*Powered by :* _https://api-inference.huggingface.co_', salsa)
}

handler.help = ['txt2img *<text>*'];
handler.command = /^txt2img$/i;
handler.tags = ['internet','ai'];
handler.register = true;
handler.premium = false;
handler.limit = true;

module.exports = handler;

async function text2img(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Yntec/Ninja-Diffusers",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  )
  const result = await response.blob();
  let arrayBuffer = await result.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer, 'base64')
  return buffer
}