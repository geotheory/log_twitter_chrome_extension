<!-- Example of server-side file to log reports. Requires file data.csv
in same directory that your server can write to. -->
<?php
	$myfile = fopen("data.csv", "a") or die("Unable to open file!");
	$txt = $_SERVER['QUERY_STRING'];
	fwrite($myfile, $txt. "\n");
	fclose($myfile);
	echo "<h1>done</h1>";
?>
