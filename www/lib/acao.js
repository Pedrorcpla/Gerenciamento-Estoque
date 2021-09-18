var url = 'https://pedron.profrodolfo.com.br/licoes/Banco/';

function ListaOptionNivel(){
    $.ajax({
        url: url+'niveis.php?list',
        type: 'GET',
        success: function(retorno){
            var res = JSON.parse(retorno);
            for(i=0;i<res.length;i++){
                $('#nivel').append('<option value="'+res[i].cd+'">'+res[i].nome+'</option>');
            }
        }
    })
}
function readURL(input){
  if (input.files && input.files[0]){
    var imagem = new FileReader();

    imagem.onload = function(e){
      $('#imagem').attr('src', e.target.result);
      $('#imagem').css('width', '45vh');
      $('.imgMensagem').remove();
    }
    imagem.readAsDataURL(input.files[0]);
  }
}
$(document).ready(function(){
  ListaOptionNivel();
  ListaUsuario();
});
$(document).on('submit','#user',function(e){
    
    $.ajax({
        url: url+"usuario.php",
        data: $(this).serialize(),
        type: 'POST',
        success: function(retorno){
            $('#display').html(retorno);
            $('#nome').val('');
            $('#email').val('');
            $('#login').val('');
            $('#senha').val('');
        }
    });
    
e.preventDefault();
});

function ListaUsuario(){
    $.ajax({
        url: url+'usuario.php?list',
        type: 'GET',
        success: function(retorno){
            var users = JSON.parse(retorno);
            $('#userList').html("");
            for(i=0;i<users.length;i++){
                var linha = '<tr><td scope="row">'+users[i].cd+'</td>';
                linha+= '<td>'+users[i].nome+'</td>';
                linha+= '<td>'+users[i].email+'</td>';
                linha+= '<td>'+users[i].id_nivel+'</td>';
                linha+= '<td>[edit | delete | nivel]</td></tr>';
                $('#userList').append(linha);
            }
        }
    })
}