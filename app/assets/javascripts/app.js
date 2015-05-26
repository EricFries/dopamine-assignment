/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, jquery:true, indent:4, maxerr:50, laxcomma:true, indent:false, unused: false */

;(function($, doc, win){
  "use strict";

  function init() {
    //Assign vars here
  }

  function listen() {
    //Listeners here
    $('#body')
      .on('click', '#x-btn-submit', 
        getPlaces);
  }

  function getPlaces(e){
    e.preventDefault();
    e.stopImmediatePropagation();

    var $btn = $(this),
        location = $('#location').val(),
        limit = "25";

    location = location.replace(" ","");

    var url = "/places/"+location;

    if (limit.length) {
      url += "/" + limit;
    }

    $.get(url, function(result){
      //empty the #results table
      //append the headers Name, Category, Cross Streets and Url
      //loop through the results and output them in the table
      //use jQuery or vanilla JS
      $("#results").empty();
      $("#x-btn-submit").html("Roll Again!");
      //Generates a random index number
      var randomIndexNumber=Math.floor(Math.random() * result.length);


      $("#results").append("<tr><th>Name</th><th>Category</th><th>Cross Streets</th><th>Url</th><th>Phone</th></tr>");

        // for (var i = 0; i < result.length; i++){
        // This loop could be uncommented and the all instances of "randomIndexNumber" could be changed back to "i" to go back to displaying 25 results.

      $("#results").append("<tr><th>" + result[randomIndexNumber].name + "</th>" + "<th>" + result[randomIndexNumber].category + "</th>" + "<th>" + result[randomIndexNumber].cross_streets + "</th>" + "<th>" + result[randomIndexNumber].url + "</th>" + "<th>" + result[randomIndexNumber].phone + "</th></tr>" );

      // }
    });

  }


  $(function(){
    init();
    listen();
  });
})(jQuery, document, window);
