const router = require('express').Router();
const pool = require('../database.js');
const { autheticate } = require('../lib/helper.js');

router.get('/',autheticate,(req,res) => {
    res.render('chat');
});

router.post('/addMessage',async(req,res) => {
    const {message} = req.body;
    const result = await pool.query('SELECT response FROM responses WHERE cuestion = ?',[message]);
    let response;
    if(result[0] !== undefined) {
        response = result[0].response;

    }else{
        response = 'No puedo responder tu pregunta, intenta con otra por favor';
    }
    await pool.query('INSERT INTO conversattion VALUES(?,?,?)',[message,1,req.session.user.idUser]);
    await pool.query('INSERT INTO conversattion VALUES(?,?,?)',[response,2,req.session.user.idUser]);
    let resu;
    resu = await pool.query('SELECT * FROM conversattion WHERE mensaje=?  LIMIT 1',[message]);
    let resu2 = await pool.query('SELECT * FROM conversattion WHERE mensaje=?  LIMIT 1',[response]);
    
    res.json({mensaje: resu,respuesta: resu2});
    
});

router.get('/getConversation',autheticate,async(req,res) => {
    let mensajes = await pool.query('SELECT * FROM conversattion WHERE usuario=? and tipo=1 ORDER BY mensaje DESC',[req.session.user.idUser]);
    let respuetas = await pool.query('SELECT * FROM conversattion WHERE usuario=? and tipo=2 ORDER BY mensaje DESC',[req.session.user.idUser]);
    res.json({mensaje:mensajes,respuesta:respuetas});
});
module.exports = router;