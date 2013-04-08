<?php
date_default_timezone_set("America/Sao_Paulo");
require_once("MagicHTML.php");

$html = new MagicHTML;
$html->add_css_linked("preview.css");
$content = file_get_contents("elquery-test.html");
$html->set_content($content);
echo $html->create();
?>