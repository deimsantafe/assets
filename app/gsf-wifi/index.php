
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="standard/images/favicon.ico">

        <title>GSF Wi-Fi</title>

        <!-- Bootstrap core CSS -->
        <!--<link href="css/bootstrap.css" rel="stylesheet">-->
        <link type="text/css" href="standard/css/normalize.css" rel="stylesheet">
        <link type="text/css" href="standard/css/1140.css" rel="stylesheet">
        <link type="text/css" href="jquery-ui/jquery-ui-1.10.3/css/gobierno/jquery-ui-1.10.3.custom.css" rel="stylesheet">
        <link type="text/css" href="bootstrap/bootstrap-3.0.2-dist/tables-bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="standard/css/fonts.css">
        <link type="text/css" href="standard/css/styles-1.0.2.css" rel="stylesheet">
        <!--link href='http://fonts.googleapis.com/css?family=Asap:400,700' rel='stylesheet' type='text/css'-->

        <!-- Custom styles for this template -->
        <link href="css/gsfwifi.css" rel="stylesheet">

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body role="document" class="wifi" id="top">
        <div class="navbar navbar-sf navbar-fixed-top" role="navigation">
            <div class="container row-top">
                <div class="navbar-header">
                    <a class="navbar-brand" title="Portal del Gobierno de Santa Fe" href="//www.santafe.gob.ar"><img src="standard/images/gob-santafe.png" alt="Gobierno de Santa Fe"></a>                   
                    <div class="div_right" style="color:white;margin-top: 10px"><ul><li class="social-header"><a target="_blank" href="http://www.twitter.com/GobSantaFe"><i class="icon-twitter"></i></a><a target="_blank" href="http://www.facebook.com/GobSantaFe"><i class="icon-facebook"></i></a><a target="_blank" href="http://www.youtube.com/GobSantaFe"><i class="icon-youtube"></i></a></li></ul></div></div>

            </div>

        </div>

        <form name="frmLogin" id="frmLogin" action="process.php" method="POST" onSubmit="">
            <!--  Header -->



            <!--  END Header -->

            <!-- WI-FI  -->
            <div class="fondo-opaco">
                <div class="container">

                    <div class="acepta-wifi">

                        <img src="standard/images/gsf-wifi.png" alt="GSF-WIFI">
                        <h3>La conexión pública a internet del Gobierno de Santa Fe</h3>
                        <h4>¿Aceptas los <a href="#" onclick="window.open('terms.php');return false;">términos y condiciones</a> de uso del servicio?</h4>
                        <button class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" onclick="document.forms[0].submit();" role="button" aria-disabled="false"><span class="ui-button-text">Si, acepto</span></button> 
                    </div>
                </div>

            </div>
        </form>
        <!-- END WI-FI  -->
        <script src="jquery-ui/jquery-ui-1.10.3/js/jquery-1.11.1.min.js"></script>
        <script src="jquery-ui/jquery-ui-1.10.3/js/jquery-ui.min.js"></script>
        <script src="standard/js/interface.js"></script>

    </body>
</html>
