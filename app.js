const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/data",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let db = mongoose.connection;

//Check connection
db.once('open', function(){
    console.log('Ligado ao MongoDB');
});

// Check for DB errors
db.on('error', function(err){
    console.log(err);
});

//Init app
const app = express();

// Bring in Models
let Tarefa = require('./models/tarefa');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Home Route
app.get('/', function(request, response){
    Tarefa.find({}, function(err, tarefas){
        if(err){
            console.log(err);
        }else{
            response.render('index',{
            tituloAdicionar: 'Adicionar tarefa',
            tituloLista: 'Tarefas Pendentes',
            tituloConcluidas: 'Tarefas concluídas',
            ideiasProjetos: 'Ideias/Projetos',
            tarefas: tarefas
        });
        }
    });
});

let tarefas = require('./routes/tarefas');
app.use('/tarefas', tarefas);

//Start Server
app.listen(3000, function(){
    console.log('Servidor iniciou na porta 3000...');
});

    /*let Estados = {
        P: "Pendente",
        C: "Concluída"
        };
    let Importancia = {
        I: "Importante",
        N: "Não é importante"
    };
    let Urgencia = {
        U: "Urgente",
        N: "Não é urgente"
    }
    let prioridade = function (importante, urgente){
        if(importante == Importancia.I && urgente == Urgencia.U){
            return 1;//Crítica - tarefas que devem ser feitas imediatamente
        }else if(importante == Importancia.I && urgente == Urgencia.N){
            return 2;//Alta - tarefas que você vai marcar para fazer depois
        }else if(importante == Importancia.N && urgente == Urgencia.U){
            return 3;//Média - tarefas que você vai delegar para outras pessoas ou pode fazer quando as que têm prioridade 1 e 2 forem concluídas
        }else
            return 4;//Baixa - tarefas que você vai riscar da sua lista ou pode considerar como projetos a fazer no tempo livre
    };
    let categoria = {
        T: "Tarefa",
        I: "Ideia",
        P: "Projeto"
    };
    let tarefas = [
        {
            id:1,
            nome:"Estender a roupa",
            estadoDaTarefa: Estados.P,
            descricaoDetalhada:"Estender a roupa na cozinha",
            urgente: Urgencia.U,
            importante: Importancia.I,
            prioridade: prioridade(importante,urgente),
            tempoMinimo: 10,
            tempoUtilizado: 0,
            categoria: categoria.T,
            subcategoria: null
        },
        {
            id:2,
            nome:"Ir comprar carne",
            estadoDaTarefa: Estados.P,
            descricaoDetalhada:"Ir ao talho X buscar a carne que foi encomendada de manhã. Não esquecer do dinheiro.",
            urgente: Urgencia.N,
            importante: Importancia.I,
            prioridade: prioridade(importante,urgente),
            tempoMinimo: 30,
            tempoUtilizado: 0,
            categoria: categoria.T,
            subcategoria: null
        }
    ];
    */