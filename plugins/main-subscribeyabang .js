import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
	let url = 'https://telegra.ph/file/7e11da809594b30705ef4.jpg'
let wm = 'Hai Saya ππΌπππΌ-ππΏ Jangan Lupa Suscribe ig ππΌπππΌ-ππΏ \n\nAtau bisa klik link Youtube : https://instagram.com/neohihin21'
let cap = `*F O L L O W π*`
	conn.sendButton(m.chat, cap, wm, await(await fetch(url)).buffer(), [['OTW follow',`ombaik`]],m)
}

handler.command = /^(zykomd)$/i
handler.premium = false
handler.limit = true

export default handler