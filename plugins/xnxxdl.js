const cheerio = require("cheerio");

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .xnxxdl https://www.xnxx.com/xxxx', m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let hasil = await xnxxdownload(text)
  conn.sendFile(m.chat, hasil.files.high, 'xnxx.mp4', 'Done', m)
}
handler.help = ['xnxxdl'].map(v => v + ' *<url>*')
handler.tags = ['downloader'];
handler.command = /^(xnxxdl)$/i;
handler.limit = true;
handler.group = false;

module.exports = handler;

async function xnxxdownload(t) {
    return new Promise((n, e) => {
      fetch(`${t}`, {
        method: "get",
      })
        .then((t) => t.text())
        .then((e) => {
          let r = cheerio.load(e, {
            xmlMode: !1,
          });
          const o = r('meta[property="og:title"]').attr("content"),
            a = r('meta[property="og:duration"]').attr("content"),
            i = r('meta[property="og:image"]').attr("content"),
            s = r('meta[property="og:video:type"]').attr("content"),
            c = r('meta[property="og:video:width"]').attr("content"),
            u = r('meta[property="og:video:height"]').attr("content"),
            f = r("span.metadata").text().trim(),
            l = r("#video-player-bg > script:nth-child(6)").html(),
            m = {
              low: (l.match("html5player.setVideoUrlLow\\('(.*?)'\\);") ||
                [])[1],
              high: l.match("html5player.setVideoUrlHigh\\('(.*?)'\\);")[1],
              HLS: l.match("html5player.setVideoHLS\\('(.*?)'\\);")[1],
              thumb: l.match("html5player.setThumbUrl\\('(.*?)'\\);")[1],
              thumb69: l.match("html5player.setThumbUrl169\\('(.*?)'\\);")[1],
              thumbSlide: l.match("html5player.setThumbSlide\\('(.*?)'\\);")[1],
              thumbSlideBig: l.match(
                "html5player.setThumbSlideBig\\('(.*?)'\\);",
              )[1],
            };
          n({
            status: !0,
            title: o,
            URL: t,
            duration: a,
            image: i,
            videoType: s,
            videoWidth: c,
            videoHeight: u,
            info: f,
            files: m,
          });
        })
        .catch((t) =>
          e({
            status: !1,
            result: t,
          }),
        );
    });
  }