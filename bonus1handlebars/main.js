$(document).ready(function() {

    var template_html = $('#entry-template').html();
    var template_function = Handlebars.compile(template_html);
    var quadrato = {
        'classe': 'quadrato'
    }
    var html = template_function(quadrato);

    for (var i = 0; i < 36; i++) {
        $('.griglia').append(html);
    }
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
                    quadrato_corrente.removeClass('verde');
                }
                else {
                    quadrato_corrente.addClass('verde');
                    quadrato_corrente.removeClass('giallo');
                }
            },
            'error' : function() {
                alert('Si è verificato un errore!')
            }

        });

    });

});
