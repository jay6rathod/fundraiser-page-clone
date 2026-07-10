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

    if (hiddenPart.style.display === "block") {
        hiddenPart.style.display = "none";
        read_more_btn.style.display = "block"
        blur_overlay.style.display = "block"
    }
    else {
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

    if (hiddenPart.style.display === "block") {
        hiddenPart.style.display = "none";
        read_more_btn.style.display = "block"
        blur_overlay.style.display = "block"
        read_less_btn.style.display = "none"
        // read_more_btn.innerHTML = "Read More"
    }
    else {
        hiddenPart.style.display = "block";
        read_more_btn.style.display = "none"
        blur_overlay.style.display = "none"
        read_less_btn.style.display = "block"
        // read_more_btn.innerHTML = "Read Less"
    }
}


// This is the script for the image selector in the document section
$(document).ready(function () {

    $(".doc_img_selectors").click(function () {

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

    if (window.scrollY >= storyTop) {
        lingerShare.classList.add("disappear");
    } else {
        lingerShare.classList.remove("disappear");
    }
})



const currencyConfig = {
    INR: { symbol: "₹", presets: [1800, 4000, 7500, 9999], tips: [300, 350, 400], tipPercents: [11, 16, 21] },
    USD: { symbol: "$", presets: [100, 150, 200, 250], tips: [10, 15, 20], tipPercents: [19, 22, 25] },
    GBP: { symbol: "£", presets: [50, 100, 150, 200], tips: [8, 12, 16], tipPercents: [19, 22, 25] },
    EUROS: { symbol: "€", presets: [50, 100, 150, 200], tips: [9, 13, 17], tipPercents: [19, 22, 25] }
};

let currentCurrency = "INR";

function calculateTip(amount) {

    if (fixedTip > 0) {
        return fixedTip;
    }

    return Math.ceil(amount * (tipPercent / 100));
}

let tipPercent = 21;
let fixedTip = 0;

function updateTotal() {

    const symbol = currencyConfig[currentCurrency].symbol;
    const amount = Number($(".amount-input-field").val()) || 0;

    const tipAmount = calculateTip(amount);

    const total = amount + tipAmount;

    $(".donate-modal-btn").text(`Donate Now (${symbol}${total})`);
    $(".oai_icon").text(`${symbol}`);

    $(".total_amt_head").text(`Total: ${symbol}${total}`);

    $(".total-breakdown").text(
        `(${symbol}${amount} donation amount + ${symbol}${tipAmount} Tip Amount)`
    );

    $(".upi-breakdown").text(`You are donating ${symbol}${amount} with ${symbol}${tipAmount} tip`)

}

$(document).ready(function () {


    $(".amt1").click(function () {

        const { presets, tips } = currencyConfig[currentCurrency];

        $(".amount-input-field").val(presets[0]).trigger("input");

        $(".amt1").addClass("amt_active");
        $(".amt2,.amt3,.amt4").removeClass("amt_active");

        const symbol = currencyConfig[currentCurrency].symbol;
        $(".btn11p").text(`${symbol}${tips[0]}`);
        $(".btn16p").text(`${symbol}${tips[1]}`);
        $(".btn21p").text(`${symbol}${tips[2]}`);

        fixedTip = tips[0];
        tipPercent = 0;

        $(".request_message_wrapper").addClass("d-none");

        updateTotal();

    });

    $(".amt2").click(function () {

        const { presets, tipPercents } = currencyConfig[currentCurrency];

        $(".amount-input-field").val(presets[1]).trigger("input");

        $(".amt2").addClass("amt_active");
        $(".amt1,.amt3,.amt4").removeClass("amt_active");

        $(".btn11p").text(`${tipPercents[0]}%`);
        $(".btn16p").text(`${tipPercents[1]}%`);
        $(".btn21p").text(`${tipPercents[2]}%`);

        fixedTip = 0;
        tipPercent = tipPercents[0];

        $(".request_message_wrapper").addClass("d-none");

        updateTotal();

    });

    $(".amt3").click(function () {

        const { presets, tipPercents } = currencyConfig[currentCurrency];

        $(".amount-input-field").val(presets[2]).trigger("input");

        $(".amt3").addClass("amt_active");
        $(".amt1,.amt2,.amt4").removeClass("amt_active");

        $(".btn11p").text(`${tipPercents[0]}%`);
        $(".btn16p").text(`${tipPercents[1]}%`);
        $(".btn21p").text(`${tipPercents[2]}%`);

        fixedTip = 0;
        tipPercent = tipPercents[0];

        if (currentCurrency === "INR") {
            $(".request_message_wrapper").removeClass("d-none");
        } else {
            $(".request_message_wrapper").addClass("d-none");
        }

        updateTotal();

    });

    $(".amt4").click(function () {

        const { presets, tipPercents } = currencyConfig[currentCurrency];

        $(".amount-input-field").val(presets[3]).trigger("input");

        $(".amt4").addClass("amt_active");
        $(".amt1,.amt2,.amt3").removeClass("amt_active");

        $(".btn11p").text(`${tipPercents[0]}%`);
        $(".btn16p").text(`${tipPercents[1]}%`);
        $(".btn21p").text(`${tipPercents[2]}%`);

        fixedTip = 0;
        tipPercent = tipPercents[0];

        $(".request_message_wrapper").addClass("d-none");

        updateTotal();

    });

    $(".amount-input-field").on("input", function () {

        updateTotal();

    });

    $(".btn11p").click(function () {

        $(".num-amt-btn").removeClass("active-p-btns");
        $(this).addClass("active-p-btns");

        if ($(this).text().includes("%")) {
            tipPercent = currencyConfig[currentCurrency].tipPercents[0];
            fixedTip = 0;
        } else {
            fixedTip = currencyConfig[currentCurrency].tips[0];
            tipPercent = 0;
        }

        updateTotal();

    });

    $(".btn16p").click(function () {

        $(".num-amt-btn").removeClass("active-p-btns");
        $(this).addClass("active-p-btns");

        if ($(this).text().includes("%")) {
            tipPercent = currencyConfig[currentCurrency].tipPercents[1];
            fixedTip = 0;
        } else {
            fixedTip = currencyConfig[currentCurrency].tips[1];
            tipPercent = 0;
        }

        updateTotal();

    });

    $(".btn21p").click(function () {

        $(".num-amt-btn").removeClass("active-p-btns");
        $(this).addClass("active-p-btns");

        if ($(this).text().includes("%")) {
            tipPercent = currencyConfig[currentCurrency].tipPercents[2];
            fixedTip = 0;
        } else {
            fixedTip = currencyConfig[currentCurrency].tips[2];
            tipPercent = 0;
        }

        updateTotal();

    });

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

    $(".close-button").click(function () {

        $(".request_message_wrapper").addClass("d-none");

    });

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

// Second tab donation modal currency script
$(".dropdown-menu .dropdown-item").click(function (e) {
    e.preventDefault();

    const currency = $(this).text().trim();

    const currencies = {
        INR: { symbol: "₹", values: [500, 750, 1000, 1500] },
        USD: { symbol: "$", values: [50, 100, 150, 200] },
        GBP: { symbol: "£", values: [50, 100, 150, 200] },
        EUROS: { symbol: "€", values: [50, 100, 150, 200] }
    };

    const data = currencies[currency];

    $(".mon-amt").each(function (index) {
        $(this).text(`${data.symbol} ${data.values[index]}`);
    });

    $(".amt").click(function () {
        const amount = $(this).text().split(" ")[1];
        $(".monthly-amount-input-field").val(amount);
        $(".donate-modal-btn").text(`Donate Now (${data.symbol} ${amount}/MONTH)`);
    });
});


// Form logic script
// for name 
// $('.name_field').on('input', function () {
//     if ($.trim($(this).val()) === '') {
//         console.log("display not none")
//         $(".full_name_warning_sub").removeClass("d-none");
//     } else {
//         console.log("display none")
//         $(".full_name_warning_sub").addClass("d-none");
//     }
// });

// for email
// $('.email_field').on('input', function () {
//     if ($.trim($(this).val()) == '') {
//         $(".email_warning_sub").removeClass("d-none");
//     }
//     else if (!this.checkValidity()) {
//         $(".email_warning_sub").removeClass("d-none");
//     }
//     else {
//         $(".email_warning_sub").addClass("d-none");
//     }
// });

$('#anonymous_checkbox').change(function () {
    if ($(this).prop('checked')) {
        $(".anonymous_sub").removeClass("d-none")
        setTimeout(() =>
            $(".anonymous_sub").addClass("d-none")
            , 5000)
        console.log("Checked");
    }
});

// $('.phno_field').on('input', function () {

//     if ($(this).val().trim() === '') {
//         $('.phno_warning_sub')
//             .text('Please enter a phone number')
//             .removeClass('d-none');
//     }
//     else if (!this.checkValidity()) {
//         $('.phno_warning_sub')
//             .text('Please enter a valid phone number')
//             .removeClass('d-none');
//     }
//     else {
//         $('.phno_warning_sub').addClass('d-none');
//     }

// });

$(".state_input").on('blur', function () {
    if ($(this).val().trim() === '') {
        $(this).val('Maharashtra');
    }
});

// second modal scripts

const monthAmtInput = document.querySelector(".monthly-amount-input-field");

$(document).ready(function () {
    $(".amt6").click(function () {
        monthAmtInput.value = 500;
        $(".amt6").addClass("amt_active");
        $(".amt7, .amt8, .amt9").removeClass("amt_active");
        $(".donate-modal-btn").text(`Donate Now (₹${monthAmtInput.value})`);
    })
    $(".amt7").click(function () {
        monthAmtInput.value = 750;
        $(".amt7").addClass("amt_active");
        $(".amt6, .amt8, .amt9").removeClass("amt_active");
        $(".donate-modal-btn").text(`Donate Now (₹${monthAmtInput.value})`);
    })
    $(".amt8").click(function () {
        monthAmtInput.value = 1000;
        $(".amt8").addClass("amt_active");
        $(".amt7, .amt6, .amt9").removeClass("amt_active");
        $(".donate-modal-btn").text(`Donate Now (₹${monthAmtInput.value})`);
    })
    $(".amt9").click(function () {
        monthAmtInput.value = 1500;
        $(".amt9").addClass("amt_active");
        $(".amt7, .amt8, .amt6").removeClass("amt_active");
        $(".donate-modal-btn").text(`Donate Now (₹${monthAmtInput.value})`);
    })
})

// Second modal same form script
// Form logic script
// for name 
$('.support_name_field').on('input', function () {
    if ($.trim($(this).val()) == '') {
        $(".support_name_warning").removeClass("d-none");
    } else {
        $(".support_name_warning").addClass("d-none");
    }
});

// for email
$('.support_email_field').on('input', function () {
    if ($.trim($(this).val()) == '') {
        $(".support_email_warning").removeClass("d-none");
    }
    else if (!this.checkValidity()) {
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


$('.share_btn').on('click', function () {
    $('#socialDropdown').toggleClass('show');
});

$(".dropdown-item.currency-dropdown").on("click", function (e) {
    e.preventDefault();

    let selectedCurrency = $(this).text().trim();

    console.log(selectedCurrency);

    // Update the button text
    $(".btn.currency-dropdown").html($(this).html());

    const config = currencyConfig[selectedCurrency];

    if (!config) {
        console.log("Unknown currency:", selectedCurrency);
        return;
    }

    currentCurrency = selectedCurrency;

    const { symbol, presets } = config;

    $(".amt1").text(`${symbol} ${presets[0]}`);
    $(".amt2").text(`${symbol} ${presets[1]}`);
    $(".amt3").text(`${symbol} ${presets[2]}`);
    $(".amt4").text(`${symbol} ${presets[3]}`);

    tipPercent = config.tipPercents[2];
    fixedTip = 0;
    $(".num-amt-btn").removeClass("active-p-btns");
    $(".btn11p").text(`${config.tipPercents[0]}%`);
    $(".btn16p").text(`${config.tipPercents[1]}%`);
    $(".btn21p").text(`${config.tipPercents[2]}%`);


    if (currentCurrency !== "INR") {
        $(".request_message_wrapper").addClass("d-none");
    }

    updateTotal();
});

function toggleFilledClass($el) {
    if ($el.val().trim() !== "") {
        $el.addClass("filled");
    } else {
        $el.removeClass("filled");
    }
}

$(".donation_details_input_fields").each(function () {
    toggleFilledClass($(this));
});

$(".donation_details_input_fields").on("input blur", function () {
    toggleFilledClass($(this));
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


// Making sure the payment modal doesn't pop up until all the conditions are satisfied

$(document).ready(function () {
    $(".name_field").val(localStorage.getItem("Name") || "");
    $(".support_name_field").val(localStorage.getItem("Name") || "");
    $(".email_field").val(localStorage.getItem("Email") || "");
    $(".support_email_field").val(localStorage.getItem("Email") || "");
    $(".phno_field").val(localStorage.getItem("Phno") || "");
    $(".support_phone_field").val(localStorage.getItem("Phno") || "");
    $(".state_input").val(localStorage.getItem("State") || "");
    $(".support-state-input").val(localStorage.getItem("State") || "");
    $(".country-code-select").val(localStorage.getItem("countryCode") || "(+91) India");
    $(".support-country-select").val(localStorage.getItem("countryCode") || "(+91) India");

    $(".donation_details_input_fields").each(function () {
        if ($(this).val().trim() !== "") {
            $(this).addClass("filled")
        }
        else {
            $(this).removeClass("filled")
        }
    })
});

$(document).ready(function () {
    $(".donate-modal-btn").click(function (e) {
        if ($("#give-once-tab").hasClass("active")) {
            console.log("Give Once is active");
            $(".name_field").on("input", function () {
                if ($(this).val().trim() === "") {
                    $(".full_name_warning_sub").removeClass("d-none");
                }
                else {
                    $(".full_name_warning_sub").addClass("d-none");
                    localStorage.setItem("Name", $(this).val());
                }
            })

            $(".email_field").on("input", function () {
                if (!this.checkValidity()) {
                    $(".email_warning_sub").removeClass("d-none");
                } else {
                    $(".email_warning_sub").addClass("d-none");
                    localStorage.setItem("Email", $(this).val());
                }
            });

            $(".phno_field").on("input", function () {
                const rawVal = $(this).val();
                const phoneVal = rawVal.trim();
                const firstChar = phoneVal.charAt(0);
                const country = $(".country-code-select").val();
                // for india
                if (country === "(+91) India") {
                    const isValidLen = (phoneVal.length === 10)
                    const isValidStart = (firstChar === "6" || firstChar === "7" || firstChar === "8" || firstChar === "9")
                    if (!isValidLen || !isValidStart) {
                        $(".phno_warning_sub").removeClass("d-none");
                    }
                    else {
                        $(".phno_warning_sub").addClass("d-none");
                        localStorage.setItem("Phno", rawVal);
                        localStorage.setItem("countryCode", country);
                    }
                }
                // for usa 
                else if (country === "(+1) United States") {
                    const usPhoneVal = rawVal.replace(/[\s\-\(\)]/g, '').trim();
                    const isValidLen = (phoneVal.length === 10);

                    const usFirstChar = usPhoneVal.charAt(0);
                    const isValidStart = (usFirstChar >= "2" && usFirstChar <= "9")

                    if (!isValidLen || !isValidStart) {
                        $(".phno_warning_sub").removeClass("d-none")
                    }
                    else {
                        $(".phno_warning_sub").addClass("d-none")
                        localStorage.setItem("Phno", rawVal);
                        localStorage.setItem("countryCode", country);
                    }
                }

                // for UK
                else if (country === "(+44) United Kingdom") {
                    const isValidLen = (phoneVal.length === 11);
                    const startPrefix = phoneVal.substring(0, 2);
                    const isValidStart = (startPrefix === "01" || startPrefix === "02" || startPrefix === "03" || startPrefix === "07")
                    if (!isValidLen || !isValidStart) {
                        $(".phno_warning_sub").removeClass("d-none");
                    }
                    else {
                        $(".phno_warning_sub").addClass("d-none");
                        localStorage.setItem("Phno", rawVal);
                        localStorage.setItem("countryCode", country);
                    }
                }
            })

            $(".state_input").on("input", function () {
                if ($(this).val().trim() === "") {
                    $(this).val("Maharashtra")
                }
                else {
                    localStorage.setItem("State", $(this).val());
                }
            })

            $(".name_field, .email_field, .phno_field, .state_input").trigger("input");

            const nameValidity = $(".full_name_warning_sub").hasClass("d-none");
            const emailValidity = $(".email_warning_sub").hasClass("d-none");
            const phnoValidity = $(".phno_warning_sub").hasClass("d-none");

            if (!nameValidity || !emailValidity || !phnoValidity) {
                console.log("Form validity failed")
                return;
            }
            else {
                $(".payment-modal").attr('id', "paymentModal")
            }

            const modalElement = document.getElementById("paymentModal")
            const donateModalElem = document.getElementById("donateModal")
            if (modalElement && donateModalElem) {
                const donateModal = bootstrap.Modal.getOrCreateInstance(donateModalElem);
                donateModal.hide();
                document.activeElement.blur();
                const paymentModal = bootstrap.Modal.getOrCreateInstance(modalElement);
                paymentModal.show();

            } else {
                console.error("Could not find #paymentModal in the DOM.");
            }

        } else {
            console.log("Give Monthly is active");
            $(".support_name_field").on("input", function () {
                if ($(this).val().trim() === "") {
                    $(".support_name_warning").removeClass("d-none");
                }
                else {
                    $(".support_name_warning").addClass("d-none");
                    localStorage.setItem("Name", $(this).val());
                }
            })

            $(".support_email_field").on("input", function () {
                if (!this.checkValidity()) {
                    $(".support_email_warning").removeClass("d-none");
                } else {
                    $(".support_email_warning").addClass("d-none");
                    localStorage.setItem("Email", $(this).val());
                }
            });

            $(".support_phone_field").on("input", function () {
                const rawVal = $(this).val();
                const phoneVal = rawVal.trim();
                const firstChar = phoneVal.charAt(0);
                const country = $(".support-country-select").val();
                // for india
                if (country === "(+91) India") {
                    const isValidLen = (phoneVal.length === 10)
                    const isValidStart = (firstChar === "6" || firstChar === "7" || firstChar === "8" || firstChar === "9")
                    if (!isValidLen || !isValidStart) {
                        $(".support_phone_warning").removeClass("d-none");
                    }
                    else {
                        $(".support_phone_warning").addClass("d-none");
                        localStorage.setItem("Phno", rawVal);
                        localStorage.setItem("countryCode", country);
                    }
                }
                // for usa 
                else if (country === "(+1) United States") {
                    const usPhoneVal = rawVal.replace(/[\s\-\(\)]/g, '').trim();
                    const isValidLen = (phoneVal.length === 10);

                    const usFirstChar = phoneVal.charAt(0);
                    const isValidStart = (usFirstChar >= "2" && usFirstChar <= "9")

                    if (!isValidLen || !isValidStart) {
                        $(".support_phone_warning").removeClass("d-none")
                    }
                    else {
                        $(".support_phone_warning").addClass("d-none")
                        localStorage.setItem("Phno", rawVal);
                        localStorage.setItem("countryCode", country);
                    }
                }

                // for UK
                else if (country === "(+44) United Kingdom") {
                    const isValidLen = (phoneVal.length === 11);
                    const startPrefix = phoneVal.substring(0, 2);
                    const isValidStart = (startPrefix === "01" || startPrefix === "02" || startPrefix === "03" || startPrefix === "07")
                    if (!isValidLen || !isValidStart) {
                        $(".support_phone_warning").removeClass("d-none");
                    }
                    else {
                        $(".support_phone_warning").addClass("d-none");
                        localStorage.setItem("Phno", rawVal);
                        localStorage.setItem("countryCode", country);
                    }
                }
            })

            $(".support-state-input").on("input", function () {
                if ($(this).val().trim() === "") {
                    $(this).val("Maharashtra")
                }
                else {
                    localStorage.setItem("State", $(this).val());
                }
            })

            $(".support_name_field, .support_email_field, .support_phone_field, .support-state-input").trigger("input");

            const nameValidity = $(".support_name_warning").hasClass("d-none");
            const emailValidity = $(".support_email_warning").hasClass("d-none");
            const phnoValidity = $(".support_phone_warning").hasClass("d-none");

            if (!nameValidity || !emailValidity || !phnoValidity) {
                console.log("Form validity failed")
                return;
            }
            else {
                $(".payment-modal").attr('id', "paymentModal")
            }

            const modalElement = document.getElementById("paymentModal")
            const donateModalElem = document.getElementById("donateModal")
            if (modalElement && donateModalElem) {
                const donateModal = bootstrap.Modal.getOrCreateInstance(donateModalElem);
                donateModal.hide();
                document.activeElement.blur();
                const paymentModal = bootstrap.Modal.getOrCreateInstance(modalElement);
                paymentModal.show();

            } else {
                console.error("Could not find #paymentModal in the DOM.");
            }

        }

    })
})

