export const home = {
    elements: {
        arrows: []
    },

    init: function() {
        home.initElements()
        home.initScrollEvent()
    },

    initElements: function() {
        home.elements.arrows = $('.arrow')
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