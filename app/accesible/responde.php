<?php include'header.php' ?>

	<div class="container">
		<div class="small-container">
			<div class="page-content">
				<div aria-label="Bienvenido al centro de soporte del Gobierno de Santa Fe. Puede realizar consultas enviando audio o video a los siguientes medios:" role="group">
					<p>Bienvenido al centro de soporte del <strong>Gobierno de Santa Fe</strong>. Puede realizar consultas enviando audio o video a los siguientes medios:</p>
					<ul class="info-top">
						<li><span>Whatsapp</span></li>
						<li><a href="tel:+543424781130" class="number" aria-label="Número de Whatsapp">+54 342-4781130</a></li>
					</ul>
					<ul class="info-top">
						<li><span>Facebook Messenger</span></li>
						<li><a href="https://m.me/GobSantaFe/" target="_blank" aria-label="Facebook Messenger del Gobierno de Santa Fe">Gobierno de Santa Fe</a></li>
					</ul>
				</div>
			</div>
			<!--page-content-->

			<div class="formulario box" aria-label="También puede utilizar el siguiente formulario para contactarse con nosotros">
				<h5>Escríbanos</h5>
				<p>También puede utilizar el siguiente formulario para contactarse con nosotros.</p>
				<form>
					<ul>
						<li>
							<label for="nombre">Nombre</label>
							<input type="text" id="nombre" placeholder="">
						</li>
						<li>
							<label for="apellido">Apellido</label>
							<input type="text" id="apellido" placeholder="">
						</li>
						<li>
							<label for="email">Correo electrónico</label>
							<input type="email" id="email" placeholder="">
						</li>
						<li>
							<label for="dni">N° de documento</label>
							<input type="number" id="dni" placeholder="">
						</li>
						<li>
							<label for="telefono">Teléfono</label>
							<input type="number" id="telefono">
						</li>
						<li>
							<label for="provincia">Provincia</label>
							<select id="provincia" class="input">
								<option selected disabled>Seleccione su provincia</option>
								<option>Buenos Aires</option>
								<option>Catamarca</option>
								<option>Chaco</option>
								<option>Chubut</option>
								<option>Córdoba</option>
								<option>Corrientes</option>
								<option>Entre Ríos</option>
								<option>Formosa</option>
								<option>Jujuy</option>
								<option>La Pampa</option>
								<option>La Rioja</option>
								<option>Mendoza</option>
								<option>Misiones</option>
								<option>Neuquén</option>
								<option>Río Negro</option>
								<option>Salta</option>
								<option>San Juan</option>
								<option>San Luis</option>
								<option>Santa Cruz</option>
								<option>Santa Fe</option>
								<option>Santiago del Estero</option>
								<option>Tierra del Fuego</option>
								<option>Tucumán</option>
							</select>
						</li>
						<li>
							<label for="localidad">Localidad</label>
							<input type="text" id="localidad">
						</li>
						<li>
							<label for="motivo">Motivo</label>
							<select id="motivo" class="input">
								<option selected disabled>Seleccione el motivo de su mensaje</option>
								<option>Solicitar información</option>
								<option>Reportar problemas en la web</option>
								<option>Realizar sugerencias</option>
							</select>
						</li>
						<li>
							<label for="mensaje">Mensaje</label>
							<textarea id="mensaje" aria-label="Escriba su mensaje"></textarea>
						</li>
						<li>
							<input class="submit" type="submit" aria-label="Enviar formulario" value="Enviar">
						</li>
					</ul>
				</form>
			</div>	
			<!--box-formulario-->

			<div class="page-content" aria-label="Teléfonos en caso de emergencia">
				<p>También recuerde que puede utilizar los siguientes teléfonos en caso de emergencia:</p>
				<ul>
					<li><span>Central de emergencias</span></li>
					<li><a href="tel:911" class="number" aria-label="Central de emergencias 911">911</a></li>
				</ul>
				<ul>
					<li><span>Bomberos</span></li>
					<li><a href="tel:100" class="number" aria-label="Bomberos 100">100</a></li>
				</ul>
				<ul>
					<li><span>Emergencias médicas</span></li>
					<li><a href="tel:107" class="number" aria-label="Emergencias médicas 107">107</a></li>
				</ul>
				<ul>
					<li><span>Violencia de género</span></li>
					<li><a href="tel:144" class="number" aria-label="Violencia de género 144">144</a></li>
				</ul>
			</div>
			<!--page-content-->
		</div>
		<!--small-container-->
	</div>
	<!--container-->
	
<?php include'footer-responde.php' ?>
