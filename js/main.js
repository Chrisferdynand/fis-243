$(function(){
        $('.cuenta-regresiva').countdown('2019/12/20 00:00:00', function(event){
            $('#dias').html(event.strftime('%D'));
            $('#horas').html(event.strftime('%H'));
            $('#minutos').html(event.strftime('%M'));
            $('#segundos').html(event.strftime('%S'));
        });
        $('.cuenta-regresiva-proyecto').countdown('2019/12/18 15:00:00', function(event){
            $('#dias').html(event.strftime('%D'));
            $('#horas').html(event.strftime('%H'));
            $('#minutos').html(event.strftime('%M'));
            $('#segundos').html(event.strftime('%S'));
        });
        //Menu Fijo 
        var windowheight= $(window).height();
        var barraAltura= $('.barra').innerHeight();
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if(scroll>windowheight){
                $('.barra').addClass('fixed');
                $('body').css({'margin-top': barraAltura+'px'});
            }else{
                $('.barra').removeClass('fixed');
                $('body').css({'margin-top': '0px'});
            }
        });
        //Menu responsive
        $('.menu-movil').on('click', function(){
            $('.navegacion-principal').slideToggle();
        });
        //Numero animados
        $('.resumen-evento li:nth-child(1) p').animateNumber({number: 17}, 1500);
        $('.resumen-evento li:nth-child(2) p').animateNumber({number: 3}, 1500);
        $('.resumen-evento li:nth-child(3) p').animateNumber({number: 1}, 1500);
        $('.resumen-evento li:nth-child(4) p').animateNumber({number: 1}, 1500);
        //Invitados Colorbox
        $('.invitado-info').colorbox({inline:true, width:"50%"});
});
$(function(){
    //Modulos
    $('.programa-evento .info-curso:first').show();
    $('#moduloII').hide();
    $('.menu-programa a:first').addClass('activo');
    $('.menu-programa a').on('click', function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });
});
