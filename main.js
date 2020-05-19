$(document).ready(function() {

    $('.quadrato').click(function(){

        $.ajax({

            'url': 'https://flynn.boolean.careers/exercises/api/random/int',
            'method': 'GET',
            'success': function(data) {
                var numero_random = data.response;
                console.log('Il numero random generato con chiamata ajax è: ' + numero_random);
            },
            'error' : function() {
                alert('Si è verificato un errore!')
            }

        });

    });

});
