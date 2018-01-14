// SMOOTH SCROLLING
var $myCarousel = $("#myCarousel");
console.log($myCarousel);
$myCarousel.carousel("cycle");

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});


$(document).ready(function(){
    $('input.request-form-box').on('focus', function(){
        $(this).addClass('knockout-around')
    })
    $('input.request-form-box').on('focusout', function(){
        $(this).removeClass('knockout-around')
    })

})


// function something() {
//
//     if ((document.getElementById('text-input-name').value != "")
//     ) {
//         document.getElementsByClassName('request-btn-send').style.borderColor = "red";
//     }
// }

function checkForBlank() {

    console.log("123")

    if ((document.getElementById('text-input-name').value != "")
        && (document.getElementById('text-input-email').value != "")
        && (document.getElementById('text-input-phone').value != "")
    )
    {
        document.getElementsByClassName('request-btn-send')[0].style.background = "#ff0000";
    }
    else
    {
        document.getElementsByClassName('request-btn-send')[0].style.background = "#ffe5e5";

    }
}


/*
    if(document.getElementById('fname').value == "") {
        alert('please enter your first name');
        document.getElementById('fname').style.borderColor = "red";
        //return false;
    }
*/


/*
$(function () {
  $("#text-input").focusout(function() {
      var textVal = $("input[name='t1']").val();
      if(textVal == '')
          alert("Textbox EMPTY");
      $("#text-input").css.css("border-color", "red");
      });
})
//*/

/*
$(document).ready(function(){
    $(".form-control").click(function(){
        $(this).css({"color" : "red"});
    });
});
*/
