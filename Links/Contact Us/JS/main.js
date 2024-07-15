
let boxWidth = $(".open_bar").outerWidth();
console.log(boxWidth)
$(".open_bar").animate({left:`-${boxWidth}px`})
$(".always_open").animate({left:`0`})
$(".links").click(function(){
    if($(".open_bar").css("left") === "0px"){
        //closed
        $(".open_bar").animate({left:`-${boxWidth}px`},600)
        $(".always_open").animate({left:`0`},600)
        $("#change_icon").removeClass(`fa-solid fa-xmark`)
        $("#change_icon").addClass(`fa-solid open-close-icon fa-2x fa-align-justify`)
    }
    else{
        //opened
        $(".open_bar").animate({left:`0px`},600)
        $(".always_open").animate({left:`18%`},600)
        $("#change_icon").removeClass(`fa-solid open-close-icon fa-2x fa-align-justify`)
        $("#change_icon").addClass(`fa-solid fa-xmark`)
    }
})

let phoneInput = document.getElementById("phoneInput")
phoneInput.addEventListener("input",function(){
    if (!isValidPhoneNumber(phoneInput)) {
        console.log("error")
        $("#phoneAlert").removeClass("d-none")
    } 
    else {
        $("#phoneAlert").addClass("d-none")
        console.log("ok")
    }
})


function isValidPhoneNumber(phoneNumber) {
    var phonePattern = /^[0-9]{10}$/;  // Example pattern for a 10-digit phone number
    return phonePattern.test(phoneNumber);
}

//return to main page on reload
if (performance.navigation.type === 1) {
    // This means the page was reloaded
    window.location.replace("../../index.html");
}