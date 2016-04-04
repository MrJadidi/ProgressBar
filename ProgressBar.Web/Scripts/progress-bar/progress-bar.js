/// <reference path="../jquery-1.10.2.min.js" />

var phoenix;
(function (phoenix) {
    var progressBar = (function () {
        function progressBar() {
        }
        progressBar.setValue = function (value, elementId) {
            const $el = $("#" + elementId);
            let $el_p = $el.find("p");
            let changeColor = false;
            var currentValue = parseInt($el_p.html().replace('%', '')) + parseInt(value);
            if (currentValue < 0) {
                currentValue = 0;
            }
            $el_p.html(currentValue + " %");
            if (currentValue > 100) {
                currentValue = 100;
                changeColor = true;
            }
            let $bar = $el.find(".bar");
            $bar.css({ width: currentValue + "%" });
            if (changeColor) {
                $bar.addClass("err");
            } else {
                $bar.removeClass("err");
            }
        };
        return progressBar;
    })();
    phoenix.progressBar = progressBar;
})(phoenix || (phoenix = {}));
