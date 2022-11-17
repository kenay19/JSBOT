module.exports = {
    autheticate : (req,res,next) => {
        if(req.session.user) {
            return next();
        }
        return res.redirect('/login');
    },
    check: (req, res,next) => {
        if(req.session.user) {
            return res.redirect('/chat');
        }
        return next();
    }
}