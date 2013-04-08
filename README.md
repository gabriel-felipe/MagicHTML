MagicHTML
=========
<p>This is yet under development, so it will probably have some bugs. But it's a lot of fun already!</p>
<p>Some live <a href='http://gabrielfelipe.com/MagicHTML/test.php' target='_blank'>preview </a>
<h2>What it does?</h2>
MagicHTML is a php class for html handling.
<p>You can set metas, title and w/e. The idea is you have an OO html. </p>
<h3>Example of use:</h3>
<code>
require_once("MagicHTML.php"); <br />
$html = new MagicHTML;  <br />
$html->add_css_linked("preview.css"); <br />
$content = file_get_contents("elquery-test.html"); <br />
$html->set_content($content); <br />
echo $html->create(); <br />
</code>


<h2> Ok, but why? </h2>
<p>Check the fun part</p>
<h3> CSS </h3>
<p>It's boring and bad for us to write all our project css into one big file. But it's usual worse for the server to handle multiples requests of tiny little css. </p>

<p>MagicHTML fills this gap. It let you to write your modular css without causing troubles for your server. </p>
<h4>How?</h4>
<p>Before MagicHTML displays your page it checks the css's added to the page, and checks for a cache file that includes that expecific combination of css's.</p>
<p>If it doesn't find the cache file, it will make one. It will run file by file and minify it. After, it will generate one big file with the content of the small css's you like to read.</p>
<p>It compares the creation date of the cache file with the modification date of each file, so it will re-interprete the css after you update it</p>

<h3 id='funpart'>The fun part.</h3>
<p>Because we already interprete files from time to time, to minify them, we can add custom functions to css.</p>
<p>I'm talking about using all the Less syntax, without using a javascript library and with it saving client resources.</p>
<p>I'm talking about using condicionals like:</p>
<code>
	if $browser == 'IE' and $version <= 8: <br />
		#example {width: 400px;} <br />
	elif: $browser == 'IE' and $version > 8:<br />
		#example {width: 300px;} <br />
	else: <br />
		#example {width: 600px;}<br />
	end<br />
</code>
<p>And inspired by <a href='http://ianstormtaylor.com/media-queries-are-a-hack/' target='_blank'>this post</a> element querys like:</p>
<code>
	#teste@eq(min width 380){background: blue; border:3px solid black;}
	#teste@eq(min width 380) p{font-size:16px;}
</code>

<p>You can check css/preview.css so you can see the syntax we are working</p>

<h3> Javascript </h3>
<p>It, by default, positionate javascripts at the bottom of the page, so you can economize client resources.</p>
<p>Puts all inline javascript into one single block</p>

<h3> Modularity </h3>
<p>Originally i did this to use in a framework that i'm developing. It's incredbly easy to make it support templates and childrens, what i need, since i'm using mvc design pattern.</p>
<p> Even if you don't want to make it support templates in a OO way, you can always do something like this:</p>
<code>
require_once("MagicHTML.php"); <br />
$html = new MagicHTML; <br />
$html->add_css_linked("preview.css"); <br />
$header   = file_get_contents("header.html"); <br />
$content  = file_get_contents("content.html"); <br />
$footer   = file_get_contents("footer.html"); <br />
$content  = $header.$content.$footer <br />
$html->set_content($content); <br />
echo $html->create(); <br />
</code>



