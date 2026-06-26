$("#nav").load('../../components/navbar.html')
$("#carousel-content").load('../../components/carousels.html')


// the script for read more button
function toggleReadMore() {
    const hiddenPart = document.querySelector('.hidden_part');
    const read_more_btn = document.querySelector('.read-more-btn1');

    if(hiddenPart.style.display === "block"){
        hiddenPart.style.display = "none";
        read_more_btn.style.display = "block"
    }
    else{
        hiddenPart.style.display = "block";
        read_more_btn.style.display = "none"
    }
}