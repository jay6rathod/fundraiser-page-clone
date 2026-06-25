$(document).ready(function () {
    const $searchIcon = $('.search-icon');

    $('.search-bar').on('input', function () {
        $searchIcon.toggleClass(
            'hide-icon',
            $(this).val().length > 0
        );
    });
});