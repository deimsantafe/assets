

/*
 * Function para recargar a una url especificada
 **/

function irUrl(url) {
    document.location.href = url;
}

/*
 * Function para validar compatibilidad con html5
 **/
function hasHtml5Validation() {
    return typeof document.createElement('input').checkValidity === 'function';
}
/*
 * funcion para igualar el alto de todos los div de una misma clase
 */

function equalHeight(group) {
    var tallest = 0;
    group.each(function () {
        var thisHeight = $(this).height();
        // console.log("alto" + thisHeight);
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}

function Display_Load(resultado, msg) {

    if (msg === undefined) {
        var msg = ' Un momento por favor...';
    }

    $(resultado).fadeIn(900, 0);

    var waiting = $('<div class="wait"><div style="margin-left:144px;" >' + msg + '</div></div>');

    $(resultado).html(waiting);

}

/**
 * muestra una ventana wait modal
 * @param mostrar
 */
function waitModal(mostrar) {

    /*
     * lo primero que hago es mostrar la modal de wait en primer plano
     */

    ancho = 400;

    if (matchMedia('only screen and (max-width: 479px)').matches) {
        // smartphone/iphone... maybe run some small-screen related dom
        // scripting?
        ancho = "98%";
    }

    if (matchMedia('only screen and (max-width: 768px)').matches) {
        // smartphone/iphone... maybe run some small-screen related dom
        // scripting?
        ancho = '98%';
    }

    if (mostrar === 1) {

        $('#myProgressBar').dialog({
            autoOpen: true,
            modal: true,
            title: 'Cargando',
            position: {
                my: 'top',
                at: 'top'
                        //of: $('#some_div')
            },
            open: function () {

                $("#myProgressBar").css("visibility", "visible");

                Display_Load("#myProgressBar");
            },
            height: 150,
            width: ancho
        });

    } else {
        // cierro el wait		

        $('#myProgressBar').dialog();
        $('#myProgressBar').dialog('close');
        $('#myProgressBar').dialog("destroy");
        $("#myProgressBar").css("visibility", "hidden");

    }

    return true;

}

/**
 * desabilita aplicando un overlay al div indicado
 *
 * .desactivar_widget_true { width: 100%; height: 1000px; z-index: 1005;
 * position: absolute; left: 0px; top: 0px; background:
 * url('css/ui-gobierno/images/ui-bg_flat_0_eeeeee_40x100.png') repeat scroll
 * 50% 50% #5C5C5C; opacity: 0.8; }
 *
 *
 *
 */
function desactivar_widget(selector, desactivar) {

    if (desactivar === 1) {
        // aplica overlay al widget
        $(selector).addClass("desactivar_widget_true");
    } else {
        // quita overlay al widget
        $(selector).removeClass("desactivar_widget_true");
    }
}

/*
 * funcion que abre una ventana modal con una llamada a una url parameter: url=
 * url a llamar paramater: div
 */
function ventana_modal(url, tmjdiv, titulo, ancho, alto, funcion_close, funcion_abrir, forzarAncho) {

    /*
     * lo primero que hago es mostrar la modal de wait en primer plano
     */
    waitModal(1);

    // variable global
    div_destino = tmjdiv;

    // queremos que parametro1 tenga por defecto el valor 33 pero que respete
    // posibles valores undefined
    parametro_final = (typeof funcion_close == 'undefined') ? true : funcion_close;
    parametro_inicial = (typeof funcion_abrir == 'undefined') ? true : funcion_abrir;
    // queremos que parametro1 tenga por defecto el valor 33 pero que respete
    // posibles valores undefined
    parametro_final = (typeof funcion_close == 'undefined') ? true : funcion_close;
    parametro_inicial = (typeof funcion_abrir == 'undefined') ? true : funcion_abrir;

    // si no vienen valores seteo por default alguno
    if (titulo == undefined) {
        titulo = '';
    }

    /**
     * deja lo valore enviados solo en el caso que la resoluicion de pantalla
     * sea menor o igual a 1024
     */

    /**
     * si no esta definido un alto y ancho
     */
    if (ancho == undefined) {
        ancho = 800;
    }

    if (alto == undefined) {
        alto = 600;
    }

    /**
     * si es mayor que 1024 la resolucion la adecua a la resolucion del usuario
     */

    forzarAncho = (typeof forzarAncho === "undefined") ? true : forzarAncho;

    if (forzarAncho == true) {
        if (screen.width > '1024') {
            ancho = screen.width - 100;
        }

        if (screen.height > '768') {
            alto = screen.height - 250;
        }
    }

    if (matchMedia('only screen and (max-width: 479px)').matches) {
        // smartphone/iphone... maybe run some small-screen related dom
        // scripting?
        ancho = "98%";
    }

    if (matchMedia('only screen and (max-width: 768px)').matches) {
        // smartphone/iphone... maybe run some small-screen related dom
        // scripting?
        ancho = '98%';
    }

    $.get(url, function (data) {
        $dialog = $('#' + div_destino).empty().html(data).dialog({
            autoOpen: false,
            modal: true,
            draggable: false,
            resizable: false,
            title: titulo,
            open: function () {

                // cierro el wait
                $('#myProgressBar').dialog('close');

                // se ejecuta al abrir el dialog
                // muestro wait en pantalla
                eval(parametro_inicial);
                parametro_inicial = '';
            },
            height: alto,
            width: ancho,
            buttons: {
                Cerrar: function () {
                    // cierro el dialog modal
                    $(this).dialog("close");
                }
            },
            close: function () {
                eval(parametro_final);
                parametro_final = '';
                // saco la modal de memoria
                $(this).dialog("destroy");
                // limpio el div de memoria
                $('#' + div_destino).empty();

                /**
                 * vaciando todo: aplica cuando hay modal de modal
                 */
                $(this).empty();

            }
        });

        $dialog.dialog('open');

    });

    // retorno el selector del div con la informacion
    return $('#' + div_destino);
}

/**
 * mensajes para el usuario permanentes
 */
function mensaje_usuario_permanente(titulo, mensaje, tipo) {

    ancho = 400;

    if (matchMedia('only screen and (max-width: 479px)').matches) {
        // smartphone/iphone... maybe run some small-screen related dom
        // scripting?
        ancho = "98%";
    }

    if (matchMedia('only screen and (max-width: 768px)').matches) {
        // smartphone/iphone... maybe run some small-screen related dom
        // scripting?
        ancho = '98%';
    }

    /**
     * tipo: define el tipo de estilo de mensaje 1 = informacion 2 = error otros =
     * no definidos,
     */
    if (tipo == 1) {

        var caja2 = $('<div class="ui-widget"><div style="margin-top: 20px; padding: 0 .7em;" class="ui-state-highlight ui-corner-all">' + ' ' + '<p><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-info"></span>' + mensaje + '</p></div></div>');
    } else {

        if (tipo == 2) {

            var caja2 = $('<div class="ui-widget"><div style="padding: 0 .7em;" class="ui-state-error ui-corner-all">' + ' ' + '<p><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + mensaje + '</p></div></div>');
        } else {
            var caja2 = $('<div><p>' + mensaje + '</p></div>');
        }
    }

    caja2.dialog({
        open: function (event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog).hide();
        },
        modal: true,
        width: ancho,
        buttons: {
            "Aceptar": {
                'text': 'Aceptar',
                'class': 'nowait',
                'click': function () {
                    $(this).dialog("close");
                }
            }
        },
        close: function () {
            $(this).dialog("destroy");
        }
    });

    if (titulo == undefined) {
        /**
         * aplico una clase sin titulos
         */
        // getter
        var dialogClass = caja2.dialog("option", "dialogClass");
        // setter
        caja2.dialog("option", "dialogClass", 'noTitleStuff');
    } else {
        // coloco titulo de la ventana modal
        caja2.dialog('option', 'title', titulo);
    }

    /**
     * seteo la position
     */
    // getter
    var position = caja2.dialog("option", "position");
    // setter
    caja2.dialog("option", "position", ['center', 'middle']);

}


/**
 * mensajes para el usuario permanentes
 */
function mensaje_usuario_confirma(titulo, mensaje, callback) {

    ancho = 400;

    if (matchMedia('only screen and (max-width: 479px)').matches) {
        // smartphone/iphone... maybe run some small-screen related dom
        // scripting?
        ancho = "98%";
    }

    if (matchMedia('only screen and (max-width: 768px)').matches) {
        // smartphone/iphone... maybe run some small-screen related dom
        // scripting?
        ancho = '98%';
    }

    parametro_callback = (typeof callback == 'undefined') ? true : callback;

    var caja2 = $('<div class="ui-widget"><div style="margin-top: 20px; padding: 0 .7em;" class="ui-state-highlight ui-corner-all">' + ' ' + '<p><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-info"></span>' + mensaje + '</p></div></div>');

    caja2.dialog({
        modal: true,
        width: ancho,
        buttons: {
            Aceptar: function () {
                $(this).dialog("close");
                eval(parametro_callback);
                parametro_callback = '';

            },
            Cancelar: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            $(this).dialog("close");
        }
    });

    if (titulo == undefined) {
        /**
         * aplico una clase sin titulos
         */
        // getter
        var dialogClass = caja2.dialog("option", "dialogClass");
        // setter
        caja2.dialog("option", "dialogClass", 'noTitleStuff');
    } else {
        // coloco titulo de la ventana modal
        caja2.dialog('option', 'title', titulo);
    }

    /**
     * seteo la position
     */
    // getter
    var position = caja2.dialog("option", "position");
    // setter
    caja2.dialog("option", "position", ['center', 'middle']);

}

function ordenaDataStore() {

    // ordenando los widget de columna 1
    $('ul#column1>li:.ordenable').sortElements(function (a, b) {

        var elemento1 = false;
        var elemento2 = false;

        for (var i in array_orden_widget[0]) {

            // alert(array_orden_widget[0][i]);
            // para cada elemento del array comparo

            if ('li_' + array_orden_widget[0][i] == $(a).attr('id')) {
                elemento1 = $(a).attr('id');
                // console.log('entro al elemento1');
                // console.log(elemento1);
            }
        }

        for (var i in array_orden_widget[0]) {
            // alert(array_orden_widget[0][i]);
            // para cada elemento del array comparo

            if ('li_' + array_orden_widget[0][i] == $(b).attr('id')) {
                elemento2 = $(b).attr('id');
                // console.log(elemento2);
            }
        }

        if ((elemento1 != false) && (elemento2 != false)) {

            if ($(a).attr('name') > $(b).attr('name')) {
                return $(a).attr('name') > $(b).attr('name') ? 1 : -1;
            } else {
                // return $(a).attr('name') < $(b).attr('name') ? 1 : -1;
            }
        } else {
            return -1;
        }
    });

}

/**
 * jQuery.fn.sortElements --------------
 *
 * @param Function
 *            comparator: Exactly the same behaviour as [1,2,3].sort(comparator)
 *
 * @param Function
 *            getSortable A function that should return the element that is to
 *            be sorted. The comparator will run on the current collection, but
 *            you may want the actual resulting sort to occur on a parent or
 *            another associated element.
 *
 * E.g. $('td').sortElements(comparator, function(){ return this.parentNode; })
 *
 * The
 * <td>'s parent (
 * <tr>) will be sorted instead of the
 * <td> itself.
 */
jQuery.fn.sortElements = (function () {

    var sort = [].sort;

    return function (comparator, getSortable) {

        getSortable = getSortable ||
                function () {
                    return this;
                };

        var placements = this.map(function () {

            var sortElement = getSortable.call(this), parentNode = sortElement.parentNode,
                    // Since the element itself will change position, we have
                    // to have some way of storing its original position in
                    // the DOM. The easiest way is to have a 'flag' node:
                    nextSibling = parentNode.insertBefore(document.createTextNode(''), sortElement.nextSibling);

            return function () {

                if (parentNode === this) {
                    throw new Error("You can't sort elements if any one is a descendant of another.");
                }

                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);

                // Remove flag:
                parentNode.removeChild(nextSibling);

            };

        });

        return sort.call(this, comparator).each(function (i) {
            placements[i].call(getSortable.call(this));
        });

    };

})();


// on window resize run function
$(window).resize(function () {
    fluidDialog();
});

// catch dialog if opened within a viewport smaller than the dialog width
$(document).on("dialogopen", ".ui-dialog", function (event, ui) {
    fluidDialog();
});

function fluidDialog() {

    var $visible = $(".ui-dialog:visible");
    // each open dialog
    $visible.each(function () {
        var $this = $(this);
        var dialog = $this.find(".ui-dialog-content").data("ui-dialog");
        // if fluid option == true       
        if (dialog.options.fluid) {
            var wWidth = $(window).width();
            // check window width against dialog width
            if (wWidth < (parseInt(dialog.options.maxWidth) + 50)) {
                // keep dialog from filling entire screen
                $this.css("max-width", "90%");
            } else {
                // fix maxWidth bug
                $this.css("max-width", dialog.options.maxWidth + "px");
            }
            //reposition dialog
            dialog.option("position", dialog.options.position);
        }
    });

}

/**
 * carga del DOM
 */
$(document).ready(function () {
          

    /**
     * definicion de botones
     */
    $("input[type=submit], input[type=button],button,.btn").button();

    $.ajaxSetup({
        timeout: '60000',
        global: true
    });

    /**
     * nuevo menu
     */
    $('#cssmenu').prepend('<div id="menu-button">Menu</div>');
    $('#cssmenu #menu-button').on('click', function () {
        var menu = $(this).next('ul');
        if (menu.hasClass('open')) {
            menu.removeClass('open');
        } else {
            menu.addClass('open');
        }
    });

    /**
     * manejador de opciones de menu
     */
    $(".opcion").click(function (event) {

        event.preventDefault();


        $(".submenu").each(function (element) {
            // oculto todos
            $(this).hide();
        });

        $(".header").css("height", "120");
        $(this).parent().find(".submenu").slideToggle("fast", function () {
            $(this).show();
        });

    });


    $(":not(#menu)").click(function () {
        $(".submenu").hide();
    });


    //wait de seleccion de submenu
    $(".sub-menu").click(function () {
        waitModal(1);
    });

    /**
     * activo todos los tooltips del sistema
     */
    $("[title]").tooltip({
        track: true
    });

    $("#tabs, .tabs").tabs();

    $("input[type=submit], input[type=button],button:not(.ui-dialog-buttonset .ui-button),.btn:not(.nowait),.pagination").on('click', function () {
        //console.log('wait');
        //waitModal(1);
    });

    /**
     * campos fecha
     */
    $(".campo_fecha").datepicker();


    /**
     * ventana de ayuda
     */
    /*
     $("#ver_ayuda").click(function() {
     
     $("#dialog-message-info").dialog('open');
     
     });
     */
    // menu responsive

    var btn_movil = $('#nav-mobile'), menu = $('#menu').find('ul');

    // Al dar click agregar/quitar clases que permiten el despliegue del menú
    btn_movil.on('click', function (e) {
        e.preventDefault();

        var el = $(this);

        el.toggleClass('nav-active');
        menu.toggleClass('open-menu');
    });

    /**
     * manejadores para validacion html
     */

    /*
     $("form").click(function() {
     if (hasHtml5Validation()) {
     if ($(this)[0].checkValidity() !== true) {
     //apago la modal
     waitModal(0);
     }
     }
     
     });
     
     */

    /**
     *   avisos de cambios de datos de formularios
     *   sin guardar
     */
    $("form :input").change(function () {
        $(this).closest('form').data('changed', true);
    });

    /**
     * agregar la class checkChanged a los botones de formularios que correspondan
     */
//    $('.checkChanged').click(function(event) {
//        waitModal(0);
//        event.preventDefault();
//        var url = $(this).attr('href');
//        if ($(this).closest('form').data('changed')) {
//            var callback = "window.location.href='" + url + "'";
//            mensaje_usuario_confirma('Confirmación', 'Hubo cambios en los datos del formulario sin confirmar. ¿Desea continuar?', callback);
//        }
//    });

    $(".checkChanged").on("click", function (event) {
        waitModal(0);
        event.preventDefault();
        var url = $(this).attr('href');
        if ($(this).closest('form').data('changed')) {
            var callback = "window.location.href='" + url + "'";
            mensaje_usuario_confirma('Confirmación', 'Hubo cambios en los datos del formulario sin confirmar. ¿Desea continuar?', callback);
        } else {
            window.location.href = url;
        }
    });

});
