angular.module("game", [])
    .controller("firstCtrl", firstCtrl)

function firstCtrl() {
    var first = this;
    first.array = [];
    first.score1 = 0;
    first.score2 = 0;
    var count = 0;
    first.disable = false;

    first.click = function(index) {
        var obj = {};
        count++;


        if (count % 2 == 0)
            obj.symbol = 'X';
        else
            obj.symbol = 'O';


        first.array[index] = obj;


        if (count == 9)
            first.disable = true;


    }
    first.ne = function() {

        first.disable = false;
        first.array = [];

    }
}