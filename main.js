const elements = {
    buttons: {
        primary: $('.btn-primary')
    },
    elements: {
        arrows: $('.arrow')
    },
    
    initButtons: function() {
        
    },

    initScrollEvent: function() {
        this.controlArrowsAnimation()
        $(document).scroll(_ => this.controlArrowsAnimation())
    },

    controlArrowsAnimation: function() {
        this.elements.arrows.each((c, arrow) => {
            !$(arrow).hasClass('active') 
            && window.innerHeight + window.scrollY - 50 > arrow.offsetTop 
            && $(arrow).addClass('active')
        });
    }
}

$(document).ready(_ => elements.initScrollEvent())