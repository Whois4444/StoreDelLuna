
function validateForm() {
    var name = document.forms["regisForm"]["name"].value;
    var password = document.forms["regisForm"]["password"].value;
    var confirmPassword = document.forms["regisForm"]["confirmPassword"].value;
    var fullName = document.forms["regisForm"]["fullName"].value;
    var gender = document.forms["regisForm"]["gender"].value;
    var email = document.forms["regisForm"]["email"].value;
    var age = document.forms["regisForm"]["age"].value;
    var terms = document.forms["regisForm"]["terms"].checked;


    if (name == "" || name == null) {
        alert("Name must be filled out!");
        return false;
    }

    if (password == "" || password == null){
        alert("Password must be filled out!");
        return false;
    }

    if (confirmPassword == "" || confirmPassword == null){
        alert("Confirm Password must be filled out!")
        return false;
    }
    else if (confirmPassword != password){
        alert("The passwords don't match. Try again!");
        return false;
    }

    if (fullName == "" || fullName == null){
        alert("Fullname must be filled out!");
        return false;
    }

    if (gender == ""){
        alert("Gender must be checked!");
        return false;
    }

    if (email == ""){
        alert("Email must be filled out!");
        return false;
    }

    if (age == ""){
        alert("Age must be filled out!");
        return false;
    }

    if (terms == false){
        alert("Terms and conditions must be checked!");
        return false;
    }

}


// Slider Script
var currSlide = 1;
var automate = false;
var dots = $('.dot');
function moveSlide(){
    // console.log(dot);
    // dots[currSlide-1].className += " active";
    $(dots[currSlide-1]).addClass(' active');
    automate = setInterval(()=>{
        clearDot()
        if(currSlide < 4){
            // dots[currSlide].className += " active";
            $(dots[currSlide]).addClass(' active');
            $('.slide-container').animate({
                'left' : '-=100%'
            },1000);
            currSlide++;
        }
        else{
            $('.slide-container').animate({
                'left' : '0'
            },1000);
            currSlide = 1;
            // dots[currSlide-1].className += " active";
            $(dots[currSlide-1]).addClass(' active');
        }
        
    }, 3000);
}

$('.prev').hover(()=> {
    clearInterval(automate);
    automate = false;
}, ()=>{
    if(automate != false) {
        clearInterval(automate);
        automate = false;
    } else { 
        clearDot()
        moveSlide(); 
    }
}).click(()=>{
    clearDot()
    if(currSlide > 1){
        // dots[currSlide-2].className += " active";
        $(dots[currSlide-2]).addClass(' active');
        $('.slide-container').animate({
            'left' : '+=100%'
        },1000);
        currSlide--;
    }
    else{
        $('.slide-container').animate({
            'left' : '-=300%'
        },1000);
        currSlide = 4;
        // dots[currSlide-1].className += " active";
        $(dots[currSlide-1]).addClass(' active');
    }
});

$('.next').hover(()=> {
    clearInterval(automate);
    automate = false;
}, ()=>{
    if(automate != false) {
        clearInterval(automate);
        automate = false;
    } else { 
        clearDot()
        moveSlide(); 
    }
}).click(()=>{
    clearDot();
    if(currSlide < 4){
        // dots[currSlide].className += " active";
        $(dots[currSlide]).addClass(' active');
        $('.slide-container').animate({
            'left' : '-=100%'
        },1000);
        currSlide++;
    }
    else{
        $('.slide-container').animate({
            'left' : '0'
        },1000);
        currSlide = 1;
        // dots[currSlide-1].className += " active";
        $(dots[currSlide-1]).addClass(' active');
    }
});

$('.dot').hover(()=> {
    clearInterval(automate);
    automate = false;
}, ()=>{
    if(automate != false) {
        clearInterval(automate);
        automate = false;
    } else { 
        clearDot()
        moveSlide(); 
    }
}).click(function(){
    clearDot()
    var index = $('.dot').index(this);
    if(index == 0){
        $('.slide-container').animate({
            'left' : '0'
        },1000);
        currSlide = index+1;
        // dots[index].className += " active";
        $(dots[index]).addClass(' active');
    }
    else if(index == 1){
        $('.slide-container').animate({
            'left' : '-100%'
        },1000);
        currSlide = index+1;
        // dots[index].className += " active";
        $(dots[index]).addClass(' active');
    }
    else if(index == 2){
        $('.slide-container').animate({
            'left' : '-200%'
        },1000);
        currSlide = index+1;
        // dots[index].className += " active";
        $(dots[index]).addClass(' active');
    }
    else if(index == 3){
        $('.slide-container').animate({
            'left' : '-300%'
        },1000);
        currSlide = index+1;
        // dots[index].className += " active";
        $(dots[index]).addClass(' active');
    }
});

function clearDot(){
    for (i = 0; i < dots.length; i++) {
        // dots[i].className = dots[i].className.replace(" active", "");
        $(dots[i]).removeClass(' active');
    }
}

moveSlide();


// button hover
$('.best-seller-button').hover(function(){
    $(this).css("background-color", "rgba(225,225,225)");
}, function(){
    $(this).css("background-color", "rgba(225,225,225, 0)");
});

// card hover
$('.card-item').hover(function(){
    $(this).css("background-color", "rgba(225,225,225, 0.4)");
}, function(){
    $(this).css("background-color", "rgba(225,225,225, 0.8)");
});