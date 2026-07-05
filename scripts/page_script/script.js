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


// function calculateTotal(amt, { tipPercent = 0, fixedTip = 0 } = {}) {
//     if (fixedTip > 0) {
//         return amt + fixedTip;
//     }

//     return amt + Math.ceil(amt * tipPercent / 100);
// }

// console.log(calculateTotal(9999,21));

// const amtInput = document.querySelector(".amount-input-field");
// let totalAmt = 0;

// let onceAmt = 0;
// let oncePerc = 0;
// let onceTipAmt = 0;

// $(document).ready(function(){
//     $(".amt1").click(function (){
//         onceAmt = 1800;
//         oncePerc = 0;
//         amtInput.value = onceAmt;
//         $(".amt1").addClass("amt_active");
//         $(".amt2, .amt3, .amt4").removeClass("amt_active");
//         $(".donate-modal-btn").text(`Donate Now (₹${totalAmt})`);
//         $(".btn11p").text("₹ 300");
//         $(".btn16p").text("₹ 350");
//         $(".btn21p").text("₹ 400");
//         totalAmt = calculateTotal(onceAmt, fixedTip);
//         console.log(totalAmt)
//     })
    
//     $(".amt2").click(function (){
//         onceAmt = 4000;
//         amtInput.value = onceAmt;
//         $(".amt2").addClass("amt_active");
//         $(".amt1, .amt3, .amt4").removeClass("amt_active");
//         $(".btn11p").text("11%");
//         $(".btn16p").text("16%");
//         $(".btn21p").text("21%");
//         totalAmt = calculateTotal(onceAmt, oncePerc);
//         console.log(totalAmt)
//     })
//     $(".amt3").click(function (){
//         onceAmt = 7500;
//         amtInput.value = onceAmt;
//         $(".amt3").addClass("amt_active");
//         $(".amt2, .amt1, .amt4").removeClass("amt_active");
//         $(".btn11p").text("11%");
//         $(".btn16p").text("16%");
//         $(".btn21p").text("21%");
//         totalAmt = calculateTotal(onceAmt, oncePerc);
//         console.log(totalAmt)
//         $(".request_message_wrapper").removeClass("d-none")
//     })
//     $(".amt4").click(function (){
//         onceAmt = 9999;
//         amtInput.value = onceAmt;
//         $(".amt4").addClass("amt_active");
//         $(".amt2, .amt3, .amt1").removeClass("amt_active");
//         $(".btn11p").text("11%");
//         $(".btn16p").text("16%");
//         $(".btn21p").text("21%");
//         totalAmt = calculateTotal(onceAmt, oncePerc);
//         console.log(totalAmt)
//     })
//     $(".amt5").click(function () {
//         amtInput.value = 7900;
//         $("#initialMessage").addClass("d-none");
//         $("#thankYouMessage").removeClass("d-none");
//         setTimeout(() => {
//             $("#thankYouMessage").addClass("d-none");
//         }, 3000);
//     })
// })

// $(".close-button").click(() => {
//     $(".request_message_wrapper").addClass("d-none");
// })

// // $(".other_amt_btn").click(function() {
// //     $(this).hide(); 
// //     $(".other_amt_input").removeClass("d-none")
// // });


// $(".other_amt_btn").click(function() {
//     $(".other_amt_wrapper").addClass("hidden-element"); 
//     $(".other_amt_input").removeClass("hidden-element"); 
//     $(".num-amt-btn").removeClass("active-p-btns"); 
//     $(".other_amt_input .oai").focus(); 
//     fixedTip = other_amt_input.value;
//     totalAmt = calculateTotal(onceAmt, fixedTip);
//     console.log(totalAmt)
// });

// $(".num-amt-btn").click(() => {
//     $(".other_amt_wrapper").removeClass("hidden-element"); 
//     $(".other_amt_input").addClass("hidden-element");
// }) 

// $(".btn11p").click(() => {
//     oncePerc = 11;
//     fixedTip = 300;
//     $(".num-amt-btn").removeClass("active-p-btns");
//     $(".btn11p").addClass("active-p-btns");
//     totalAmt = calculateTotal(onceAmt, oncePerc);
//         console.log(totalAmt)
// })

// $(".btn16p").click(() => {
//     oncePerc = 16;
//     fixedTip = 350;
//     $(".num-amt-btn").removeClass("active-p-btns");
//     $(".btn16p").addClass("active-p-btns");
//     totalAmt = calculateTotal(onceAmt, oncePerc);
//         console.log(totalAmt)
// })

// $(".btn21p").click(() => {
//     oncePerc = 21;
//     fixedTip = 400;
//     $(".num-amt-btn").removeClass("active-p-btns");
//     $(".btn21p").addClass("active-p-btns");
//     totalAmt = calculateTotal(onceAmt, oncePerc);
//         console.log(totalAmt)
// })

function calculateTip(amount) {

    if (fixedTip > 0) {
        return fixedTip;
    }

    return Math.ceil(amount * (tipPercent / 100));
}

let tipPercent = 21;
let fixedTip = 0;

function updateTotal() {

    const amount = Number($(".amount-input-field").val()) || 0;

    const tipAmount = calculateTip(amount);

    const total = amount + tipAmount;

    // Donate button
    $(".donate-modal-btn").text(`Donate Now (₹${total})`);

    // Total heading
    $(".total_amt_head").text(`Total: ₹${total}`);

    // Breakdown
    $(".total-breakdown").text(
        `(₹${amount} donation amount + ₹${tipAmount} Tip Amount)`
    );

    console.clear();
    console.log("Donation :", amount);
    console.log("Tip % :", tipPercent);
    console.log("Fixed Tip :", fixedTip);
    console.log("Tip Amount :", tipAmount);
    console.log("Total :", total);
}

$(document).ready(function () {

    // --------------------
    // Amount Buttons
    // --------------------

    $(".amt1").click(function () {

        $(".amount-input-field").val(1800).trigger("input");

        $(".amt1").addClass("amt_active");
        $(".amt2,.amt3,.amt4").removeClass("amt_active");

        $(".btn11p").text("₹300");
        $(".btn16p").text("₹350");
        $(".btn21p").text("₹400");

        fixedTip = 300;
        tipPercent = 0;

        $(".request_message_wrapper").addClass("d-none");

        updateTotal();

    });

    $(".amt2").click(function () {

        $(".amount-input-field").val(4000).trigger("input");

        $(".amt2").addClass("amt_active");
        $(".amt1,.amt3,.amt4").removeClass("amt_active");

        $(".btn11p").text("11%");
        $(".btn16p").text("16%");
        $(".btn21p").text("21%");

        fixedTip = 0;
        tipPercent = 11;

        $(".request_message_wrapper").addClass("d-none");

        updateTotal();

    });

    $(".amt3").click(function () {

        $(".amount-input-field").val(7500).trigger("input");

        $(".amt3").addClass("amt_active");
        $(".amt1,.amt2,.amt4").removeClass("amt_active");

        $(".btn11p").text("11%");
        $(".btn16p").text("16%");
        $(".btn21p").text("21%");

        fixedTip = 0;
        tipPercent = 11;

        $(".request_message_wrapper").removeClass("d-none");

        updateTotal();

    });

    $(".amt4").click(function () {

        $(".amount-input-field").val(9999).trigger("input");

        $(".amt4").addClass("amt_active");
        $(".amt1,.amt2,.amt3").removeClass("amt_active");

        $(".btn11p").text("11%");
        $(".btn16p").text("16%");
        $(".btn21p").text("21%");

        fixedTip = 0;
        tipPercent = 11;

        $(".request_message_wrapper").addClass("d-none");

        updateTotal();

    });

    // --------------------
    // User edits donation amount
    // --------------------

    $(".amount-input-field").on("input", function () {

        updateTotal();

    });

    // --------------------
    // Tip Buttons
    // --------------------

    $(".btn11p").click(function () {

        $(".num-amt-btn").removeClass("active-p-btns");
        $(this).addClass("active-p-btns");

        if ($(this).text().includes("%")) {
            tipPercent = 11;
            fixedTip = 0;
        } else {
            fixedTip = 300;
            tipPercent = 0;
        }

        updateTotal();

    });

    $(".btn16p").click(function () {

        $(".num-amt-btn").removeClass("active-p-btns");
        $(this).addClass("active-p-btns");

        if ($(this).text().includes("%")) {
            tipPercent = 16;
            fixedTip = 0;
        } else {
            fixedTip = 350;
            tipPercent = 0;
        }

        updateTotal();

    });

    $(".btn21p").click(function () {

        $(".num-amt-btn").removeClass("active-p-btns");
        $(this).addClass("active-p-btns");

        if ($(this).text().includes("%")) {
            tipPercent = 21;
            fixedTip = 0;
        } else {
            fixedTip = 400;
            tipPercent = 0;
        }

        updateTotal();

    });

    // --------------------
    // Other Tip
    // --------------------

    $(".other_amt_btn").click(function () {

        $(".other_amt_wrapper").addClass("hidden-element");
        $(".other_amt_input").removeClass("hidden-element");

        $(".num-amt-btn").removeClass("active-p-btns");

        $(".oai").focus();

    });

    $(".oai").on("input", function () {

        fixedTip = Number($(this).val()) || 0;
        tipPercent = 0;

        updateTotal();

    });

    $(".num-amt-btn").click(function () {

        $(".other_amt_wrapper").removeClass("hidden-element");
        $(".other_amt_input").addClass("hidden-element");

    });

    // --------------------
    // Popup
    // --------------------

    $(".close-button").click(function () {

        $(".request_message_wrapper").addClass("d-none");

    });

    // --------------------
    // Donate Button
    // --------------------

    $(".amt5").click(function () {

        $(".amount-input-field").val(7900);

        updateTotal();

        $("#initialMessage").addClass("d-none");
        $("#thankYouMessage").removeClass("d-none");

        setTimeout(function () {

            $("#thankYouMessage").addClass("d-none");

        }, 3000);

    });

    updateTotal();

});


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
        $(".amt7, .amt8, .amt9").removeClass("amt_active");
        $(".donate-modal-btn").text(`Donate Now (₹${monthAmtInput.value})`);
    })
    $(".amt7").click(function (){
        monthAmtInput.value = 750;
        $(".amt7").addClass("amt_active");
        $(".amt6, .amt8, .amt9").removeClass("amt_active");
        $(".donate-modal-btn").text(`Donate Now (₹${monthAmtInput.value})`);
    })
    $(".amt8").click(function (){
        monthAmtInput.value = 1000;
        $(".amt8").addClass("amt_active");
        $(".amt7, .amt6, .amt9").removeClass("amt_active");
        $(".donate-modal-btn").text(`Donate Now (₹${monthAmtInput.value})`);
    })
    $(".amt9").click(function (){
        monthAmtInput.value = 1500;
        $(".amt9").addClass("amt_active");
        $(".amt7, .amt8, .amt6").removeClass("amt_active");
        $(".donate-modal-btn").text(`Donate Now (₹${monthAmtInput.value})`);
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


$('.share_btn').on('click', function() {
    $('#socialDropdown').toggleClass('show');
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
