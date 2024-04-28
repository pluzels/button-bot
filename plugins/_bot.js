let fetch = require('node-fetch')
let handler = async (m, {
    conn,
    command,
    isOwner
}) => {
if (!m.isGroup) {
let sections = [{
    title: 'about',
    rows: [{
        title: '.owner',
        rowId: ''
    },
    {
        title: 'Sewabot',
        rowId: `#sewabot`
    },
    {
        title: 'Hallo',
        rowId: 'Okke'
    }
    ]
}];

let listMessage = {
    text: 'dcodekemii',
    footer: 'Powered by : dcodekemii',
    buttonText: 'Pencet Disini!',
    sections
};

conn.sendMessage(m.chat, listMessage, {
    quoted: m
});
} else if (m.isGroup) {
m.reply('apah')
}
}
handler.customPrefix = /^(bot|bot?|bott)$/i
handler.command = new RegExp

module.exports = handler
