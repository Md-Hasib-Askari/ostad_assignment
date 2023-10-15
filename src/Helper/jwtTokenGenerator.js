const jwt = require("jsonwebtoken");

exports.jwtTokenGenerate = (secretKey, data) => {
    const payload = {
        exp: Math.floor(Date.now() / 1000) + (24*60*60),
        data: data
    }
    let token = jwt.sign(payload, secretKey);
    return token;
}
