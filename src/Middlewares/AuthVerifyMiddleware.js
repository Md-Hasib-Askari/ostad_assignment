const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    let token = req.cookies['token'];
    jwt.verify(token, "mysecretkey", function (err, decoded) {
        if (err) {
            res.status(401).json({status:"unauthorized"})
        } else {
            console.log(decoded);
            const email = decoded.data;
            res.cookie('email', email, {httpOnly: true});
            next();
        }
    })
}