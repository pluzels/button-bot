let fs = require('fs')

let handler = async (m, { conn, text, participants }) => {

/*let a = text.split(',')[0]
let b = text.split(',')[1]
let c = text.split(',')[2]
let d = text.split(',')[3]
let cap = `[!] 𝗜𝗡𝗩𝗔𝗟𝗜𝗗

Example: /web teks1,teks2,teks3,teks4
Exampe: /web hai,apa kabar,ini aku,hehe

*NOTE*: _jangan lupa gunakan tanda koma untuk batas teks_
`
if (!a) return m.reply(cap)
if (!b) return m.reply(cap)
if (!c) return m.reply(cap)
if (!d) return m.reply(cap)
*/
const A = `<!DOCTYPE html>
<html>
<meta charset='UTF-8'/>
<meta content='width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5' name='viewport'/>
<meta content='IE=edge' http-equiv='X-UA-Compatible'/>

<link rel="icon" type="image/svg+xml" href="https://feeldreams.github.io/main-icon.png"> 
<link rel="apple-touch-icon" href="https://feeldreams.github.io/main-icon.png"><script src="https://punyasesuatu.htmlku.repl.co/script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.all.min.js"></script><script src="https://unpkg.com/typeit@8.7.0/dist/index.umd.js"></script>
<link rel="stylesheet" href="https://htmlku.com/panda/style.css"><script src="https://unpkg.com/scrollreveal"></script>

<head>
<title>Panda.. - Script HTML buat Kamu</title>
<meta name="description" content="Facebook lennaa.houkii - Script HTML by dcodekemii">
</head>
<body>
	
   <div class="overlay">
    <div class="loading-message">Hai kamu! 💐<br>Tunggu dulu ya..</div>
     <div id="loveIn" class="blocklove">
        <a href="https://www.feeldream.id/2023/01/script-feeldream.html?m=1#htmlku-katanya" target="_blank" class="lovein"><svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg></a>
        <p id="ket">Sentuh LOVEnya!</p>
     </div>
   </div>

   <audio src="https://feeldreams.github.io/audio/melody.mp3" id="linkmp3" class="sembunyi"></audio>
   
  <section class="first" id="inisection">
       <div class="wp"><img src="https://htmlku.com/katanya/1.jpg"/></div>
       <div id="first_stiker" class="stiker">
        <img id="inistiker1" src="https://feeldreams.github.io/bwa2.gif"/>
        <img id="inistiker2" class="sembunyi" src=""/>
       </div>
       
       <h1 id="teks1" class="scaleUp itim" style="font-size: 20px;">Panda, Panda Apa<br>yang Bikin Salting? 🫣<br><br> >>></h1>
       
       <div id="sentuh" class="menu">
        <a class='tombol' onclick="tes()">
          <svg id="svgheart" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>
        </a>
        <svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(5.000000, 8.500000)'><path d='M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0' ></path></g></svg>
       </div>
  </section>
  
  <section>
      <div class="wp"><img src="https://htmlku.com/katanya/2.jpg"/></div>
      <div class="stiker" style="margin-top:0;transform:scale(0)" id="stikersec2">
        <img src="https://feeldreams.github.io/weee.gif" id="inistiker3"/>
        <img class="sembunyi" src="https://feeldreams.github.io/pandapanah.gif" id="inistiker4"/>
      </div>
      
      <div id="scroll-container" class="blocktext txt transition scale0">
        <p id="textsec2" class="anm itim text-lg" style="font-size:18px">Pandangin foto kamu<br>tiap hari, jiaaakhhh~ 😆🤭💗</p>
        <p id="textsec3" class="anm itim text-lg" style="font-size:17px"><b class="putih merah">Wkwkwk 🤣</b></p>
        <p id="textsec3b" class="sembunyi"><b class='putih merah'>Boleh minta papnya ga nih? 😋</b></p>
        <div id="Tombol">
          <a id="By" onClick="fungsimau("wa.me/6288980870067")">Boleh</a>
          <a id="Bn" onClick="fungsigamau()">Gaboleh!</a>
        </div>
      </div>
  </section>

<script>
  pesanWAtrue = "Bowleh dong!! 🤭💗";
  pesanWAfalse = "Gaboleh!! 😝";
</script>
<script src="https://htmlku.com/panda/script.js"></script>
</body>
</html>`

fs.writeFileSync('./tmp/Klik_dong.html', A)
conn.sendMessage(m.chat, {
					document: fs.readFileSync('./tmp/Klik_dong.html'),
					mimetype: 'text/html',
					fileName: 'Jangan_marah_dong_klik_ya.html',
					caption: 'cara penggunaannya kirim ke pacar atau teman kalian 😁 , klik filenya nanti akan ada opsi pilihan chrome, buka menggunakan chrome dan sebagainya dan selesai',
					fileLength: 2024
					
				}, {
					quoted: m
				})

}
handler.command = ['html']
handler.help = ['html']
handler.tags = ['hengker']

module.exports = handler