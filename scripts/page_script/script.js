$("#nav").load('../../components/navbar.html')
$("#carousel-content").load('../../components/carousels.html')


// This handles the scrolling of update read-more btn to updates section
$(".update-read-btn").click(function () {
    $("html, body").animate({
        scrollTop: $("#update-container").offset().top - 90
    }, 0);
});

// the script for read more button
function toggleReadMoreContainer() {
    const hiddenPart = document.querySelector('.hidden_part');
    const read_more_btn = document.querySelector('.read-more-btn1');
    const blur_overlay = document.querySelector('.overlay1');

    if(hiddenPart.style.display === "block"){
        hiddenPart.style.display = "none";
        read_more_btn.style.display = "block"
        blur_overlay.style.display = "block"
    }
    else{
        hiddenPart.style.display = "block";
        read_more_btn.style.display = "none"
        blur_overlay.style.display = "none"
    }
}

// the script for read more button
function toggleReadMore() {
    const hiddenPart = document.querySelector('.hidden_part_nc');
    const read_more_btn = document.querySelector('.read-more-btn2');
    const read_less_btn = document.querySelector('.read-less-btn2');
    const blur_overlay = document.querySelector('.overlay2');

    if(hiddenPart.style.display === "block"){
        hiddenPart.style.display = "none";
        read_more_btn.style.display = "block"
        blur_overlay.style.display = "block"
        read_less_btn.style.display = "none"
        // read_more_btn.innerHTML = "Read More"
    }
    else{
        hiddenPart.style.display = "block";
        read_more_btn.style.display = "none"
        blur_overlay.style.display = "none"
        read_less_btn.style.display = "block"
        // read_more_btn.innerHTML = "Read Less"
    }
}


// This is the script for the image selector in the document section
$(document).ready(function(){

    $(".doc_img_selectors").click(function(){

        let imgNum = $(this).data("img");

        $(".docs_imgs_container .docs_img")
            .removeClass("active")
            .addClass("not_active");

        $(".doc_img" + imgNum)
            .removeClass("not_active")
            .addClass("active");

        $(".doc_img_selectors")
            .removeClass("active_btn")
            .addClass("inactive_btn");

        $(this)
            .removeClass("inactive_btn")
            .addClass("active_btn");
    });
});


// This script handles the back to top button
// This script handles the actual functionality of the button
$(".b2t").click(function () {

    $("html, body").animate({
        scrollTop: $("#nav").offset().top
    }, 0);

});

// This part handles the visibility of the button
$(window).on("scroll", function () {

    if ($(this).scrollTop() > 200) {
        $(".b2t").fadeIn();
    } else {
        $(".b2t").fadeOut();
    }

});



// Handling secondary nav buttons
$(".nav_story_btn").click(function () {
    $("html, body").animate({
        scrollTop: $("#story").offset().top - 90
    }, 0);
});

$(".nav_updates_btn").click(function () {
    $("html, body").animate({
        scrollTop: $("#update-container").offset().top - 90
    }, 0);
});

$(".nav_comments_btn").click(function () {
    $("html, body").animate({
        scrollTop: $("#comments").offset().top - 90
    }, 0);
});

const story = document.querySelector("#story");
const comments = document.querySelector(".comments");
const miniNav = document.querySelector(".mini_nav");

window.addEventListener("scroll", () => {
    const storyTop = story.offsetTop;
    const commentsTop = comments.offsetTop; 
    const commentsBottom = commentsTop + comments.offsetHeight;

    if (window.scrollY >= storyTop && window.scrollY < commentsBottom) {
        miniNav.classList.add("show");
    } else {
        miniNav.classList.remove("show");
    }
});

const lingerShare = document.querySelector(".share_linger_btn_container");

window.addEventListener("scroll", () => {
    const storyTop = story.offsetTop;

    if(window.scrollY >= storyTop){
        lingerShare.classList.add("disappear");
    }else{
        lingerShare.classList.remove("disappear");
    }
})

const amtInput = document.querySelector(".amount-input-field");

$(document).ready(function(){
    $(".amt1").click(function (){
        amtInput.value = 1800;
        $(".amt1").addClass("amt_active");
        $(".amt2").removeClass("amt_active");
        $(".amt3").removeClass("amt_active");
        $(".amt4").removeClass("amt_active");
    })
    $(".amt2").click(function (){
        amtInput.value = 4000;
        $(".amt2").addClass("amt_active");
        $(".amt1").removeClass("amt_active");
        $(".amt3").removeClass("amt_active");
        $(".amt4").removeClass("amt_active");
    })
    $(".amt3").click(function (){
        amtInput.value = 7500;
        $(".amt3").addClass("amt_active");
        $(".amt2").removeClass("amt_active");
        $(".amt1").removeClass("amt_active");
        $(".amt4").removeClass("amt_active");
        $(".request_message_wrapper").removeClass("d-none")
    })
    $(".amt4").click(function (){
        amtInput.value = 9999;
        $(".amt4").addClass("amt_active");
        $(".amt2").removeClass("amt_active");
        $(".amt3").removeClass("amt_active");
        $(".amt1").removeClass("amt_active");
    })
    $(".amt5").click(function () {
        amtInput.value = 7900;
        $("#initialMessage").addClass("d-none");
        $("#thankYouMessage").removeClass("d-none");
        setTimeout(() => {
            $("#thankYouMessage").addClass("d-none");
        }, 3000);
    })
})

$(".close-button").click(() => {
    $(".request_message_wrapper").addClass("d-none");
})

// $(".other_amt_btn").click(function() {
//     $(this).hide(); 
//     $(".other_amt_input").removeClass("d-none")
// });

$(".other_amt_btn").click(function() {
    $(".other_amt_wrapper").addClass("hidden-element"); 
    $(".other_amt_input").removeClass("hidden-element"); 
    $(".num-amt-btn").removeClass("active-p-btns"); 
    $(".other_amt_input .oai").focus(); 
});

$(".num-amt-btn").click(() => {
    $(".other_amt_wrapper").removeClass("hidden-element"); 
    $(".other_amt_input").addClass("hidden-element");
}) 

$(".btn11p").click(() => {
    $(".num-amt-btn").removeClass("active-p-btns");
    $(".btn11p").addClass("active-p-btns");
})

$(".btn16p").click(() => {
    $(".num-amt-btn").removeClass("active-p-btns");
    $(".btn16p").addClass("active-p-btns");
})

$(".btn21p").click(() => {
    $(".num-amt-btn").removeClass("active-p-btns");
    $(".btn21p").addClass("active-p-btns");
})


// Form logic script
// for name 
$('.name_field').on('input', function() {
    if ($.trim($(this).val()) == '') {
        $(".full_name_warning_sub").removeClass("d-none");
    } else {
        $(".full_name_warning_sub").addClass("d-none"); 
    }
});

// for email
$('.email_field').on('input', function() {
    if ($.trim($(this).val()) == '') {
        $(".email_warning_sub").removeClass("d-none");
    }
    else if(!this.checkValidity()){
        $(".email_warning_sub").removeClass("d-none");
    }
    else {
        $(".email_warning_sub").addClass("d-none"); 
    }
});

$('#anonymous_checkbox').change(function () {
    if ($(this).prop('checked')) {
        $(".anonymous_sub").removeClass("d-none")
        setTimeout(() => 
            $(".anonymous_sub").addClass("d-none")
        , 5000)
        console.log("Checked");
    }
});

$('.phno_field').on('input', function () {

    if ($(this).val().trim() === '') {
        $('.phno_warning_sub')
            .text('Please enter a phone number')
            .removeClass('d-none');
    }
    else if (!this.checkValidity()) {
        $('.phno_warning_sub')
            .text('Please enter a valid phone number')
            .removeClass('d-none');
    }
    else {
        $('.phno_warning_sub').addClass('d-none');
    }

});

$(".state_input").on('blur', function () {
    if ($(this).val().trim() === '') {
        $(this).val('Maharashtra');
    }
});

// second modal scripts

const monthAmtInput = document.querySelector(".monthly-amount-input-field");

$(document).ready(function() {
    $(".amt6").click(function (){
        monthAmtInput.value = 500;
        $(".amt6").addClass("amt_active");
        $(".amt7").removeClass("amt_active");
        $(".amt8").removeClass("amt_active");
        $(".amt9").removeClass("amt_active");
    })
    $(".amt7").click(function (){
        monthAmtInput.value = 750;
        $(".amt7").addClass("amt_active");
        $(".amt6").removeClass("amt_active");
        $(".amt8").removeClass("amt_active");
        $(".amt9").removeClass("amt_active");
    })
    $(".amt8").click(function (){
        monthAmtInput.value = 1000;
        $(".amt8").addClass("amt_active");
        $(".amt7").removeClass("amt_active");
        $(".amt6").removeClass("amt_active");
        $(".amt9").removeClass("amt_active");
    })
    $(".amt9").click(function (){
        monthAmtInput.value = 1500;
        $(".amt9").addClass("amt_active");
        $(".amt7").removeClass("amt_active");
        $(".amt8").removeClass("amt_active");
        $(".amt6").removeClass("amt_active");
    })
})

// Second modal same form script
// Form logic script
// for name 
$('.support_name_field').on('input', function() {
    if ($.trim($(this).val()) == '') {
        $(".support_name_warning").removeClass("d-none");
    } else {
        $(".support_name_warning").addClass("d-none"); 
    }
});

// for email
$('.support_email_field').on('input', function() {
    if ($.trim($(this).val()) == '') {
        $(".support_email_warning").removeClass("d-none");
    }
    else if(!this.checkValidity()){
        $(".support_email_warning").removeClass("d-none");
    }
    else {
        $(".support_email_warning").addClass("d-none"); 
    }
});

$('#support_anonymous_checkbox').change(function () {
    if ($(this).prop('checked')) {
        $(".support_anonymous_sub").removeClass("d-none")
        setTimeout(() => 
            $(".support_anonymous_sub").addClass("d-none")
        , 5000)
        console.log("Checked");
    }
});

$('.support_phone_field').on('input', function () {

    if ($(this).val().trim() === '') {
        $('.support_phone_warning')
            .text('Please enter a phone number')
            .removeClass('d-none');
    }
    else if (!this.checkValidity()) {
        $('.support_phone_warning')
            .text('Please enter a valid phone number')
            .removeClass('d-none');
    }
    else {
        $('.support_phone_warning').addClass('d-none');
    }

});

$(".support-state-input").on('blur', function () {
    if ($(this).val().trim() === '') {
        $(this).val('Maharashtra');
    }
});



// // Loads a ad type popup when user reloads
// $(document).ready(function() {
//     const $popup = $(".welcome-card");
//     const $closeBtn = $(".close-card");

//     // Show popup, dim body, and disable scrolling
//     $popup.addClass("show");
//     $("body").addClass("dimmed noscroll");

//     // Close functionality
//     $closeBtn.on("click", function() {
//         $popup.removeClass("show");
//         $("body").removeClass("dimmed noscroll");
//     });
// });
