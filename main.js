console.log ("JavaScript is working!")

new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    draggable: false,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
})