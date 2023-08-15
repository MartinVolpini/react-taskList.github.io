
export function generateId( complex = 10 ){
    let chars = "0123456789abcdefghijklmnñopqrstuvwxyz#%&!?¡¿"
    let id = ""
    for  ( let i = 0 ; i < complex ; i++){
        let charsRandom = chars[Math.floor(Math.random() * chars.length  )]
        id += charsRandom
    }
    return id;
}