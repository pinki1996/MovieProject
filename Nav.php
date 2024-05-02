<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Style.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">


    <title>Movie App</title>

</head>

<body>
    <nav class="navbar navbar-expand-lg  border-bottom" data-bs-theme="dark">

        <div class="container sm:d-none">

            <div class=" headerNav ">
                <a href="index.php"><img class="" src="./logo.jpg" width="50" height="40" /></a>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-light"></span>
                </button>

            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav header">
                    <li class="active "><a href="index.php">Home</a></li>
                    <li class="active "><a href="Movie.php">Movie</a></li>
                    <li class="active "><a href="TV.php">Tv Shows</a></li>

                    <!-- <li>
                    <a class=" dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                    </a>
                    <ul class="dropdown-menu category" aria-labelledby="navbarDropdown">
                        <li>
                            <a href="Movie.php">Movies Section</a>
                        </li>


                        <hr />
                        <li>
                            <a href="Tv.php">TV Section</a>
                        </li>

                    </ul>
                </li> -->

                </ul>
                <form class="form-inline search">
                    <input class="form-control " type="search" placeholder="Search" onkeyup="showHint(this.value)" aria-label=" Search">
                </form>
            </div>
        </div>
        </li>




        </div>
    </nav>



</body>


</html>