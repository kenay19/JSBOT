const router = require('express').Router();
const pool = require('../database');
const encriptador = require('bcryptjs');
const { check } = require('../lib/helper');
router.get('/',check,(req, res) => {
    res.render('login');
});
router.post('/verification', async (req, res) => {
    const { email, password } = req.body;
    let response = {};
    let usuario = await pool.query('SELECT * FROM users WHERE email = ?',[email]);
    console.log(usuario);
    if (!(usuario.length > 0 && await encriptador.compare(password, usuario[0].contra))) {
        res.json({error: 'registro exitoso'});
    }else{
        req.session.user = usuario[0];
        res.json({ success: "found user" });
    }
});

router.get('/outSession', (req,res) => {
    req.session.destroy();
    res.redirect('/login');
});
module.exports = router;