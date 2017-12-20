	<footer class="site-footer">
	    <div class="container">
	        <div class="footer-social">
	         	<p><a href="http://santafe.gov.ar/index.php/web/content/view/full/117678"><strong>RSS / Suscripci&oacute;n a noticias</strong></a></p>
	         	<ul>
	                <li><a target="_blank" aria-label="Twitter" href="http://www.twitter.com/GobSantaFe"><i class="icon-twitter"></i></a></li>
	                <li><a target="_blank" aria-label="Facebook" href="http://www.facebook.com/GobSantaFe"><i class="icon-facebook"></i></a></li>
	                <li><a target="_blank" aria-label="Google Plus" href="http://gplus.to/GobSantaFe"><i class="icon-gplus"></i></a></li>
	                <li><a target="_blank" aria-label="Tumblr" href="http://gobsantafe.tumblr.com/"><i class="icon-tumblr"></i></a></li>
	                <li><a target="_blank" aria-label="Youtube" href="http://www.youtube.com/GobSantaFe"><i class="icon-youtube"></i></a></li>
	                <li><a target="_blank" aria-label="Instagram" href="http://instagram.com/gobsantafe"><i class="icon-instagram"></i></a></li>
	                <li><a target="_blank" aria-label="Foursquare" href="https://es.foursquare.com/gobsantafe"><i class="icon-foursquare"></i></a></li>
	                <li><a target="_blank" aria-label="Storify" href="https://storify.com/GobSantaFe"><i class="icon-storify"></i></a></li>
	                <li><a target="_blank" aria-label="Linkedin" href="http://www.linkedin.com/company/gobierno-de-la-provincia-de-santa-fe"><i class="icon-linkedin"></i></a></li>
	         	</ul>
	        </div>
	        <div class="footer-datos" aria-label="Datos">
	        	<div class="logo-footer"></div>
				<p>Atenci&oacute;n telef&oacute;nica: 0800-777-0801<br/>Lunes a viernes de 8 a 18 hs<br/>&copy; Atribuci&oacute;n-CompartirIgual 2.5 Argentina
				</p>
	    	</div>
	    </div>
		<!--/container-->
	</footer>
	<!--/site-footer--> 

<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="js/app.min.js"></script>


<script type="text/javascript">
$(document).ready(function() { 

	$('#incfont').on('click', function (e) {
	   e.preventDefault();
	   curSize = parseInt($('a').css('font-size')) + 2;
	   curSize <= 36 && $('a').css('font-size', curSize);
	});

	$('#decfont').on('click', function (e) {
	   e.preventDefault();
	   curSize = parseInt($('a').css('font-size')) - 2,
	   curSize >= 16 && $('a').css('font-size', curSize);
	});

});
</script>

</body>
</html>
