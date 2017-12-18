function Section(section) {

    this.id = section.id;
    this.class = section.class;
    this.title = section.title;
    this.position = section.position;
    this.typeSection = section.typeSection;
    this.typeContent = section.typeContent;
    this.content = section.content;
    this.link = section.link;

    this.htmlToRender =
    '<section  class="' + this.class + '">' +

    this.content +

    '</section>';

    this.render = function(destiny) {
        $(destiny).append(this.htmlToRender);
        //$(destiny).children('#'+this.id).fadeIn('slow');
    };

}

//Section.prototype.init = function(){}


function SectionCustom(section) {
    //this.id = section.id;
    //this.class = section.class;
    //this.title = section.title;
    Section.call(this, section); // this is crucial


    this.image = section.image;
    this.imageMobile = section.imageMobile;
    this.imageBlur = section.imageBlur;

    //this.position = section.position;
    //this.typeSection = section.typeSection;
    //this.typeContent = section.typeContent;
    //this.content = section.content;
    this.boxs = section.boxs;




    this.htmlToRender = '' +
    ' <section  id="' + this.id + '" class="' + this.class + '">' +
    '<div class="top-section">' +
    '    <picture class="picture-section placeholderCustom' + this.id + '" data-large="' + this.image + '">' +
    '      <source srcset="' + this.image + '">' +
    '     <img src="' + this.imageBlur + '" alt="" class="img-small">' +
    '    </picture>' +
    '    <img class="picture-blur" src="' + this.imageBlur + '" alt="" >' +
    '   <div class="container">' +
    '      <h2 class="title-section"><a href="' + this.link + '">' + this.title + '</a></h2>' +
    '   </div>' +
    '     <!--/container-->' +
    '  </div>' +
    '  <!--/top-section-->' +
    '  <div  class="bottom-section">' +
    '      <div id="' + this.id + '-boxDestiny" class="container">' +
    '         <!--/box-->' +
    '         <!--/box-->' +
    '      </div>' +
    '  </div>' +
    '   <!--/container-->' +
    '  </div>' +
    '  <!--/bottom-section-->' +
    ' </section>' +
    ' <!--/section-end-->';


    this.render = function(destiny) {
        $(destiny).append(this.htmlToRender);
        this.renderBoxs(this.id + '-boxDestiny');
        //$(destiny).children('#'+this.id).fadeIn('slow');
    };

    this.renderBoxs = function(boxDestiny) {

        //itero los box recibidos
        $.each(this.boxs, function(k, v) {
            //console.log('tipo de box a renderizar' + v.typeBox);

            //segun el tipo de box
            switch (v.typeBox) {
                case 'tramites':
                    //code block

                    var plantilla_tramites =
                    '<div class="' + v.clases + '">' +
                    '<h4 class="title-box">' + v.titulo + '</h4>' +
                    '<ul class="list-links" id="' + v.id + '">' +
                    '</ul>' +
                    '<a class="btn" href="/index.php/tramites/modul1/index?m=tramites_por_temas&volver=1&ptema=' + v.tema + '&ponline=0&psubtema=0&page=1">Ver más trámites</a>' + '</div>';

                    $('#' + boxDestiny).append(plantilla_tramites);
                    //console.log(boxDestiny);

                    $.get('/index.php/web/guia/ext_tramites?m=home&a=index_testing&tema_ajax=' + v.tema + '&visitados_tramites_tema=masvisitadostema&tipo_retorno=json', {}, function(data) {

                        var tramites_mas_visitados_tema = '';

                        $.each(data, function(clave, valor) {

                            var nom_tramite = valor.Name;

                            if (nom_tramite.length > 80) {
                                nom_tramite = jQuery.trim(valor.Name).substring(0, 80).split(" ").slice(0, -1).join(" ") + "...";
                            }

                            tramites_mas_visitados_tema = tramites_mas_visitados_tema + '<li><a href="https://www.santafe.gob.ar/index.php/tramites/modul1/index?m=descripcion&id=' + valor.ID + '">' + nom_tramite + '</a></li>';
                        });

                        $('#' + v.id).append(tramites_mas_visitados_tema).fadeIn(2000);

                    }, 'json');



                    break;
                    case 'html':
                    //code block

                    var plantilla_html =
                    '<div class="' + v.clases + '">' +
                    v.content +
                    '</div>';

                    $('#' + boxDestiny).append(plantilla_html).fadeIn(2000);


                    break;
                    case 'imagen':
                    //code block

                    var plantilla_imagen =                    
                    '<a class="' + v.clases + '" href="'+ v.link +'">' +
                        '<img src="' +  v.content + '" alt="">' +
                    '</a>';

                    $('#' + boxDestiny).append(plantilla_imagen).fadeIn(2000);

                    break;
                    case 'noticias':

                    var plantilla_noticia = v.content;

                    $('#' + boxDestiny).append(plantilla_noticia).fadeIn(2000);

                    break;
                    case 'agenda':
                    var plantilla_agenda = v.content;

                    $('#' + boxDestiny).append(plantilla_agenda).fadeIn(2000);

                    break;
                    default:
                    //default code block
                }
            });

    }

}


function ajax_sync(indice) {

    var arrayLength = $.mynamespace_sections.array_section.length;

    if (indice < arrayLength) {

        $.ajax({
                //url: '/index.php/section_home/index',
                url: '/index.php/section_home/get_section/' + $.mynamespace_sections.array_section[indice],
                type: 'GET',
                dataType: 'json',
                timeout: $.mynamespace_global_time_out
                //data: { section_id: $.mynamespace_sections.array_section[indice] },
            })
        .done(function(data) {

            //console.log('llamada ' + indice + ' - ' + $.mynamespace_sections.array_section[indice]);

            var data_content = data.content;

            //console.log(data_content);

            if ((data_content) != null) {

                switch (data_content.typeSection) {
                    case 'seccion_variable':
                            //obtengo una seccion
                            $.mynamespace_sections.section = {
                                id: data_content.id,
                                class: data_content.class,
                                title: data_content.title,
                                image: data_content.image,
                                imageMobile: data_content.imageMobile,
                                imageBlur: data_content.imageBlur,
                                position: data_content.position,
                                typeSection: data_content.typeSection,
                                typeContent: data_content.typeContent,
                                content: data_content.content,
                                link: data_content.link,
                                boxs: data_content.boxs
                            };


                            $.mynamespace_sections.mySection = new SectionCustom($.mynamespace_sections.section);
                            $.mynamespace_sections.mySection.render('#destino');
                            break;

                            case 'seccion_fija':

                            //seccion_fija: inicio, a_tener_en_cuenta, programas, pre_pie
                            $.mynamespace_sections.section = {
                                id: data_content.id,
                                class: data_content.class,
                                title: data_content.title,
                                position: data_content.position,
                                typeSection: data_content.typeSection,
                                typeContent: data_content.typeContent,
                                content: data_content.content,
                                link: data_content.link
                            }

                            //console.log('por instancia una section fija');

                            $.mynamespace_sections.mySectionFija = new Section($.mynamespace_sections.section);
                            $.mynamespace_sections.mySectionFija.render('#destino');

                            break;
                            default:
                            //default code block
                        }

                        blurImage('.placeholderCustom' + $.mynamespace_sections.section.id);

                } //endif

                siguiente_indice = indice + 1;

                ajax_sync(siguiente_indice);


            })
        .fail(function() {
            console.log('Error:  ' + indice + ' - ' + $.mynamespace_sections.array_section[indice]);
            ajax_sync(siguiente_indice+1);
        })
        .always(function() {
                //console.log('Completa:  ' + indice + ' - ' + $.mynamespace_sections.array_section[indice]);
            });

    } //endif
}

function showFiltros() {
    $("#tab-search-tramites-home").show();
    $("#tab-search-allsite-home").show();
}

function hideFiltros() {
    $("#tab-search-tramites-home").hide();
    $("#tab-search-allsite-home").hide();
}


$(document).ready(function() {




    //espacio de nombres
    $.mynamespace_sections = {};
    $.mynamespace_global_time_out = '30000';

    hideFiltros();

    $("#search-field").keypress(function(event) {
        showFiltros();
    });

    $("#search-field").focusout(function(event) {
        hideFiltros();
    });





    //aca inicializa todo el array de posiciones
    $.ajax({
        url: '/index.php/section_home/list_id_section',
        type: 'GET',
        dataType: 'json',
        timeout: $.mynamespace_global_time_out
    })
    .done(function(data) {
        var idSections_array = [];
        for (var prop in data.idSections) {
            idSections_array.push(data.idSections[prop]);
        }

        console.log(idSections_array);

        $.mynamespace_sections.array_section = idSections_array;



        var arrayLength = $.mynamespace_sections.array_section.length;

        ajax_sync(0);



    })
    .fail(function(data) {
        console.log('error general de llamada obteniendo id se secciones...');
    })
    .always(function() {
            //console.log("complete: se obtuvieron las secciones a dibujar");
        });


    /*
    var availableTags = [{
            value: '/index.php/tramites/modul1/index?m=descripcion&id=96870',
            label: 'Patente Única sobre Vehículos: Visualización y/o Liquidación de deuda',
            online: 'Online'
        },

        {
            value: '/index.php/tramites/modul1/index?m=descripcion&id=95213',
            label: 'Patente Única sobre Vehículos: Impresión de Boletas',
            online: 'Online'
        },

        {
            value: '/index.php/tramites/modul1/index?m=descripcion&id=96205',
            label: 'Impuesto inmobiliario: visualización, liquidación de deuda y año corriente',
            online: 'Online'

        },

        {
            value: '/index.php/tramites/modul1/index?m=descripcion&id=95212',
            label: 'Impuesto Inmobiliario: Impresión de Boletas',
            online: 'Online'
        },

        {
            value: '/index.php/tramites/modul1/index?m=descripcion&id=162438',
            label: 'Turnos Web: Solicitud para trámites en el Gobierno de Santa Fe',
            online: 'Online'
        },

        {
            value: '/index.php/tramites/modul1/index?m=descripcion&id=125329',
            label: 'Impuesto de Sellos y Tasas Retributivas de Servicios: Liquidación web',
            online: 'Online'
        },

        {
            value: '/index.php/tramites/modul1/index?m=descripcion&id=169472',
            label: 'IAPOS: Consulta de cobertura de medicamentos e impresión de recetario',
            online: 'Online'
        },

        {
            value: 'index.php/tramites/modul1/index?m=descripcion&id=96920',
            label: 'Impuesto sobre los Ingresos Brutos: Impresión de Boletas',
            online: 'Online'
        },

        {
            value: '/index.php/tramites/modul1/index?m=descripcion&id=97580',
            label: 'Patente Única sobre Vehículos: consulta de tabla de valuaciones',
            online: 'Online'
        },

        {
            value: '/index.php/tramites/modul1/index?m=descripcion&id=95216',
            label: 'Patente Única sobre Vehículos: Consulta de Radicación de Vehículos',
            online: 'Online'
        }


    ];
    */

    $.getJSON('/index.php/tramites/modul1/index?m=home&a=tramites', function(data) {

        //console.log(data);

        $("#search-field").autocomplete({
            minLength: 3,
            source: data,
            select: function(event, ui) {

            // prevent autocomplete from updating the textbox
            event.preventDefault();
            // navigate to the selected item's url
            //window.open(ui.item.value);
            //console.log('select');
            window.location.href = ui.item.value;
        },
        open: function(event, ui) {

            //console.log('open');
            //$("#tab-search-tramites-home").addClass('btn-tab-active');
            //var position = $('#ui-id-1').position();
            //var nuevaPosition = position.top + 43;
            //muevo el widget
            //$('#ui-id-1').css('top', nuevaPosition + 'px');
            //var anchoTab = $("#tab-search-tramites-home").width();
        },
        close: function(event, ui) {
            //console.log('close');
            //$("#tab-search-tramites-home").removeClass('btn-tab-active');
        },
        change: function(event, ui) {
            //console.log('change');
        },
        focus: function(event, ui) {
            // prevent autocomplete from updating the textbox
            event.preventDefault();
        },
    }).data("ui-autocomplete")._renderItem = function(ul, item) {

            var $a = $("<a></a>");
        //$("<span class='m-year'></span>").text(item.online).addClass("item-tramite-autocomplete").appendTo($a);
        $("<span class='m-name'></span>").text(item.label).addClass("item-tramite-autocomplete").appendTo($a);
        //$("<span class='m-cast'></span>").text(item.cast).appendTo($a);
        if (item.rating && item.icon) {
            var $tm = $("<span class='rt-main'>Rotten Tomatoes<sup>&reg;</sup> Score<br>Tomatometer<sup>&reg;</sup><br></span>").appendTo($a);
            $("<span class='rt-ico'></span>").addClass(item.icon).appendTo($tm);
            $("<span class='rt-val'></span>").text(item.rating + "%").appendTo($tm);
            $("<span class='rt-bar'></span>").addClass(item.icon).appendTo($tm).append("<span style='width: " + item.rating + "%;'></span>");
        }
        return $("<li></li>").append($a).appendTo(ul);

    };

});


    $("#tab-search-allsite-home").click(function(event) {
        event.preventDefault();
        $(".input-submit").trigger('click');
    });





});




function blurImage(selector) {

    $(selector).addClass('placeholderCustom');

    $(selector).each(function(index) {

        var placeholder = $(this); // document.querySelector('.placeholderCustom'),
        small = $(this).find('.img-small') //placeholder.querySelector('.img-small')

        // 1: load small image and show it

        /*
        var img = new Image();
        img.src = small.src;
        img.onload = function() {
            small.classList.add('loaded');
        };
        */

        // 2: load large image
        var imgLarge = new Image();
        imgLarge.src = placeholder.attr('data-large'); //placeholder.dataset.large;
        imgLarge.onload = function() {
			//imgLarge.classList.add('loaded');
			imgLarge.className += "loaded";
			//console.log(imgLarge);
			//$("imgLarge").addClass('loaded');
        };

        //placeholder.appendChild(imgLarge);

        placeholder.append(imgLarge);


        /* iterate through array or object */
    });

}

/*
window.onload = function() {
    blurImage();
}
*/
