const express = require("express");
const path = require('path');

//Init app
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', function(request, response){
    let Estados = {
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
            return 1;//tarefas que devem ser feitas imediatamente
        }else if(importante == Importancia.I && urgente == Urgencia.N){
            return 2;//tarefas que você vai marcar para fazer depois
        }else if(importante == Importancia.N && urgente == Urgencia.U){
            return 3;//tarefas que você vai delegar para outras pessoas ou pode fazer quando as que têm prioridade 1 e 2 forem concluídas
        }else
            return 4;//tarefas que você vai riscar da sua lista ou pode considerar como projetos a fazer no tempo livre
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
            prioridade: prioridade(Importancia.I,Urgencia.U),
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
            prioridade: prioridade(Importancia.I,Urgencia.N),
            tempoMinimo: 30,
            tempoUtilizado: 0,
            categoria: categoria.T,
            subcategoria: null
        }
    ];
    response.render('index',{
        titulo: 'Lista de tarefas',
        tarefas: tarefas
    });
});

// Add Route
app.get('/tarefas/add', function(req, res){
    res.render('add_todo',{
        titulo:'Adicionar tarefa'
    });
});

//Start Server
app.listen(3000, function(){
    console.log('Servidor iniciou na porta 3000...');
})