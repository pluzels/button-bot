let handler = async (m, { conn, args, usedPrefix, command }) => {
  let text;
  if (args.length >= 1) {
    text = args.join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else return m.reply(Func.example(usedPrefix, command, "halo"));
  let kemii = await conn.reply(m.chat, '```Sedang mencari jawaban...🔍```', m)
  try {
    const date = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      }),
    );
    const hours = date.getHours();
    const name = await conn.getName(m.sender);
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    let chat = await Lbbai(
      m.text,
      `kamu Adalah 0x38/Kiku seorang gadis muda pendiam dan cantik, jawab setiap pertanyaan dengan jawaban yang edukatif, jika ada yang bertanya tentang waktu kamu jawab tandon yang berkaitan dengan ${timeNow} dan ${getTodayDate()}, lawan bicara mu adalah ${name} , kamu memiliki sifat dingin dan sedikit tsundere imut, pembuat mu adalah Kemii`,
    );
    let hasil = chat.answer;

    let formattedHasil = hasil.replace(/```/g, " ");
    await conn.sendMessage(m.chat, { text: `${formattedHasil}`, edit: kemii })
  } catch (e) {
    throw e;
  }
};

handler.command = /^ai$/i
handler.help = ['ai *<text>*']
handler.tags = ['tools','ai']
handler.register = false
handler.limit = true

module.exports = handler

function getTodayDate() {
  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1; // Perhatikan bahwa bulan dimulai dari 0, maka ditambahkan 1.
  const year = today.getFullYear();
  const dayOfWeek = today.toLocaleDateString("id-ID", { weekday: "long" }); // Mengambil nama hari dalam bahasa Inggris.

  return `Hari ini adalah ${dayOfWeek}, ${day}/${month}/${year}.`;
}

async function Lbbai(sistem, input) {
  const messages = [
    { role: "system", content: input },
    { role: "user", content: sistem },
  ];

  try {
    const response = await fetch(
      "https://deepenglish.com/wp-json/ai-chatbot/v1/chat",
      {
        method: "POST",
        headers: {
          Accept: "text/event-stream",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
      },
    );

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}