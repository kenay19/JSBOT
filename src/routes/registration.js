const pool = require('../database');
const router = require('express').Router();
const encriptador = require('bcryptjs');
router.get('/', (req,res) => {
    res.render('registration')
});

router.post('/register', async(req, res) => {
    const {nombre,app,apm,genero,edad,tel,email,password} = req.body;
    try{
        let result =  await pool.query('INSERT INTO users(nombre,app,apm,genero,edad,telefono,email,contra)VALUES(?,?,?,?,?,?,?,?)',[nombre,app,apm,genero,edad,tel,email,await encriptador.hash(password,10)]);
        console.log(result);
        res.json({message: 'registro exitoso'});
    }catch(e){
        res.json({error: "Algo salio mal, vuelve a intentarlo en unos momentos"});
    }
});
module.exports = router;