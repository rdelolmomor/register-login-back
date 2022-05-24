var CryptoJS = require("crypto-js");

function reHash(hashPwd){

    // Decrypt
    const bytes  = CryptoJS.AES.decrypt(hashPwd, 'No está muerto lo que puede yacer eternamente, y con el paso de extraños eones, incluso la muerte puede morir');
    console.log('En bytes: ',bytes);
    const decryptText = bytes.toString(CryptoJS.enc.Utf8);

    console.log('texto original: ',decryptText);
    return decryptText;
}

module.exports.reHash = reHash;

