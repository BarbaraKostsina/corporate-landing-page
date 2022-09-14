    $('document').ready(function(){
        $('#btn').on('click', function(){
            $('input[required]').addClass('req')
        });
    });

    $('document').ready(function(){
        $('#emailBtn').on('click', function(){
            $('input[required]').addClass('req2')
        });
    });
    
    function tryNow(){
        window.open("after-submit.html");   
    }

 
