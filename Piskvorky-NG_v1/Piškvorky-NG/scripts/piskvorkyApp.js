/*property
    PcPorovnavaciePole, bottom, bottomLeft, bottomRight, controller, getclick,
    hraciePole, index, indexPola, left, length, location, log, midle, module,
    porovnavaciePole, reload, right, stringify, top, topLeft, topRight,
    trustAsHtml, winUsr_1, winUsr_2, winUsr_3, winUsr_4, winUsr_5, winUsr_6,
    winUsr_7, winUsr_8, winner

    create Samuel Hudač;
*/

//samotny controller v ktorom sa bude vykonavat logika 
//pre samotnu hru piskvorky. funkcia sa vola z html tic_tac_toe
//akciou ng-click.
var piskvorky = angular.module("piskvorkyApp", []);

piskvorky.controller("piskvorkyController", function ($scope, $sce, $window, $timeout) {
    var index; // index oznacuje poradie v array do ktoreho sa bude zapisovat hodnota hracieho pola....
    var indexPola; // indexPola oznacuje danu hodnotu hracieho pola ktora sa zapise na dane miesto v Array....
    var hraciePole = Array;
    $scope.hraciePole = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    // event ktory sa vola po naloadovani stranky 
    // pokial si uzivatel nastavi ze zacian pc tak metoda to porovna a zacne pc 
    // ak uzivatel nastavi ze ma zacinat uzivatel alebo nenastavi nic  defaultne zacina uzivatel
    $window.onload = function (e) {
        var queryString = e.target.URL.split('=');
        if (queryString[2] == 'pc') {
            $timeout(function () {
                RunPcMove($scope, $sce, $window)
            }, 1500);
        }
        else {
            return;
        }
    }

    $scope.getclick = function () {

        switch ($scope.index) {
            case 0:
                if (JSON.stringify($scope.hraciePole[0]) == [0]) {
                    $scope.hraciePole[$scope.index] = $scope.indexPola;
                    $scope.topLeft = $sce.trustAsHtml("<div class='X'></div>");
                }
                else {
                    return;
                }
                break;
            case 1:
                if (JSON.stringify($scope.hraciePole[1]) == [0]) {
                    $scope.hraciePole[$scope.index] = $scope.indexPola;
                    $scope.top = $sce.trustAsHtml("<div class='X'></div>");
                }
                else {
                    return;
                }
                break;
            case 2:
                if (JSON.stringify($scope.hraciePole[2]) == [0]) {
                    $scope.hraciePole[$scope.index] = $scope.indexPola;
                    $scope.topRight = $sce.trustAsHtml("<div class='X'></div>");
                }
                else {
                    return;
                }
                break;
            case 3:
                if (JSON.stringify($scope.hraciePole[3]) == [0]) {
                    $scope.hraciePole[$scope.index] = $scope.indexPola;
                    $scope.left = $sce.trustAsHtml("<div class='X'></div>");
                }
                else {
                    return;
                }
                break;
            case 4:
                if (JSON.stringify($scope.hraciePole[4]) == [0]) {
                    $scope.hraciePole[$scope.index] = $scope.indexPola;
                    $scope.midle = $sce.trustAsHtml("<div class='X'></div>");
                }
                else {
                    return;
                }
                break;
            case 5:
                if (JSON.stringify($scope.hraciePole[5]) == [0]) {
                    $scope.hraciePole[$scope.index] = $scope.indexPola;
                    $scope.right = $sce.trustAsHtml("<div class='X'></div>");
                }
                else {
                    return;
                }
                break;
            case 6:
                if (JSON.stringify($scope.hraciePole[6]) == [0]) {
                    $scope.hraciePole[$scope.index] = $scope.indexPola;
                    $scope.bottomLeft = $sce.trustAsHtml("<div class='X'></div>");
                }
                else {
                    return;
                }
                break;
            case 7:
                if (JSON.stringify($scope.hraciePole[7]) == [0]) {
                    $scope.hraciePole[$scope.index] = $scope.indexPola;
                    $scope.bottom = $sce.trustAsHtml("<div class='X'></div>");
                }
                else {
                    return;
                }
                break;
            case 8:
                if (JSON.stringify($scope.hraciePole[8]) == [0]) {
                    $scope.hraciePole[$scope.index] = $scope.indexPola;
                    $scope.bottomRight = $sce.trustAsHtml("<div class='X'></div>");
                }
                else {
                    return;
                }
                break;
        }
        console.log($scope.hraciePole);
        RunCheckWin($scope, $scope.hraciePole, $sce, $window, $timeout);
    };
});

var RunCheckWin = function ($scope, hraciePole, $sce, $window, $timeout) {
    var porovnavaciePole = Array;
    // pole do ktoreho sa zapisu hodnoty s pola pre porovnavanie vyhernych kombinacii
    $scope.porovnavaciePole = [0, 0, 0];

    $scope.winUsr_1 = [1, 2, 3];
    $scope.winUsr_2 = [4, 5, 6];
    $scope.winUsr_3 = [7, 8, 9];
    $scope.winUsr_4 = [1, 4, 7];
    $scope.winUsr_5 = [2, 5, 8];
    $scope.winUsr_6 = [3, 6, 9];
    $scope.winUsr_7 = [3, 5, 7];
    $scope.winUsr_8 = [1, 5, 9];

    // kontrola prvej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 0; i <= 2; i++) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_1)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola druhej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 3; i <= 5; i++) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_2)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola tretej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 6; i <= 8; i++) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_3)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola stvrtej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 0; i < $scope.hraciePole.length; i = i + 3) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_4)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola piatej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 1; i < $scope.hraciePole.length; i = i + 3) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_5)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola siestej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 2; i < $scope.hraciePole.length; i = i + 3) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_6)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola siedmej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 2; i <= 7; i = i + 2) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_7)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola osmej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 0; i <= 8; i = i + 4) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_8)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    $timeout(function () { RunPcMove($scope, $sce, $window) }, 1500);
};

// metoda ktora sa vola ak sa najde vyherna kombinacia 
var getReturnWin = function ($scope, $sce, $window) {
    $scope.winner = $sce.trustAsHtml("<h1 style='color: white'>Výhra</h1>");
    $window.location.reload();
};

// metoda ktora ma na starosti tahy pocitaca
// avsak tato metoda vybera prve volne indexove miesto a do toho zapise hodnotu
var RunPcMove = function ($scope, $sce, $window) {

    for (var i = 0; i < 1; i++) {
        if (JSON.stringify($scope.hraciePole[0]) == 0) {
            $scope.hraciePole[0] = 11;
            $scope.topLeft = $sce.trustAsHtml("<div class='O'></div>");
            RunCheckPcWinn($scope, $scope.hraciePole, $sce, $window);
            return;
        }

        for (var i = 0; i < 1; i++) {
            if (JSON.stringify($scope.hraciePole[1]) == 0) {
                $scope.hraciePole[1] = 12;
                $scope.top = $sce.trustAsHtml("<div class='O'></div>");
                RunCheckPcWinn($scope, $scope.hraciePole, $sce, $window);
                return;
            }

            for (var i = 0; i < 1; i++) {
                if (JSON.stringify($scope.hraciePole[2]) == 0) {
                    $scope.hraciePole[2] = 13;
                    $scope.topRight = $sce.trustAsHtml("<div class='O'></div>");
                    RunCheckPcWinn($scope, $scope.hraciePole, $sce, $window);
                    return;
                }

                for (var i = 0; i < 1; i++) {
                    if (JSON.stringify($scope.hraciePole[3]) == 0) {
                        $scope.hraciePole[3] = 14;
                        $scope.left = $sce.trustAsHtml("<div class='O'></div>");
                        RunCheckPcWinn($scope, $scope.hraciePole, $sce, $window);
                        return;
                    }

                    for (var i = 0; i < 1; i++) {
                        if (JSON.stringify($scope.hraciePole[4]) == 0) {
                            $scope.hraciePole[4] = 15;
                            $scope.midle = $sce.trustAsHtml("<div class='O'></div>");
                            RunCheckPcWinn($scope, $scope.hraciePole, $sce, $window);
                            return;
                        }

                        for (var i = 0; i < 1; i++) {
                            if (JSON.stringify($scope.hraciePole[5]) == 0) {
                                $scope.hraciePole[5] = 16;
                                $scope.right = $sce.trustAsHtml("<div class='O'></div>");
                                RunCheckPcWinn($scope, $scope.hraciePole, $sce, $window);
                                return;
                            }

                            for (var i = 0; i < 1; i++) {
                                if (JSON.stringify($scope.hraciePole[6]) == 0) {
                                    $scope.hraciePole[6] = 17;
                                    $scope.bottomLeft = $sce.trustAsHtml("<div class='O'></div>");
                                    RunCheckPcWinn($scope, $scope.hraciePole, $sce, $window);
                                    return;
                                }

                                for (var i = 0; i < 1; i++) {
                                    if (JSON.stringify($scope.hraciePole[7]) == 0) {
                                        $scope.hraciePole[7] = 18;
                                        $scope.bottom = $sce.trustAsHtml("<div class='O'></div>");
                                        RunCheckPcWinn($scope, $scope.hraciePole, $sce, $window);
                                        return;
                                    }

                                    for (var i = 0; i < 1; i++) {
                                        if (JSON.stringify($scope.hraciePole[8]) == 0) {
                                            $scope.hraciePole[8] = 19;
                                            $scope.bottomRight = $sce.trustAsHtml("<div class='O'></div>");
                                            RunCheckPcWinn($scope, $scope.hraciePole, $sce, $window);
                                            return;
                                        }

                                    }

                                }

                            }

                        }

                    }

                }

            }

        }
    }
};

var RunCheckPcWinn = function ($scope, hraciePole, $sce, $window) {
    var porovnavaciePole = Array;
    // pole do ktoreho sa zapisu hodnoty s pola pre porovnavanie vyhernych kombinacii
    $scope.porovnavaciePole = [0, 0, 0];

    $scope.winUsr_1 = [11, 12, 13];
    $scope.winUsr_2 = [14, 15, 16];
    $scope.winUsr_3 = [17, 18, 19];
    $scope.winUsr_4 = [11, 14, 17];
    $scope.winUsr_5 = [12, 15, 18];
    $scope.winUsr_6 = [13, 16, 19];
    $scope.winUsr_7 = [13, 15, 17];
    $scope.winUsr_8 = [11, 15, 19];

    // kontrola prvej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 0; i <= 2; i++) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_1)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola druhej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 3; i <= 5; i++) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_2)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola tretej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 6; i <= 8; i++) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_3)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola stvrtej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 0; i < $scope.hraciePole.length; i = i + 3) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_4)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola piatej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 1; i < $scope.hraciePole.length; i = i + 3) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_5)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola siestej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 2; i < $scope.hraciePole.length; i = i + 3) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_6)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola siedmej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 2; i <= 7; i = i + 2) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_7)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }

    // kontrola osmej vyhernej kombinacie.
    // v pripade zhody vypiseme hlasku vyhra a nepokracujeme v dalsom hladani kombinacie
    // nakoniec reloadneme stranku
    for (j = 0; j < 1; j++) {
        var pocitadlo = 0;
        for (i = 0; i <= 8; i = i + 4) {
            $scope.porovnavaciePole[pocitadlo] = $scope.hraciePole[i];
            pocitadlo++;
        }
        if (JSON.stringify($scope.porovnavaciePole) == JSON.stringify($scope.winUsr_8)) {
            getReturnWin($scope, $sce, $window);
            return;
        }
    }
};