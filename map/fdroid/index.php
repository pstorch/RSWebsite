<?php
$fdroidBuildStatus = true;
$error = "";

try {
    $opts = [
        "http" => [
            "method" => "GET",
        ],
    ];

    $context = stream_context_create($opts);

    $fdroidBuildStatus = file_get_contents(
//        "https://f-droid.org/repo/status/running.json",
        "running.json",  // for local testing
        false,
        $context
    );
} catch (Exception $e) {
    $error = 'Error loading F-Droid build status: ' + $e;
}
?>
<!DOCTYPE html>
<html><head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta content="text/html; charset=UTF-8" http-equiv="content-type">
	<meta name="language" content="de">
	<title>F-Droid build status</title>
    <meta name="description" content="F-Droid build status">
    <script type="text/javascript">
        var error = "<?php echo $error; ?>";
        var fdroidBuildStatus = <?php echo $fdroidBuildStatus; ?>;
    </script>
    <script type="text/javascript" src="build-status.js"></script>
</head>
<body>
<div>

	<h1>F-Droid build status</h1>

    <div>Started: <span id="startTime"></span></div>
    <div>Ended: <span id="endTime"></span></div>
    <div>Successfull: <span id="successCount"></span></div>
    <div>Failed: <span id="failCount"></span></div>

    <input type="text" id="search"/><button onclick="search();">Search Package</button>

    <div id="result">
    </div>

</div>

</body></html>