/// <reference path="../jquery-1.10.2.min.js" />
/// <reference path="../progress-bar/progress-bar.js" />

       $().ready(function () {
           $(".submit-progressbar").click(function () {
               phoenix.progressBar.setValue($(this).attr('data-value'), $("#select-progress").val());
           });
       });
 