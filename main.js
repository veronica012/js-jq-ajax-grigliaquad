$(document).ready(function() {

    $('.quadrato').click(function(){

        var quadrato_corrente = $(this);

        $.ajax({

            'url': 'https://flynn.boolean.careers/exercises/api/random/int',
            'method': 'GET',
            'success': function(data) {
                var numero_random = data.response;
                console.log('Il numero random generato con chiamata ajax è: ' + numero_random);
                quadrato_corrente.text(numero_random);
                if (numero_random <= 5) {
                    quadrato_corrente.addClass('giallo');
                } else {
                    quadrato_corrente.addClass('verde');
                }

            },
            'error' : function() {
                alert('Si è verificato un errore!')
            }

        });

    });

});
