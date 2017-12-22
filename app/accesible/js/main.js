$(document).ready(function () {

    //tramites mas visitados
    var url = '/index.php/tramites/modul1/index?m=lee_visitados&a=index_testing&json=true';

    $.get(url, {}, function (data) {

        var tramites_mas_visitados_tema = '';

        $.each(data, function (clave, valor) {

            var nom_tramite = valor.Name;

            if (nom_tramite.length > 80) {
                nom_tramite = jQuery.trim(valor.Name).substring(0, 80).split(" ").slice(0, -1).join(" ") + "...";
            }

            tramites_mas_visitados_tema = tramites_mas_visitados_tema + '<li><a target="_blank" href="/index.php/tramites/modul1/index?m=descripcion&id=' + valor.ID + '">' + nom_tramite + '</a></li>';

        });

        $('.tramites-mas-visitados').append(tramites_mas_visitados_tema);

    }, 'json');


});