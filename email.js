function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
       if(!loginEmail || !loginSenha){
          alert('favor preencher todos os campos');
 
       }else{
        // else{ alert('campos preenchisdos com sucesso'); }
        window.location.hrefc = 'cadastro.html'
       }
 }
 
 // FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
 //------------------------------------------------------------------------------------------------------------------------
 var dadosLista = [];
 function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
 
    if(nomeUser){
       dadosLista.push(nomeUser);
       console.log(dadosLista);
 
    }else{
       alert('porfavor iforme um nome para cadastro');
    }
 
 
 }
//  FUNÇÃO PARA CRIAR LISTA DE USÚARIOS 
 function criraLisa(){
   
 }