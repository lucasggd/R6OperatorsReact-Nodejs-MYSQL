const express = require('express');
const mysql = require('mysql2');
const process = require('./nodemon.json');
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

app.get('/operadores', (req, response) => {
    con.query('select * from operador order by nome ASC', (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/operador/:nome', (req, response) => {
    con.query('select * from operador where nome = ?', [req.params.nome], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/operador/:id/armaprimaria', (req, response) => {
    con.query('select * from operador_armap where id_operador = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
})

app.get('/operador/:id/armasecundaria', (req, response) => {
    con.query('select * from operador_armas where id_operador = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/operador/:id/acessorio', (req, response) => {
    con.query('select * from operador_acessorio where id_operador = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/operador/:id/classe', (req, response) => {
    con.query('select * from operador_classe where id_operador = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/classe/:id', (req, response) => {
    con.query('select * from classe where id = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/op_ap/:id', (req, response) => {
    con.query('select * from operador_armap where id_operador = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});
//////////////////////////////////////////////////////////////////////
//      Buscar arma/acessorio especifico para saber nome/img        //
//////////////////////////////////////////////////////////////////////
app.get('/armaprimaria/', (req, response) => {
    con.query('select * from armaprimaria order by nome ASC', (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/armaprimaria/:id', (req, response) => {
    con.query('select * from armaprimaria where id = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/armasecundaria/', (req, response) => {
    con.query('select * from armasecundaria order by nome ASC', (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/armasecundaria/:id', (req, response) => {
    con.query('select * from armasecundaria where id = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/acessorio/', (req, response) => {
    con.query('select * from acessorio order by nome ASC', (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/acessorio/:id', (req, response) => {
    con.query('select * from acessorio where id = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

//////////////////////////////////////////////////////////////////////
app.get('/miras-armas/', (req, response) => {
    con.query('select * from mira_arma order by nome ASC', (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/miras-armas/:id', (req, response) => {
    con.query('select * from mira_arma where id = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/canos-armas/', (req, response) => {
    con.query('select * from cano_arma order by nome ASC', (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/canos-armas/:id', (req, response) => {
    con.query('select * from cano_arma where id = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/cabos-armas/', (req, response) => {
    con.query('select * from cabo_arma order by nome ASC', (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/cabos-armas/:id', (req, response) => {
    con.query('select * from cabo_arma where id = ?', [req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

//////////////////////////////////////////////////////////////////////
//                              POST                                //
//////////////////////////////////////////////////////////////////////
app.post('/post/op_ap', (req, response) => {
    con.query("insert into operador_armap (id_armap, id_operador, melhor, id_mira, id_cano, id_cabo) VALUES (?, ?, ?, ?, ?, ?)", [req.body.id_armap, req.body.id_operador, req.body.melhor, req.body.id_mira, req.body.id_cano, req.body.id_cabo], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.post('/post/op_as', (req, response) => {
    con.query("insert into operador_armas (id_armas, id_operador, melhor, id_mira, id_cano, id_cabo) VALUES (?, ?, ?, ?, ?, ?)", [req.body.id_armas, req.body.id_operador, req.body.melhor, req.body.id_mira, req.body.id_cano, req.body.id_cabo], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.post('/post/op_ac', (req, response) => {
    con.query("insert into operador_acessorio (id_acessorio, id_operador, melhor) VALUES (?, ?, ?)", [req.body.id_acessorio, req.body.id_operador, req.body.melhor], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.post('/post/op_cl', (req, response) => {
    con.query("insert into operador_classe (id_classe, id_operador) VALUES (?, ?)", [req.body.id_classe, req.body.id_operador], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.get('/classes/', (req, response) => {
    con.query('select * from classe order by nome ASC', (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});


//////////////////////////////////////////////////////////////////////
//                             TIMES                                //
//////////////////////////////////////////////////////////////////////

app.get('/times', (req, response) => {
    con.query('select * from time', (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});
app.get('/time/:id', (req, response) => {
    con.query('select * from time where id = ?',[req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});
app.get('/proplayer/by-time/:id', (req, response) => {
    con.query('select * from proplayer where idtime = ?',[req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});
app.get('/proplayer/:nick', (req, response) => {
    con.query('select * from proplayer where nick = ?',[req.params.nick], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});
app.get('/proplayer/config/:id', (req, response) => {
    con.query('select * from proplayer_config where idProplayer = ?',[req.params.id], (err, res, fields) => {
        if (!err)
            response.send(res)
        else
            console.log(err)
    })
});

app.listen(3001, () => {
    console.log("Server is running on port 3001.");
});
