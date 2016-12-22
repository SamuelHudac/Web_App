/* Created by Samuel Hudač 2.11.2016 */

// Modul volany z html pre pocasie
var predpoved = angular.module("mainApp", []);
var latitude;
var longitude;

// Controller 
predpoved.controller("mainController", function ($http, $scope, $filter) {
    return $http.get('http://freegeoip.net/json/')
         .success(function (data) {
             console.log(data);
             $scope.getclick = function () { };
             $scope.mesto = data.city;
             $scope.krajina = data.country_code;
             latitude = data.latitude;
             longitude = data.longitude;
             GetPocasie($http, $scope, $filter);
         })
     .error(function (data, status) {
         console.log(status);
         console.log("Error occured");
     });
});

// Metoda ktora ziskava predpoved pocasia a nasledne z JSON formatu vybera co sa zobrazuje na stranke 
// http.get v nasledujucom formate vrati predpoved nacely tyzden vratane aktualneho dna
var GetPocasie = function ($http, $scope, $filter) {
    return $http.get('https://api.darksky.net/forecast/f38ea2c190740d76f23433d73dc032fa/' + latitude + "," + longitude + "?lang=sk&units=si&extendet=hourly")
        .success(function (data) {
            console.log(data);
            // udaje pocasie pre aktualny den.
            $scope.teplota_Actual = data.currently.temperature + "°C";
            $scope.teplota_Today = data.daily.data[0].temperatureMin + " / " + data.daily.data[1].temperatureMax + "°C";
            $scope.podnebie_Actual = data.currently.summary;
            var actualDen = new Date(data.currently.time * 1000);
            $scope.Svk_Actual_Den = getPrekladDen($filter("date")(actualDen, "EEEE"));
            $scope.Datum_Actual = $filter("date")(data.currently.time * 1000, "  d.M");

            var ikona = data.currently.icon;
            if (ikona == "partly-cloudy-day" || ikona == "cloudy" || ikona == "partly-cloudy-night") {
                $scope.ikona_Actual = "cloudy";
            }
            else if (ikona == "rain") {
                $scope.ikona_Actual = "rain";
            }
            else if (ikona == "sleet" || ikona == "hail" || ikona == "thunderstorm") {
                $scope.ikona_Actual = "storm";
            }
            else if (ikona == "clear-day") {
                $scope.ikona_Actual = "sunny";
            }
            else if (ikona == "clear-night") {
                $scope.ikona_Actual = "moon";
            }
            else if (ikona == "snow") {
                $scope.ikona_Actual = "snow";
            }
            else if (ikona == "wind" || ikona == "tornado") {
                $scope.ikona_Actual = "tornado";
            }
            else if (ikona == "fog") {
                $scope.ikona_Actual = "fog";
            }

            var skycons = new Skycons({ "color": "black" });

            // udaje pre nasledujuci den
            $scope.teplota_First = data.daily.data[1].temperatureMin + " / " + data.daily.data[1].temperatureMax + "°C";
            $scope.podnebie_First = data.daily.data[1].summary;
            var prvyDen = new Date(data.daily.data[1].time * 1000);
            $scope.Svk_Prvy_Den = getPrekladDen($filter("date")(prvyDen, "EEEE"));
            $scope.Datum_First = $filter("date")(data.daily.data[1].time * 1000, "  d.M");

            var icon_1 = data.daily.data[1].icon;
            if (icon_1 == "partly-cloudy-day") {
                skycons.add("icon", Skycons.PARTLY_CLOUDY_DAY);
                skycons.play();
            }
            else if (icon_1 == "partly-cloudy-night") {
                skycons.add("icon", Skycons.PARTLY_CLOUDY_NIGHT);
                skycons.play();
            }
            else if (icon_1 == "cloudy") {
                skycons.add("icon", Skycons.CLOUDY);
                skycons.play();
            }
            else if (icon_1 == "rain") {
                skycons.add("icon", Skycons.RAIN);
                skycons.play();
            }
            else if (icon_1 == "sleet" || icon_1 == "hail" || icon_1 == "thunderstorm") {
                skycons.add("icon", Skycons.SLEET);
                skycons.play();
            }
            else if (icon_1 == "clear-day") {
                skycons.add("icon", Skycons.CLEAR_DAY);
                skycons.play();
            }
            else if (icon_1 == "clear-night") {
                skycons.add("icon", Skycons.CLEAR_NIGHT);
                skycons.play();
            }
            else if (icon_1 == "snow") {
                skycons.add("icon", Skycons.SNOW);
                skycons.play();
            }
            else if (icon_1 == "wind" || icon_1 == "tornado") {
                skycons.add("icon", Skycons.WIND);
                skycons.play();
            }
            else if (icon_1 == "fog") {
                skycons.add("icon", Skycons.FOG);
                skycons.play();
            }

            // udaje pre pocasie pre druhy den
            $scope.teplota_Second = data.daily.data[2].temperatureMin + " / " + data.daily.data[2].temperatureMax + "°C";
            $scope.podnebie_Second = data.daily.data[2].summary;
            var druhyDen = new Date(data.daily.data[2].time * 1000);
            $scope.Svk_Druhy_Den = getPrekladDen($filter("date")(druhyDen, "EEEE"));
            $scope.Datum_Second = $filter("date")(data.daily.data[2].time * 1000, "  d.M");

            var icon_2 = data.daily.data[2].icon;
            if (icon_2 == "partly-cloudy-day") {
                skycons.add("icon2", Skycons.PARTLY_CLOUDY_DAY);
                skycons.play();
            }
            else if (icon_2 == "partly-cloudy-night") {
                skycons.add("icon2", Skycons.PARTLY_CLOUDY_NIGHT);
                skycons.play();
            }
            else if (icon_2 == "cloudy") {
                skycons.add("icon2", Skycons.CLOUDY);
                skycons.play();
            }
            else if (icon_2 == "rain") {
                skycons.add("icon2", Skycons.RAIN);
                skycons.play();
            }
            else if (icon_2 == "sleet" || icon_2 == "hail" || icon_2 == "thunderstorm") {
                skycons.add("icon2", Skycons.SLEET);
                skycons.play();
            }
            else if (icon_2 == "clear-day") {
                skycons.add("icon2", Skycons.CLEAR_DAY);
                skycons.play();
            }
            else if (icon_2 == "clear-night") {
                skycons.add("icon2", Skycons.CLEAR_NIGHT);
                skycons.play();
            }
            else if (icon_2 == "snow") {
                skycons.add("icon2", Skycons.SNOW);
                skycons.play();
            }
            else if (icon_2 == "wind" || icon_2 == "tornado") {
                skycons.add("icon2", Skycons.WIND);
                skycons.play();
            }
            else if (icon_2 == "fog") {
                skycons.add("icon2", Skycons.FOG);
                skycons.play();
            }

            // udaje pre pocasie pre treti den
            $scope.teplota_Third = data.daily.data[3].temperatureMin + " / " + data.daily.data[3].temperatureMax + "°C";
            $scope.podnebie_Third = data.daily.data[3].summary;
            var tretiDen = new Date(data.daily.data[3].time * 1000);
            $scope.Svk_Treti_Den = getPrekladDen($filter("date")(tretiDen, "EEEE"));
            $scope.Datum_Third = $filter("date")(data.daily.data[3].time * 1000, "  d.M");

            var icon_3 = data.daily.data[3].icon;
            if (icon_3 == "partly-cloudy-day") {
                skycons.add("icon3", Skycons.PARTLY_CLOUDY_DAY);
                skycons.play();
            }
            else if (icon_3 == "partly-cloudy-night") {
                skycons.add("icon3", Skycons.PARTLY_CLOUDY_NIGHT);
                skycons.play();
            }
            else if (icon_3 == "cloudy") {
                skycons.add("icon3", Skycons.CLOUDY);
                skycons.play();
            }
            else if (icon_3 == "rain") {
                skycons.add("icon3", Skycons.RAIN);
                skycons.play();
            }
            else if (icon_3 == "sleet" || icon_3 == "hail" || icon_3 == "thunderstorm") {
                skycons.add("icon3", Skycons.SLEET);
                skycons.play();
            }
            else if (icon_3 == "clear-day") {
                skycons.add("icon3", Skycons.CLEAR_DAY);
                skycons.play();
            }
            else if (icon_3 == "clear-night") {
                skycons.add("icon3", Skycons.CLEAR_NIGHT);
                skycons.play();
            }
            else if (icon_3 == "snow") {
                skycons.add("icon3", Skycons.SNOW);
                skycons.play();
            }
            else if (icon_3 == "wind" || icon_3 == "tornado") {
                skycons.add("icon3", Skycons.WIND);
                skycons.play();
            }
            else if (icon_3 == "fog") {
                skycons.add("icon3", Skycons.FOG);
                skycons.play();
            }

            // udaje pre pocasie pre stvrty den
            $scope.teplota_Fourth = data.daily.data[4].temperatureMin + " / " + data.daily.data[4].temperatureMax + "°C";
            $scope.podnebie_Fourth = data.daily.data[4].summary;
            var stvrtyDen = new Date(data.daily.data[4].time * 1000);
            $scope.Svk_Stvrty_Den = getPrekladDen($filter("date")(stvrtyDen, "EEEE"));
            $scope.Datum_Fourth = $filter("date")(data.daily.data[4].time * 1000, "  d.M");

            var icon_4 = data.daily.data[4].icon;
            if (icon_4 == "partly-cloudy-day") {
                skycons.add("icon4", Skycons.PARTLY_CLOUDY_DAY);
                skycons.play();
            }
            else if (icon_4 == "partly-cloudy-night") {
                skycons.add("icon4", Skycons.PARTLY_CLOUDY_NIGHT);
                skycons.play();
            }
            else if (icon_4 == "cloudy") {
                skycons.add("icon4", Skycons.CLOUDY);
                skycons.play();
            }
            else if (icon_4 == "rain") {
                skycons.add("icon4", Skycons.RAIN);
                skycons.play();
            }
            else if (icon_4 == "sleet" || icon_4 == "hail" || icon_4 == "thunderstorm") {
                skycons.add("icon4", Skycons.SLEET);
                skycons.play();
            }
            else if (icon_4 == "clear-day") {
                skycons.add("icon4", Skycons.CLEAR_DAY);
                skycons.play();
            }
            else if (icon_4 == "clear-night") {
                skycons.add("icon4", Skycons.CLEAR_NIGHT);
                skycons.play();
            }
            else if (icon_4 == "snow") {
                skycons.add("icon4", Skycons.SNOW);
                skycons.play();
            }
            else if (icon_4 == "wind" || icon_4 == "tornado") {
                skycons.add("icon4", Skycons.WIND);
                skycons.play();
            }
            else if (icon_4 == "fog") {
                skycons.add("icon4", Skycons.FOG);
                skycons.play();
            }

            // udaje pre pocasie pre piaty den
            $scope.teplota_Fifth = data.daily.data[5].temperatureMin + " / " + data.daily.data[5].temperatureMax + "°C";
            $scope.podnebie_Fifth = data.daily.data[5].summary;
            var piatyDen = new Date(data.daily.data[5].time * 1000);
            $scope.Svk_Piaty_Den = getPrekladDen($filter("date")(piatyDen, "EEEE"));
            $scope.Datum_Fifth = $filter("date")(data.daily.data[5].time * 1000, "  d.M");

            var icon_5 = data.daily.data[5].icon;
            if (icon_5 == "partly-cloudy-day") {
                skycons.add("icon5", Skycons.PARTLY_CLOUDY_DAY);
                skycons.play();
            }
            else if (icon_5 == "partly-cloudy-night") {
                skycons.add("icon5", Skycons.PARTLY_CLOUDY_NIGHT);
                skycons.play();
            }
            else if (icon_5 == "cloudy") {
                skycons.add("icon5", Skycons.CLOUDY);
                skycons.play();
            }
            else if (icon_5 == "rain") {
                skycons.add("icon5", Skycons.RAIN);
                skycons.play();
            }
            else if (icon_5 == "sleet" || icon_5 == "hail" || icon_5 == "thunderstorm") {
                skycons.add("icon5", Skycons.SLEET);
                skycons.play();
            }
            else if (icon_5 == "clear-day") {
                skycons.add("icon5", Skycons.CLEAR_DAY);
                skycons.play();
            }
            else if (icon_5 == "clear-night") {
                skycons.add("icon5", Skycons.CLEAR_NIGHT);
                skycons.play();
            }
            else if (icon_5 == "snow") {
                skycons.add("icon5", Skycons.SNOW);
                skycons.play();
            }
            else if (icon_5 == "wind" || icon_5 == "tornado") {
                skycons.add("icon5", Skycons.WIND);
                skycons.play();
            }
            else if (icon_5 == "fog") {
                skycons.add("icon5", Skycons.FOG);
                skycons.play();
            }

            // udaje pre pocasie pre siesty den
            $scope.teplota_Sixth = data.daily.data[6].temperatureMin + " / " + data.daily.data[6].temperatureMax + "°C";
            $scope.podnebie_Sixth = data.daily.data[6].summary;
            var siestyDen = new Date(data.daily.data[6].time * 1000);
            $scope.Svk_Siesty_Den = getPrekladDen($filter("date")(siestyDen, "EEEE"));
            $scope.Datum_Sixth = $filter("date")(data.daily.data[6].time * 1000, "  d.M");

            var icon_6 = data.daily.data[6].icon;
            if (icon_6 == "partly-cloudy-day") {
                skycons.add("icon6", Skycons.PARTLY_CLOUDY_DAY);
                skycons.play();
            }
            else if (icon_6 == "partly-cloudy-night") {
                skycons.add("icon6", Skycons.PARTLY_CLOUDY_NIGHT);
                skycons.play();
            }
            else if (icon_6 == "cloudy") {
                skycons.add("icon6", Skycons.CLOUDY);
                skycons.play();
            }
            else if (icon_6 == "rain") {
                skycons.add("icon6", Skycons.RAIN);
                skycons.play();
            }
            else if (icon_6 == "sleet" || icon_6 == "hail" || icon_6 == "thunderstorm") {
                skycons.add("icon6", Skycons.SLEET);
                skycons.play();
            }
            else if (icon_6 == "clear-day") {
                skycons.add("icon6", Skycons.CLEAR_DAY);
                skycons.play();
            }
            else if (icon_6 == "clear-night") {
                skycons.add("icon6", Skycons.CLEAR_NIGHT);
                skycons.play();
            }
            else if (icon_6 == "snow") {
                skycons.add("icon6", Skycons.SNOW);
                skycons.play();
            }
            else if (icon_6 == "wind" || icon_6 == "tornado") {
                skycons.add("icon6", Skycons.WIND);
                skycons.play();
            }
            else if (icon_6 == "fog") {
                skycons.add("icon6", Skycons.FOG);
                skycons.play();
            }
        })
            .error(function (data, status) {
                console.log(status);
                console.log("Error occured");
            });
};

// metoda na preklad dna v tyzdni ktory som ziskal s prevodu unixtimestamp v milisekundach
// do metody posielam den v tyzdni v anglickom jazyku.
var getPrekladDen = function (den_v_tyzdni) {
    if (den_v_tyzdni == "Monday") {
        return "Pondelok";
    }
    else if (den_v_tyzdni == "Tuesday") {
        return "Utorok";
    }
    else if (den_v_tyzdni == "Wednesday") {
        return "Streda";
    }
    else if (den_v_tyzdni == "Thursday") {
        return "Štvrtok";
    }
    else if (den_v_tyzdni == "Friday") {
        return "Piatok";
    }
    else if (den_v_tyzdni == "Saturday") {
        return "Sobota";
    }
    else if (den_v_tyzdni == "Sunday") {
        return "Nedela";
    }
    else {
        return "N/A";
    }
}

//Funkcia ktora sa vola z modalneho okna po stlaceni tlacidla hrat. 
//Vola sa koli tomu aby sme preniesli meno hraca z textarea z modalneho okna 
//do dalsieho viewu a tam sa zapise. 
//funguje to tak ze v linku zapiseme danu hodnotu ktoru v novom viewe rozparsujeme a zapiseme podla idcka do spanu.

$(function () {
    $("#btnQueryString").bind("click", function () {
        var url = "/Tic_Tac_Toe/tic_tac_toe?usr=" + encodeURIComponent($("#usr").val()) + "&hrac=" + encodeURIComponent($("input[name='zacina']:checked").val());
        window.location.href = url;
    });
});

var queryString = new Array();
$(function () {
    if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }

    if (queryString["usr"] != null) {
        var data = " ";
        data += "<b>Vitajte:  </b>" + queryString["usr"];
        $("#menoHraca").html(data);
    }

    if (queryString["hrac"] != null) {
        if (queryString["hrac"] == "usr") {
            var data = " ";
            data += "<b>Začína:  </b>" + "Používateľ";
            $("#zacina").html(data);
        }

        if (queryString["hrac"] == "pc") {
            var data = " ";
            data += "<b>Začína:  </b>" + "Počítač";
            $("#zacina").html(data);
        }
    }
});

//Funkcia ktora sa vola z modalneho okna po stlaceni tlacidla zobrazit Kurzovy listok. 
$(function () {
    $("#btnQueryString_KL").bind("click", function () {
        var url = "/KurzovyListok/KurzovyListok";
        window.location.href = url;
    });
});

//Funkcia ktora sa vola z modalneho okna po stlaceni tlacidla zobrazit. 
$(function () {
    $("#btnQueryString_D").bind("click", function () {
        var buttonValue = decodeURIComponent($("#zoz").val());
        if (buttonValue == "Daňový úrad") {
            window.location.href = "/DanovyUrad/DanovyUrad";
        }
        else if (buttonValue == "Sociálna poisťovňa") {
            window.location.href = "/SocialnaPoistovna/SocialnaPoistovna";
        }
        else if (buttonValue == "VšZP - samoplatitelia") {
            window.location.href = "/VsZP_Samoplatitelia/VsZP_Samoplatitelia";
        }
        else if (buttonValue == "VšZP - zamestnávatelia") {
            window.location.href = "/VsZP_Zamestnavatelia/VsZP_Zamestnavatelia";
        }
        else if (buttonValue == "ZP - union") {
            window.location.href = "/Union/Union";
        }
    });
});
