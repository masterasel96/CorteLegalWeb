const home = {
    elements: {
        arrows: $('.arrow')
    },

    init: function() {
        home.initScrollEvent()
    },

    initScrollEvent: function() {
        home.controlArrowsAnimation()
        $(document).scroll(_ => home.controlArrowsAnimation())
    },

    controlArrowsAnimation: function() {
        home.elements.arrows.each((c, arrow) => {
            !$(arrow).hasClass('active') 
            && window.innerHeight + window.scrollY - 50 > arrow.offsetTop 
            && $(arrow).addClass('active')
        });
    }
}

$(document).ready(_ => home.init())