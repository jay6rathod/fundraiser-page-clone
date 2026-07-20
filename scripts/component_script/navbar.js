$(document).ready(function () {
    const $searchIcon = $('.search-icon');

    $('.search-bar').on('input', function () {
        $searchIcon.toggleClass(
            'hide-icon',
            $(this).val().length > 0
        );
    });
});


// hamburger bar script
$(document).ready(function() {
    $("#navbarSupportedContent").on("shown-bs-collapse", function() {
        $(".hambar").addClass("d-flex")
        console.log("works")
    })
    
    $("#navbarSupportedContent").on("hidden-bs-collapse", function() {
        $(".hambar").removeClass("d-flex")
        console.log("works")
    })
})