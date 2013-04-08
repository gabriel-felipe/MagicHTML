<?php
date_default_timezone_set("America/Sao_Paulo");
require_once("MagicHTML.php");
$html = new MagicHTML;
$html->add_css_linked("preview.css");
$content = <<<EOD
<div id="teste">
		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, asperiores, officiis, eligendi nihil eveniet error omnis facilis sit natus doloremque expedita provident est quo maxime nobis quibusdam minima eaque cupiditate.</p>
	</div>
EOD;
$html->set_content($content);
echo $html->create();
?>