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
        if (count > 4)
            first.disable = check(index);
        if (count == 9)
            first.disable = true;
    }
    first.ne = function() {

        first.disable = false;
        first.array = [];
        count = 0;
    }
    first.reset = function() {
        first.disable = false;
        first.array = [];
        count = 0;
        first.score1 = first.score2 = 0;
    }

    function check(index) {

        var indice = parseInt((parseInt(index / 3)) * 3);

        if (first.array[index] && first.array[(index + 3) % 9] && first.array[(index + 6) % 9] && (first.array[index].symbol == first.array[(index + 3) % 9].symbol && first.array[index].symbol == first.array[(index + 6) % 9].symbol)) {
            first.array[index].status = first.array[(index + 3) % 9].status = first.array[(index + 6) % 9].status = true;
            scored(first.array[index].symbol);
            return true;
        }
        if (first.array[0] && first.array[4] && first.array[8] && (first.array[0].symbol == first.array[4].symbol && first.array[0].symbol == first.array[8].symbol)) {
            first.array[0].status = first.array[4].status = first.array[8].status = true;
            scored(first.array[0].symbol);
            return true;
        }
        if (first.array[2] && first.array[4] && first.array[6] && (first.array[2].symbol == first.array[4].symbol && first.array[2].symbol == first.array[6].symbol)) {
            first.array[2].status = first.array[4].status = first.array[6].status = true;
            scored(first.array[2].symbol);
            return true;
        }
        if (first.array[indice] && first.array[indice + 1] && first.array[indice + 2] && (first.array[indice].symbol == first.array[indice + 1].symbol && first.array[indice].symbol == first.array[indice + 2].symbol)) {
            first.array[indice].status = first.array[indice + 1].status = first.array[indice + 2].status = true;
            scored(first.array[index].symbol);
            return true;

        } else
            return false;
    }

    function scored(symbol) {
        if (symbol == "O")
            first.score1++;
        else
            first.score2++;
    }
}