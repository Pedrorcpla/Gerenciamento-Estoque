var url = "https://pedron.profrodolfo.com.br/licoes/Banco/"
$(document).ready(function(){
  ListaOptionNivel();
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


