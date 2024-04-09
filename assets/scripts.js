$(document).ready(function () {
  var apiKey = "50f78d1c2b7db1c68f2f1506a86ef4b9"; // Replace 'YOUR_API_KEY' with your actual API key
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=" +
    apiKey +
    "&units=metric";
  console.log(apiUrl);

  $.ajax({
    url: apiUrl,
    type: "GET",
    success: function (response) {
      $("#location").text(response.name);
      $("#weather-condition").text(response.weather[0].description);
      $("#temperature").text(response.main.temp + "°C");
      $("#weather-icon").html(
        '<img src="http://openweathermap.org/img/wn/' +
          response.weather[0].icon +
          '.png">'
      );
    },
    error: function (err) {
      console.log(err);
    },
  });
});
