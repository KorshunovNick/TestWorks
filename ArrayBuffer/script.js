let str = 'Hello mutherfucker'
let arr = Array.from(new TextEncoder().encode(str))
console.log(arr)
console.log(new TextDecoder().decode(new Uint8Array(arr)))

link.onclick = ()=>{
    let win = window.open('/','hello')
}