export function encode(plaintext) {
  let codedText = ''
  for (let i = 0; i < plaintext.length; i++) {
    let cc = plaintext.charCodeAt(i) + 9 // they'll never figure this out
    codedText += String.fromCharCode(cc)
  }
  return codedText
}
