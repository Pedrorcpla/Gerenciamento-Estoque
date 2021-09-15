var url = 'https://pedron.profrodolfo.com.br/licoes/Banco/';

function ListaOptionNivel(){
    $.ajax({
        url: url+'niveis.php?list',
        type: 'GET',
        success: function(retorno){
            var res = JSON.parse(retorno);
            $('#nivel').html("");
            for(i=0;i<res.length;i++){
                $('#nivel').append('<option value="'+res[i].cd+'">'+res[i].nome+'</option>');
            }
        }
    })
}

