MagicHTML
=========
<h1>What it does?</h1>
MagicHTML is a php class for html handling.
You can set metas, title and w/e. The idea is you have an OO html. 
<h2>Example of use:</h2>
<code>
require_once("MagicHTML.php"); <br />
$html = new MagicHTML; <br />
$html->add_css_linked("preview.css"); <br />
$content = file_get_contents("elquery-test.html"); <br />
$html->set_content($content);  <br />
echo $html->create(); <br />
</code>



An new way to write html / css, using php to parse and compile css first, building dynamic javascript codes, allowing you to code really faster.

Some stuff you can use on CSS's using MagicHTML
- All Less syntax
- Condicional structure (if,elif,else)
if $browser == 'IE' and $version <= 8:
  #header {width: 930px;}
  all css here
end
- Element Querys (Basic functions working) - The idea to implement this came after reading this post:
http://ianstormtaylor.com/media-queries-are-a-hack/

There's a lot of cool stuf, i'll write it here latter, when things be a little bit more done.

- Check test.php and css/preview.css to see the idea. 
