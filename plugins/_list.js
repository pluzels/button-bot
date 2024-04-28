var moment = require('moment-timezone')

let handler = async (m, {
    conn,
    usedPrefix,
    command,
    isOwner
}) => {
await conn.sendPresenceUpdate("composing", m.chat)
var sections = [
{
rows: [
{title: "Main Feature", rowId: `${usedPrefix}menu main`, description: "Displays menu Main ( List Menu )"},
{title: "Info Feature", rowId: `${usedPrefix}menu info`, description: "Displays menu Info ( List Menu )"},
{title: "Download Feature", rowId: `${usedPrefix}menu downloader`, description: "Displays menu Download ( List Menu )"},
{title: "Ai Feature", rowId: `${usedPrefix}menu ai`, description: "Displays menu Ai ( List Menu )"},
{title: "Diffusion Feature", rowId: `${usedPrefix}menu diffusion`, description: "Displays menu Diffusion ( List Menu )"},
{title: "Convert Feature", rowId: `${usedPrefix}menu convert`, description: "Displays menu Convert ( List Menu )"},
{title: "Premium Feature", rowId: `${usedPrefix}menu premium`, description: "Displays menu Premium ( List Menu )"},
{title: "Judi Feature", rowId: `${usedPrefix}menu judi`, description: "Displays menu Judi ( List Menu )"},
{title: "Bug Feature", rowId: `${usedPrefix}menu bug`, description: "Displays menu Bug ( List Menu )"},
{title: "Game Feature", rowId: `${usedPrefix}menu game`, description: "Displays menu Game ( List Menu )"},
{title: "Fun Feature", rowId: `${usedPrefix}menu fun`, description: "Displays menu Fun ( List Menu )"},
{title: "Music Feature", rowId: `${usedPrefix}menu music`, description: "Displays menu Music ( List Menu )"},
{title: "Groups Feature", rowId: `${usedPrefix}menu group`, description: "Displays Feature Groups ( List Menu )"},
{title: "Atlantic Feature", rowId: `${usedPrefix}menu atlantic`, description: "Displays menu Atlantic ( List Menu )"},
{title: "Smm Feature", rowId: `${usedPrefix}menu smm`, description: "Displays menu Smm ( List Menu )"},
{title: "Store Feature", rowId: `${usedPrefix}menu store`, description: "Displays menu Store ( List Menu )"},
{title: "Panel Feature", rowId: `${usedPrefix}menu panel`, description: "Displays menu Panel ( List Menu )"},
{title: "Ssh Feature", rowId: `${usedPrefix}menu ssh`, description: "Displays menu Ssh ( List Menu )"},
{title: "Jadibot Feature", rowId: `${usedPrefix}menu jadibot`, description: "Displays menu Jadibot ( List Menu )"},
{title: "Internet Feature", rowId: `${usedPrefix}menu internet`, description: "Displays menu Internet ( List Menu )"},
{title: "Hengker Feature", rowId: `${usedPrefix}menu hengker`, description: "Displays menu Hengker ( List Menu)"},
{title: "Islami Feature", rowId: `${usedPrefix}menu islami`, description: "Displays menu Islami ( List Menu )"},
{title: "Ephoto Feature", rowId: `${usedPrefix}menu ephoto`, description: "Displays menu Ephoto ( List Menu )"},
{title: "Textprome Feature", rowId: `${usedPrefix}menu textprome`, description: "Displays menu Textprome ( List Menu )"},
{title: "Owner Feature", rowId: `${usedPrefix}menu owner`, description: "Displays menu Owner ( List Menu )"},
{title: "Rpg Feature", rowId: `${usedPrefix}menu rpg`, description: "Displays menu Rpg ( List Menu )"},
{title: "Simulator Feature", rowId: `${usedPrefix}menu simulator`, description: "Displays menu Simulator ( List Menu )"},
{title: "Sticker Feature", rowId: `${usedPrefix}menu sticker`, description: "Displays menu Sticker ( List Menu )"},
{title: "Anonymous Feature", rowId: `${usedPrefix}menu anonymous`, description: "Displays menu Anonymous ( List Menu )"},
{title: "Tools Feature", rowId: `${usedPrefix}menu tools`, description: "Displays menu Tools ( List Menu )"},
{title: "Anime Feature", rowId: `${usedPrefix}menu anime`, description: "Displays menu Anime ( List Menu )"},
{title: "Search Feature", rowId: `${usedPrefix}menu search`, description: "Displays menu Search ( List Menu )"},
]
},
]
var listMessage = {
text: 'Select the list button below.',
footer: "Powered By _VALZYOFC_",
mentions: [m.sender],
buttonText: "Click Here!",
sections
}

await conn.sendMessage(m.chat, listMessage, {
    quoted: m
});
}
handler.premium = false
handler.command = /^(list)$/i
handler.register = true
handler.private = true
module.exports = handler 

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}