const http = require('node:http');
const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const usuarios = requere(".routes/usuarios")
const app = express();
server.listen(8000);
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
  });
  
  const rotaCadastro = require ('./routes/cursos');
  const rotaCadastro = require ('./routes/cadastro');
  
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.jason());
  app.use((req, res, next)=>{
      res.header('Acess-Control-Allow-Origin', '* ')
      res.header(
          'Acess-Control-Allow-Header',
          'Origin, Content-Type')
  })
  
  app.use('/cursos', rotaCursos);
  app.use('/cursos', rotaCadastro);
  
  app.use((req, res, next)=>{
      const erro = new Error ('Não encontrado');
      erro.status = 404;
      next(erro);
  });
  app.use((error, req, res, next) =>{
      res.status(error.status ||  500);
      return res.send({
          erro:{
              mensagem: error.message
          }
      });
  });
  
  const limparFormulario = (endereco) =>{
      document.getElementById('endereco').value = '';
      document.getElementById('bairro').value = '';
      document.getElementById('cidade').value = '';
      document.getElementById('estado').value = '';
      document.getElementById('idade').value = '';
      document.getElementById('curso').value = '';
  }
  
  
  const preencherFormulario = (endereco) =>{
      document.getElementById('endereco').value = endereco.logradouro;
      document.getElementById('bairro').value = endereco.bairro;
      document.getElementById('cidade').value = endereco.localidade;
      document.getElementById('estado').value = endereco.uf;
      document.getElementById('idade').value = endereco.uf;
      document.getElementById('curso').value = endereco.uf;
  }
  
  const pesquisarCep = async() => {
      limparFormulario();
      
      const cep = document.getElementById('cep').value;
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      if (cepValido(cep)){
          const dados = await fetch(url);
          const endereco = await dados.json();
          if (endereco.hasOwnProperty('erro')){
              document.getElementById('endereco').value = 'CEP não encontrado!';
          }else {
              preencherFormulario(endereco);
          }
      }else{
          document.getElementById('endereco').value = 'CEP incorreto!';
      }
       
      function validadata(){
          var data = document.getElementById("nascimento").value; // pega o valor do input
          data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
          var data_array = data.split("-"); // quebra a data em array
          
          // para o IE onde será inserido no formato dd/MM/yyyy
          if(data_array[0].length != 4){
             data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonto a data no formato yyyy/MM/dd
          }
          
          // comparo as datas e calculo a idade
          var hoje = new Date();
          var nasc  = new Date(data);
          var idade = hoje.getFullYear() - nasc.getFullYear();
          var m = hoje.getMonth() - nasc.getMonth();
          if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
          
          if(idade < 18){
             alert("Pessoas menores de 18 não podem se cadastrar.");
             return false;
          }
       
          if(idade >= 18 && idade <= 60){
             alert("Maior de 18, pode se cadastrar.");
             return true;
          }
          
          // se for maior que 60 não vai acontecer nada!
          return false;
       }
         return idade;
       }
       app.use('/usuarios', usuarios);

  
  document.getElementById('cep')
          .addEventListener('focusout',pesquisarCep);
  module.exports = app;
  module.exports = router
  
