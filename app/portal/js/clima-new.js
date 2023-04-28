$(document).ready(function () {
    $("#alerta_off").css("display", "none"); //se quita pronostico 5 nodos
    $.getJSON("/design/plain2/services/AlertaSMN.php", function (data) {

        if (data.alerta) {
            $(".alerta_clima").fadeIn(1400, function () {
                setTimeout(function () {
                    $(".alerta_clima").fadeOut(1400);
                }, 5000);
            });

            $("#alerta_on").css("visibility", "visible");
            //alerta en modo mobile
            var output2 = '<div class="alerta-link"><div class="alerta-link-icono-mobile"><a style="display:inline" href="//www.santafe.gob.ar/proteccioncivil/alerta"><img src="//www.santafe.gob.ar/assets/app/portal/imgs/alerta.png" alt="Alerta Meteorologica"></a></div></div>';
            $('.weather-mobile').html(output2);

        } else {

            $("#alerta_on").css("display", "none");
        }
    });

});

