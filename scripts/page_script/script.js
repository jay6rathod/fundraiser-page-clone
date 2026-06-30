$("#nav").load('../../components/navbar.html')
$("#carousel-content").load('../../components/carousels.html')


// This handles the scrolling of update read-more btn to updates section
$(".update-read-btn").click(function () {
    $("html, body").animate({
        scrollTop: $("#update-container").offset().top
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
        scrollTop: $("#story").offset().top
    }, 0);
});

$(".nav_updates_btn").click(function () {
    $("html, body").animate({
        scrollTop: $("#update-container").offset().top
    }, 0);
});

$(".nav_comments_btn").click(function () {
    $("html, body").animate({
        scrollTop: $("#comments").offset().top
    }, 0);
});

const story = document.querySelector("#story");
const miniNav = document.querySelector(".mini_nav");

window.addEventListener("scroll", () => {

    const storyTop = story.offsetTop;

    if(window.scrollY >= storyTop){
        miniNav.classList.add("show");
    }else{
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



// test
$('#exampleModal').on('show.bs.modal', function () {
    console.log('Modal is about to open');
});

$('#exampleModal').on('shown.bs.modal', function () {
    console.log('Modal is fully visible');
});

$('#exampleModal').on('hide.bs.modal', function () {
    console.log('Modal is about to close');
});

$('#exampleModal').on('hidden.bs.modal', function () {
    console.log('Modal is fully hidden');
});

$('.donate_now').click(function () {
    console.log('Button clicked');
});