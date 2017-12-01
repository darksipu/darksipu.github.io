/**
 * Created by florin on 05/11/2017.
 */


$( document ).ready(function() {

    var number3rd = document.getElementById("descriptions-3rd").childElementCount;
    var number4th = document.getElementById("descriptions-4th").childElementCount;
    var numberwebsite = document.getElementById("descriptions-website").childElementCount;
    var numbergames = document.getElementById("descriptions-games").childElementCount;
    var numberhatch = document.getElementById("descriptions-hatch").childElementCount;

    // console.log(number3rd);
    // console.log(number4th);
    // console.log(numberwebsite);
    // console.log(numbergames);
    // console.log(numberhatch);


    $("#about").click(function(){

        $("#pictures").children().hide();
        $("#descriptions").children().hide();

        $("#pictures-intro").show();
        $("#introbit").fadeIn('slow');


    });


//---------------------------------------3rd year section button actions
    $("#3rd").click(function(){

        $("#pictures").children().hide();
        $("#descriptions").children().hide();

        $("#pictures-3rd").fadeIn();
        $("#descriptions-3rd").fadeIn('slow');

        $("#descriptions-3rd").children().slice(1,number3rd).hide();
        $("#descriptions-3rd").children().slice(0,1).children().css("opacity", "1");
        $("#button-3rd1").css("opacity", "0.7");
        $("#descriptions-3rd").children().slice(1,2).fadeIn(2300);

    });

    //activates the first button
    $("#button-3rd1").click(function(){

        $("#descriptions-3rd").children().slice(0,1).children().css("opacity", "1");
        $("#button-3rd1").css("opacity", "0.7");

        $("#descriptions-3rd").children().slice(1,number3rd).hide();
        $("#descriptions-3rd").children().slice(1,2).fadeIn(1500);

    });

    $("#button-3rd2").click(function(){
        $("#descriptions-3rd").children().slice(0,1).children().css("opacity", "1");
        $("#button-3rd2").css("opacity", "0.7");

        $("#descriptions-3rd").children().slice(1,number3rd).hide();
        $("#descriptions-3rd").children().slice(2,3).fadeIn(1500);

    });

    $("#button-3rd3").click(function(){
        $("#descriptions-3rd").children().slice(0,1).children().css("opacity", "1");
        $("#button-3rd3").css("opacity", "0.7");

        $("#descriptions-3rd").children().slice(1,number3rd).hide();
        $("#descriptions-3rd").children().slice(3,4).fadeIn(1500);

    });

    $("#button-3rd4").click(function(){
        $("#descriptions-3rd").children().slice(0,1).children().css("opacity", "1");
        $("#button-3rd4").css("opacity", "0.7");

        $("#descriptions-3rd").children().slice(1,number3rd).hide();
        $("#descriptions-3rd").children().slice(number3rd-1,number3rd).fadeIn(1500);

    });

//---------------------------------------ML section button actions
    $("#4th").click(function(){

        $("#pictures").children().hide();
        $("#descriptions").children().hide();

        $("#pictures-4th").show();
        $("#pictures-4th").children().slice(0,2).hide();
        $("#pictures-4th").children().slice(0,1).fadeIn(1900);

        $("#descriptions-4th").fadeIn('slow');

        $("#descriptions-4th").children().slice(1,number4th).hide();
        $("#descriptions-4th").children().slice(0,1).children().css("opacity", "1");
        $("#button-4th1").css("opacity", "0.7");
        $("#descriptions-4th").children().slice(1,2).fadeIn(2300);

    });

    //activates the first button
    $("#button-4th1").click(function(){
        $("#descriptions-4th").children().slice(0,1).children().css("opacity", "1");
        $("#button-4th1").css("opacity", "0.7");

        $("#descriptions-4th").children().slice(1,number4th).hide();
        $("#descriptions-4th").children().slice(1,2).fadeIn(1500);

    });

    $("#button-4th2").click(function(){
        $("#descriptions-4th").children().slice(0,1).children().css("opacity", "1");
        $("#button-4th2").css("opacity", "0.7");

        $("#pictures-4th").children().hide();

        $("#pictures-4th").children().slice(1,2).fadeIn();
        $("#descriptions-4th").children().slice(1,number4th).hide();
        $("#descriptions-4th").children().slice(2,3).fadeIn(1500);

    });

    $("#button-4th3").click(function(){
        $("#descriptions-4th").children().slice(0,1).children().css("opacity", "1");
        $("#button-4th3").css("opacity", "0.7");

        $("#descriptions-4th").children().slice(1,number4th).hide();
        $("#descriptions-4th").children().slice(3,4).fadeIn(1500);

    });

    $("#button-4th4").click(function(){
        $("#descriptions-4th").children().slice(0,1).children().css("opacity", "1");
        $("#button-4th4").css("opacity", "0.7");

        $("#descriptions-4th").children().slice(1,number4th).hide();
        $("#descriptions-4th").children().slice(number4th-1,number4th).fadeIn(1500);

    });


//---------------------------------------games section button actions

    //navbar that'll display the intro
    $("#games").click(function(){

    //clear sides
        $("#descriptions").children().hide();
        $("#pictures").children().hide();

        $("#pictures-games").show();
        $("#pictures-games").children().slice(0,2).hide();
        $("#pictures-games").children().slice(0,1).fadeIn(1900);

        $("#descriptions-games").fadeIn(2300);

        $("#descriptions-games").children().slice(1,numbergames).hide();
        $("#descriptions-games").children().slice(0,1).children().css("opacity", "1");
        $("#button-games1").css("opacity", "0.7");

        $("#descriptions-games").children().slice(1,2).fadeIn(2300);


    });

    //activates the first button
    $("#button-games1").click(function(){
        $("#descriptions-games").children().slice(0,1).children().css("opacity", "1");
        $("#button-games1").css("opacity", "0.7");

        $("#descriptions-games").children().slice(1,numbergames).hide();
        $("#pictures-games").children().slice(0,2).hide();

        $("#pictures-games").children().slice(0,1).fadeIn();
        $("#descriptions-games").children().slice(1,2).fadeIn(1500);

    });

    //activates the second button
    $("#button-games2").click(function(){
        $("#descriptions-games").children().slice(0,1).children().css("opacity", "1");
        $("#button-games2").css("opacity", "0.7");

        $("#descriptions-games").children().slice(1,numbergames).hide();

        $("#pictures-games").children().slice(0,2).hide();

        $("#pictures-games").children().slice(1,2).fadeIn();

        $("#descriptions-games").children().slice(2,3).fadeIn(1500);
    });

    //activates the third button
    $("#button-games3").click(function(){
        $("#descriptions-games").children().slice(0,1).children().css("opacity", "1");
        $("#button-games3").css("opacity", "0.7");

        $("#descriptions-games").children().slice(1,numbergames).hide();

        $("#descriptions-games").children().slice(3,4).fadeIn(1500);
    });

    $("#button-games4").click(function(){
        $("#descriptions-games").children().slice(0,1).children().css("opacity", "1");
        $("#button-games4").css("opacity", "0.7");

        $("#descriptions-games").children().slice(1,numbergames).hide();

        $("#descriptions-games").children().slice(numbergames-1, numbergames).fadeIn(1500);
    });

//---------------------------------------website section button actions
    $("#website").click(function(){

        $("#pictures").children().hide();
        $("#descriptions").children().hide();

        $("#pictures-website").fadeIn();
        $("#pictures-website").children().slice(0,4).hide();
        $("#pictures-website").children().slice(0,1).fadeIn();

        $("#descriptions-website").fadeIn(2300);

        $("#descriptions-website").children().slice(1,numberwebsite).hide();
        $("#descriptions-website").children().slice(0,1).children().css("opacity", "1");
        $("#button-website1").css("opacity", "0.7");
        $("#descriptions-website").children().slice(1,2).fadeIn(2300);

    });

    //activates the first button
    $("#button-website1").click(function(){
        $("#descriptions-website").children().slice(0,1).children().css("opacity", "1");
        $("#button-website1").css("opacity", "0.7");
        $("#descriptions-website").children().slice(1,numberwebsite).hide();

        $("#pictures-website").children().slice(0,4).hide();

        $("#pictures-website").children().slice(0,1).fadeIn();
        $("#descriptions-website").children().slice(1,2).fadeIn(1500);


    });

    //activates the second button
    $("#button-website2").click(function(){
        $("#descriptions-website").children().slice(0,1).children().css("opacity", "1");
        $("#button-website2").css("opacity", "0.7");
        $("#descriptions-website").children().slice(1,numberwebsite).hide();
        $("#pictures-website").children().slice(0,4).hide();

        $("#pictures-website").children().slice(1,2).fadeIn();

        $("#descriptions-website").children().slice(2,3).fadeIn(1500);

    });

    //activates the third button
    $("#button-website3").click(function(){
        $("#descriptions-website").children().slice(0,1).children().css("opacity", "1");
        $("#button-website3").css("opacity", "0.7");
        $("#descriptions-website").children().slice(1,numberwebsite).hide();
        $("#pictures-website").children().slice(0,4).hide();

        $("#pictures-website").children().slice(2,3).fadeIn();

        $("#descriptions-website").children().slice(3,4).fadeIn(1500);

    });

    $("#button-website4").click(function(){
        $("#descriptions-website").children().slice(0,1).children().css("opacity", "1");
        $("#button-website4").css("opacity", "0.7");

        $("#descriptions-website").children().slice(1,numberwebsite).hide();
        $("#pictures-website").children().slice(0,4).hide();

        $("#pictures-website").children().slice(3,4).fadeIn();

        $("#descriptions-website").children().slice(numberwebsite-1,numberwebsite).fadeIn(1500);

    });

//---------------------------------------HATCH section button actions
    $("#hatch").click(function(){

        $("#pictures").children().hide();
        $("#descriptions").children().hide();

        $("#pictures-hatch").show();
        $("#descriptions-hatch").fadeIn('slow');

    });


    $("#ideas").click(function(){
        $("#pictures").children().hide();
        $("#descriptions").children().hide();

        $("#content-ideas").show();
        $("#content-ideas").children().hide();
        $("#content-ideas").children().slice(0,1).fadeIn();
        $("#menu-ideas").fadeIn('slow');
    });

    $("#fractals").click(function(){

        $("#content-ideas").children().hide();
        $("#content-ideas").children().slice(0,1).fadeIn();

    });


    $("#app").click(function(){

        $("#content-ideas").children().hide();
        $("#content-ideas").children().slice(1,2).fadeIn();

    });


    $("#words").click(function(){

        $("#content-ideas").children().hide();
        $("#content-ideas").children().slice(2,3).fadeIn();

    });

});