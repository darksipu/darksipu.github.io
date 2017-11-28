/**
 * Created by florin on 05/11/2017.
 */


$( document ).ready(function() {

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

        $("#descriptions-3rd").children().slice(0,12).hide();
        $("#descriptions-3rd").children().slice(0,3).fadeIn(2300);

    });

    //activates the first button
    $("#button-3rd1").click(function(){
        $("#descriptions-3rd").children().slice(0,12).hide();

        $("#descriptions-3rd").children().slice(3,6).fadeIn(1500);

    });

    $("#button-3rd2").click(function(){
        $("#descriptions-3rd").children().slice(0,12).hide();

        $("#descriptions-3rd").children().slice(6,9).fadeIn(1500);

    });

    $("#button-3rd3").click(function(){
        $("#descriptions-3rd").children().slice(0,12).hide();

        $("#descriptions-3rd").children().slice(9,12).fadeIn(1500);

    });

//---------------------------------------ML section button actions
    $("#4th").click(function(){

        $("#pictures").children().hide();
        $("#descriptions").children().hide();

        $("#pictures-4th").fadeIn();
        $("#descriptions-4th").fadeIn('slow');

        $("#descriptions-4th").children().slice(0,5).hide();
        $("#descriptions-4th").children().slice(0,3).fadeIn(2300);

    });

    //activates the first button
    $("#button-4th").click(function(){
        $("#descriptions-4th").children().slice(0,12).hide();

        $("#descriptions-4th").children().slice(3,6).fadeIn(1500);

    });


//---------------------------------------games section button actions

    //navbar that'll display the intro
    $("#games").click(function(){

        $("#descriptions").children().hide();
        $("#pictures").children().hide();

        $("#pictures-games").fadeIn(1900);
        $("#descriptions-games").fadeIn(2300);

        $("#descriptions-games").children().slice(0,13).hide();
        $("#descriptions-games").children().slice(0,3).fadeIn(2300);


    });

    //activates the first button
    $("#button-games1").click(function(){
        $("#descriptions-games").children().slice(0,13).hide();

        $("#descriptions-games").children().slice(3,6).fadeIn(1500);

    });

    //activates the second button
    $("#button-games2").click(function(){
        $("#descriptions-games").children().slice(0,13).hide();

        $("#descriptions-games").children().slice(6,9).fadeIn(1500);
    });

    //activates the third button
    $("#button-games3").click(function(){

        $("#descriptions-games").children().slice(0,13).hide();

        $("#descriptions-games").children().slice(9,13).fadeIn(1500);
    });


//---------------------------------------website section button actions
    $("#website").click(function(){

        $("#pictures").children().hide();
        $("#descriptions").children().hide();

        $("#pictures-website").fadeIn();
        $("#descriptions-website").fadeIn(2300);

        $("#descriptions-website").children().slice(0,10).hide();
        $("#descriptions-website").children().slice(0,3).fadeIn(2300);

    });

    //activates the first button
    $("#button-website1").click(function(){
        $("#descriptions-website").children().slice(0,10).hide();

        $("#descriptions-website").children().slice(3,6).fadeIn(1500);

    });

    //activates the second button
    $("#button-website2").click(function(){
        $("#descriptions-website").children().slice(0,10).hide();

        $("#descriptions-website").children().slice(6,8).fadeIn(1500);

    });

    //activates the third button
    $("#button-website3").click(function(){
        $("#descriptions-website").children().slice(0,10).hide();

        $("#descriptions-website").children().slice(8,10).fadeIn(1500);

    });

//---------------------------------------HATCH section button actions
    $("#hatch").click(function(){

        $("#pictures").children().hide();
        $("#descriptions").children().hide();

        $("#description-hatch").fadeIn('slow');

    });


//---------------------------------------CONTACT

    $("#contact").click(function() {

        $("#pictures").children().hide();
        $("#descriptions").children().hide();

        $("#contact-details1").fadeIn('slow');
        $("#contact-details2").fadeIn('slow');
        $("#contact-details3").fadeIn('slow');

    });



});