var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lista-angular');
var Lista = mongoose.model( 'Lista' , {
    texto: String
} );

app.configure( function(){
    app.use(express.static( __dirname + '/publico'));
    app.use(express.bodyParser());
});

//  app.get('/', function(req,res){
//     res.sendFile('./publico/index.html');
//  });

app.post('/api/lista', function(req,res){
    Lista.create({
        texto: req.body.texto
    }, function(error,lista){
        if(error){
            res.send(error);
        }
        Lista.find(function(error,lista){
            if(error){
                res.send(error);

            }
            res.json(lista);
        })
    })
})
app.get('/api/lista', function(_req,res){
    Lista.find(function(error,lista){
        if(error){
            res.send(error);
        }
        res.json(lista);
    })
})
app.delete('/api/lista/:item', function(req,res){
    Lista.remove({
        _id:req.params.item
    }, function(error,lista){
        if(error){
            res.send(error);
            Lista.find(function(error,lista){
                if(error){
                    res.send(error);
                }
                res.json(lista);
            })
        }
    })
})
const puerto = process.env.PUERTOS || 3008;
const servidor = process.env.HOSTORG || "localhost";
app.listen(puerto, () => console.log(`Servidor Disponible >>> http://${servidor}:${puerto} <<`));
