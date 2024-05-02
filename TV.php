<?php
include 'Nav.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="Style.css">

    <title>Movie App</title>

</head>

<body class=" mx-4">
    <div class="container ">
        <h3 class="heading">TV List</h2>
            <div class="row">

                <h4 class="my-5 text-light">TV Shows</h4>

                <div class="tVData moviefetchData">

                </div>
                <h4 class="my-5 text-light">Top Rated</h4>
                <div class="topRatedTV moviefetchData">

                </div>
                <h4 class="my-5 text-light">Popular</h4>
                <div class="popularTV moviefetchData">

                </div>


            </div>

    </div>


</body>
<script src=" API.js">
</script>

</html>