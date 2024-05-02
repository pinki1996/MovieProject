const key = "851d0c667134afe80def78a2ea3d1e86";

const API = "https://api.themoviedb.org/3/discover/movie?api_key=";

const PopularMovie =
  "https://api.themoviedb.org/3/movie/popular?api_key=851d0c667134afe80def78a2ea3d1e86";

const PopularTV =
  "https://api.themoviedb.org/3/tv/popular?api_key=851d0c667134afe80def78a2ea3d1e86";

const topratedMovie =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=851d0c667134afe80def78a2ea3d1e86";

const topRatedTV =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=851d0c667134afe80def78a2ea3d1e86";

const TV =
  "https://api.themoviedb.org/3/discover/tv?api_key=851d0c667134afe80def78a2ea3d1e86";

const Image = "https://image.tmdb.org/t/p/w500/";

const searchMovie_API = "https://api.themoviedb.org/3/search/movie";
const searchTV_API = "https://api.themoviedb.org/3/search/tv";

let toprelatedTVId = document.getElementById("topRelatedTVID");
let fetchDataMovie = document.getElementById("movieData");

$(document).ready(function () {
  getdata();
  popular();
  top_rated();
  TVdata();
  popular_Tv();
  top_rated_tv();
});

// API fteching

function getdata() {
  $.ajax({
    type: "GET",
    url: API + key,
    success: function (response) {
      const result = response.results;
      $(".fetchData").html(response);
      // console.log(response);
      $.each(result, function (key, value) {
        // console.log(value);
        $(".fetchData").append(
          '<div id="movieData">' +
            " <img id='postarImg' src=" +
            Image +
            value["poster_path"] +
            "  /></div>"
        );
      });
    },
  });
}
function popular() {
  $.ajax({
    type: "GET",
    url: PopularMovie,
    success: function (response) {
      const result = response.results;
      // console.log(response);
      $.each(result, function (key, value) {
        // console.log(value);
        $(".popularMovie").append(
          '<div id="movieData">' +
            " <img id='postarImg' src=" +
            Image +
            value["poster_path"] +
            "  /></div>"
        );
      });
    },
  });
}
function top_rated() {
  $.ajax({
    type: "GET",
    url: topratedMovie,
    success: function (response) {
      const result = response.results;
      // console.log(response);
      $.each(result, function (key, value) {
        // console.log(value);
        $(".topRatedMovie").append(
          '<div id="movieData">' +
            " <img id='postarImg' src=" +
            Image +
            value["poster_path"] +
            "  /></div>"
        );
      });
    },
  });
}

function TVdata() {
  $.ajax({
    type: "GET",
    url: TV,
    success: function (response) {
      const result = response.results;
      // console.log(response);
      $.each(result, function (key, value) {
        // console.log(value);
        $(".tVData").append(
          '<div id="tvGridData">' +
            " <img id='tvImg' src=" +
            Image +
            value["poster_path"] +
            "  /> </div>"
        );
      });
    },
  });
}
function popular_Tv() {
  $.ajax({
    type: "GET",
    url: PopularTV,
    success: function (response) {
      const result = response.results;
      // console.log(response);
      $.each(result, function (key, value) {
        // console.log(value);
        $(".popularTV").append(
          '<div id="tvGridData">' +
            " <img id='tvImg' src=" +
            Image +
            value["poster_path"] +
            "  /> </div>"
        );
      });
    },
  });
}

function top_rated_tv() {
  $.ajax({
    type: "GET",
    url: topRatedTV,
    success: function (response) {
      const result = response.results;
      // console.log(response);
      $.each(result, function (key, value) {
        // console.log(value);
        $(".topRatedTV").append(
          '<div id="tvGridData">' +
            " <img id='tvImg' src=" +
            Image +
            value["poster_path"] +
            "  /><p> </div>"
        );
      });
    },
  });
}

// search

function showHint(str) {
  if (str.length == 0) {
    getdata();
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementsByClassName("search").innerHTML = setData;
        let data = JSON.parse(this.responseText);
        let setData = data.results;
        console.log(window.location.pathname);

        if (window.location.pathname == "/Movie/TV.php") {
          $(".tVData").html(setData);
          // console.log(div);

          $.each(setData, function (key, value) {
            $(".tVData").append(
              "<div >" +
                " <img id='postarImg' src=" +
                Image +
                value["poster_path"] +
                "  /></div>"
            );
          });
        } else {
          $(".fetchData").html(setData);
          // console.log(div);

          $.each(setData, function (key, value) {
            $(".fetchData").append(
              "<div >" +
                " <img id='postarImg' src=" +
                Image +
                value["poster_path"] +
                "  /></div>"
            );
          });
        }
      }
    };
    xmlhttp.open(
      "GET",
      searchMovie_API + "?query=" + str + "&api_key=" + key,
      true
    );
    xmlhttp.open(
      "GET",
      searchTV_API + "?query=" + str + "&api_key=" + key,
      true
    );
    xmlhttp.send();
  }
}
