// N A V B A R  &  M E N U  F U N C T I O N A L I T Y



$(document).ready(function (){
    $('.next').on('click', function(){
        const currentImg = $('.active')
        const nextImg = currentImg.next()

        if (nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.previous').on('click', function(){
        const currentImg = $('.active')
        const previousImg = currentImg.prev()

        if (previousImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            previousImg.addClass('active').css('z-index', 10);
        }
    });
});

$(() => {

    const $menuToggle = $('.toggle');
    
    const $menuShowcase = $('.menu');
    
    $menuToggle.click(function (){
        $menuToggle.toggleClass('active');
        $menuShowcase.toggleClass('active');
    })
});



